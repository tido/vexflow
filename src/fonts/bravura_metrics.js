//Using SMuFL naming
//
Vex.Flow.Bravura = {};

Vex.Flow.Bravura.Metrics = {
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
    point: 40
  },
  "fClefChange": {
    point: 40
  },
  "cClefChange": {
    point: 40
  },
  "unpitchedPercussionClef1": {},
  "6stringTabClef": {},
  "clef8": {
    default_point: 40,
    small_point: 36,
    "8va": {
      "gClef": {
        "default" : {
          line: -1.3,
          x_shift: 21
        },
        "small": {
          line: 0.1,
          x_shift: 13
        }
      }
    },
    "8vb": {
      "gClef": {
        "default": {
          line: 6.5,
          x_shift: 15
        },
        "small": {
          line: 5.6,
          x_shift: 10,
        }
      },
      "fClef": {
        "default": {
          line: 4,
          x_shift: 15
        },
        "small": {
          line: 3.3,
          x_shift: 10
        }
      }
    }
  },

  // TIME SIGNATURES
  "timeSig0": {
    y_shift: -10
  },
  "timeSig1": {
    y_shift: -10
  },
  "timeSig2": {
    y_shift: -10
  },
  "timeSig3": {
    y_shift: -10
  },
  "timeSig4": {
    y_shift: -10
  },
  "timeSig5": {
    y_shift: -10
  },
  "timeSig6": {
    y_shift: -10
  },
  "timeSig7": {
    y_shift: -10
  },
  "timeSig8": {
    y_shift: -10
  },
  "timeSig9": {
    y_shift: -10
  },
  "timeSigCommon": {},
  "timeSigCutCommon": {},

  // Tuplets
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
    width: 25,
    stem_offset: 0
  },
  "noteheadWhole": {
    width: 16,
    stem_offset: 0
  },
  "noteheadHalf": {
    width: 12,
    stem_offset: 0
  },
  "noteheadBlack": {
    width: 11,
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
    stem_offset: 2
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
    y_shift: 0
  },
  "flag8thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0
  },
  "flag16thUp": {
    stem_up_extension: 0,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0,
    y_shift: 0,
  },
  "flag16thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0
  },
  "flag32ndUp": {
    stem_up_extension: 0,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0
  },
  "flag32ndDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0
  },
  "flag64thUp": {
    stem_up_extension: 0,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0
  },
  "flag64thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0
  },
  "flag128thUp": {
    stem_up_extension: 0,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0
  },
  "flag128thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0
  },

  // ORNAMENTS
  "ornamentMordent": {
    shift_right: -8,
    shift_up: 0,
    shift_down: 5,
    width: 14,
  },
  "ornamentMordentInverted": {
    shift_right: -8,
    shift_up: 0,
    shift_down: 5,
    width: 14,
  },
  "ornamentTurn": {
    shift_right: -8,
    shift_up: 0,
    shift_down: 5,
    width: 20,
  },
  "ornamentTurnSlash": {
    shift_right: -8,
    shift_up: 0,
    shift_down: 6,
    width: 20,
  },
  "ornamentTrill": {
    shift_right: -8,
    shift_up: 5,
    shift_down: 15,
    width: 10,
  },
  "ornamentPrecompSlideTrillDAnglebert": {
    shift_right: -15,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompMordentUpperPrefix": {
    shift_right: -15,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompTrillSuffixDandrieu": {
    shift_right: -15,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompTrillLowerSuffix": {
    shift_right: -15,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompPortDeVoixMordent": {
    shift_right: -15,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompInvertedMordentUpperPrefix": {
    shift_right: -15,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentPrecompAppoggTrill": {
    shift_right: -15,
    shift_up: -3,
    shift_down: 6,
    width: 20,
  },
  "ornamentTremblement": {
    shift_right: -15,
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
    shift_up: -5,
    shift_down: 3
  },
  "articStaccatissimoAbove": {   // Staccatissimo
    width: 4,
    shift_right: 0,
    shift_up: 11,
    shift_down: 7,
  },
  "articAccentAbove": {   // Accent
    width: 10,
    shift_right: -5,
    shift_up: 0,
    shift_down: 4
  },
  "articTenutoAbove": {   // Tenuto
    width: 9,
    shift_right: -5,
    shift_up: -3,
    shift_down: 0,
  },
  "articMarcatoAbove": {   // Marcato
    width: 8,
    shift_right: -4,
    shift_up: 0,
    shift_down: 5,
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
    shift_right: -3,
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
    shift_right: -13,
    shift_up: 8,
    shift_down: 10
  },
  "fermataBelow": {   // Fermata below staff
    width: 25,
    shift_right: -10,
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