class Wiki {
  constructor() {
    this.article_count = 20;
  }

  async getArticles(searchInput) {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchInput}&limit=${this.article_count}&format=json&origin=*`);
    const responseData = await response.json();

    return responseData;
  }
}

export const wiki = new Wiki();
