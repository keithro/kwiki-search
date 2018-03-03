import 'normalize.css/normalize.css';
import '../sass/main.scss';

import { wiki } from './wiki';
import { ui } from './ui';

function showSearchState() {
  ui.changeState('search');
}

function removeSearchState() {
  const results = document.querySelector('.results').children.length;

  if (!results) {
    ui.changeState('initial');
  }
}

function getResults(e) {
  const inputText = e.target.value;

  if (inputText !== '') {
    wiki.getArticles(inputText)
      .then((data) => {
        if (data[1].length) {
          const organizedData = data[1].map((title, i) => {
            return {
              title,
              text: data[2][i],
              url: data[3][i]
            };
          });
          ui.hideFooter();
          ui.showResults(organizedData);
        } else {
          ui.showAlert('No results found');
        }
      })
      .catch(err => console.log(err));
  } else {
    ui.clearResults();
    ui.showFooter();
  }

  e.preventDefault();
}

function clearResults() {
  ui.clearInput();
  ui.clearResults();
  ui.showFooter();
  removeSearchState();
}

// Hide results section on load
document.addEventListener('DOMContentLoaded', removeSearchState);

// Show results section on input focus
document.querySelector('.search__input').addEventListener('focus', showSearchState);

// Hide on blur IF there are no search results
document.querySelector('.search__input').addEventListener('blur', removeSearchState);

// Search input listener
document.querySelector('.search__input').addEventListener('keyup', getResults);

// Clear results listener
document.querySelector('.search__clear-btn').addEventListener('click', clearResults);
