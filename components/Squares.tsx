import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Squares.module.scss";

export default function Squares() {
  return (
    <div className={styles.container}>
      <div className={styles.work}></div>
      <div className={styles.technologies}></div>
      <div className={styles.contact}></div>
    </div>
  );
}
