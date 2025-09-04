export class Excerpt {
  constructor(keySig, timeSig, audio, answer) {
    this.keySig = keySig
    this.timeSig = timeSig
    this.audio = audio
    this.answer = answer
  }

  getKeySig() {
    return this.keySig;
  }

  getTimeSig() {
    return this.timeSig;
  }

  getAudio() {
    return this.audio;
  }

  getAnswer() {
    return this.answer;
  }

  getFirstNote() {
    for (const measure of this.answer) {
      for (const note of measure) {
        if (note.duration.charAt(note.duration.length - 1) !== "r") {
          return note;
        }
      }
    }
  }
}

const excerpt1 = new Excerpt("G", "4/4", "../excerpts/excerpt1.mp3",
  [[{ clef: 'treble', keys: ['G/5'], duration: 'h' },
  { clef: 'treble', keys: ['F#/5'], duration: 'q' },
  { clef: 'treble', keys: ['E/5'], duration: 'q' },],
  [{ clef: 'treble', keys: ['f#/5'], duration: '8' },
  { clef: 'treble', keys: ['e/5'], duration: '8' },
  { clef: 'treble', keys: ['d/5'], duration: '8' },
  { clef: 'treble', keys: ['c/5'], duration: '8' },
  { clef: 'treble', keys: ['b/4'], duration: 'q' },
  { clef: 'treble', keys: ['g/4'], duration: 'q' },],
  [{ clef: 'treble', keys: ['a/4'], duration: 'q' },
  { clef: 'treble', keys: ['c/5'], duration: 'q' },
  { clef: 'treble', keys: ['f#/4'], duration: 'q' },
  { clef: 'treble', keys: ['a/4'], duration: 'q' },],
  [{ clef: 'treble', keys: ['d/5'], duration: 'h' },
  { clef: 'treble', keys: ['g/4'], duration: 'h' },]]);

const excerpt2 = new Excerpt("F", "4/4", "../excerpts/excerpt2.mp3",
  [[
    { clef: 'treble', keys: ['b/4'], duration: 'qr' },
    { clef: 'treble', keys: ['C/5'], duration: 'q' },
    { clef: 'treble', keys: ['Bb/4'], duration: 'q' },
    { clef: 'treble', keys: ['A/4'], duration: 'q' },],
  [
    { clef: 'treble', keys: ['Bb/4'], duration: 'h' },
    { clef: 'treble', keys: ['a/4'], duration: 'h' },],
  [
    { clef: 'treble', keys: ['g/4'], duration: 'qd' },
    { clef: 'treble', keys: ['f/4'], duration: '8' },
    { clef: 'treble', keys: ['g/4'], duration: 'q' },
    { clef: 'treble', keys: ['a/4'], duration: 'q' },],
  [
    { clef: 'treble', keys: ['f/4'], duration: 'w' },]]);

const excerpt3 = new Excerpt("D", "6/8", "../excerpts/excerpt3.mp3",
  [[
    { clef: 'treble', keys: ['b/4'], duration: '16' },
    { clef: 'treble', keys: ['A#/4'], duration: '16' },
    { clef: 'treble', keys: ['B/4'], duration: '16' },
    { clef: 'treble', keys: ['C#/5'], duration: '16' },
    { clef: 'treble', keys: ['D/5'], duration: '16' },
    { clef: 'treble', keys: ['E/5'], duration: '16' },
    { clef: 'treble', keys: ['F#/5'], duration: '16' },
    { clef: 'treble', keys: ['B/5'], duration: '16' },
    { clef: 'treble', keys: ['A#/5'], duration: '16' },
    { clef: 'treble', keys: ['B/5'], duration: '16' },
    { clef: 'treble', keys: ['G/5'], duration: '16' },
    { clef: 'treble', keys: ['F#/5'], duration: '16' },],
  [
    { clef: 'treble', keys: ['e/5'], duration: '8' },
    { clef: 'treble', keys: ['g/5'], duration: '16' },
    { clef: 'treble', keys: ['f#/5'], duration: '16' },
    { clef: 'treble', keys: ['e/5'], duration: '16' },
    { clef: 'treble', keys: ['D/5'], duration: '16' },
    { clef: 'treble', keys: ['C#/5'], duration: '8' },
    { clef: 'treble', keys: ['F#/5'], duration: '16' },
    { clef: 'treble', keys: ['d/5'], duration: '16' },
    { clef: 'treble', keys: ['C#/5'], duration: '16' },
    { clef: 'treble', keys: ['d/5'], duration: '16' },],
  [
    { clef: 'treble', keys: ['b/4'], duration: '8d' },
    { clef: 'treble', keys: ['f#/5'], duration: '8d' },
    { clef: 'treble', keys: ['e/5'], duration: '8d' },
    { clef: 'treble', keys: ['d/5'], duration: '8d' },],
  [
    { clef: 'treble', keys: ['c#/5'], duration: '16' },
    { clef: 'treble', keys: ['f#/4'], duration: '16' },
    { clef: 'treble', keys: ['e#/4'], duration: '16' },
    { clef: 'treble', keys: ['f#/4'], duration: '16' },
    { clef: 'treble', keys: ['g#/4'], duration: '16' },
    { clef: 'treble', keys: ['a#/4'], duration: '16' },
    { clef: 'treble', keys: ['b/4'], duration: 'qd' }]]);

