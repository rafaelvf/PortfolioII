import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Work.module.scss";
import Squares from "../components/Squares";
import Basketball from "../components/Basketball";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.sideBar}>20%</div>
        <div className={styles.examplesContainer}>80%</div>
      </main>
    </>
  );
}
