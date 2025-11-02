import { getArticle, getArticles } from '/src/api/getArticles.js'
import { getArticleTemplate } from '/src/assets/js/utils/templateGenerators.js'

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const articleId = Number(urlParams.get('articleId'))

  if (articleId) {
    const article = await getArticle(articleId)
    const mainElement = document.querySelector('.main')
    const newTitleElement = `<h1 class="main__title title title--large">Статья №${articleId}</h1>`

    mainElement.insertAdjacentHTML('afterbegin', newTitleElement)
    mainElement.insertAdjacentHTML('beforeend', getArticleTemplate(article, null, false))
  } else {
    const articlesListElement = document.querySelector('.articles__list')
    const articles = await getArticles()

    articles.forEach((article) => {
      articlesListElement.insertAdjacentHTML('beforeend', getArticleTemplate(article))
    })
  }
})
