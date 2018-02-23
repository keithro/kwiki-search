class UI {
  constructor() {
    this.header = document.querySelector('.header');
    this.results = document.querySelector('.results');
  }

  changeState(state) {
    if (state === 'search') {
      console.log('showing results section...');
      document.querySelector('.results').style.display = 'flex';
      this.header.classList.remove('header--full-page');
    } else {
      console.log('hiding results section...');
      document.querySelector('.results').style.display = 'none';
      this.header.classList.add('header--full-page');
    }
  }

  // Might have to change this because of how response data is formatted
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

  // showAlert() {

  // }

  // clearAlert() {

  // }
}

export const ui = new UI();
