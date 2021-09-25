const deleteButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/markets/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete market");
    }
  }
};

$(".market-list").on("click", ".delete", deleteButtonHandler);
