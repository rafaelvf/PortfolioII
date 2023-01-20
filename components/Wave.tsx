import * as React from "react";
import { useRef, useState } from "react";

import styles from "../styles/Wave.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Wave() {
  return (
    <div className={styles.container}>
      <video
        width="100%"
        height="100%"
        controls={true}
        autoPlay
        //loop={true}
      >
        <source src="/2.MP4" type="video/mp4" />
      </video>
    </div>
  );
}
