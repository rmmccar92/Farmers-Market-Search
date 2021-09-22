const searchFormHandler = async function (event) {
  event.preventDefault();

  const searchEl = document.querySelector("#search-input");

  const response = await fetch("/markets/search", {
    method: "POST",
    body: JSON.stringify({
      zipcode: searchEl.value.trim(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/results");
  } else {
    console.log("bad");
  }
};

document
  .querySelector(".search-btn")
  .addEventListener("click", searchFormHandler);
