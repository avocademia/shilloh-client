'use client'

import React from 'react'
import styles from './aboutUs.module.scss'
import Navbar from '@/components/navBar/navBar'
import Image from 'next/image'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules'
import 'swiper/css'
import image1 from '@/assets/church/image1.jpg'
import image2 from '@/assets/church/image2.jpg'
import image3 from '@/assets/church/image3.jpg'
import image4 from '@/assets/church/image4.jpg'
import image5 from '@/assets/church/image5.jpg'
import image6 from '@/assets/church/image6.jpg'
import image7 from '@/assets/church/image7.jpg'
import image8 from '@/assets/church/image8.jpg'
import image9 from '@/assets/church/image9.jpg'
import image10 from '@/assets/church/image10.jpg'
import image11 from '@/assets/church/image11.jpg'
import image12 from '@/assets/church/image12.jpg'
import image13 from '@/assets/church/image13.jpg'
import image14 from '@/assets/church/image14.jpg'
import image15 from '@/assets/church/image15.jpg'
import image16 from '@/assets/church/image16.jpg'
import image17 from '@/assets/church/image17.jpg'
import image18 from '@/assets/church/image18.jpg'
import image19 from '@/assets/church/image19.jpg'
import image20 from '@/assets/church/image20.jpg'
import image21 from '@/assets/church/image21.jpg'
import image22 from '@/assets/church/image22.jpg'
import image23 from '@/assets/church/image23.jpg'
import image24 from '@/assets/church/image24.jpg'
import image25 from '@/assets/church/image25.jpg'
import image26 from '@/assets/church/image26.jpg'
import image27 from '@/assets/church/image27.jpg'


const AboutUs = () => {

  const images =  [
                    image1, image3, image4, image5,
                    image6, image7, image8, image9,
                    image10, image11, image12, image13,
                    image14, image15, image16, image17,
                    image18, image19, image20, image21,
                    image22, image23, image24, image25,
                    image26, image27
                  ]

  return (
    <main className={styles.page}>
      <Navbar/>
      <h1>SHILLOH FAMILY EMPOWERMENT CENTRE</h1>
      <section className={styles.firstSection}>
        <div className={styles.imageContainer}>
          <div className={styles.imageContainer1}>
            <Image src={image1} alt='first image' className={styles.image1}/>
            <Image src={image3} alt='third image' className={styles.image3}/>
          </div>
          <div className={styles.imageContainer2}>
            <Image src={image2} alt='second image' className={styles.image2}/>
          </div>
        </div>
        <div className={styles.textContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cupiditate harum expedita veniam nulla ut ab, 
            dignissimos quidem dolor eius nesciunt explicabo impedit 
            obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cupiditate harum expedita veniam nulla ut ab, 
            dignissimos quidem dolor eius nesciunt explicabo impedit 
            obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cupiditate harum expedita veniam nulla ut ab, 
            dignissimos quidem dolor eius nesciunt explicabo impedit 
            obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
          </p>
        </div>
      </section>
      <section className={styles.secondSection}>
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
            pagination={{clickable: true}}
            scrollbar={{ draggable: true }}
        >
            {images.map((image, index) =>(
                <SwiperSlide key={index} className={styles.slide}>
                    <Image src={image} alt='prison ministry gallery photo' className={styles.image}/>
                </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <section className={styles.thirdSection}>
        <article className={styles.thirdSecText}>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate harum expedita veniam nulla ut ab, 
              dignissimos quidem dolor eius nesciunt explicabo impedit 
              obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate harum expedita veniam nulla ut ab, 
              dignissimos quidem dolor eius nesciunt explicabo impedit 
              obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
            </p>

            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate harum expedita veniam nulla ut ab, 
              dignissimos quidem dolor eius nesciunt explicabo impedit 
              obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate harum expedita veniam nulla ut ab, 
              dignissimos quidem dolor eius nesciunt explicabo impedit 
              obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
            </p>
            
        </article>
        <article className={styles.missionVision}>
          <div className={styles.mission}>
            <h3>OUR MISSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate harum expedita veniam nulla ut ab, 
              dignissimos quidem dolor eius nesciunt explicabo impedit 
              obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
            </p>
          </div>
          <div className={styles.vision}>
            <h3>OUR VISION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate harum expedita veniam nulla ut ab, 
              dignissimos quidem dolor eius nesciunt explicabo impedit 
              obcaecati soluta. Aut culpa adipisci obcaecati illo cum?
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default AboutUs
