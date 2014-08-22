/**
 * VexFlow - TickContext Tests
 * Copyright Mohit Muthanna 2010 <mohit@muthanna.com>
 */

Vex.Flow.Test.TssFormatter = {};

Vex.Flow.Test.TssFormatter.Start = function() {
  module("Tss Formatter");
  Vex.Flow.Test.runTest("TssFormatter Basic Tests", Vex.Flow.Test.TssFormatter.basic);
};

Vex.Flow.Test.TssFormatter.basic = function(options, contextBuilder){
  expect(0);

  var ctx = contextBuilder(options.canvas_sel, 1100, 195);

  var staves = [
    new Vex.Flow.Stave(10, 10, 250).addTrebleGlyph(),
    new Vex.Flow.Stave(260, 10, 250),
    new Vex.Flow.Stave(510, 10, 250),
    new Vex.Flow.Stave(760, 10, 250).setEndBarType(Vex.Flow.Barline.type.END)
  ];


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
    return new Vex.Flow.StaveNote({keys: spec.keys, duration: spec.duration});
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

  var formatter = new Vex.Flow.TssFormatter(tss);

  staves.forEach(function(stave, index){
    if (index > 0) return;

    formatter.format([voices[index]], 0);
    stave.setContext(ctx).draw();
    voices[index].draw(ctx, stave);
  });
};