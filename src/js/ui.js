class UI {
  constructor() {
    this.header = document.querySelector('.header');
    this.logo = document.querySelector('.logo');
    this.clearBtn = document.querySelector('.search__clear-btn');
    this.randomBtn = document.querySelector('.search__random-btn');
    this.results = document.querySelector('.results');
    this.input = document.querySelector('.search__input');
  }

  changeState(state) {
    if (state === 'search') {
      // Search Steate
      this.header.classList.remove('header--full-page');
      this.clearBtn.style.display = 'block';
      this.randomBtn.textContent = 'Random';
      this.results.style.display = 'flex';
    } else {
      // Initial State
      this.header.classList.add('header--full-page');
      this.clearBtn.style.display = 'none';
      this.randomBtn.textContent = 'Random Article';
      this.results.style.display = 'none';
    }
  }

  showResults(articles) {
    this.results.innerHTML = articles.reduce((output, article) => {
      return output += `
        <a class="results__item" href="${article.url}">
          <h2 class="results__title">${article.title}</h2>
          <p class="results__text">${article.text}</p>
        </a>
      `;
    }, '');
  }

  clearResults() {
    this.results.innerHTML = '';
  }

  clearInput() {
    this.input.value = '';
  }

  // showAlert() {

  // }

  // clearAlert() {

  // }
}

export const ui = new UI();
