import * as React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/ProjectsMobile.module.scss";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectsMobile() {
  const ref = useRef(null);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollY, [0, 600], [-500, 40]);
  const opacity1a = useTransform(scrollYProgress, [0.07, 0.16], [0, 1]);
  const opacity1b = useTransform(scrollYProgress, [0.12, 0.22], [0, 1]);
  const opacity1c = useTransform(scrollYProgress, [0.18, 0.24], [0, 1]);
  const opacity1d = useTransform(scrollYProgress, [0.2, 0.26], [0, 1]);
  const opacity2a = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const opacity2b = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const opacity2c = useTransform(scrollYProgress, [0.45, 0.51], [0, 1]);
  const opacity2d = useTransform(scrollYProgress, [0.46, 0.52], [0, 1]);
  const opacity3a = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const opacity3b = useTransform(scrollYProgress, [0.65, 0.76], [0, 1]);
  const opacity3c = useTransform(scrollYProgress, [0.66, 0.78], [0, 1]);
  const opacity3d = useTransform(scrollYProgress, [0.67, 0.8], [0, 1]);
  const moco1a = useTransform(scrollYProgress, [0.17, 0.26], [500, 0]);
  const moco2b = useTransform(scrollYProgress, [0.44, 0.49], [700, 0]);
  const moco3b = useTransform(scrollYProgress, [0.61, 0.71], [700, 0]);

  return (
    <div className={`${styles.container} container`}>
      <motion.div className={`${styles.title} title`} style={{ x }}>
        Projects
      </motion.div>
      <div ref={ref}>
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
              <a
                href="https://ambushdesign.io/"
                target="_blank"
                rel="noopener noreferrerz"
              >
                Ambush design
              </a>
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
              pop-art. They decided to enter web3 with this project launching
              the POW! NFT collection. As a front end developer, I was part of
              the team that built the project.
              <br /> <div className={styles.space}></div>We used technologies
              such as Nextjs, React, typescript, scss and GSAP.
            </motion.div>
          </div>
          <div className={styles.projectImages}>
            <motion.img
              style={{ y: moco1a }}
              src="/ambush2.png"
              className={`${styles.mockup} mockup1`}
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
              <a
                href="https://delincuenmapa.com"
                target="_blank"
                rel="noopener noreferrerz"
              >
                DelincuenMapa
              </a>
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
              DelincuenMapa is a full stack web app that helps users visualize
              the most dangerous parts of a city, as well as report crimes made
              to them. User are able to filter by different crimes or articles
              as well as different times of the day.
              <br /> <div className={styles.space}></div>The application was
              made with the following technologies: Nextjs, Javascript, HTML,
              CSS, React, Redux, MongoDB, mongoose -Node.js,{" "}
            </motion.div>
          </div>
          <div className={styles.projectImages}>
            <motion.img
              style={{ x: moco2b }}
              src="/mDelin2.png"
              className={`${styles.mockup2} mockup22`}
            />
          </div>
        </div>

        <div className={styles.projectContainer}>
          <div className={styles.projectInfo}>
            <motion.div
              style={{ opacity: opacity3a }}
              className={`${styles.number} number3`}
            >
              03
            </motion.div>
            <motion.div
              style={{ opacity: opacity3b }}
              className={`${styles.projectTitle} projectTitle3`}
            >
              <a
                href="https://www.moodiesnft.io/"
                target="_blank"
                rel="noopener noreferrerz"
              >
                Moodies NFT
              </a>
            </motion.div>
            <motion.div
              style={{ opacity: opacity3c }}
              className={`${styles.projectPosition} projectPosition3`}
            >
              Front end @ LLF
            </motion.div>
            <motion.div
              style={{ opacity: opacity3d }}
              className={`${styles.projectDescription} projectDescription3`}
            >
              MoodiesNFT is a web3 project that aims to bring emotional
              intelligence to the world of non-fungible tokens (NFTs). With
              MoodiesNFT, users can express their emotions through unique
              digital assets that reflect their moods and personalities. <br />{" "}
              The projject was built using the following technologies: React,
              Typescript, Nextjs, AWS, GSAP, scss.
            </motion.div>
          </div>
          <div className={styles.projectImages}>
            <motion.img
              style={{ x: moco3b }}
              src="/moodies2.png"
              className={`${styles.mockup22} mockup33`}
            />
          </div>
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
