gsap.to(".market-list", { duration: 1, opacity: 1, ease: "power-4" });

$(".card-back").hover(
  () => {
    gsap.to(".add-text", {
      duration: 0.25,
      text: "Add Market",
      x: 45,
      ease: "none",
    });
    gsap.to(".card-back", {
      duration: 0.75,
      width: "15em",
      ease: "power-2",
    });
    gsap.to(".icon", {
      duration: 0.3,
      xPercent: -140,
      ease: "power-2",
    });
  },
  () => {
    gsap.to(".card-back", {
      duration: 1.1,
      width: "unset",
      ease: "power-2",
    });

    gsap.to(".icon", {
      duration: 0.25,
      xPercent: "unset",
      ease: "power-2",
    });

    gsap.set(".add-text", {
      duration: 0.15,
      text: "",
      ease: "none",
    });
  }
);
