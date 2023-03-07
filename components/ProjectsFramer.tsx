import * as React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/ProjectsFramer.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsFramer() {
  const { ref, inView } = useInView();
  const { scrollY, scrollYProgress } = useScroll();
  const x = useTransform(scrollY, [0, 700], [-500, 40]);
  const opacity1a = useTransform(scrollY, [400, 700], [0, 1]);
  const opacity1b = useTransform(scrollY, [600, 900], [0, 1]);
  const opacity1c = useTransform(scrollY, [700, 900], [0, 1]);
  const opacity1d = useTransform(scrollY, [800, 1000], [0, 1]);
  const opacity2a = useTransform(scrollY, [1000, 1300], [0, 1]);
  const opacity2b = useTransform(scrollY, [1200, 1500], [0, 1]);
  const opacity2c = useTransform(scrollY, [1300, 1500], [0, 1]);
  const opacity2d = useTransform(scrollY, [1400, 1600], [0, 1]);
  const moco1a = useTransform(scrollY, [400, 850], [500, 0]);
  const moco1b = useTransform(scrollY, [500, 1100], [500, 0]);
  const moco2a = useTransform(scrollY, [1000, 1450], [500, 0]);
  const moco2b = useTransform(scrollY, [1100, 1700], [500, 0]);

  return (
    <div className={`${styles.container} container`}>
      <motion.div className={`${styles.title} title`} style={{ x }}>
        Projects
      </motion.div>
      <div className={styles.projectContainer}>
        <div className={styles.projectInfo}>
          <motion.div
            style={{ opacity: opacity1a }}
            className={`${styles.number} number`}
          >
            01
          </motion.div>
          <motion.div
            style={{ opacity: opacity1b }}
            className={`${styles.projectTitle} projectTitle`}
          >
            Ambush design
          </motion.div>
          <motion.div
            style={{ opacity: opacity1c }}
            className={`${styles.projectPosition} projectPosition`}
          >
            Front end @ LLF
          </motion.div>
          <motion.div
            style={{ opacity: opacity1d }}
            className={`${styles.projectDescription} projectDescription`}
          >
            Ambush is a Japanese fashion brand which is inspired in innovative
            pop-art. They decided to enter web3 with this project launching the
            POW! NFT collection. As a front end developer, I was part of the
            team that built the project.
            <br /> <div className={styles.space}></div>We used technologies such
            as Nextjs, React, typescript, scss and GSAP.
          </motion.div>
        </div>
        <div className={styles.projectImages}>
          <motion.img
            style={{ y: moco1a }}
            src="/ambush2.png"
            className={`${styles.mockup} mockup1`}
          />
          <motion.img
            style={{ x: moco1b }}
            src="/ambush1.png"
            className={`${styles.mockup2} mockup11`}
          />
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectInfo}>
          <motion.div
            style={{ opacity: opacity2a }}
            className={`${styles.number} number2`}
          >
            02
          </motion.div>
          <motion.div
            style={{ opacity: opacity2b }}
            className={`${styles.projectTitle} projectTitle2`}
          >
            DelincuenMapa
          </motion.div>
          <motion.div
            style={{ opacity: opacity2c }}
            className={`${styles.projectPosition} projectPosition2`}
          >
            Full stack project
          </motion.div>
          <motion.div
            style={{ opacity: opacity2d }}
            className={`${styles.projectDescription} projectDescription2`}
          >
            DelincuenMapa is a full stack web app that helps users visualize the
            most dangerous parts of a city, as well as report crimes made to
            them. User are able to filter by different crimes or articles as
            well as different times of the day.
            <br /> <div className={styles.space}></div>The application was made
            with the following technologies: Nextjs, Javascript, HTML, CSS,
            React, Redux, MongoDB, mongoose -Node.js,{" "}
          </motion.div>
        </div>
        <div className={styles.projectImages}>
          <motion.img
            style={{ y: moco2a }}
            src="/mDelin1.png"
            className={`${styles.mockup} mockup2`}
          />
          <motion.img
            style={{ x: moco2b }}
            src="/mDelin2.png"
            className={`${styles.mockup2} mockup22`}
          />
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
