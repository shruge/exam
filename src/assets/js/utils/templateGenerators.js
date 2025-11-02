import { truncateString } from './helpers.js'

const generateArticleContent = ({ id, image, title, text, views }, textLimit) => {
  return `<img  class="articles__image" src="${image}" alt="image${id}">
          <section class="card__text articles__text">
            <h3 class="articles__title card__title title">${title}</h3>
            <p class="articles__description description">
              ${truncateString(text, textLimit)}
            </p>
          </section>
          <div class="articles__details">
            <i class="fa-regular fa-eye"></i>
            <span class="articles__views">${views}</span>
          </div>`
}
const generateFeedContent = ({ image, title, text, tags }, textLimit) => {
  return `<img src="${image}" alt="${title}" class="feeds__img">
          <section class="card__text feeds__text">
            <h3 class="card__title title">${title}</h3>
            <p class="feeds__description description">
              ${truncateString(text, textLimit)}
            </p>
          </section>
          <ul class="feeds__tags-list">
            ${tags.map((tag) => `<li class="feeds__tag">${tag}</li>`).join('')}
         </ul>`
}

const generateArticleSlideLink = (content, maxLen) => {
  return `<a href="/src/pages/article.html?articleId=${content.id}" class="card__content">
            ${generateArticleContent(content, maxLen)}
          </a>`
}
const generateFeedSlideLink = (content, maxLen) => {
  return `<a href="/src/pages/feed.html?feedId=${content.id}" class="card__content feeds__grid">
            ${generateFeedContent(content, maxLen)}
          </a>`
}

export const getArticleTemplate = (article, maxLen = 100, isSlide = true) => {
  const wrapperClass = isSlide ? 'swiper-slide' : `card__content`

  return `<article class="articles__item card ${wrapperClass}">
            <h2 class="sr-only">article №${article.id}</h2>
            ${isSlide ? generateArticleSlideLink(article, maxLen) : generateArticleContent(article, maxLen)}
          </article>`
}
export const getFeedTemplate = (feed, maxLen = 85, isSlide = true) => {
  const wrapperClass = isSlide ? 'swiper-slide' : `card__content feeds__grid`

  return `<article class="feeds__item card ${wrapperClass}">
              <h2 class="sr-only">feed №${feed.id}</h2>
              ${isSlide ? generateFeedSlideLink(feed, maxLen) : generateFeedContent(feed, maxLen)}
            </article>`
}
