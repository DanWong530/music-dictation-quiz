import React, { useEffect, useRef } from 'react';
import { Fraction, Renderer, Stave, StaveNote, Voice, Formatter, BarlineType, Accidental, Beam, Dot } from 'vexflow';
import { addAcc } from "./enter";

const MusicScore = ({
  notesData,
  measureNum,
  selectedNote,
  onSelectNote,
  keySignature,
  timeSignature,
  overlayColor
}) => {
  const containerRef = useRef(null);
  let staveWidth = 300;
  if (measureNum === 1) staveWidth = 360

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const renderer = new Renderer(containerRef.current, Renderer.Backends.SVG);
    renderer.resize(staveWidth, 125);
    const context = renderer.getContext();

    const stave = new Stave(0, 0, staveWidth);
    if (measureNum === 1) {
      stave.addClef('treble').addKeySignature(keySignature).addTimeSignature(timeSignature);
    } else if (measureNum === 4) {
      stave.setEndBarType(BarlineType.END);
    }
    stave.setContext(context).draw();

    const notes = notesData.map((note, i) => {
      const n = new StaveNote(note);

      if (note.duration.includes('d')) {
        Dot.buildAndAttach([n]);
      }

      if (selectedNote?.measureNum === measureNum && selectedNote?.noteIndex === i) {
        n.setStyle({ fillStyle: 'red', strokeStyle: 'red' });
      } else {
        n.setStyle({ fillStyle: 'black', strokeStyle: 'black' });
      }

      if (addAcc(i, notesData, keySignature)) {
        n.addModifier(new Accidental(note.keys[0][1]));
      }

      return n;
    });
    let beamGroups = { groups: [new Fraction(2, 8)] }
    if (timeSignature[2] === "8") {
      beamGroups = { groups: [new Fraction(3, 8)] }
    }
    const beams = Beam.generateBeams(notes, beamGroups);
    const voice = new Voice({ num_beats: timeSignature[0], beat_value: timeSignature[2] });
    voice.setMode(Voice.Mode.SOFT);
    voice.addTickables(notes);

    new Formatter()
      .joinVoices([voice])
      .format([voice], measureNum === 1 ? staveWidth - 130 : staveWidth - 20);
    voice.draw(context, stave);

    beams.forEach((b) => b.setContext(context).draw());

    const noteGroups = containerRef.current.querySelectorAll('.vf-stavenote');
    noteGroups.forEach((g, i) => {
      g.style.cursor = 'pointer';
      g.addEventListener('click', e => {
        e.stopPropagation();
        onSelectNote(i, notesData[i]);
      });
    });

    const handleClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target) && e.target.tagName.toLowerCase() !== 'button') {
        onSelectNote(null);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [notesData, measureNum, selectedNote, keySignature, timeSignature, onSelectNote]);

  return (
    <div style={{ position: 'relative', width: `${staveWidth}px`, height: '125px' }}>
      <div ref={containerRef} />
      {overlayColor && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: overlayColor,
          opacity: 0.2,
          pointerEvents: 'none',
          borderRadius: '6px'
        }} />
      )}
    </div>
  );
};

export default MusicScore;
