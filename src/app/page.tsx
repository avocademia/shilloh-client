import Image from "next/image";
import styles from "./home.module.scss"
import Navbar from "@/components/whiteNavBar/navBar";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.overlay}></div>
      <Navbar/>
      <section className={styles.mainSection}>
        <article className={styles.actions1}>
          <h1>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit  </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur sagittis, enim vitae tincidunt sodales, 
            magna nulla vestibulum lacus, a faucibus sapien erat sed justo. 
            Integer sed sollicitudin nisi. Nulla facilisi.
          </p>
          <button className={styles.actionButtons}>Learn More</button>
        </article>
        <article className={styles.actions2}>
          <h1>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit  </h1>
          <div>
            <button className={styles.actionButtons}>Contact Us</button>
            <button className={styles.actionButtons}>Donate</button>
          </div>
        </article>
      </section>
    </main>
  );
}
