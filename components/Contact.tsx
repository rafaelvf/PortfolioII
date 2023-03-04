import { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      ".title2",
      {
        x: "-100%",
        y: "110%",
      },
      {
        x: "5%",
        y: "110%",

        scrollTrigger: {
          trigger: ".container2",
          start: "top 80%",
          end: "bottom bottom",
          //markers: true,
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className={`${styles.container} container2`}>
      <div className={`${styles.title} title2`}>Contact</div>

      <div className={styles.nav}>
        <div className={styles.infoContainer}>
          <img src="/gmail-svgrepo-com.svg" className={styles.logos} />
        </div>
        <div className={styles.infoContainer}>
          <img src="/linkedin-svgrepo-com.svg" className={styles.logos} />
        </div>
        <div className={styles.infoContainer}>
          <img src="/github-svgrepo-com.svg" className={styles.logos} />
        </div>
        <div className={styles.infoContainer}>
          <img src="/twitter-color-svgrepo-com.svg" className={styles.logos} />
        </div>
      </div>
    </div>
  );
}
