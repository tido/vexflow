/**
 * VexFlow - TickContext Tests
 * Copyright Mohit Muthanna 2010 <mohit@muthanna.com>
 */

Vex.Flow.Test.TssFormatter = {};

Vex.Flow.Test.TssFormatter.Start = function() {
  module("Tss Formatter");
  Vex.Flow.Test.runTest("TssFormatter Basic Tests", Vex.Flow.Test.TssFormatter.basicNoteSpacing);
};

Vex.Flow.Test.TssFormatter.basicNoteSpacing = function(options, contextBuilder){
  expect(0);

  var ctx = contextBuilder(options.canvas_sel, 1100, 195);

  var formatter = new Vex.Flow.TssFormatter(tss);

  var widths = [];
  for (var measureIndex = 0; measureIndex < 4; measureIndex++){
    widths.push(formatter.getVoiceWidth(measureIndex));
  }
  
  widths = formatter.applyClefWidthToWidths(widths);

  var xPositions = formatter.getXPositions(widths);

  var staves = widths.map(function(width, index){
    return new Vex.Flow.Stave(xPositions[index], 0, width);
  });

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
    formatter.format([voices[index]], index);
    stave.setContext(ctx).draw();
    voices[index].draw(ctx, stave);
  });
};