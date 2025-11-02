import { getFeed, getFeeds } from '/src/api/getFeeds.js'
import { getFeedTemplate } from '/src/assets/js/utils/templateGenerators.js'

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const feedId = Number(urlParams.get('feedId'))

  if (feedId) {
    const article = await getFeed(feedId)
    const mainElement = document.querySelector('.main')
    const newTitleElement = `<h1 class="main__title title title--large">Корм №${feedId}</h1>`

    mainElement.insertAdjacentHTML('afterbegin', newTitleElement)
    mainElement.insertAdjacentHTML('beforeend', getFeedTemplate(article, null, false))
  } else {
    const feedsListElement = document.querySelector('.feeds__list')
    const feeds = await getFeeds()

    feeds.forEach((feed) => {
      feedsListElement.insertAdjacentHTML('beforeend', getFeedTemplate(feed, 85, true))
    })
  }
})
