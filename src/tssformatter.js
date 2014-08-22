// [VexFlow](http://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
//
// ## Description
//
// This file implements the formatting and layout algorithms that are used
// to position notes in a voice. The algorithm can align multiple voices both
// within a stave, and across multiple staves.
//
// To do this, the formatter breaks up voices into a grid of rational-valued
// `ticks`, to which each note is assigned. Then, minimum widths are assigned
// to each tick based on the widths of the notes and modifiers in that tick. This
// establishes the smallest amount of space required for each tick.
//
// Finally, the formatter distributes the left over space proportionally to
// all the ticks, setting the `x` values of the notes in each tick.
//
// See `tests/formatter_tests.js` for usage examples. The helper functions included
// here (`FormatAndDraw`, `FormatAndDrawTab`) also serve as useful usage examples.

Vex.Flow.TssFormatter = (function(){

  function TssFormatter(tss){
    this.init(tss);
  }

  var Formatter = Vex.Flow.Formatter;
  Vex.Inherit(TssFormatter, Formatter, {
    init: function (tss) {
      TssFormatter.superclass.init.call(this);

      this.tss = tss;
    },

    findMeasureTss: function(measureIndex){
      var currentMeasureTss;
      Object.keys(this.tss).forEach(function(measureId){
        if (this.tss[measureId].index === measureIndex){
          currentMeasureTss = tss[measureId];
        }
      },this);

      return currentMeasureTss;
    },

    preFormat: function(voices, measureIndex){
      // Initialize context maps.
      var contexts = this.tContexts;
      var contextList = contexts.list;
      var contextMap = contexts.map;

      var i, tick, context;

      // Pass 1: Give each note maximum width requested by context.
      for (i = 0; i < contextList.length; ++i) {
        tick = contextList[i];
        context = contextMap[tick];

        context.preFormat();
      }

      var currentMeasureTss = this.findMeasureTss(measureIndex),
          x = 0;

      for (i = 0; i < contextList.length; ++i) {
        tick = contextList[i];
        context = contextMap[tick];

        context.setX(x);

        x += currentMeasureTss.extents[i].desired/250*12;
      }


      debugger;
    },

    format: function(voices, measureIndex) {

      this.createTickContexts(voices);
      this.preFormat(voices, measureIndex);

      return this;
    }
  });

  return TssFormatter;
}());
