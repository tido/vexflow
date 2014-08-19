drawOTFGlyph = function (glyph, ctx, x, y, fontSize) {
    getOTFPath(glyph, x, y, fontSize).draw(ctx);
};

getOTFPath = function (glyph, x , y, fontSize) {
    var scale, p, commands, cmd;
    x = x !== undefined ? x : 0;
    y = y !== undefined ? y : 0;
    fontSize = fontSize !== undefined ? fontSize : 72;
    scale = 1 / glyph.font.unitsPerEm * fontSize;
    p = new path.Path();
    commands = glyph.path.commands;
    for (var i = 0; i < commands.length; i += 1) {
        cmd = commands[i];
        if (cmd.type === 'M') {
            p.moveTo(x + (cmd.x * scale), y + (cmd.y * scale));
        } else if (cmd.type === 'L') {
            p.lineTo(x + (cmd.x * scale), y + (cmd.y * scale));
        } else if (cmd.type === 'Q') {
            p.quadraticCurveTo(x + (cmd.x1 * scale), y + (cmd.y1 * scale),
                               x + (cmd.x * scale), y + (cmd.y * scale));
        } else if (cmd.type === 'C') {
            p.curveTo(x + (cmd.x1 * scale), y + (cmd.y1 * scale),
                      x + (cmd.x2 * scale), y + (cmd.y2 * scale),
                      x + (cmd.x * scale), y + (cmd.y * scale));
        } else if (cmd.type === 'Z') {
            p.closePath();
        }
    }
    return p;
};