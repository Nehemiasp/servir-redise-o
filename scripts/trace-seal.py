"""Vectoriza (traza) el sello a partir del PNG original. Es una aproximación
hasta que el partido entregue el logo en vector."""
import potrace, numpy as np
from PIL import Image

im = Image.open('brand/servir-sello-original.png').convert('RGB')
cx, cy, r = 249.5, 191.0, 157.5
S = 4
crop = im.crop((int(cx - r) - 1, int(cy - r) - 1, int(cx + r) + 2, int(cy + r) + 2))
big = crop.resize((crop.width * S, crop.height * S), Image.LANCZOS)
a = np.asarray(big).astype(int)
H, W, _ = a.shape
yy, xx = np.mgrid[0:H, 0:W]
dist = np.hypot(xx - W / 2, yy - H / 2) / S
dark = (a.sum(axis=2) < 200) & (dist < r - 14)
light = (a.sum(axis=2) > 690) & (dist < r - 14)


def trace(mask):
    pl = potrace.Bitmap(~mask).trace(turdsize=20, alphamax=1.0, opttolerance=0.4)
    parts = []
    for curve in pl:
        s = curve.start_point
        d = [f"M{s.x / S:.1f},{s.y / S:.1f}"]
        for seg in curve.segments:
            if seg.is_corner:
                d.append(f"L{seg.c.x / S:.1f},{seg.c.y / S:.1f}L{seg.end_point.x / S:.1f},{seg.end_point.y / S:.1f}")
            else:
                d.append(f"C{seg.c1.x / S:.1f},{seg.c1.y / S:.1f} {seg.c2.x / S:.1f},{seg.c2.y / S:.1f} {seg.end_point.x / S:.1f},{seg.end_point.y / S:.1f}")
        d.append('Z')
        parts.append(''.join(d))
    return ''.join(parts)


parts = [trace(dark)]
white_path = trace(light)
w, h = W / S, H / S
# Radios medidos sobre el original: anillo blanco hasta r-3, cian hasta r-9.
svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.1f} {h:.1f}" role="img" aria-label="SERVIR">'
       f'<circle cx="{w/2:.1f}" cy="{h/2:.1f}" r="{r:.1f}" fill="#fff"/>'
       f'<circle cx="{w/2:.1f}" cy="{h/2:.1f}" r="{r-8:.1f}" fill="#00CCFF"/>'
       f'<path fill="#fff" fill-rule="evenodd" d="{white_path}"/>'
       f'<path fill="#051223" fill-rule="evenodd" d="{"".join(parts)}"/></svg>')
open('public/brand/sello.svg', 'w').write(svg)
print(len(svg), 'bytes')
