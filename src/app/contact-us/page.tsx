import React from 'react'
import styles from './contact.module.scss'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'
import Navbar from '@/components/navBar/navBar'

const ContactUs = () => {
  return (
    <main className={styles.page}>
      <Navbar/>
      <section>
        <article className={styles.contactsOne}>
          <a href="tel:+254123456789">
            <div className={styles.contactOption}>
              <div className={styles.iconHolder}>
                <FaPhone className={styles.icon}/>
              </div>
              <div className={styles.textHolder}>
                <h4>Phone Number</h4>
                <span>+254722455782</span>
              </div>
            </div>
          </a>
          <a href="tel:+254123456789">
            <div className={styles.contactOption}>
              <div className={styles.iconHolder}>
                <FaPhone className={styles.icon}/>
              </div>
              <div className={styles.textHolder}>
                <h4>Phone Number</h4>
                <span>+254755487271</span>
              </div>
            </div>
          </a>
          <a href="https://wa.me/254123456789" target="_blank">
            <div className={styles.contactOption}>
              <div className={styles.iconHolder}>
                <FaWhatsapp className={styles.icon}/>
              </div>
              <div className={styles.textHolder}>
                <h4>WhatsApp</h4>
                <span>+254722455782</span>
              </div>
            </div>
          </a>
          <a href="mailto:shillohchurch@example.com">
            <div className={styles.contactOption}>
              <div className={styles.iconHolder}>
                <FaEnvelope className={styles.icon}/>
              </div>
              <div className={styles.textHolder}>
                <h4>Mail</h4>
                <span>shillohchurch@example.com</span>
              </div>
            </div>
          </a>
        </article>
      </section>
    </main>
  )
}

export default ContactUs
