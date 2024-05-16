const parallaxElements = document.querySelectorAll("[ga-parallax='image']");

  parallaxElements.forEach(element => {
    let gaParallax = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        markers: false,
        scrub: true,
      },
    });

    gaParallax.to(element, {
      duration: 1,
      yPercent: -20,
      ease: "none",
    });
  });