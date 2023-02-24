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
        start: "-10% center",
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
      ".mockup1",
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
      ".mockup11",
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
    snap.fromTo(
      ".mockup2",
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        y: "0",
      },
      "<.2"
    );
    snap.fromTo(
      ".number2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.3"
    );
    snap.fromTo(
      ".projectTitle2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );
    snap.fromTo(
      ".mockup22",
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
      ".projectPosition2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );

    snap.fromTo(
      ".projectDescription2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );
    snap.fromTo(
      ".mockup3",
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        y: "0",
      },
      "<.2"
    );
    snap.fromTo(
      ".number3",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.3"
    );
    snap.fromTo(
      ".projectTitle3",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );
    snap.fromTo(
      ".mockup33",
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
      ".projectPosition3",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );

    snap.fromTo(
      ".projectDescription3",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<.1"
    );
    snap.fromTo(
      ".seeAll",
      {
        scale: 0.1,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      },
      "<.5"
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
            Front end @ LLF
          </div>
          <div className={`${styles.projectDescription} projectDescription`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </div>
        </div>
        <div className={styles.projectImages}>
          <img src="/mockup.png" className={`${styles.mockup} mockup1`} />
          <img src="/mockup.png" className={`${styles.mockup2} mockup11`} />
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectInfo}>
          <div className={`${styles.number} number2`}>02</div>
          <div className={`${styles.projectTitle} projectTitle2`}>
            Nile Magazine
          </div>
          <div className={`${styles.projectPosition} projectPosition2`}>
            Front end @ LLF
          </div>
          <div className={`${styles.projectDescription} projectDescription2`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </div>
        </div>
        <div className={styles.projectImages}>
          <img src="/mockup.png" className={`${styles.mockup} mockup2`} />
          <img src="/mockup.png" className={`${styles.mockup2} mockup22`} />
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectInfo}>
          <div className={`${styles.number} number3`}>03</div>
          <div className={`${styles.projectTitle} projectTitle3`}>
            Nile Magazine
          </div>
          <div className={`${styles.projectPosition} projectPosition3`}>
            Front end @ LLF
          </div>
          <div className={`${styles.projectDescription} projectDescription3`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </div>
        </div>
        <div className={styles.projectImages}>
          <img src="/mockup.png" className={`${styles.mockup} mockup3`} />
          <img src="/mockup.png" className={`${styles.mockup2} mockup33`} />
        </div>
      </div>
      <button className={`${styles.seeAll} seeAll`}>
        <span>Click!</span>
        <span>See all projects</span>
      </button>
    </div>
  );
}
