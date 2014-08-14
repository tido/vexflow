//Using SMuFL naming

Vex.Flow.SMuFLGonvilleMap = {
  // STAFF BRACKETS AND DIVIDERS
  "bracketTop": {
    code: "v1b",
  },
  "bracketBottom": {
    code: "v10"
  },

  // CLEFS
  "gClef": {
    code: "v83"
  },
  "fClef": {
    code: "v79"
  },
  "cClef": {
    code: "vad"
  },
  "unpitchedPercussionClef1": {
    code: "v59"
  },
  "6stringTabClef": {
    code: "v2f"
  },

  // TIME SIGNATURES
  "timeSig0": {
    code: "v0"
  },
  "timeSig1": {
    code: "v1"
  },
  "timeSig2": {
    code: "v2"
  },
  "timeSig3": {
    code: "v3"
  },
  "timeSig4": {
    code: "v4"
  },
  "timeSig5": {
    code: "v5"
  },
  "timeSig6": {
    code: "v6"
  },
  "timeSig7": {
    code: "v7"
  },
  "timeSig8": {
    code: "v8"
  },
  "timeSig9": {
    code: "v9"
  },
  "timeSigCommon": {
    code: "v41",
  },
  "timeSigCutCommon": {
    code: "vb6",
  },

  //NOTEHEADS
  //Normal
  "noteheadDoubleWhole": {
    code: "v53"
  },
  "noteheadWhole": {
    code: "v1d"
  },
  "noteheadHalf": {
    code: "v81"
  },
  "noteheadBlack": {
    code: "vb"
  },

  // Diamond
  "noteheadDiamondDoubleWhole": {
    code: "v59"
  },
  "noteheadDiamondWhole": {
    code: "v46"
  },
  "noteheadDiamondHalf": {
    code: "v2d",
  },
  "noteheadDiamondBlack": {
    code: "v22",
  },

  // X
  "noteheadXDoubleWhole": {
    code: "v53", // Standard breve, no X double whole in gonville?
    stem_offset: 0
  },
  "noteheadXWhole": {
    code: "v92",
    stem_offset: -3
  },
  "noteheadXHalf": {
    code: "v95",
    stem_offset: -3
  },
  "noteheadXBlack": {
    code: "v3e",
    stem_offset: -3
  },
  "noteheadXOrnate": {
    code: "v7f"
  },
  "noteheadCircleX": {
    code: "v3b"
  },
  
  // Slash
  "noteheadSlashDoubleWhole": { // Doesn't exist in SMuFL
    code: null, //drawn with primitives
    head_width: 15
  },
  "noteheadSlashWhiteWhole": {
    code: null, // Drawn with canvas primitives
    head_width: 15
  },
  "noteheadSlashWhiteHalf": {
    code: null, // Drawn with canvas primitives
    head_width: 15
  },
  "noteheadSlashHorizontalEnds": {
    code: null, // Drawn with canvas primitives
    head_width: 15
  },

  // RESTS
  "restDoubleWhole": {
    code: "v31",
    head_width: 24,
  },
  "restWhole" : {
    code: "v5c",
    head_width: 12,
  },
  "restHalf" : {
    code: "v5c",
    head_width: 12,
  },
  "restQuarter" : {
    code: "v7c",
    head_width: 8,
  },
  "rest8th": {
    code: "va5",
  },
  "rest16th": {
    code: "v3c",
    head_width: 13,
  },
  "rest32nd": {
    code: "v55",
    head_width: 16,
  },
  "rest64th": {
    code: "v38",
    head_width: 18,
  },
  "rest128th": {
    code: "vaa",
    head_width: 20,
  },

  // FLAGS
  "flag8thUp": {
    code: "v54"
  },
  "flag8thDown": {
    code: "v9a"
  },
  "flag16thUp": {
    code: "v3f"
  },
  "flag16thDown": {
    code: "v8f"
  },
  "flag32ndUp": {
    code: "v47"
  },
  "flag32ndDown": {
    code: "v2a"
  },
  "flag64thUp": {
    code: "va9"
  },
  "flag64thDown": {
    code: "v58"
  },
  "flag128thUp": {
    code: "v9b"
  },
  "flag128thDown": {
    code: "v30"
  },

  // ORNAMENTS
  "ornamentMordent": {
    code: "v1e",
    shift_right: 1,
    shift_up: 0,
    shift_down: 5,
    width: 14,
  },
  "ornamentMordentInverted": {
    code: "v45",
    shift_right: 1,
    shift_up: 0,
    shift_down: 5,
    width: 14,
  },
  "ornamentTurn": {
    code: "v72",
    shift_right: 1,
    shift_up: 0,
    shift_down: 5,
    width: 20,
  },
  "ornamentTurnSlash": {
    code: "v33",
    shift_right: 1,
    shift_up: 0,
    shift_down: 6,
    width: 20,
  },
  "ornamentTrill": {
    code: "v1f",
    shift_right: 0,
    shift_up: 5,
    shift_down: 15,
    width: 10,
  },
  "ornamentPrecompSlideTrillDAnglebert": {
    code: "v60",
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompMordentUpperPrefix": {
    code: "vb4",
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompTrillSuffixDandrieu": {
    code: "v6d",
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompTrillLowerSuffx": {
    code: "v2c",
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompPortDeVoixMordent": {
    code: "v29",
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompInvertedMordentUpperPrefix": {
    code: "v68",
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompAppoggTrill": {
    code: "v20",
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentTremblement": {
    code: "v86",
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },

  // ACCIDENTALS
  "accidentalSharp": {
    code: "v18",
    width: 10,
    gracenote_width: 4.5,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalDoubleSharp": {
    code: "v7f",
    width: 13,
    gracenote_width: 6,
    shift_right: -1,
    shift_down: 0
  },
  "accidentalFlat": {
    code: "v44",
    width: 8,
    gracenote_width: 4.5,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalDoubleFlat": {
    code: "v26",
    width: 14,
    gracenote_width: 8,
    shift_right: -3,
    shift_down: 0
  },
  "accidentalNatural": {
    code: "v4e",
    width: 8,
    gracenote_width: 4.5,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalParensLeft": {   // Left paren for cautionary accidentals
    code: "v9c",
    width: 5,
    shift_right: 2,
    shift_down: 0
  },
  "accidentalParensRight": {   // Right paren for cautionary accidentals
    code: "v84",
    width: 5,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalThreeQuarterTonesFlatZimmermann": {
    code: "v9e",
    width: 16,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalQuarterToneFlatStein": {
    code: "vab",
    width: 10,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalThreeQuarterTonesSharpStein": {
    code: "v51",
    width: 13,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalQuarterToneSharpStein": {
    code: "v78",
    width: 8,
    shift_right: 0,
    shift_down: 0
  },

  // NO EQUIVALENT IN SMUFL?
  "bbs": { //double flat slashed
    code: "v90",
    width: 13,
    shift_right: 0,
    shift_down: 0
  },

  // ARTICULATIONS
  "articStaccatoAbove": {   // Staccato
    code: "v23",
    width: 4,
    shift_right: -2,
    shift_up: 8,
    shift_down: 0,
    between_lines: true
  },
  "articStaccatissimoAbove": {   // Staccatissimo
    code: "v28",
    width: 4,
    shift_right: 0,
    shift_up: 11,
    shift_down: 5,
    between_lines: true
  },
  "articAccentAbove": {   // Accent
    code: "v42",
    width: 10,
    shift_right: 5,
    shift_up: 8,
    shift_down: 1,
    between_lines: true
  },
  "articTenutoAbove": {   // Tenuto
    code: "v25",
    width: 9,
    shift_right: -4,
    shift_up: 17,
    shift_down: 10,
    between_lines: true
  },
  "articMarcatoAbove": {   // Marcato
    code: "va",
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: -2,
    between_lines: false
  },
  "articMarcatoBelow": {   // Marcato
    code: "v8a",
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: -2,
    between_lines: false
  },
  "stringsHarmonic": {   // Natural harmonic or open note
    code: "vb9",
    width: 7,
    shift_right: 0,
    shift_up: -4,
    shift_down: 4,
    between_lines: false
  },

  // STRING TECHNIQUES
  "stringsUpBow": {   // Bow up - up stroke
    code: "v75",
    width: 8,
    shift_right: 0,
    shift_up: 8,
    shift_down: 10,
    between_lines: false
  },
  "stringsDownBow": {   // Bow down - down stroke
    code: "v97",
    width: 13,
    shift_right: 0,
    shift_up: 10,
    shift_down: 12,
    between_lines: false
  },

  // PLUCKED TECHNIQUES
  "pluckedLeftHandPizzicato": {   // Left hand pizzicato
    code: "v8b",
    width: 9,
    shift_right: -4,
    shift_up: 12,
    shift_down: 12,
    between_lines: false
  },
  "pluckedSnapPizzicatoAbove": {   // Snap pizzicato
    code: "v94",
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: 6,
    between_lines: false
  },


  // HOLDS AND PAUSES
  "caesura": {
    code: "v34",
    point:40,
    x_shift:0,
    y_shift:2,
    width: 15
  },
  "caesuraCurved": {
    code: "v4b",
    point:40,
    x_shift:0,
    y_shift:2,
    width: 15
  },
  "breathMarkComma": {
    code: "v6c",
    point:40,
    x_shift:0,
    y_shift:0,
    width: 10
  },
  "breathMarkTick": {
    code: "v6f",
    point:50,
    x_shift:0,
    y_shift:0,
    width: 10
  },
  "fermataAbove": {   // Fermata above staff
    code: "v43",
    width: 25,
    shift_right: 0,
    shift_up: 8,
    shift_down: 10,
    between_lines: false
  },
  "fermataBelow": {   // Fermata below staff
    code: "v5b",
    width: 25,
    shift_right: 0,
    shift_up: 0,
    shift_down: -4,
    between_lines: false
  },

  // PIANO TECHNIQUES
  "keyboardPedalPed": {
    code: "v36",
    x_shift:-10,
    y_shift:0
  },
  "keyboardPedalUp": {
    code: "v5d",
    x_shift:-2,
    y_shift:3
  },

  // DYNAMICS
  "dynamicForte": {
    code: "vba",
    width: 12
  },
  "dynamicPiano": {
    code: "vbf",
    width: 14
  },
  "dynamicMezzo": {
    code: "v62",
    width: 17
  },
  "dynamicSforzando": {
    code: "v4a",
    width: 10
  },
  "dynamicZ": {
    code: "v80",
    width: 12
  },
  "dynamicRinforzando": {
    code: "vb1",
    width: 12
  },

  // REPEATS
  "coda": {
    code: "v4d"
  },
  "segno":{
    code: "v8c"
  },

  //MULTI-LINE SEGMENTS
  "wiggleArpeggiatoDown":{
    code: "va3"
  },
  "wiggleArpeggiatoDownArrow":{
    code: "v52"
  },
  "wiggleArpeggiatoUpArrow":{
    code: "vc3"
  },

  //ARROWS AND ARROWHEADS
  "arrowheadBlackUp": {
    code: "vc3"
  },
  "arrowheadBlackDown": {
    code: "v11"
  }
};