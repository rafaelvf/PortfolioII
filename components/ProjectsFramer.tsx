import * as React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/ProjectsFramer.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectsFramer() {
  const ref = useRef(null);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollY, [0, 700], [-500, 40]);
  const opacity1a = useTransform(scrollYProgress, [0.07, 0.2], [0, 1]);
  const opacity1b = useTransform(scrollYProgress, [0.1, 0.22], [0, 1]);
  const opacity1c = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const opacity1d = useTransform(scrollYProgress, [0.2, 0.26], [0, 1]);
  const opacity2a = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const opacity2b = useTransform(scrollYProgress, [0.38, 0.5], [0, 1]);
  const opacity2c = useTransform(scrollYProgress, [0.45, 0.53], [0, 1]);
  const opacity2d = useTransform(scrollYProgress, [0.48, 0.54], [0, 1]);
  const opacity3a = useTransform(scrollYProgress, [0.55, 0.67], [0, 1]);
  const opacity3b = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const opacity3c = useTransform(scrollYProgress, [0.7, 0.82], [0, 1]);
  const opacity3d = useTransform(scrollYProgress, [0.73, 0.83], [0, 1]);
  const moco1a = useTransform(scrollYProgress, [0.1, 0.2], [500, 0]);
  const moco1b = useTransform(scrollYProgress, [0.17, 0.23], [700, 0]);
  const moco2a = useTransform(scrollYProgress, [0.4, 0.5], [500, 0]);
  const moco2b = useTransform(scrollYProgress, [0.44, 0.5], [700, 0]);
  const moco3a = useTransform(scrollYProgress, [0.6, 0.7], [500, 0]);
  const moco3b = useTransform(scrollYProgress, [0.64, 0.76], [700, 0]);

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
              src="/marriott1.webp"
              className={`${styles.mockup} mockup1`}
            />
            <motion.img
              style={{ x: moco1b }}
              src="/marriott2.webp"
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
              <a
                href="https://cuquipay.com"
                target="_blank"
                rel="noopener noreferrerz"
              >
                Cuquipay
              </a>
            </motion.div>
            <motion.div
              style={{ opacity: opacity2c }}
              className={`${styles.projectPosition} projectPosition2`}
            >
              Co-founder - Full stack developer
            </motion.div>
            <motion.div
              style={{ opacity: opacity2d }}
              className={`${styles.projectDescription} projectDescription2`}
            >
              Cuquipay is a software that helps Entrepreneurs to manage their
              sales and promote their products very fast and efficiently.
              <br /> <div className={styles.space}></div>The application was
              made with the following technologies: Nextjs, Javascript, HTML,
              Tailwind, React, Redux, MongoDB, Mongoose, Node.js{" "}
            </motion.div>
          </div>
          <div className={styles.projectImages}>
            <motion.img
              style={{ y: moco2a }}
              src="/cuqui3.png"
              className={`${styles.mockup} mockup2`}
            />
            <motion.img
              style={{ x: moco2b }}
              src="/cuqui2.png"
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
              Typescript, Nextjs, AWS, GSAP, SCSS.
            </motion.div>
          </div>
          <div className={styles.projectImages}>
            <motion.img
              style={{ y: moco3a }}
              src="/moodies1.png"
              className={`${styles.mockup} mockup3`}
            />
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
