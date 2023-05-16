import * as React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/Projects.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    const snap = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "-10% center",
        end: "bottom bottom",
        //markers: true,
        scrub: true,
      },
    });
    snap.fromTo(
      ".title",
      {
        x: "-50%",
      },
      {
        x: "10%",
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
        //color: "#5c80bc",
        fontSize: "25px",
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
        x: "-20%",
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

        fontSize: "25px",
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
        x: "-20%",
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
        y: "250%",
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
        x: "-20%",
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
      "<.2"
    );
  }, []);
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.title} title`}>Projects</div>
      <div className={styles.projectContainer}>
        <div className={styles.projectInfo}>
          <div className={`${styles.number} number`}>01</div>
          <div className={`${styles.projectTitle} projectTitle`}>
            Ambush design
          </div>
          <div className={`${styles.projectPosition} projectPosition`}>
            Front end @ LLF
          </div>
          <div className={`${styles.projectDescription} projectDescription`}>
            Ambush is a Japanese fashion brand which is inspired in innovative
            pop-art. They decided to enter web3 with this project launching the
            POW! NFT collection. As a front end developer, I was part of the
            team that built the project.
            <br /> <div className={styles.space}></div>We used technologies such
            as Nextjs, React, typescript, scss and GSAP.
          </div>
        </div>
        <div className={styles.projectImages}>
          <img src="/ambush2.png" className={`${styles.mockup} mockup1`} />
          <img src="/ambush1.webp" className={`${styles.mockup2} mockup11`} />
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectInfo}>
          <div className={`${styles.number} number2`}>02</div>
          <div className={`${styles.projectTitle} projectTitle2`}>
            DelincuenMapa
          </div>
          <div className={`${styles.projectPosition} projectPosition2`}>
            Full stack project
          </div>
          <div className={`${styles.projectDescription} projectDescription2`}>
            DelincuenMapa is a full stack web app that helps users visualize the
            most dangerous parts of a city, as well as report crimes made to
            them. User are able to filter by different crimes or articles as
            well as different times of the day.
            <br /> <div className={styles.space}></div>The application was made
            with the following technologies: Nextjs, Javascript, HTML, CSS,
            React, Redux, MongoDB, mongoose -Node.js,{" "}
          </div>
        </div>
        <div className={styles.projectImages}>
          <img src="/mDelin1.png" className={`${styles.mockup} mockup2`} />
          <img src="/mDelin2.png" className={`${styles.mockup2} mockup22`} />
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectInfo}>
          <div className={`${styles.number} number3`}>03</div>
          <div className={`${styles.projectTitle} projectTitle3`}>
            Moodies NFT
          </div>
          <div className={`${styles.projectPosition} projectPosition3`}>
            Front end @ LLF
          </div>
          <div className={`${styles.projectDescription} projectDescription3`}>
            MoodiesNFT is a web3 project that aims to bring emotional
            intelligence to the world of non-fungible tokens (NFTs). With
            MoodiesNFT, users can express their emotions through unique digital
            assets that reflect their moods and personalities. <br /> The
            projject was built using the following technologies: React,
            Typescript, Nextjs, AWS, GSAP, scss.
          </div>
        </div>
        <div className={styles.projectImages}>
          <img src="/moodies1.png" className={`${styles.mockup} mockup3`} />
          <img src="/moodies2.png" className={`${styles.mockup22} mockup33`} />
        </div>
      </div>
      <Link href="/projects">
        <button className={`${styles.seeAll} seeAll`}>
          <span>Click!</span>
          <span>See All Projects</span>
        </button>
      </Link>
    </div>
  );
}
