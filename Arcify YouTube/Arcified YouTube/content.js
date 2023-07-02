function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

function applyTint(hue) {
  let style = document.getElementById("tinted-yt-style");
  if (!style) {
    const styleElement = document.createElement("style");
    styleElement.id = "tinted-yt-style";
    document.head.appendChild(styleElement);
    style = styleElement;
  }
  style.textContent = `
    :root {
      --tinted-yt-spec-base-background: hsl(${hue}, 100%, 10%) !important;
      --tinted-yt-spec-raised-background: hsl(${hue}, 100%, 15%) !important;
      --tinted-yt-spec-menu-background: hsl(${hue}, 100%, 14%) !important;
    }
  `;
}

function observePaletteBackground() {
  const arcPaletteBackground = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--arc-palette-background");
  const color = arcPaletteBackground.trim();
  const hex = color.slice(0, 7);
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  const hue = rgbToHsl(r, g, b)[0] * 360;
  applyTint(hue);

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style" &&
        mutation.target === document.documentElement
      ) {
        const arcPaletteBackground = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--arc-palette-background");
        const color = arcPaletteBackground.trim();
        const hex = color.slice(0, 7);
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        const hue = rgbToHsl(r, g, b)[0] * 360;
        applyTint(hue);
        break;
      }
    }
  });

  observer.observe(document.documentElement, { attributes: true });
}

setInterval(() => {
  observePaletteBackground();
});
2000;
