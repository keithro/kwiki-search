class UI {
  constructor() {
    this.header = document.querySelector('.header');
    this.results = document.querySelector('.results');
  }

  changeState(state) {
    if (state === 'search') {
      console.log('showing results section...');
      document.querySelector('.results').style.display = 'block';
      this.header.classList.remove('header--full-page');
    } else {
      console.log('hiding results section...');
      document.querySelector('.results').style.display = 'none';
      this.header.classList.add('header--full-page');
    }
  }

  // Might have to change this because of how response data is formatted
  showPosts(articles) {
    this.reults.innerHTML = articles.reduce((output, article) => {
      return output += `
        <a class="results__item" href="${articles[3][i]}">
          <h2 class="results__title">${article}</h2>
          <p class="results__text">${articles[2][i]}</p>
        </a>
      `;
    }, '');
  }
}

export const ui = new UI();
