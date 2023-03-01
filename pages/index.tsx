import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Squares from "../components/Squares";
import Basketball from "../components/Basketball";
import Wave from "../components/Wave";
import WaveReal from "../components/WaveReal";
import { use, useState } from "react";
import Birds from "../components/Birds";
import MusicPlayer from "../components/MusicPlayer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [realLife, setRealLife] = useState(false);
  return (
    <>
      <Head>
        <title>Rafael Viter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
          <div className={styles.title}>FIXES</div>
          <MusicPlayer />
        </div>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
