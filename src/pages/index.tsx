import AboutComponent from "../components/AboutComponent";
import HomeComponent from "../components/HomeComponent";

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <section id="home" className={styles.home}>
        <HomeComponent />
      </section>
      <section id="about" className={styles.about}>
        <AboutComponent />
      </section>
      <section id="services">

      </section>
      <section id="contact">

      </section>
    </>
  )
}