// KaTeX is loaded before this file (see zensical.toml).
// Zensical calls document$ subscribers when pages are navigated to.
function renderSiteMath() {
  if (typeof renderMathInElement !== "function") return;

  const body = document.querySelector("article") || document.body;
  renderMathInElement(body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(renderSiteMath);
} else {
  document.addEventListener("DOMContentLoaded", renderSiteMath);
}
