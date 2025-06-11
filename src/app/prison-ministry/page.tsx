'use client'

import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules'
import 'swiper/css'
import image1 from '../../assets/prison/IMG_9690.jpg'
import image2 from '../../assets/prison/IMG_9707.jpg'
import image3 from '../../assets/prison/IMG_9691.jpg'
import image4 from '../../assets/prison/IMG_9724.jpg'
import image5 from '../../assets/prison/IMG_9735.jpg'
import image6 from '../../assets/prison/IMG_9748.jpg'
import image7 from '../../assets/prison/IMG_9750.jpg'
import image8 from '../../assets/prison/IMG_9751.jpg'
import image9 from '../../assets/prison/IMG_9912.jpg'
import image10 from '../../assets/prison/IMG_9921.jpg'
import image11 from '../../assets/prison/IMG_9922.jpg'
import image12 from '../../assets/prison/IMG_9956.jpg'
import image13 from '../../assets/prison/IMG_9969.jpg'
import image14 from '../../assets/prison/IMG_9986.jpg'
import Image from 'next/image'
import styles from './prisonMinistry.module.scss'
import Navbar from '@/components/navBar/navBar'

const PrisonMinistry = () => {

  const images = [
    image1, image2, image3, 
    image4, image5, image6, 
    image7, image8, image9, 
    image10, image11, image12, 
    image13, image14
  ]

  const className='swiper-pagination-bullet'

  const pagination = {
    clickable: true,
    renderBullet: function (index:number) {
      return '<span class="' + className+ '">' + (index + 1) + '</span>';
    },
  };

  return (
    <main className={styles.page}>
      <Navbar/>
      <section className={styles.imageContainer}>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 2.5,
                slideShadows: true,
            }}
            navigation
            pagination={pagination}
            scrollbar={{ draggable: true }}
        >
            {images.map((image, index) =>(
                <SwiperSlide key={index} className={styles.slide}>
                    <Image src={image} alt='prison ministry gallery photo' className={styles.image}/>
                </SwiperSlide>
            ))}
        </Swiper>
      </section>
      Prison Ministry
    </main>
  )
}

export default PrisonMinistry
