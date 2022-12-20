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
      <div className={styles.work2}></div>
      <div className={styles.technologies}></div>
      <div className={styles.contact}></div>
      <div className={styles.work2}></div>
      <div className={styles.technologies2}>
        <div className={styles.thougth}>Batoul owes me $$!!!</div>
        <div className={styles.eye}></div>
        <div className={styles.mouth}>
          <div className={styles.tongue}></div>
        </div>
      </div>
    </div>
  );
}
