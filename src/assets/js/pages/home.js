import swiperInit from '../swiperInit.js'
import { getArticleTemplate, getFeedTemplate } from '../utils/templateGenerators.js'
import { getArticles } from '../../../api/getArticles.js'
import { getFeeds } from '../../../api/getFeeds.js'

document.addEventListener('DOMContentLoaded', async () => {
  const articlesSlider = swiperInit('.swiper-articles')
  const feedsSlider = swiperInit('.swiper-feeds')
  const articles = await getArticles()
  const feeds = await getFeeds()

  articles.forEach((article) => {
    articlesSlider.appendSlide(getArticleTemplate(article))
  })
  feeds.concat(feeds).forEach((feed) => {
    feedsSlider.appendSlide(getFeedTemplate(feed))
  })
})
