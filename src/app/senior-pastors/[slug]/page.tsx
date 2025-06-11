import React from 'react'
import Navbar from '@/components/navBar/navBar'
import styles from './pastor.module.scss'
import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa'
import Image from 'next/image'
import profileHolder from '@/assets/pastors/HOS_5842.jpg'

const PastorProfile = () => {
  return (
    <main className={styles.page}>
      <Navbar/>
      <h1>PASTOR JOHN DOE</h1>
      <section className={styles.mainSection}>
        <div className={styles.ppContainer}>
          <Image src={profileHolder} alt='profile picture' className={styles.pp}/>
        </div>
        <div className={styles.educationalBackground}>
          <h3>EDUCATIONAL BACKGROUND</h3>
          <p>
            Text about the personels educational background. 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Autem nobis soluta vel velit, nihil ipsam, architecto veniam 
            minus unde ipsum voluptas minima earum, repudiandae hic sunt. 
            Laboriosam est aliquam excepturi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Error, placeat esse! Ipsa asperiores, quae earum odit maxime officia voluptatum, 
            libero quidem, perferendis impedit aliquam recusandae 
            repellat voluptatibus iusto aut rem.
          </p>
          <div className={styles.iconContainer}>
            <FaEnvelope className={styles.icon}/>
            <FaFacebook className={styles.icon}/>
            <FaPhone className={styles.icon}/>
          </div>
        </div>
        
      </section>
      <section className={styles.profileSection}>
        <div className={styles.profile}>
          <h3>PROFILE</h3>
          <p>
            Text about the personels professional background. 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Autem nobis soluta vel velit, nihil ipsam, architecto veniam 
            minus unde ipsum voluptas minima earum, repudiandae hic sunt. 
            Laboriosam est aliquam excepturi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus voluptates corporis iure perspiciatis, voluptas, 
            velit eos alias, rem suscipit aut deserunt dolore sint veritatis 
            beatae cupiditate neque esse reiciendis eligendi!
          </p>
        </div>
      </section>
    </main>
  )
}

export default PastorProfile
