var w3cColors = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  grey: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

function hue2rgb(p, q, t) {
  if (t<0) t += 1;
  if (t>1) t -= 1;
  if (t<1/6) return p + (q - p)*6*t;
  if (t<1/2) return q;
  if (t<2/3) return p + (q - p)*(2/3 - t)*6;
  return p;
}

function clamp(v, max) {
  if (v === undefined) {
    return;
  }
  return Math.min(max, Math.max(0, v || 0));
}

/**
 * @param str, object can be in any of these: 'red', '#0099ff', 'rgb(64, 128, 255)', 'rgba(64, 128, 255, 0.5)', { r:0.2, g:0.3, b:0.9, a:1 }
 */
var Color = function(r, g, b, a) {
  this.r = clamp(r, 1);
  this.g = clamp(g, 1);
  this.b = clamp(b, 1);
  this.a = clamp(a, 1) || 1;
};

/**
 * @param str, object can be in any of these: 'red', '#0099ff', 'rgb(64, 128, 255)', 'rgba(64, 128, 255, 0.5)'
 */
Color.parse = function(str) {
  if (typeof str === 'string') {
    str = str.toLowerCase();
    str = w3cColors[str] || str;

    var m;

    if ((m = str.match(/^#?(\w{2})(\w{2})(\w{2})$/))) {
      return new Color(parseInt(m[1], 16)/255, parseInt(m[2], 16)/255, parseInt(m[3], 16)/255);
    }

    if ((m = str.match(/^#?(\w)(\w)(\w)$/))) {
      return new Color(parseInt(m[1]+m[1], 16)/255, parseInt(m[2]+m[2], 16)/255, parseInt(m[3]+m[3], 16)/255);
    }

    if ((m = str.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))) {
      return new Color(
        parseFloat(m[1])/255,
        parseFloat(m[2])/255,
        parseFloat(m[3])/255,
        m[4] ? parseFloat(m[5]) : 1
      );
    }
  }

  return new Color();
};

Color.fromHSL = function(h, s, l, a) {
  // h = clamp(h, 360),
  // s = clamp(s, 1),
  // l = clamp(l, 1),

  // achromatic
  if (s === 0) {
    return new Color(l, l, l, a);
  }

  var
    q = l<0.5 ? l*(1 + s) : l + s - l*s,
    p = 2*l - q;

  h /= 360;

  return new Color(
    hue2rgb(p, q, h + 1/3),
    hue2rgb(p, q, h),
    hue2rgb(p, q, h - 1/3),
    a
  );
};

Color.prototype = {

  toHSL: function() {
    if (this.r === undefined || this.g === undefined || this.b === undefined) {
      return;
    }

    var
      max = Math.max(this.r, this.g, this.b),
      min = Math.min(this.r, this.g, this.b),
      h, s, l = (max + min)/2,
      d = max - min;

    if (!d) {
      h = s = 0; // achromatic
    } else {
      s = l>0.5 ? d/(2 - max - min) : d/(max + min);
      switch (max) {
        case this.r:
          h = (this.g - this.b)/d + (this.g<this.b ? 6 : 0);
          break;
        case this.g:
          h = (this.b - this.r)/d + 2;
          break;
        case this.b:
          h = (this.r - this.g)/d + 4;
          break;
      }
      h *= 60;
    }

    return { h: h, s: s, l: l, a: this.a };
  },

  toString: function() {
    if (this.r === undefined || this.g === undefined || this.b === undefined) {
      return;
    }

    if (this.a === 1) {
      return '#' + ((1<<24) + (Math.round(this.r*255)<<16) + (Math.round(this.g*255)<<8) + Math.round(this.b*255)).toString(16).slice(1, 7);
    }
    return 'rgba(' + [Math.round(this.r*255), Math.round(this.g*255), Math.round(this.b*255), this.a.toFixed(2)].join(',') + ')';
  },

  toArray: function() {
    if (this.r === undefined || this.g === undefined || this.b === undefined) {
      return;
    }
    return [this.r, this.g, this.b];
  },

  hue: function(h) {
    var hsl = this.toHSL();
    return Color.fromHSL(hsl.h+h, hsl.s, hsl.l);
  },

  saturation: function(s) {
    var hsl = this.toHSL();
    return Color.fromHSL(hsl.h, hsl.s*s, hsl.l);
  },

  lightness: function(l) {
    var hsl = this.toHSL();
    return Color.fromHSL(hsl.h, hsl.s, hsl.l*l);
  },

  red: function(r) {
    return new Color(this.r*r, this.g, this.b, this.a);
  },

  green: function(g) {
    return new Color(this.r, this.g*g, this.b, this.a);
  },

  blue: function(b) {
    return new Color(this.r, this.g, this.b*b, this.a);
  },

  alpha: function(a) {
    return new Color(this.r, this.g, this.b, this.a*a);
  },

  copy: function() {
    return new Color(this.r, this.g, this.b, this.a);
  }

};
