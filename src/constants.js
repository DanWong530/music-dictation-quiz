export const mapNoteToNum = {
    wd: 24,
    w: 16,
    hd: 12,
    h: 8,
    qd: 6,
    q: 4,
    "8d": 3,
    8: 2,
    "16d": 1.5,
    16: 1
}

export const mapNumToNote = {
    16: "16",
    8: "8",
    4: "q",
    2: "h",
}

export const keySignatures = {
    C: ["Cn", "Dn", "En", "Fn", "Gn", "An", "Bn",
        "cn", "dn", "en", "fn", "gn", "an", "bn"],
    G: ["Gn", "An", "Bn", "Cn", "Dn", "En", "F#",
        "gn", "an", "bn", "cn", "dn", "en", "f#"],
    D: ["Dn", "En", "F#", "Gn", "An", "Bn", "C#",
        "dn", "en", "f#", "gn", "an", "bn", "c#"],
    A: ["An", "Bn", "C#", "Dn", "En", "F#", "G#",
        "an", "bn", "c#", "dn", "en", "f#", "g#"],
    E: ["En", "F#", "G#", "An", "Bn", "C#", "D#",
        "en", "f#", "g#", "an", "bn", "c#", "d#"],
    B: ["Bn", "C#", "D#", "En", "F#", "G#", "A#",
        "bn", "c#", "d#", "en", "f#", "g#", "a#"],
    "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#",
        "f#", "g#", "a#", "b", "c#", "d#", "e#"],
    "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#",
        "c#", "d#", "e#", "f#", "g#", "a#", "b#"],

    F: ["Fn", "Gn", "An", "Bb", "Cn", "Dn", "En",
        "fn", "gn", "an", "bb", "cn", "dn", "en"],
    Bb: ["Bb", "Cn", "Dn", "Eb", "Fn", "Gn", "An",
        "bb", "cn", "dn", "eb", "fn", "gn", "an"],
    Eb: ["Eb", "Fn", "Gn", "Ab", "Bb", "Cn", "Dn",
        "eb", "fn", "gn", "ab", "bb", "cn", "dn"],
    Ab: ["Ab", "Bb", "Cn", "Db", "Eb", "Fn", "Gn",
        "ab", "bb", "cn", "db", "eb", "fn", "gn"],
    Db: ["Db", "Eb", "Fn", "Gb", "Ab", "Bb", "Cn",
        "db", "eb", "fn", "gb", "ab", "bb", "cn"],
    Gb: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "Fn",
        "gb", "ab", "bb", "cb", "db", "eb", "fn"],
    Cb: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb",
        "cb", "db", "eb", "fb", "gb", "ab", "bb"],
};
