'use client'

import React from 'react'
import styles from './institute.module.scss'
import Image from 'next/image'
import Accordion from '@/components/Institute Accordion/InstituteAccordion'
import Navbar from '@/components/navBar/navBar'

const TrainingInstitute = () => {
  return (
    <main className={styles.page}>
      <Navbar/>
      <h1>SHILLOH LEADERSHIP TRAINING INSTITUTE</h1>
      <section className={styles.overview}>
        <div className={styles.imageContainer}>
          <Image src={''} alt=''></Image>
        </div>
        <div className={styles.textContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eveniet officiis expedita id aperiam tenetur laborum,
            qui libero quam, rerum itaque vel labore sint iusto est 
            laudantium aut necessitatibus deleniti voluptates!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eveniet officiis expedita id aperiam tenetur laborum,
            qui libero quam, rerum itaque vel labore sint iusto est 
            laudantium aut necessitatibus deleniti voluptates!
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eveniet officiis expedita id aperiam tenetur laborum,
            qui libero quam, rerum itaque vel labore sint iusto est 
            laudantium aut necessitatibus deleniti voluptates!
          </p>
        </div>
      </section>
      <section className={styles.details}>
        <Accordion/>
        <button className={styles.galleryBtn}>Gallery</button>
      </section>
    </main>
  )
}

export default TrainingInstitute
