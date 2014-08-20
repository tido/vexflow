Vex.Flow.FontLoader = {
  setFont: function(font){
    Vex.Flow.Font = font;
  },
  loadGlyphData: function(glyph_name){
    // If the Font has an alternate naming format than SMuFL, then it should have a 
    // map object that maps SMuFL names to the alternate name
    if (Vex.Flow.Font.Map){
      glyph_name = Vex.Flow.Font.Map[glyph_name];
    }

    return Vex.Flow.Font.glyphs[glyph_name];
  },
  getFontSize: function(glyph_name){
    return Vex.Flow.Font.Metrics[glyph_name].size || 40;
  }
};