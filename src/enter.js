import {mapNoteToNum, keySignatures} from "./constants"


export const sumRests = (note, measure) => {
    let sum = 0
    for (let i = note; i < measure.length; i++) {
        const {duration} = measure[i]
        if (duration.substring(duration.length-1, duration.length) === "r") {
            sum += mapNoteToNum[duration.substring(0,duration.indexOf("r"))]
        }
        else {
            break
        }
    }
    return sum
}

export const isValid = (note, measure, rhythm) => {
    return sumRests(note, measure) >= mapNoteToNum[rhythm]
}

export const addNote = (selectedNote, measure, rhythm, pitch, acc, octave) => {
    if (selectedNote === null || measure === null || !isValid(selectedNote, measure, rhythm)) {
        return measure;   
    }
    const newMeasure = [...measure] 
    const {duration} = newMeasure[selectedNote]
    let sum = 0
    while (sum < mapNoteToNum[rhythm] && newMeasure[selectedNote]) {
        const dur = newMeasure[selectedNote].duration;
        const val = mapNoteToNum[dur.replace("r", "")]; 
        sum += val;
        newMeasure.splice(selectedNote, 1); 
      }
    newMeasure.splice(selectedNote, 0, { clef: 'treble', keys: [pitch + acc + "/" + octave], duration: rhythm })
    sum -= mapNoteToNum[rhythm]
    const durations = ["w", "h", "q", "8", "16"];
    for (let d of durations) {
        while (mapNoteToNum[d] <= sum) {
            newMeasure.splice(selectedNote + 1, 0, { clef: 'treble', keys: ["b/4"], duration: d + "r" })
            sum -= mapNoteToNum[d]
        }
    }

    return newMeasure
}

export const addAcc = (noteIndex, measure, keySig) => {

    if (measure[noteIndex].duration[measure[noteIndex].duration.length - 1] === "r"
        || measure[noteIndex].keys[0][1] === "/") {
        return false;
    }
    const notePitch = measure[noteIndex].keys[0].split("/")[0]
    if (keySignatures[keySig]
        .includes(notePitch)) {
            return false;
        }
    else {        
        for (let i = noteIndex - 1; i >= 0; i--) {
            if (measure[i].keys[0] === measure[noteIndex].keys[0]) {
                return false;
            }
        }
    }
    return true
}