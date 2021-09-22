const searchFormHandler = async function (event) {
  event.preventDefault();

  const searchEl = document.querySelector("#search-input");

  const response = await fetch("/api/markets/search", {
    method: "GET",
    body: JSON.stringify({
      zipcode: searchEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert("Failed to login");
  }
};

document
  .querySelector("#search-btn")
  .addEventListener("submit", searchFormHandler);
