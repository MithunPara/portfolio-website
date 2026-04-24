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

    // Mobile devices use slower scroll
    const duration = 900;

    const targetY =
    target === "#top"
        ? 0
        : document.querySelector(target)?.getBoundingClientRect().top +
          window.scrollY -
          80;

    if (targetY === undefined) return;

    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
};