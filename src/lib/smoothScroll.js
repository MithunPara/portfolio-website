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
    const duration = 1000;

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

    const easeInOutSine = (t) =>
        -(Math.cos(Math.PI * t) - 1) / 2;

    const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutSine(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
};