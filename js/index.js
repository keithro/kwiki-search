const form = document.querySelector('.form');
const input = document.querySelector('.search__input');
const results = document.querySelector('.results');

// Change loader to all CSS
// document.getElementById('loader').style.display = 'none';

function fetchData(e) {
  if (input.value !== '') {
    // rearrange elements (when request sent) maybe add spinner/loader

    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${input.value}&limit=20&format=json&origin=*`;

    fetch(wikiUrl).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }).then((data) => {
      displayResults(data);
    });
  }

  e.preventDefault();
}

function displayResults(data) {
  let html = '';

  data[1].forEach((element, i) => {
    html += `
      <li class="results__item">
        <a class="results__link" href=${data[3][i]}>
          <h2 class="results__title">${element}</h2>
          <p class="results__text">${data[2][i]}</p>
        </a>
      </li>
    `;
  });

  /* // Previous method
  const html = data[1].map((element, i) => {
    return (`
      <li class="results__item">
        <a class="results__link" href=${data[3][i]}>
          <h2 class="results__title">${element}</h2>
          <p class="results__text">${data[2][i]}</p>
        </a>
      </li>
    `);
  }).join(''); */

  // append lis
  results.innerHTML = html;
  // slide in links section
}

// add "clear" option to remove links, clear input and reposition display/inputs
// input.value = '';

form.addEventListener('submit', fetchData);

