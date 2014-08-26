/**
 * VexFlow - TickContext Tests
 * Copyright Mohit Muthanna 2010 <mohit@muthanna.com>
 */

Vex.Flow.Test.TssFormatter = {};

function assertApproximatelyEqualTo(n1,n2){
  ok(Math.abs(n1-n2) < 0.0000001);
}

Vex.Flow.Test.TssFormatter.Start = function() {
  module("Tss Formatter");
  Vex.Flow.Test.runTest("Auto", Vex.Flow.Test.TssFormatter.basicNoteSpacing);
  Vex.Flow.Test.runTest("Stretchy", Vex.Flow.Test.TssFormatter.stretchyNoteSpacing);
  Vex.Flow.Test.runTest("Fit Staves to Width", Vex.Flow.Test.TssFormatter.fitStaves);
};

Vex.Flow.Test.TssFormatter.basicNoteSpacing = function(options, contextBuilder){
  expect(0);

  var ctx = contextBuilder(options.canvas_sel, 1100, 195);

  var formatter = new Vex.Flow.TssFormatter(tss);

  var staves = formatter.getStaves(4);

  staves[0].addTrebleGlyph();

  var notes = [
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
  ].map(function(spec){
    return new Vex.Flow.StaveNote({
      keys: spec.keys, 
      duration: spec.duration, 
      auto_stem: true
    });
  });

  var voiceRanges = [
    [0, 2],
    [2, 5],
    [5, 7],
    [7, 10]
  ];

  var voices = voiceRanges.map(function(range){
    return new Vex.Flow.Voice({
      num_beats: 3,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    }).addTickables(notes.slice(range[0], range[1]));
  });

  staves.forEach(function(stave, index){
    formatter.format([voices[index]], index, stave);
    stave.setContext(ctx).draw();
    voices[index].draw(ctx, stave);
  });
};


Vex.Flow.Test.TssFormatter.stretchyNoteSpacing = function(options, contextBuilder){
  var ctx = contextBuilder(options.canvas_sel, 1100, 195);

  var formatter = new Vex.Flow.TssFormatter(tss);

  var staves = formatter.getStaves(4, 200);

  staves[0].addTrebleGlyph();

  var notes = [
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
  ].map(function(spec){
    return new Vex.Flow.StaveNote({
      keys: spec.keys, 
      duration: spec.duration, 
      auto_stem: true
    });
  });

  var voiceRanges = [
    [0, 2],
    [2, 5],
    [5, 7],
    [7, 10]
  ];

  var voices = voiceRanges.map(function(range){
    return new Vex.Flow.Voice({
      num_beats: 3,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    }).addTickables(notes.slice(range[0], range[1]));
  });

  staves.forEach(function(stave, index){
    formatter.format([voices[index]], index, stave);
    stave.setContext(ctx).draw();
    voices[index].draw(ctx, stave);

    assertApproximatelyEqualTo(stave.width, formatter.getStretchyVoiceWidth(index) + formatter.getClefWidthInMeasure(index));
  });
};

Vex.Flow.Test.TssFormatter.fitStaves = function(options, contextBuilder){
  var ctx = contextBuilder(options.canvas_sel, 1100, 195);

  var formatter = new Vex.Flow.TssFormatter(tss);

  var availableWidth = 1000;

  var staves = formatter.getFittedStaves(4, availableWidth);

  staves.forEach(function(stave, index){
    stave.setContext(ctx).draw();
  });

  var totalWidth = staves.reduce(function(sum, stave){
    return sum + stave.width;
  }, 0);

  assertApproximatelyEqualTo(totalWidth, availableWidth);
};