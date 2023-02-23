import * as React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/Projects.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    const snap = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "-25% center",
        end: "bottom bottom",
        markers: true,
        scrub: true,
      },
    });
    snap.fromTo(
      ".title",
      {
        x: "-50%",
      },
      {
        x: "50%",
      }
    );
    snap.fromTo(
      ".mockup",
      {
        opacity: 0,
        y: "100%",
      },
      {
        opacity: 1,
        y: "0",
      },
      "<.2"
    );
    snap.fromTo(
      ".number",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.3"
    );
    snap.fromTo(
      ".projectTitle",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );
    snap.fromTo(
      ".mockup2",
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
      },
      "<"
    );
    snap.fromTo(
      ".projectPosition",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );

    snap.fromTo(
      ".projectDescription",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );
  }, []);
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.title} title`}>Projects</div>
      <div className={styles.projectContainer}>
        <div className={styles.projectInfo}>
          <div className={`${styles.number} number`}>01</div>
          <div className={`${styles.projectTitle} projectTitle`}>
            GQ Magazine
          </div>
          <div className={`${styles.projectPosition} projectPosition`}>
            Front end
          </div>
          <div className={`${styles.projectDescription} projectDescription`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </div>
        </div>
        <div className={styles.projectImages}>
          <img src="/mockup.png" className={`${styles.mockup} mockup`} />
          <img src="/mockup.png" className={`${styles.mockup2} mockup2`} />
        </div>
      </div>
    </div>
  );
}
