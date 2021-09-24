gsap.to(".market-list", { duration: 1, opacity: 1, ease: "power-4" });

$(".card-back").on("mouseenter", mouseEnter, function () {
  gsap.to(".card-back", {
    duration: 0.75,
    width: "15em",
    ease: "power-2",
  });

  gsap.to(".icon", {
    duration: 0.2,
    xPercent: -150,
    ease: "power-2",
  });
  gsap.to(".add-text", {
    delay: 0.25,
    opacity: 1,
    xPercent: 15,
    ease: "power-2",
  });
});

$(".card-back").on("mouseleave", mouseLeave, function () {
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
    opacity: 0,
    xPercent: "unset",
  });

  $(".add-text").Attr("display", "none");
});

function mouseEnter() {
  animation.play();
}

function mouseLeave() {
  animation.reverse();
}