const excerpt4 = new Excerpt("E", "3/4", "../excerpts/excerpt4.mp3",
  [[
    { clef: 'treble', keys: ['G#/4'], duration: 'qd' },
    { clef: 'treble', keys: ['b/4'], duration: '16' },
    { clef: 'treble', keys: ['a/4'], duration: '16' },
    { clef: 'treble', keys: ['g#/4'], duration: '8' },
    { clef: 'treble', keys: ['f#/4'], duration: '8' }],
  [
    { clef: 'treble', keys: ['G#/4'], duration: 'qd' },
    { clef: 'treble', keys: ['g#/4'], duration: '16' },
    { clef: 'treble', keys: ['f#/4'], duration: '16' },
    { clef: 'treble', keys: ['g#/4'], duration: '16' },
    { clef: 'treble', keys: ['a/4'], duration: '8' },
    { clef: 'treble', keys: ['b/4'], duration: '16' },],
  [
    { clef: 'treble', keys: ['a/4'], duration: '8' },
    { clef: 'treble', keys: ['g#/4'], duration: '8' },
    { clef: 'treble', keys: ['F#/4'], duration: '8' },
    { clef: 'treble', keys: ['a/4'], duration: '8' },
    { clef: 'treble', keys: ['G#/4'], duration: '8' },
    { clef: 'treble', keys: ['e/4'], duration: '8' }],
  [
    { clef: 'treble', keys: ['f#/4'], duration: '8d' },
    { clef: 'treble', keys: ['b/3'], duration: '16' },
    { clef: 'treble', keys: ['d#/4'], duration: '8' },
    { clef: 'treble', keys: ['f#/4'], duration: '8' },
    { clef: 'treble', keys: ['e/4'], duration: 'q' },]]);

const excerpt5 = new Excerpt("Bb", "2/2", "../excerpts/excerpt5.mp3",
  [[
    { clef: 'treble', keys: ['Bb/4'], duration: 'q' },
    { clef: 'treble', keys: ['F/4'], duration: '8' },
    { clef: 'treble', keys: ['Bb/4'], duration: '8' },
    { clef: 'treble', keys: ['D/5'], duration: 'q' },
    { clef: 'treble', keys: ['Bb/4'], duration: 'q' }],
  [
    { clef: 'treble', keys: ['F/5'], duration: 'hd' },
    { clef: 'treble', keys: ['D/5'], duration: '8' },
    { clef: 'treble', keys: ['F/5'], duration: '8' },],
  [
    { clef: 'treble', keys: ['Bb/5'], duration: '8' },
    { clef: 'treble', keys: ['F/5'], duration: '8' },
    { clef: 'treble', keys: ['D/5'], duration: '8' },
    { clef: 'treble', keys: ['Bb/4'], duration: '8' },
    { clef: 'treble', keys: ['Eb/5'], duration: 'q' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['A/4'], duration: '8' },],
  [
    { clef: 'treble', keys: ['Bb/4'], duration: '8' },
    { clef: 'treble', keys: ['F/4'], duration: '8' },
    { clef: 'treble', keys: ['Bb/4'], duration: '8' },
    { clef: 'treble', keys: ['D/5'], duration: '8' },
    { clef: 'treble', keys: ['Bb/4'], duration: 'h' }]]);

const excerpt6 = new Excerpt("C", "4/4", "../excerpts/excerpt6.mp3",
  [[
    { clef: 'treble', keys: ['C/5'], duration: 'h' },
    { clef: 'treble', keys: ['B/4'], duration: 'h' },],
  [
    { clef: 'treble', keys: ['C/5'], duration: 'h' },
    { clef: 'treble', keys: ['D/5'], duration: 'h' },],
  [
    { clef: 'treble', keys: ['E/5'], duration: 'q' },
    { clef: 'treble', keys: ['F/5'], duration: 'q' },
    { clef: 'treble', keys: ['E/5'], duration: 'q' },
    { clef: 'treble', keys: ['D/5'], duration: 'q' },],
  [
    { clef: 'treble', keys: ['C/5'], duration: 'h' },
    { clef: 'treble', keys: ['C/5'], duration: 'h' },]]);

