// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
// Version 4.1
type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const pSBC = (p: number, c0: string, c1?: string | boolean, l?: boolean): string | null => {
  let r: number,
    g: number,
    b: number,
    P: boolean | number,
    f: Color | null,
    t: Color | null,
    h: boolean,
    m = Math.round;
  const a = typeof c1 === 'string';
  if (
    typeof p !== 'number' ||
    p < -1 ||
    p > 1 ||
    typeof c0 !== 'string' ||
    (c0[0] !== 'r' && c0[0] !== '#') ||
    (c1 && !a)
  )
    return null;

  h = c0.length > 9;
  h = a ? (c1!.length > 9 ? true : c1 === 'c' ? !h : false) : h;
  f = pSBCr(c0);
  P = p < 0;
  t =
    c1 && c1 !== 'c'
      ? pSBCr(c1)
      : P
        ? { r: 0, g: 0, b: 0, a: -1 }
        : { r: 255, g: 255, b: 255, a: -1 };
  p = P ? p * -1 : p;
  P = 1 - p;
  if (!f || !t) return null;
  if (l) {
    r = m(P * f.r + p * t.r);
    g = m(P * f.g + p * t.g);
    b = m(P * f.b + p * t.b);
  } else {
    r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5);
    g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5);
    b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
  }
  const aAlpha = f.a >= 0 || t.a >= 0;
  const alpha = aAlpha ? (f.a < 0 ? t.a : t.a < 0 ? f.a : f.a * P + t.a * p) : 0;
  if (h) {
    return `rgb${aAlpha ? 'a(' : '('}${r},${g},${b}${aAlpha ? `,${m(alpha * 1000) / 1000}` : ''})`;
  } else {
    return `#${(4294967296 + r * 16777216 + g * 65536 + b * 256 + (aAlpha ? m(alpha * 255) : 0))
      .toString(16)
      .slice(1, aAlpha ? undefined : -2)}`;
  }
};

const pSBCr = (d: string): Color | null => {
  const i = parseInt;
  let n = d.length;
  const x: Partial<Color> = {};
  if (n > 9) {
    const [r, g, b, a] = d.split(',');
    n = d.length;
    if (n < 3 || n > 4) return null;
    x.r = i(r[3] === 'a' ? r.slice(5) : r.slice(4));
    x.g = i(g);
    x.b = i(b);
    x.a = a ? parseFloat(a) : -1;
  } else {
    if (n === 8 || n === 6 || n < 4) return null;
    if (n < 6) d = `#${d[1]}${d[1]}${d[2]}${d[2]}${d[3]}${d[3]}${n > 4 ? d[4] + d[4] : ''}`;
    const dInt = i(d.slice(1), 16);
    if (n === 9 || n === 5) {
      x.r = (dInt >> 24) & 255;
      x.g = (dInt >> 16) & 255;
      x.b = (dInt >> 8) & 255;
      x.a = Math.round((dInt & 255) / 0.255) / 1000;
    } else {
      x.r = dInt >> 16;
      x.g = (dInt >> 8) & 255;
      x.b = dInt & 255;
      x.a = -1;
    }
  }
  return x as Color;
};

export default pSBC;
