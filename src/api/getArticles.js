export const getArticles = async () => {
  try {
    const res = await fetch('/data/articles.json')

    return await res.json()
  } catch (e) {
    console.error(e)
  }
}

export const getArticle = async (id) => {
  try {
    const res = await fetch('/data/articles.json')
    const articles = await res.json()

    return articles.find((article) => article.id === id)
  } catch (e) {
    console.error(e)
  }
}