const excerpt7 = new Excerpt("C", "4/4", "../excerpts/excerpt7.mp3",
  [[
    { clef: 'treble', keys: ['A/4'], duration: 'q' },
    { clef: 'treble', keys: ['B/4'], duration: 'q' },
    { clef: 'treble', keys: ['C/5'], duration: 'q' },
    { clef: 'treble', keys: ['B/4'], duration: 'q' },],
  [
    { clef: 'treble', keys: ['A/4'], duration: 'q' },
    { clef: 'treble', keys: ['B/4'], duration: 'q' },
    { clef: 'treble', keys: ['C/5'], duration: 'q' },
    { clef: 'treble', keys: ['D/5'], duration: 'q' },],
  [
    { clef: 'treble', keys: ['E/5'], duration: 'h' },
    { clef: 'treble', keys: ['F/5'], duration: 'h' },],
  [
    { clef: 'treble', keys: ['G/5'], duration: 'h' },
    { clef: 'treble', keys: ['A/5'], duration: 'h' },]]);

const excerpt8 = new Excerpt("Eb", "6/8", "../excerpts/excerpt8.mp3",
  [[
    { clef: 'treble', keys: ['C/5'], duration: 'q' },
    { clef: 'treble', keys: ['G/4'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['G/4'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },],
  [
    { clef: 'treble', keys: ['Eb/5'], duration: 'qd' },
    { clef: 'treble', keys: ['F/5'], duration: 'qd' },],
  [
    { clef: 'treble', keys: ['G/5'], duration: '8' },
    { clef: 'treble', keys: ['Ab/5'], duration: '8' },
    { clef: 'treble', keys: ['G/5'], duration: '8' },
    { clef: 'treble', keys: ['F/5'], duration: '8' },
    { clef: 'treble', keys: ['Eb/5'], duration: '8' },
    { clef: 'treble', keys: ['D/5'], duration: '8' },],
  [
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['Bb/4'], duration: '8' },
    { clef: 'treble', keys: ['Eb/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: 'qd' },]]);

const excerpt9 = new Excerpt("C", "4/4", "../excerpts/excerpt9.mp3",
  [[
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '16' },
    { clef: 'treble', keys: ['B/4'], duration: '16' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['E/5'], duration: '8' },
    { clef: 'treble', keys: ['G/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '16' },
    { clef: 'treble', keys: ['B/4'], duration: '16' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['G/5'], duration: '8' },],
  [
    { clef: 'treble', keys: ['A/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '16' },
    { clef: 'treble', keys: ['B/4'], duration: '16' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['A/5'], duration: '8' },
    { clef: 'treble', keys: ['G/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '16' },
    { clef: 'treble', keys: ['B/4'], duration: '16' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['G/5'], duration: '8' },],
  [
    { clef: 'treble', keys: ['F/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['E/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['D/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['B/4'], duration: '8' },
    { clef: 'treble', keys: ['D/5'], duration: '8' },],
  [
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['G/4'], duration: '16' },
    { clef: 'treble', keys: ['F#/4'], duration: '16' },
    { clef: 'treble', keys: ['G/4'], duration: '8' },
    { clef: 'treble', keys: ['E/4'], duration: '8' },
    { clef: 'treble', keys: ['C/4'], duration: 'h' },]]);

const excerpt10 = new Excerpt("Db", "4/4", "../excerpts/excerpt10.mp3",
  [[
    { clef: 'treble', keys: ['Bb/4'], duration: '8' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['E/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['F/4'], duration: '16' },
    { clef: 'treble', keys: ['Ab/4'], duration: '16' },
    { clef: 'treble', keys: ['An/4'], duration: '16' },
    { clef: 'treble', keys: ['Bb/4'], duration: '16' },
    { clef: 'treble', keys: ['F/4'], duration: '16' },
    { clef: 'treble', keys: ['Bb/4'], duration: '16' },
    { clef: 'treble', keys: ['Db/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['Db/5'], duration: '16' },
    { clef: 'treble', keys: ['C/5'], duration: '16' },
    { clef: 'treble', keys: ['Bb/4'], duration: '16' },],
  [
    { clef: 'treble', keys: ['Ab/4'], duration: '8' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['E/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['F/4'], duration: '16' },
    { clef: 'treble', keys: ['Ab/4'], duration: '16' },
    { clef: 'treble', keys: ['An/4'], duration: '16' },
    { clef: 'treble', keys: ['Bb/4'], duration: '16' },
    { clef: 'treble', keys: ['Db/6'], duration: '16' },
    { clef: 'treble', keys: ['Bb/5'], duration: '16' },
    { clef: 'treble', keys: ['Ab/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['E/5'], duration: '16' },
    { clef: 'treble', keys: ['Eb/5'], duration: '16' },
    { clef: 'treble', keys: ['Db/5'], duration: '16' },],
  [
    { clef: 'treble', keys: ['Eb/5'], duration: '16' },
    { clef: 'treble', keys: ['Bb/5'], duration: '16' },
    { clef: 'treble', keys: ['Db/5'], duration: '16' },
    { clef: 'treble', keys: ['Eb/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['Db/5'], duration: '16' },
    { clef: 'treble', keys: ['Eb/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['Ab/5'], duration: '16' },
    { clef: 'treble', keys: ['Eb/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['Ab/5'], duration: '16' },
    { clef: 'treble', keys: ['Bb/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['Ab/5'], duration: '16' },
    { clef: 'treble', keys: ['Bb/5'], duration: '16' },],
  [
    { clef: 'treble', keys: ['Db/6'], duration: '16' },
    { clef: 'treble', keys: ['Bb/5'], duration: '16' },
    { clef: 'treble', keys: ['Ab/5'], duration: '16' },
    { clef: 'treble', keys: ['Bb/5'], duration: '16' },
    { clef: 'treble', keys: ['Ab/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['Ab/5'], duration: '16' },
    { clef: 'treble', keys: ['F/5'], duration: '16' },
    { clef: 'treble', keys: ['Eb/5'], duration: '16' },
    { clef: 'treble', keys: ['Db/5'], duration: '16' },
    { clef: 'treble', keys: ['Eb/5'], duration: '16' },
    { clef: 'treble', keys: ['Db/5'], duration: '16' },
    { clef: 'treble', keys: ['Bb/4'], duration: 'q' },]]);

const excerpt11 = new Excerpt("Ab", "6/8", "../excerpts/excerpt11.mp3",
  [[
    { clef: 'treble', keys: ['Eb/5'], duration: '8' },
    { clef: 'treble', keys: ['Db/5'], duration: '8' },
    { clef: 'treble', keys: ['C/5'], duration: '8' },
    { clef: 'treble', keys: ['Db/5'], duration: '8d' },
    { clef: 'treble', keys: ['C/5'], duration: '16' },
    { clef: 'treble', keys: ['Bb/4'], duration: '16' },
    { clef: 'treble', keys: ['Ab/4'], duration: '16' },],
  [
    { clef: 'treble', keys: ['Bb/4'], duration: 'qd' },
    { clef: 'treble', keys: ['Eb/4'], duration: 'q' },
    { clef: 'treble', keys: ['Eb/4'], duration: '8' },],
  [
    { clef: 'treble', keys: ['F/4'], duration: '8d' },
    { clef: 'treble', keys: ['G/4'], duration: '16' },
    { clef: 'treble', keys: ['Ab/4'], duration: '8' },
    { clef: 'treble', keys: ['Eb/4'], duration: '8' },
    { clef: 'treble', keys: ['F/4'], duration: '16' },
    { clef: 'treble', keys: ['G/4'], duration: '16' },
    { clef: 'treble', keys: ['Ab/4'], duration: '8' },],
  [
    { clef: 'treble', keys: ['Bb/4'], duration: '8' },
    { clef: 'treble', keys: ['Ab/4'], duration: '16' },
    { clef: 'treble', keys: ['G/4'], duration: '16' },
    { clef: 'treble', keys: ['F/4'], duration: '16' },
    { clef: 'treble', keys: ['Eb/4'], duration: '16' },
    { clef: 'treble', keys: ['Db/5'], duration: '16' },
    { clef: 'treble', keys: ['C/5'], duration: '16' },
    { clef: 'treble', keys: ['Ab/4'], duration: 'q' },]]);

export const excerpts = [excerpt1, excerpt2, excerpt3, excerpt4, excerpt5, excerpt6, excerpt7, excerpt8, excerpt9, excerpt10, excerpt11]

export const excerptsEasy = [excerpt2, excerpt6, excerpt7,]

export const excerptsMedium = [excerpt1, excerpt5, excerpt8]

export const excerptsHard = [excerpt4, excerpt9, excerpt11]

export const excerptsVirtuoso = [excerpt3, excerpt10]