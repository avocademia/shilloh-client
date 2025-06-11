import React from 'react'
import styles from './sermons.module.scss'
import Navbar from '@/components/navBar/navBar'

const Sermons = () => {
  return (
    <main className={styles.page}>
      <Navbar/>
      <section className={styles.mainSection}>
        <iframe className={styles.videos} src="https://www.youtube.com/embed/vu5FxSa5lGU?si=Ir5iCTWpLMhr9F4N" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className={styles.videos} src="https://www.youtube.com/embed/UYca2yj670U?si=-xRYCbQzTA5S-7fl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className={styles.videos} src="https://www.youtube.com/embed/xxehwGPFNJE?si=nV-k14dIgxEo4m2e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className={styles.videos} src="https://www.youtube.com/embed/D0ki6irvP2o?si=wKSrRUBYaaveTRJo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className={styles.videos} src="https://www.youtube.com/embed/auy9P-v6UAg?si=qCqKO4Bvo2nqNKjG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className={styles.videos} src="https://www.youtube.com/embed/EaITVgR789A?si=FQu-Dge1X8IWOUsk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>
    </main>
  )
}

export default Sermons
