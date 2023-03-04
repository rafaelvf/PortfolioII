import { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Contact() {
  const [click, setClick] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Contact</div>
        <img
          src="/dropdown-svgrepo-com.svg"
          className={
            click ? `${styles.ddown} ${styles.ddownOpen}` : styles.ddown
          }
          onClick={() => setClick(!click)}
        />
      </div>
      <div className={click ? `${styles.nav} ${styles.navOpen}` : styles.nav}>
        <div className={styles.infoContainer}>
          <img src="/gmail-svgrepo-com.svg" className={styles.logos} />
          <div className={styles.text}>reviterif@gmail.com</div>
        </div>
        <div className={styles.infoContainer}>
          <img src="/linkedin-svgrepo-com.svg" className={styles.logos} />
          <div className={styles.text}>rafael-viteri</div>
        </div>
        <div className={styles.infoContainer}>
          <img src="/github-svgrepo-com.svg" className={styles.logos} />
          <div className={styles.text}>rafaelvf</div>
        </div>
        <div className={styles.infoContainer}>
          <img src="/twitter-color-svgrepo-com.svg" className={styles.logos} />
          <div className={styles.text}>fixes_v</div>
        </div>
      </div>
    </div>
  );
}
