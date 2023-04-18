import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Squares from "../components/Squares";
import Basketball from "../components/Basketball";
import NavExample from "../components/NavExample";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <NavExample />
        <Squares />
      </main>
    </>
  );
}
