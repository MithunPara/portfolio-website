// src/lib/smoothScroll.js
export const smoothScrollTo = (e, target) => {
  e.preventDefault();

  if (target === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.querySelector(target)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};