gsap.to("#myCarousel", { duration: 1, opacity: 1, ease: "sine.in" });

gsap.to(".carousel-caption", { duration: 1, y: -125, ease: "back" });

document.addEventListener("scroll", function () {
  gsap.to(".info-card", {
    duration: 1.25,
    y: -700,
    opacity: 1,
    ease: "power-1",
  });
});

document.addEventListener("scroll", function () {
  gsap.to("footer", {
    duration: 2,
    opacity: 1,
    ease: "power-1",
  });
});
