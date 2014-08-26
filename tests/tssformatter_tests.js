/**
 * VexFlow - TickContext Tests
 * Copyright Mohit Muthanna 2010 <mohit@muthanna.com>
 */

Vex.Flow.Test.TssFormatter = {};

function assertApproximatelyEqualTo(n1,n2){
  ok(Math.abs(n1-n2) < 0.0000001);
}

var notesData = [
  {keys: ['c/5'], duration: "2"},
  {keys: ['d/5'], duration: "4"},

  {keys: ['e/5'], duration: "4"},
  {keys: ['f/5'], duration: "4"},
  {keys: ['e/5'], duration: "4"},

  {keys: ['d/5'], duration: "2"},
  {keys: ['b/4'], duration: "4"},

  {keys: ['g/4'], duration: "4"},
  {keys: ['a/4'], duration: "4"},
  {keys: ['b/4'], duration: "4"}
];

var voiceRanges = [
  [0, 2],
  [2, 5],
  [5, 7],
  [7, 10]
];

function createNotes(notesData){
  return notesData.map(function (spec) {
    return new Vex.Flow.StaveNote({
      keys: spec.keys,
      duration: spec.duration,
      auto_stem: true
    });
  });
}

function createVoices(voiceRanges, notes){
  return voiceRanges.map(function (range) {
    return new Vex.Flow.Voice({
      num_beats: 3,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    }).addTickables(notes.slice(range[0], range[1]));
  });
}

function applyClefs(staveModifiers, staves){
  staveModifiers.forEach(function(modifiers, index){
    if (modifiers.clef){
      staves[index].addTrebleGlyph();
    }
  });
}

var TssFormatter = Vex.Flow.TssFormatter;

Vex.Flow.Test.TssFormatter.Start = function() {
  module("Tss Formatter");
  Vex.Flow.Test.runTest("Auto - minimum", Vex.Flow.Test.TssFormatter.autoSpacing(TssFormatter.mode.AUTO_MINIMUM));
  Vex.Flow.Test.runTest("Auto - desired", Vex.Flow.Test.TssFormatter.autoSpacing(TssFormatter.mode.AUTO_DESIRED));
  Vex.Flow.Test.runTest("Stretchy", Vex.Flow.Test.TssFormatter.stretchySpacing);
  test("Compare Tick Context Positions", Vex.Flow.Test.TssFormatter.compareTickContexts);
};

Vex.Flow.Test.TssFormatter.autoSpacing = function(mode) {
  return function (options, contextBuilder) {
    expect(0);

    var ctx = contextBuilder(options.canvas_sel, 1100, 195);

    var formatter = new Vex.Flow.TssFormatter(tss);

    var staveModifiers = [{clef: true}, {clef: false}, {clef: false}, {clef: false}];
    var staves = formatter.getStaves(mode, staveModifiers);

    applyClefs(staveModifiers, staves);

    var notes = createNotes(notesData);
    var voices = createVoices(voiceRanges, notes);

    staves.forEach(function (stave, index) {
      formatter.format([voices[index]], index, stave);
      stave.setContext(ctx).draw();
      voices[index].draw(ctx, stave);
    });
  }
};

Vex.Flow.Test.TssFormatter.stretchySpacing = function(options, contextBuilder){
  var ctx = contextBuilder(options.canvas_sel, 1100, 195);

  var availableWidth = 500,
      numStaves = 4;

  var formatter = new Vex.Flow.TssFormatter(tss);
  var staveModifiers = [{clef: true}, {clef: false}, {clef: false}, {clef: false}];
  var staves = formatter.getStaves(Vex.Flow.TssFormatter.mode.STRETCHY, staveModifiers, availableWidth);

  applyClefs(staveModifiers, staves);

  var notes = createNotes(notesData);
  var voices = createVoices(voiceRanges, notes);

  staves.forEach(function(stave, index){
    formatter.format([voices[index]], index, stave);
    stave.setContext(ctx).draw();
    voices[index].draw(ctx, stave);

    assertApproximatelyEqualTo(stave.width, formatter.getStretchyVoiceWidth(index) + formatter.getClefWidthInMeasure(index));
  });
};

Vex.Flow.Test.TssFormatter.compareTickContexts = function(){
  var formatter = new Vex.Flow.TssFormatter(tss);
  var staveModifiers = [{clef: true}, {clef: false}, {clef: false}, {clef: false}];
  var staves = formatter.getStaves(TssFormatter.mode.AUTO_DESIRED, staveModifiers);

  applyClefs(staveModifiers, staves);

  var notes = createNotes(notesData);
  var minimumVoices = createVoices(voiceRanges, notes);

  staves.forEach(function (stave, index) {
    formatter.format([minimumVoices[index]], index, stave);
  });

  var availableWidth = staves.reduce(function(sum, stave){
    return sum + stave.width;
  }, 0);

  staves = formatter.getStaves(TssFormatter.mode.STRETCHY, staveModifiers, availableWidth);

  applyClefs(staveModifiers, staves);

  notes = createNotes(notesData);
  var stretchyVoices = createVoices(voiceRanges, notes);

  staves.forEach(function (stave, index) {
    formatter.format([stretchyVoices[index]], index, stave);
  });

  minimumVoices.forEach(function(minimumVoice, voiceIndex){
    minimumVoice.tickables.forEach(function(tickable, tickableIndex){
      equal(tickable.tickContext.x, stretchyVoices[voiceIndex].tickables[tickableIndex].tickContext.x, "Position: " + tickable.tickContext.x);
    });
  });
};