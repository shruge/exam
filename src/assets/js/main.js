const blur = document.querySelector('.blur')
const burger = document.querySelector('.burger')
const headerLinks = document.querySelector('.header__links')
const closeIcon = document.querySelector('.header__close-icon')

const removeActiveClasses = () => {
  blur.classList.remove('blur--show')
  document.body.classList.remove('lock')
  headerLinks.classList.remove('header__links--active')
}

burger.addEventListener('click', (e) => {
  blur.classList.toggle('blur--show')
  document.body.classList.toggle('lock')
  headerLinks.classList.toggle('header__links--active')
})

blur.addEventListener('click', removeActiveClasses)

closeIcon.addEventListener('click', removeActiveClasses)
