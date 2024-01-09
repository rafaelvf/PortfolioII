import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { use, useState, useRef } from "react";
import Birds from "../components/Birds";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectsFramer from "../components/ProjectsFramer";
import ProjectsMobile from "../components/ProjectsMobile";
import { motion, useScroll, useTransform } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isMobile = () => {
    if (typeof window === "undefined") return false; // Check if running on the server
    return window.matchMedia("(max-width: 767px)").matches;
  };

  const isSafari = () => {
    if (typeof window === "undefined") return false; // Check if running on the server
    return (
      isMobile() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    );
  };

  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollY, [100, 200, 450, 495], [0, 1, 1, 0]);
  const scale = useTransform(scrollY, [0, 100], [1, 0]);
  const scale2 = useTransform(scrollY, [100, 250, 450, 495], [0, 1, 1, 0]);
  const width = useTransform(scrollY, [200, 400], [300, 500]);
  const translate = useTransform(scrollY, [250, 400], [0, 100]);
  const height = useTransform(scrollY, [400, 500], [200, 0]);

  return (
    <>
      <Head>
        <title>Rafael Viteri</title>
        <meta name="description" content="Rafael Viteri website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={ref} className={styles.main}>
        {/* <Squares /> */}
        {/* <Basketball /> */}
        {/* <div
          onClick={() => setRealLife(!realLife)}
          className={styles.buttonReal}
        >
          {realLife ? "Press for animated wave" : " Press for Real Life wave"}
        </div>
        {realLife ? <WaveReal /> : <Wave />} */}

        <div className={styles.heroContainer}>
          <Birds />
          <div className={styles.videoContainer}>
            {isSafari() ? (
              <motion.img
                style={{ scale: scale }}
                src="/video2.png"
                className={styles.title}
              />
            ) : (
              <motion.video
                style={{ scale: scale }}
                muted
                playsInline
                autoPlay
                preload="auto"
                loop={true}
                // controls={true}
                className={styles.title}
              >
                <source src="/video2.mp4" type="video/mp4" />
              </motion.video>
            )}
          </div>
          <img
            src="/expand_more_FILL0_wght400_GRAD0_opsz48.svg"
            className={styles.arrow}
          />
          <div className={styles.textContainer}>
            <motion.div
              style={{ opacity, scale: scale2, height }}
              className={styles.text}
            >
              I'm a developer who loves to create good user experiences. My goal
              is to build innovative digital products that have a positive
              impact on society.{" "}
            </motion.div>
          </div>
          {/* <div className={styles.title}>FIXES</div> */}
          {/* <MusicPlayer /> */}
        </div>
        <ProjectsFramer />
        <ProjectsMobile />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
