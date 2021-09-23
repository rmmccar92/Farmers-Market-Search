const searchFormHandler = async function (event) {
  event.preventDefault();

  const searchEl = document.querySelector("#search-input").value.trim();
  if (searchEl) {
    const response = await fetch("/search", {
      method: "POST",
      body: JSON.stringify({
        zipcode: searchEl,
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

if (searchFormHandler) {
  console.log(searchFormHandler);
}


document
  .querySelector(".search-btn")
  .addEventListener("click", searchFormHandler);
