let activeScroll = null;

export const smoothScrollTo = (target) => {
  // use screen width to detect if it is mobile device or not
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  if (activeScroll) {
    cancelAnimationFrame(activeScroll);
  }

  // Mobile devices use slower scroll
  const duration = 1000;
  const navbarOffset = 80;

  const targetEl = document.querySelector(target);
  if (!targetEl && target !== "#top") return;

  const targetY =
    target === "#top"
      ? 0
      : targetEl.getBoundingClientRect().top + window.scrollY - navbarOffset;

  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const originalScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo({
      top: startY + distance * progress,
      behavior: "auto",
    });

    if (progress < 1) {
      activeScroll = requestAnimationFrame(animateScroll);
    } else {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      activeScroll = null;
    }
  };

  activeScroll = requestAnimationFrame(animateScroll);
};
