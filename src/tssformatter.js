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

  function TssFormatter(tss, isAuto){
    this.init(tss, isAuto);
  }

  var Formatter = Vex.Flow.Formatter;
  Vex.Inherit(TssFormatter, Formatter, {
    init: function (tss, isAuto) {
      TssFormatter.superclass.init.call(this);

      this.tss = tss;
      this.isAuto = isAuto;
    },

    getStaves: function(totalMeasures, staveWidth){
      var widths = this.getWidths(totalMeasures, staveWidth);
      return this.createStaves(widths);
    },

    getFittedStaveWidths: function(totalMeasures, totalWidth){
      var desiredWidths = this.getDesiredStaveWidths(totalMeasures);
      var minWidths = this.getMinStaveWidths(totalMeasures);

      function sum(a, b){ return a + b; }

      var totalMinWidth = minWidths.reduce(sum);
      var totalDesiredWidth = desiredWidths.reduce(sum);

      var k = this.getK(totalWidth, totalMinWidth, totalDesiredWidth);

      return desiredWidths.map(function(desiredWidth, index){
        var minWidth = minWidths[index];
        return minWidth + k * (desiredWidth - minWidth);
      });
    },

    getFittedStaves: function(totalMeasures, totalWidth){
      var widths = this.getFittedStaveWidths(totalMeasures, totalWidth);
      return this.createStaves(widths);
    },

    createStaves: function(widths){
      var xPositions = this.getXPositions(widths);

      return widths.map(function(width, index){
        return new Vex.Flow.Stave(xPositions[index], 0, width);
      });
    },

    getDesiredStaveWidths: function(totalMeasures){
      var widths = [];
      for (var measureIndex = 0; measureIndex < totalMeasures; measureIndex++){
        widths.push(this.getDesiredVoiceWidth(measureIndex));
      }

      return widths;
    },

    getMinStaveWidths: function(totalMeasures){
      var widths = [];
      for (var measureIndex = 0; measureIndex < totalMeasures; measureIndex++){
        widths.push(this.getMinVoiceWidth(measureIndex));
      }

      return widths;
    },

    getWidths: function(totalMeasures, staveWidth){
      var widths = [];
      for (var measureIndex = 0; measureIndex < totalMeasures; measureIndex++){
        if (!staveWidth){
          widths.push(this.getDesiredVoiceWidth(measureIndex));
        } else {
          widths.push(staveWidth);
        }
      }

      // if stave width is being calculated, add clef width
      if (!staveWidth){
        widths = this.applyClefWidthToWidths(widths);
      }

      return widths;
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

    applyClefWidthToWidths: function(widths){
      return widths.map(function(width, index){
        return  index === 0 ? width + this.getClefWidth() : width;
      }, this);
    },

    getClefWidth: function(){
      var clef = new Vex.Flow.Glyph("gClef");
      return clef.getWidth();
    },

    getXPositions: function(widths){
      var x = 0;
      return widths.map(function(width){
        var xPosition = x;
        x += width;
        return xPosition;
      });
    },

    getStretchyVoiceWidth: function(measureIndex){
      var currentMeasureTss = this.findMeasureTss(measureIndex);
      var extents = currentMeasureTss.extents;

      return  extents.reduce(function(sum, extent){
        return sum + convertStaffLinesToPixels(extent.stretchy);
      }, 0);
    },

    getDesiredVoiceWidth: function(measureIndex){
      var currentMeasureTss = this.findMeasureTss(measureIndex);
      var extents = currentMeasureTss.extents;

      return extents.reduce(function(sum, extent){
        return sum + convertStaffLinesToPixels(extent.desired);
      }, 0);
    },

    getMinVoiceWidth: function(measureIndex){
      var currentMeasureTss = this.findMeasureTss(measureIndex);
      var extents = currentMeasureTss.extents;

      return  extents.reduce(function(sum, extent){
        return sum + convertStaffLinesToPixels(extent.min);
      }, 0);
    },

    getClefWidthInMeasure: function(measureIndex){
      if (measureIndex === 0) {
        return this.getClefWidth();
      }

      return 0;
    },

    setStretchyWidths: function(measureIndex, stretchyStaveWidth){
      var currentMeasureTss = this.findMeasureTss(measureIndex);
      var desiredWidth = this.getDesiredVoiceWidth(measureIndex);
      var minWidth = this.getMinVoiceWidth(measureIndex);
      var availableWidth = stretchyStaveWidth - this.getClefWidthInMeasure(measureIndex);

      var k = this.getK(availableWidth, minWidth, desiredWidth);

      var extents = currentMeasureTss.extents;

      extents.forEach(function(extent){
        extent.stretchy = extent.min + k * (extent.desired - extent.min);
      });
    },

    getK: function(stretchyWidth, minWidth, desiredWidth){
      return (stretchyWidth - minWidth) / (desiredWidth - minWidth);
    },

    preFormat: function(voices, measureIndex, stave){
      // Initialize context maps.
      var contexts = this.tContexts;
      var contextList = contexts.list;
      var contextMap = contexts.map;

      var i, tick, context;

      this.setStretchyWidths(measureIndex, stave.width);

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

        x += convertStaffLinesToPixels(currentMeasureTss.extents[i].stretchy);
      }
    },

    format: function(voices, measureIndex, stave) {

      this.createTickContexts(voices);
      this.preFormat(voices, measureIndex, stave);

      return this;
    }
  });

  function convertStaffLinesToPixels(staffLines){
    return staffLines/250*12;
  }

  return TssFormatter;
}());
