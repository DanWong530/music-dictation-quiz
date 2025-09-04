import { useEffect, useState } from 'react';
import './App.css';
import MusicScore from './MusicScore';
import { addNote } from "./enter";
import { excerpts } from "./excerpts";
import { samePitch, sameRhythm } from "./check"
import { mapNumToNote } from "./constants"

const excerptIndex = Math.floor(Math.random() * (Math.floor(excerpts.length - 1) - Math.ceil(0) + 1));

function App() {
  const excerpt = excerpts[excerptIndex]
  const excerptAudio = new Audio(excerpt.getAudio());
  const accToFile = {
    "#": "sharp.png",
    "b": "flat.png",
    "n": "natural.png"
  };

  const rhythmBank = ["16", "8", "8d", "q", "qd", "h", "hd", "w"];
  const [selectedRhythm, selectRhythm] = useState(3);
  const rhythm = rhythmBank[selectedRhythm % 8];

  const noteBank = ["A", "B", "C", "D", "E", "F", "G"];
  const [selectedNote, selectNote] = useState(2);
  const note = noteBank[selectedNote % 7];

  const accBank = ["b", "n", "#"];
  const [selectedAcc, selectAcc] = useState(1);
  const acc = accBank[selectedAcc % 3];

  const octaveBank = ["2", "3", "4", "5", "6"];
  const [selectedOctave, selectOctave] = useState(2);
  const octave = octaveBank[selectedOctave % 5];

  const [showSolution, setShowSolution] = useState(false);
  const [measureResults, setMeasureResults] = useState([]); // stores colors per measure

  const keyMap = {
    "a": () => selectNote(0), // A note
    "b": () => selectNote(1), // B note
    "c": () => selectNote(2), // C note
    "d": () => selectNote(3), // D note
    "e": () => selectNote(4), // E note
    "f": () => selectNote(5), // F note
    "g": () => selectNote(6), // G note
    "2": () => selectOctave(0), // Octave 2
    "3": () => selectOctave(1), // Octave 3
    "4": () => selectOctave(2), // Octave 4
    "5": () => selectOctave(3), // Octave 5
    "6": () => selectOctave(4), // Octave 6
    "-": () => selectAcc(0), // flat
    "=": () => selectAcc(1), // natural
    "+": () => selectAcc(2), // sharp
    "w": () => selectRhythm(7), // Whole note
    "h": () => selectRhythm(5), // Half note
    "q": () => selectRhythm(3), // Quarter note
    "8": () => selectRhythm(1), // 8th note
    "s": () => selectRhythm(0), // 8th note
    "Enter": () => handleEnter(),  // Enter
    "Backspace": () => handleDelete(), // Delete
    "ArrowRight": () => nextNote(), // select next note
    "ArrowLeft": () => prevNote() // select previous note
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (keyMap[e.key]) {
        e.preventDefault(); // stop scrolling etc.
        keyMap[e.key]();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyMap]);


  const beatsPerMeasure = parseInt(excerpt.getTimeSig()[0]); // e.g., 4 for 4/4
  const defaultDur = mapNumToNote[excerpt.getTimeSig()[2]] + "r";
  console.log(beatsPerMeasure)
  console.log(defaultDur)
  const initialNotes = Array.from({ length: 4 }, () =>
    Array.from({ length: beatsPerMeasure }, () => ({
      clef: 'treble',
      keys: ['b/4'],
      duration: defaultDur
    }))
  );
  console.log(initialNotes)
  const [myNotes, setNotes] = useState(initialNotes);

  const checkAnswer = () => {
    const results = excerpt.answer.map((correctMeasure, i) => {
      const userMeasure = myNotes[i] || [];

      const pitchCorrect = samePitch(userMeasure, correctMeasure);
      const rhythmCorrect = sameRhythm(userMeasure, correctMeasure);

      if (pitchCorrect && rhythmCorrect) return "green";
      if (!pitchCorrect && rhythmCorrect) return "yellow";
      if (pitchCorrect && !rhythmCorrect) return "#ff9900";
      return "red";
    });

    setMeasureResults(results);
    setShowSolution(!showSolution);
  };

  // find the index of the first actual note in measure 0
  const firstNote = excerpt.getFirstNote();
  const noteIndex = excerpt.answer[0].indexOf(firstNote);

  for (let i = 0; i <= noteIndex; i++) {
    const noteObj = excerpt.answer[0][i]; // note from the first measure
    const [notePitch, octave] = noteObj.keys[0].split("/");
    const pitch = notePitch[0];
    const acc = notePitch.length > 1 ? notePitch.slice(1) : "";

    myNotes[0] = addNote(
      i,
      myNotes[0],
      noteObj.duration,
      pitch,
      acc,
      octave
    );
  }

  const prevNote = () => {
    setSelectedNoteGlobal(prev => {
      const measureIdx = prev.measureNum - 1;
      const currentMeasure = myNotes[measureIdx];

      if (!currentMeasure) return prev; // safety

      if (prev.noteIndex > 0) {
        // move to previous note in the same measure
        return { measureNum: prev.measureNum, noteIndex: prev.noteIndex - 1 };
      } else if (measureIdx > 0) {
        // move to last note of previous measure
        const prevMeasure = myNotes[measureIdx - 1];
        return { measureNum: prev.measureNum - 1, noteIndex: prevMeasure.length - 1 };
      } else {
        // first slot of first measure → stay put
        return prev;
      }
    });
  };


  const nextNote = () => {
    setSelectedNoteGlobal(prev => {
      const measureIdx = prev.measureNum - 1;
      const currentMeasure = myNotes[measureIdx];

      if (!currentMeasure) return prev; // safety

      if (prev.noteIndex < currentMeasure.length - 1) {
        // move to next note in the same measure
        return { measureNum: prev.measureNum, noteIndex: prev.noteIndex + 1 };
      } else if (measureIdx < myNotes.length - 1) {
        // move to first note of next measure
        return { measureNum: prev.measureNum + 1, noteIndex: 0 };
      } else {
        // last slot of last measure → stay put
        return prev;
      }
    });
  }

  const handleDelete = () => {
    if (selectedNoteGlobal.noteIndex === null) return;

    setNotes(myNotes => {
      if (selectedNoteGlobal.noteIndex === null) return myNotes;
      const staveIndex = selectedNoteGlobal.measureNum - 1;
      const noteIndex = selectedNoteGlobal.noteIndex;
      const myNotesCopy = [...myNotes];
      const measureCopy = [...myNotesCopy[staveIndex]];
      const oldNote = measureCopy[noteIndex];
      measureCopy[noteIndex] = { clef: 'treble', keys: ['b/4'], duration: oldNote.duration + "r" };
      myNotesCopy[staveIndex] = measureCopy;
      return myNotesCopy;
    });
  };

  const handleEnter = () => {
    if (selectedNoteGlobal.noteIndex === null) return;

    setNotes(myNotes => {
      const myNotesCopy = [...myNotes];
      myNotesCopy[selectedNoteGlobal.measureNum - 1] =
        addNote(
          selectedNoteGlobal.noteIndex,
          myNotes[selectedNoteGlobal.measureNum - 1],
          rhythm,
          note,
          acc,
          octave
        );

      return myNotesCopy;
    });

    // ⬇️ after inserting, move selection forward
    setSelectedNoteGlobal(prev => {
      const measureIdx = prev.measureNum - 1;
      const currentMeasure = myNotes[measureIdx];

      if (!currentMeasure) return prev; // safety

      if (prev.noteIndex < currentMeasure.length - 1) {
        // move to next note in the same measure
        return { measureNum: prev.measureNum, noteIndex: prev.noteIndex + 1 };
      } else if (measureIdx < myNotes.length - 1) {
        // move to first note of next measure
        return { measureNum: prev.measureNum + 1, noteIndex: 0 };
      } else {
        // last slot of last measure → stay put
        return prev;
      }
    });
  };



  // Global selected note state across all staves
  const [selectedNoteGlobal, setSelectedNoteGlobal] = useState({ measureNum: null, noteIndex: null });
  return (
    <>
      <h1>Music Dictation Quiz</h1>
      <div className="card">
        <button onClick={() => { excerptAudio.currentTime = 0; excerptAudio.play(); }}>
          Click to play the excerpt!
        </button>
      </div>
      {console.log(myNotes)}
      <div className="music-section">
        <div className="music-line">
          {myNotes.map((measure, idx) => (
            <div key={idx} className="measure-wrapper" style={{ position: "relative" }}>
              <MusicScore
                key={idx}
                notesData={measure}
                measureNum={idx + 1}
                selectedNote={selectedNoteGlobal}
                onSelectNote={(noteIndex, noteObj) => {
                  const alreadySelected =
                    selectedNoteGlobal.measureNum === idx + 1 &&
                    selectedNoteGlobal.noteIndex === noteIndex;

                  if (alreadySelected && noteObj.duration.endsWith("r")) {
                    // double click on rest → Enter
                    handleEnter();
                  } else {
                    setSelectedNoteGlobal({ measureNum: idx + 1, noteIndex });
                  }
                }}
                keySignature={excerpt.getKeySig()}
                timeSignature={excerpt.getTimeSig()}
              />
              {showSolution && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: measureResults[idx],
                    opacity: 0.2,
                    pointerEvents: "none",
                    borderRadius: "8px",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {showSolution &&
          <div className="music-row">
            <div className="music-line">
              {excerpt.answer.map((measure, idx) => (
                <MusicScore
                  key={`answer-${idx}`}
                  notesData={measure}
                  measureNum={idx + 1}
                  selectedNote={null}
                  onSelectNote={() => { }}
                  keySignature={excerpt.getKeySig()}
                  timeSignature={excerpt.getTimeSig()}
                />
              ))}
            </div>
          </div>}
      </div>


      <div className="input">
          <div className="field">
            <p>Pitch</p>
            <button className="arrow-button" onClick={() => selectNote(sn => sn + 1)}>∧</button>
            <h2>{noteBank[selectedNote % 7]}</h2>
            <button className="arrow-button" onClick={() => selectNote(sn => sn + 6)}>∨</button>
          </div>

          <div className="field">
            <p>Accidental</p>
            <button className="arrow-button" onClick={() => selectAcc(sa => sa + 1)}>∧</button>
            <img src={`../images/${accToFile[acc]}`} alt="Accidental" height="50" width="50" />
            <button className="arrow-button" onClick={() => selectAcc(sa => sa + 2)}>∨</button>
          </div>

          <div className="field">
            <p>Octave</p>
            <button className="arrow-button" onClick={() => selectOctave(so => so + 1)}>∧</button>
            <h2>{octaveBank[selectedOctave % 5]}</h2>
            <button className="arrow-button" onClick={() => selectOctave(so => so + 4)}>∨</button>
          </div>

          <div className="field">
            <p>Rhythm</p>
            <button className="arrow-button" onClick={() => selectRhythm(sr => sr + 1)}>∧</button>
            <img src={"../images/" + rhythm + ".png"} alt="Rhythm" height="50" width="50" />
            <button className="arrow-button" onClick={() => selectRhythm(sr => sr + 7)}>∨</button>
          </div>


        <div className="field control-button-container">
          <div className="flex gap-2 mb-2 control-button">
            <button onClick={prevNote} style={{width: "55px", marginRight: "5px"}}>
              {"<"}
            </button>
            <button onClick={nextNote} style={{width: "55px", marginLeft: "5px"}}>
              {">"}
            </button>
            {/* you can keep other "top row" buttons here if needed */}
          </div>
          <button className="control-button" onClick={handleDelete}>Delete</button>

          <button className="control-button" onClick={handleEnter}>Enter</button>

          <button className="control-button" onClick={checkAnswer}>Check</button>
        </div>
      </div>
    </>
  );
}

export default App;


