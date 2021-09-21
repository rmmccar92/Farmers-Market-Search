// import AddressAutocomplete from "google-address-autocomplete";

// new AddressAutocomplete('input[name="market-address', (results) => {
//   const addressObject = results;
//   console.log(addressObject);
// });

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
  if (nameEl && hoursEl && addressEl && zipcodeEl) {
    const response = await fetch("/api/markets", {
      method: "POST",
      body: JSON.stringify({
        market_name: nameEl,
        hours: hoursEl,
        address: addressEl,
        zipcode: zipcodeEl,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      console.log("Something went wrong");
    }
  }
};

document
  .querySelector("#new-market-form")
  .addEventListener("submit", newMarketHandler);
