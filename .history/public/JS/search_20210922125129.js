const searchFormHandler = async function (event) {
    event.preventDefault();

    const searchEl = document.querySelector('#search-input')

    const response = await fetch('/api/markets/search', {
        method: 'GET',

    });





    document
  .querySelector('#search-btn')
  .addEventListener('submit', searchFormHandler);