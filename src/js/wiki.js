class Wiki {
  constructor() {
    this.article_count = 20;
  }

  async getArticles(searchInput) {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchInput}&limit=${this.article_count}&format=json&origin=*`);
    const resData = await res.json();
    return resData;
  }
}

export const wiki = new Wiki();
