const newMarketHandler = async (event) => {
  event.preventDefault();

  const nameEl = document
    .querySelector('input[name="market-name"]')
    .value.trim();
  const addressEl = document
    .querySelector('input[name="market-address"]')
    .value.trim();
  const hoursEl = document
    .querySelector('input[name="market-hours"]')
    .value.trim();
  const zipcodeEl = document
    .querySelector('input[name="market-zip"]')
    .value.trim();
  const descriptionEl = document
    .querySelector('input[name="market-description"]')
    .value.trim();
  if (nameEl && hoursEl && addressEl && zipcodeEl && descriptionEl) {
    const response = await fetch("/api/markets", {
      method: "POST",
      body: JSON.stringify({
        market_name: nameEl,
        hours: hoursEl,
        address: addressEl,
        zipcode: zipcodeEl,
        description: descriptionEl,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.log("Something went wrong");
    }
  } else {
    gsap.fromTo(
      "#new-market-form",
      0.12,
      { x: -20 },
      {
        x: 20,
        repeat: 5,
        yoyo: true,
        ease: Sine.easeInOut,
        onComplete: function () {
          gsap.to("#new-market-form", 0.5, { x: 0, ease: Elastic.easeOut });
        },
      }
    );
  }
};

document
  .querySelector("#new-market-form")
  .addEventListener("submit", newMarketHandler);
