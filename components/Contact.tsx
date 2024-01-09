import { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PDFViewer from "../components/PDFViewer";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const pdfUrl = "/CVRafael24.pdf";
  useEffect(() => {
    gsap.fromTo(
      ".title2",
      {
        x: "-100%",
        y: "110%",
      },
      {
        x: "10%",
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
        <a
          href="mailto:reviterif@gmail.com"
          target="_blank"
          rel="noopener noreferrerz"
        >
          <div className={styles.infoContainer}>
            <img src="/gmail-svgrepo-com.svg" className={styles.logos} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-viteri/"
          target="_blank"
          rel="noopener noreferrerz"
        >
          <div className={styles.infoContainer}>
            <img src="/linkedin-svgrepo-com.svg" className={styles.logos} />
          </div>
        </a>
        <a
          href="https://github.com/rafaelvf"
          target="_blank"
          rel="noopener noreferrerz"
        >
          <div className={styles.infoContainer}>
            <img src="/github-svgrepo-com.svg" className={styles.logos} />
          </div>
        </a>
        <a
          href="https://twitter.com/fixes_dev"
          target="_blank"
          rel="noopener noreferrerz"
        >
          <div className={styles.infoContainer}>
            <img
              src="/twitter-color-svgrepo-com.svg"
              className={styles.logos}
            />
          </div>
        </a>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <div className={styles.infoContainer2}>CV</div>
          <PDFViewer pdfUrl={pdfUrl} />
        </a>
      </div>
    </div>
  );
}
