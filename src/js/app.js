import 'normalize.css/normalize.css';
import '../sass/main.scss';

// import { wiki } from './wiki'; // fix issue with async function
import { ui } from './ui';

function showSearchState() {
  ui.changeState('search');
}

function removeSearchState() {
  const results = document.querySelector('.results').children.length;
  console.log(results);

  if (!results) {
    ui.changeState('clear');
  }
}

function getResults(e) {
  const inputText = e.target.value;

  if (inputText !== '') {
    wiki.getArticles(inputText)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  } else {
    ui.clearResults();
  }

  e.preventDefault();
}

// Hide results section on load
document.addEventListener('DOMContentLoaded', removeSearchState);

// Show results section on input focus
document.querySelector('.search__input').addEventListener('focus', showSearchState);

// Hide on blur IF there are no search results
document.querySelector('.search__input').addEventListener('blur', removeSearchState);

// Search input listener
document.querySelector('.search__input').addEventListener('keyup', getResults);
