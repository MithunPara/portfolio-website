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

    const targetEl = document.querySelector(target);
    if (!targetEl && target !== "#top") return;

    const targetY =
        target === "#top"
            ? 0
            : targetEl.getBoundingClientRect().top +
              window.scrollY -
              80; 

    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Linear scroll
        window.scrollTo(0, startY + distance * progress);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
};