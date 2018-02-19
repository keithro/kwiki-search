class UI {
  constructor() {
    // this.contentSection = document.querySelector('.content');
  }

  showSearchContent() {
    console.log('showing content section...');
    // this.contentSection.style.display = 'block';
    document.querySelector('.content').style.display = 'block';
  }

  hideSearchContent() {
    console.log('hiding content section...');
    // this.contentSection.style.display = 'none';
    document.querySelector('.content').style.display = 'none';
  }
}

export const ui = new UI();
