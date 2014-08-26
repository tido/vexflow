Vex.Flow.TssFormatter = (function(){

  function TssFormatter(tss){
    this.tss = tss;
    this.init();
  }

  TssFormatter.mode = {
    AUTO_MINIMUM: 0,
    AUTO_DESIRED: 1,
    STRETCHY: 2
  };

  var Formatter = Vex.Flow.Formatter;
  Vex.Inherit(TssFormatter, Formatter, {
    init: function () {
      TssFormatter.superclass.init.call(this);
    },

    getStaves: function(mode, staveModifiers){
      this.mode = mode;
      this.staveModifiers = staveModifiers;

      var widths,
          numStaves = staveModifiers.length,
          clefs = staveModifiers.map(function(modifier){return modifier.clef;});

      switch (this.mode) {
        case TssFormatter.mode.AUTO_MINIMUM:
          widths = this.getMinimumStaveWidths(numStaves, clefs);
          break;
        case TssFormatter.mode.AUTO_DESIRED:
          widths = this.getDesiredStaveWidths(numStaves, clefs);
          break;
        case TssFormatter.mode.STRETCHY:
          var availableWidth = arguments[2];
          widths = this.getStretchedStaveWidths(numStaves, availableWidth, clefs);
          break;
        default:
          throw new Error("Invalid mode:" + mode );
      }

      return this.createStaves(widths);
    },

    getStretchedStaves: function(numStaves, availableWidth){
      var widths = this.getStretchedStaveWidths(numStaves, availableWidth);
      return this.createStaves(widths);
    },

    createStaves: function(widths){
      var xPositions = this.getStaveXPositions(widths);

      return widths.map(function(width, index){
        return new Vex.Flow.Stave(xPositions[index], 0, width);
      });
    },

    getStretchedStaveWidths: function(numStaves, availableWidth, clefs){
      var desiredWidths = this.getDesiredStaveWidths(numStaves, clefs);
      var minimumWidths = this.getMinimumStaveWidths(numStaves, clefs);

      function sum(a, b){ return a + b; }

      var minimumWidth = minimumWidths.reduce(sum);
      var desiredWidth = desiredWidths.reduce(sum);

      var k = this.getK(availableWidth, minimumWidth, desiredWidth);

      return desiredWidths.map(function(desiredWidth, index){
        var minimumWidth = minimumWidths[index];
        return minimumWidth + k * (desiredWidth - minimumWidth);
      });
    },

    getDesiredStaveWidths: function(numStaves, clefs){
      var widths = [];
      for (var measureIndex = 0; measureIndex < numStaves; measureIndex++){
        widths.push(this.getDesiredVoiceWidth(measureIndex));
      }

      return this.getWidthsWithClefs(widths, clefs);
    },

    getMinimumStaveWidths: function(numStaves, clefs){
      var widths = [];
      for (var measureIndex = 0; measureIndex < numStaves; measureIndex++){
        widths.push(this.getMinVoiceWidth(measureIndex));
      }

      return this.getWidthsWithClefs(widths, clefs);
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

    getWidthsWithClefs: function(widths, clefs){
      return widths.map(function(width, index){
        return  clefs[index] ? width + this.getClefWidth() : width;
      }, this);
    },

    getClefWidth: function(){
      var clef = new Vex.Flow.Glyph("gClef");
      return clef.getWidth();
    },

    getStaveXPositions: function(widths){
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
      if (this.staveModifiers[measureIndex].clef) {
        return this.getClefWidth();
      }

      return 0;
    },

    setStretchyWidths: function(measureIndex, stretchyStaveWidth){
      var currentMeasureTss = this.findMeasureTss(measureIndex);
      var desiredWidth = this.getDesiredVoiceWidth(measureIndex);
      var minimumWidth = this.getMinVoiceWidth(measureIndex);
      var availableWidth = stretchyStaveWidth - this.getClefWidthInMeasure(measureIndex);

      var k = this.getK(availableWidth, minimumWidth, desiredWidth);

      var extents = currentMeasureTss.extents;

      extents.forEach(function(extent){
        extent.stretchy = extent.min + k * (extent.desired - extent.min);
      });
    },

    getK: function(stretchyWidth, minimumWidth, desiredWidth){
      return (stretchyWidth - minimumWidth) / (desiredWidth - minimumWidth);
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

        var spacing;
        switch(this.mode){
          case TssFormatter.mode.AUTO_MINIMUM:
            spacing = currentMeasureTss.extents[i].min;
            break;
          case TssFormatter.mode.AUTO_DESIRED:
            spacing = currentMeasureTss.extents[i].desired;
            break;
          case TssFormatter.mode.STRETCHY:
            spacing = currentMeasureTss.extents[i].stretchy;
            break;
        }

        x += convertStaffLinesToPixels(spacing);
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
