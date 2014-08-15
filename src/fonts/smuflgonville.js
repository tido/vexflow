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
    code: "v53",
    width: 22,
    stem_offset: 0
  },
  "noteheadWhole": {
    code: "v1d",
    width: 16,
    stem_offset: 0
  },
  "noteheadHalf": {
    code: "v81",
    width: 10,
    stem_offset: 0
  },
  "noteheadBlack": {
    code: "vb",
    width: 10,
    stem_offset: 0
  },

  // Diamond
  "noteheadDiamondDoubleWhole": {
    code: "v59",
    width: 22,
    stem_offset: 0,
  },
  "noteheadDiamondWhole": {
    code: "v46",
    width: 16,
    stem_offset: 0
  },
  "noteheadDiamondHalf": {
    code: "v2d",
    width: 10,
    stem_offset: 0
  },
  "noteheadDiamondBlack": {
    code: "v22",
    width: 10,
    stem_offset: 0
  },

  //TRIANGLE
  "noteheadTriangleUpWhole":{
    code: "v49"
  },
  "noteheadTriangleUpHalf":{
    code: "v93"
  },
  "noteheadTriangleUpBlack": {
    code: "v40"
  },

  // X
  "noteheadXDoubleWhole": {
    code: "v53", // Standard breve, no X double whole in gonville?
    width: 22,
    stem_offset: 0
  },
  "noteheadXWhole": {
    code: "v92",
    stem_offset: -3,
    width: 16,
  },
  "noteheadXHalf": {
    code: "v95",
    stem_offset: -3,
    width: 10
  },
  "noteheadXBlack": {
    code: "v3e",
    width: 10,
    stem_offset: -3
  },
  "noteheadXOrnate": {
    code: "v7f",
    width: 10,
    stem_offset: 0
  },
  "noteheadCircleX": {
    code: "v3b"
  },
  
  // Slash
  "noteheadSlashDoubleWhole": { // Doesn't exist in SMuFL
    code: null, //drawn with primitives
    width: 15
  },
  "noteheadSlashWhiteWhole": {
    code: null, // Drawn with canvas primitives
    width: 15
  },
  "noteheadSlashWhiteHalf": {
    code: null, // Drawn with canvas primitives
    width: 15
  },
  "noteheadSlashHorizontalEnds": {
    code: null, // Drawn with canvas primitives
    width: 15
  },

  // RESTS
  "restDoubleWhole": {
    code: "v31",
    width: 24
  },
  "restWhole" : {
    code: "v5c",
    width: 12
  },
  "restHalf" : {
    code: "v5c",
    width: 12
  },
  "restQuarter" : {
    code: "v7c",
    width: 8
  },
  "rest8th": {
    code: "va5",
    width: 8
  },
  "rest16th": {
    code: "v3c",
    width: 13
  },
  "rest32nd": {
    code: "v55",
    width: 16
  },
  "rest64th": {
    code: "v38",
    width: 18
  },
  "rest128th": {
    code: "vaa",
    width: 20
  },

  // FLAGS
  "flag8thUp": {
    code: "v54",
    stem_up_extension: 0,
    gracenote_stem_up_extension: -14,
    tabnote_stem_up_extension: 0
  },
  "flag8thDown": {
    code: "v9a",
    stem_down_extension: 0,
    gracenote_stem_down_extension: -14,
    tabnote_stem_down_extension: 0
  },
  "flag16thUp": {
    code: "v3f",
    stem_up_extension: 4,
    gracenote_stem_up_extension: -14,
    tabnote_stem_up_extension: 0
  },
  "flag16thDown": {
    code: "v8f",
    stem_down_extension: 0,
    gracenote_stem_down_extension: -14,
    tabnote_stem_down_extension: 0
  },
  "flag32ndUp": {
    code: "v47",
    stem_up_extension: 13,
    gracenote_stem_up_extension: -12,
    tabnote_stem_up_extension: 9
  },
  "flag32ndDown": {
    code: "v2a",
    stem_down_extension: 9,
    gracenote_stem_down_extension: -12,
    tabnote_stem_down_extension: 5
  },
  "flag64thUp": {
    code: "va9",
    stem_up_extension: 17,
    gracenote_stem_up_extension: -10,
    tabnote_stem_up_extension: 13
  },
  "flag64thDown": {
    code: "v58",
    stem_down_extension: 13,
    gracenote_stem_down_extension: -10,
    tabnote_stem_down_extension: 9
  },
  "flag128thUp": {
    code: "v9b",
    stem_up_extension: 26,
    gracenote_stem_up_extension: -8,
    tabnote_stem_up_extension: 22
  },
  "flag128thDown": {
    code: "v30",
    stem_down_extension: 22,
    gracenote_stem_down_extension: -8,
    tabnote_stem_down_extension: 18
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
  "graceNoteSlashStemUp":{
    code: "v74"
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
    shift_down: 0
  },
  "articStaccatissimoAbove": {   // Staccatissimo
    code: "v28",
    width: 4,
    shift_right: 0,
    shift_up: 11,
    shift_down: 5,
  },
  "articAccentAbove": {   // Accent
    code: "v42",
    width: 10,
    shift_right: 5,
    shift_up: 8,
    shift_down: 1
  },
  "articTenutoAbove": {   // Tenuto
    code: "v25",
    width: 9,
    shift_right: -4,
    shift_up: 17,
    shift_down: 10,
  },
  "articMarcatoAbove": {   // Marcato
    code: "va",
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: -2,
  },
  "articMarcatoBelow": {   // Marcato
    code: "v8a",
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: -2,
  },
  "stringsHarmonic": {   // Natural harmonic or open note
    code: "vb9",
    width: 7,
    shift_right: 0,
    shift_up: -4,
    shift_down: 4
  },

  // STRING TECHNIQUES
  "stringsUpBow": {   // Bow up - up stroke
    code: "v75",
    width: 8,
    shift_right: 0,
    shift_up: 8,
    shift_down: 10
  },
  "stringsDownBow": {   // Bow down - down stroke
    code: "v97",
    width: 13,
    shift_right: 0,
    shift_up: 10,
    shift_down: 12
  },

  // PLUCKED TECHNIQUES
  "pluckedLeftHandPizzicato": {   // Left hand pizzicato
    code: "v8b",
    width: 9,
    shift_right: -4,
    shift_up: 12,
    shift_down: 12
  },
  "pluckedSnapPizzicatoAbove": {   // Snap pizzicato
    code: "v94",
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: 6
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
    width: 10,
    shift_right: 8,
    shift_up: -4,
    shift_down: 4
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
    shift_down: 10
  },
  "fermataBelow": {   // Fermata below staff
    code: "v5b",
    width: 25,
    shift_right: 0,
    shift_up: 0,
    shift_down: -4
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