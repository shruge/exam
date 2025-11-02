import Swiper from 'swiper'
import { Autoplay, Manipulation, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default (swiperSelector, slidesPerView = 'auto') => {
  return new Swiper(swiperSelector, {
    modules: [Autoplay, Manipulation],
    spaceBetween: 15,
    loop: true,
    slidesPerView,
    direction: 'horizontal',
    autoplay: {
      delay: 5000,
      enabled: true,
    },
  })
}
