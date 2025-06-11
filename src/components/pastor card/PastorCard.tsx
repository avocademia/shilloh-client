import React from 'react'
import styles from './PastorCard.module.scss'
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import profileHolder from '@/assets/pastors/HOS_5842.jpg'
import Image from 'next/image'

interface Pastor {
  id: number,
  name: string,
  mail: string,
  facebook: string|undefined|null,
  phone?: string|undefined|null,
  profile: string,
  educational_background: string,
  profile_picture: StaticImageData
}

interface pastorCardProps {
  pastor: Pastor,
}

const PastorCard = ({pastor}:pastorCardProps) => {

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={profileHolder} alt='profile picture' className={styles.image}/>
      </div>
      <h3 className={styles.name}>{pastor.name}</h3>
      <div className={styles.iconContainer}>
        <FaEnvelope className={styles.icon}/>
        <FaFacebook className={styles.icon}/>
        <FaPhone className={styles.icon}/>
      </div>
      <Link href={`/senior-pastors/${pastor.id}`}>
        <button>Profile</button>
      </Link>
      
    </article>
  )
}

export default PastorCard
