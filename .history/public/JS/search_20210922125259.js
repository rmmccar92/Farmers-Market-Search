const searchFormHandler = async function (event) {
    event.preventDefault();

    const searchEl = document.querySelector('#search-input')

    const response = await fetch('/api/markets/search', {
        method: 'GET',
        body: JSON.stringify({
            zipcode: searchEl.value
          }),
    });





    document
  .querySelector('#search-btn')
  .addEventListener('submit', searchFormHandler);