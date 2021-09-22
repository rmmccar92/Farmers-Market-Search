const searchFormHandler = async function (event) {
  event.preventDefault();

  const searchEl = document.querySelector("#search-input");
  if (searchEl) {
    const response = await fetch("api/markets/search", {
      method: "POST",
      body: JSON.stringify({
        zipcode: searchEl.value.trim(),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("good");
      document.location.replace("/results");
    } else {
      console.log("bad");
    }
  }
};

document
  .querySelector(".search-btn")
  .addEventListener("click", searchFormHandler);