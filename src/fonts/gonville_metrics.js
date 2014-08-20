//Using SMuFL naming
//
Vex.Flow.Font.Gonville.Metrics = {
  // STAFF BRACKETS AND DIVIDERS
  "bracketTop": {},
  "bracketBottom": {},

  // CLEFS
  "gClef": {
    point: 40
  },
  "fClef": {
    point: 40
  },
  "cClef": {
    point: 40
  },
  "gClefChange": {
    point: 36
  },
  "fClefChange": {
    point: 36
  },
  "cClefChange": {
    point: 36
  },
  "unpitchedPercussionClef1": {
    point: 40
  },
  "6stringTabClef": {},
  "clef8": {
    default_point: 20,
    small_point: 18,
    "8va": {
      "gClef": {
        "default" : {
          line: -1.2,
          x_shift: 11
        },
        "small": {
          line: -0.4,
          x_shift: 8
        }
      }
    },
    "8vb": {
      "gClef": {
        "default": {
          line: 6.3,
          x_shift: 10
        },
        "small": {
          line: 5.8,
          x_shift: 6,
        }
      },
      "fClef": {
        "default": {
          line: 4,
          x_shift: 1
        },
        "small": {
          line: 3.5,
          x_shift: 0.5
        }
      }
    }
  },

  // TIME SIGNATURES
  "timeSig0": {},
  "timeSig1": {},
  "timeSig2": {},
  "timeSig3": {},
  "timeSig4": {},
  "timeSig5": {},
  "timeSig6": {},
  "timeSig7": {},
  "timeSig8": {},
  "timeSig9": {},
  "timeSigCommon": {},
  "timeSigCutCommon": {},
  
  // TUPLETS
  "tuplet0": {},
  "tuplet1": {},
  "tuplet2": {},
  "tuplet3": {},
  "tuplet4": {},
  "tuplet5": {},
  "tuplet6": {},
  "tuplet7": {},
  "tuplet8": {},
  "tuplet9": {},

  //NOTEHEADS
  //Normal
  "noteheadDoubleWhole": {
    width: 22,
    stem_offset: 0
  },
  "noteheadWhole": {
    width: 16,
    stem_offset: 0
  },
  "noteheadHalf": {
    width: 10,
    stem_offset: 0
  },
  "noteheadBlack": {
    width: 10,
    stem_offset: 0
  },

  // Diamond
  "noteheadDiamondDoubleWhole": {
    width: 22,
    stem_offset: 0,
  },
  "noteheadDiamondWhole": {
    width: 16,
    stem_offset: 0
  },
  "noteheadDiamondHalf": {
    width: 10,
    stem_offset: 0
  },
  "noteheadDiamondBlack": {
    width: 10,
    stem_offset: 0
  },

  //TRIANGLE
  "noteheadTriangleUpWhole":{
    stem_offset: 0
  },
  "noteheadTriangleUpHalf":{
    stem_offset: 0
  },
  "noteheadTriangleUpBlack": {
    stem_offset: 0
  },

  // X
  "noteheadXDoubleWhole": {
    width: 22,
    stem_offset: 0
  },
  "noteheadXWhole": {
    stem_offset: -3,
    width: 16,
  },
  "noteheadXHalf": {
    stem_offset: -3,
    width: 10
  },
  "noteheadXBlack": {
    width: 10,
    stem_offset: -3
  },
  "noteheadXOrnate": {
    width: 10,
    stem_offset: 0
  },
  "noteheadCircleX": {},
  
  // Slash
  "noteheadSlashDoubleWhole": { // Doesn't exist in SMuFL
    width: 15,
    stem_offset: 0
  },
  "noteheadSlashWhiteWhole": {
    width: 15,
    stem_offset: 0
  },
  "noteheadSlashWhiteHalf": {
    width: 15,
    stem_offset: 0
  },
  "noteheadSlashHorizontalEnds": {
    width: 15,
    stem_offset: 0
  },

  // RESTS
  "restDoubleWhole": {
    width: 24
  },
  "restWhole" : {
    width: 12
  },
  "restHalf" : {
    width: 12
  },
  "restQuarter" : {
    width: 8
  },
  "rest8th": {
    width: 8
  },
  "rest16th": {
    width: 13
  },
  "rest32nd": {
    width: 16
  },
  "rest64th": {
    width: 18
  },
  "rest128th": {
    width: 20
  },

  // FLAGS
  "flag8thUp": {
    stem_up_extension: 0,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0,
    up_x_shift: 1,
    up_y_shift: -2
  },
  "flag8thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0,
    down_x_shift: 1,
    down_y_shift: 2
  },
  "flag16thUp": {
    stem_up_extension: 4,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0,
    up_x_shift: 1,
    up_y_shift: -2
  },
  "flag16thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0,
    down_x_shift: 1,
    down_y_shift: 2
  },
  "flag32ndUp": {
    stem_up_extension: 13,
    gracenote_stem_up_extension: 2,
    tabnote_stem_up_extension: 9,
    up_x_shift: 1,
    up_y_shift: -2
  },
  "flag32ndDown": {
    stem_down_extension: 9,
    gracenote_stem_down_extension: 2,
    tabnote_stem_down_extension: 5,
    down_x_shift: 1,
    down_y_shift: 2
  },
  "flag64thUp": {
    stem_up_extension: 17,
    gracenote_stem_up_extension: 4,
    tabnote_stem_up_extension: 13,
    up_x_shift: 1,
    up_y_shift: -2
  },
  "flag64thDown": {
    stem_down_extension: 13,
    gracenote_stem_down_extension: 4,
    tabnote_stem_down_extension: 9,
    down_x_shift: 1,
    down_y_shift: 2
  },
  "flag128thUp": {
    stem_up_extension: 26,
    gracenote_stem_up_extension: 6,
    tabnote_stem_up_extension: 22,
    up_x_shift: 1,
    up_y_shift: -2
  },
  "flag128thDown": {
    stem_down_extension: 22,
    gracenote_stem_down_extension: 6,
    tabnote_stem_down_extension: 18,
    down_x_shift: 1,
    down_y_shift: 2
  },

  // ORNAMENTS
  "ornamentMordent": {
    shift_right: 1,
    shift_up: 0,
    shift_down: 5,
    width: 14,
  },
  "ornamentMordentInverted": {
    shift_right: 1,
    shift_up: 0,
    shift_down: 5,
    width: 14,
  },
  "ornamentTurn": {
    shift_right: 1,
    shift_up: 0,
    shift_down: 5,
    width: 20,
  },
  "ornamentTurnSlash": {
    shift_right: 1,
    shift_up: 0,
    shift_down: 6,
    width: 20,
  },
  "ornamentTrill": {
    shift_right: 0,
    shift_up: 5,
    shift_down: 15,
    width: 10,
  },
  "ornamentPrecompSlideTrillDAnglebert": {
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompMordentUpperPrefix": {
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompTrillSuffixDandrieu": {
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompTrillLowerSuffix": {
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompPortDeVoixMordent": {
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompInvertedMordentUpperPrefix": {
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompAppoggTrill": {
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentTremblement": {
    shift_right: 1,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "graceNoteSlashStemUp":{},

  // ACCIDENTALS
  "accidentalSharp": {
    width: 10,
    gracenote_width: 4.5,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalDoubleSharp": {
    width: 13,
    gracenote_width: 6,
    shift_right: -1,
    shift_down: 0
  },
  "accidentalFlat": {
    width: 8,
    gracenote_width: 4.5,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalDoubleFlat": {
    width: 14,
    gracenote_width: 8,
    shift_right: -3,
    shift_down: 0
  },
  "accidentalNatural": {
    width: 8,
    gracenote_width: 4.5,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalParensLeft": {   // Left paren for cautionary accidentals
    width: 5,
    shift_right: 2,
    shift_down: 0
  },
  "accidentalParensRight": {   // Right paren for cautionary accidentals
    width: 5,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalThreeQuarterTonesFlatZimmermann": {
    width: 16,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalQuarterToneFlatStein": {
    width: 10,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalThreeQuarterTonesSharpStein": {
    width: 13,
    shift_right: 0,
    shift_down: 0
  },
  "accidentalQuarterToneSharpStein": {
    width: 8,
    shift_right: 0,
    shift_down: 0
  },

  // NO EQUIVALENT IN SMUFL?
  "bbs": { //double flat slashed
    width: 13,
    shift_right: 0,
    shift_down: 0
  },

  // ARTICULATIONS
  "articStaccatoAbove": {   // Staccato
    width: 4,
    shift_right: -2,
    shift_up: 8,
    shift_down: 0
  },
  "articStaccatissimoAbove": {   // Staccatissimo
    width: 4,
    shift_right: 0,
    shift_up: 11,
    shift_down: 5,
  },
  "articAccentAbove": {   // Accent
    width: 10,
    shift_right: 5,
    shift_up: 8,
    shift_down: 1
  },
  "articTenutoAbove": {   // Tenuto
    width: 9,
    shift_right: -4,
    shift_up: 17,
    shift_down: 10,
  },
  "articMarcatoAbove": {   // Marcato
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: -2,
  },
  "articMarcatoBelow": {   // Marcato
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: -2,
  },
  "stringsHarmonic": {   // Natural harmonic or open note
    width: 7,
    shift_right: 0,
    shift_up: -4,
    shift_down: 4
  },

  // STRING TECHNIQUES
  "stringsUpBow": {   // Bow up - up stroke
    width: 8,
    shift_right: 0,
    shift_up: 8,
    shift_down: 10
  },
  "stringsDownBow": {   // Bow down - down stroke
    width: 13,
    shift_right: 0,
    shift_up: 10,
    shift_down: 12
  },

  // PLUCKED TECHNIQUES
  "pluckedLeftHandPizzicato": {   // Left hand pizzicato
    width: 9,
    shift_right: -4,
    shift_up: 12,
    shift_down: 12
  },
  "pluckedSnapPizzicatoAbove": {   // Snap pizzicato
    width: 8,
    shift_right: 0,
    shift_up: -4,
    shift_down: 6
  },


  // HOLDS AND PAUSES
  "caesura": {
    point:40,
    x_shift:0,
    y_shift:2,
    width: 15
  },
  "caesuraCurved": {
    point:40,
    x_shift:0,
    y_shift:2,
    width: 15
  },
  "breathMarkComma": {
    point:40,
    x_shift:0,
    y_shift:0,
    width: 10,
    shift_right: 8,
    shift_up: -4,
    shift_down: 4
  },
  "breathMarkTick": {
    point:50,
    x_shift:0,
    y_shift:0,
    width: 10
  },
  "fermataAbove": {   // Fermata above staff
    width: 25,
    shift_right: 0,
    shift_up: 8,
    shift_down: 10
  },
  "fermataBelow": {   // Fermata below staff
    width: 25,
    shift_right: 0,
    shift_up: 0,
    shift_down: -4
  },

  // PIANO TECHNIQUES
  "keyboardPedalPed": {
    x_shift:-10,
    y_shift:0
  },
  "keyboardPedalUp": {
    x_shift:-2,
    y_shift:3
  },

  // DYNAMICS
  "dynamicForte": {
    width: 12
  },
  "dynamicPiano": {
    width: 14
  },
  "dynamicMezzo": {
    width: 17
  },
  "dynamicSforzando": {
    width: 10
  },
  "dynamicZ": {
    width: 12
  },
  "dynamicRinforzando": {
    width: 12
  },

  // REPEATS
  "coda": {},
  "segno":{},

  //MULTI-LINE SEGMENTS
  "wiggleArpeggiatoDown":{},
  "wiggleArpeggiatoDownArrow":{},
  "wiggleArpeggiatoUpArrow":{},

  //ARROWS AND ARROWHEADS
  "arrowheadBlackUp": {},
  "arrowheadBlackDown": {}
};