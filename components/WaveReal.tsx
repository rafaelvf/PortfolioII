import * as React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/Wave.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WaveReal() {
  const [scrolled, setScrolled] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil((scrollpx / winHeightPx) * 32);
    if (scrollLen < 1) {
      setScrolled(1);
    } else if (scrollLen > 32) {
      setScrolled(32);
    } else setScrolled(scrollLen);
    console.log(scrollLen, "LEBN");
    console.log(scrollpx, "px");
    console.log(winHeightPx, "win");
  };
  console.log(scrolled, "scrolled");

  return (
    <div className={`${styles.container} containerVideo`}>
      <img
        src={`/ezgif-frame-${scrolled.toString().padStart(3, "0")}.png`}
        className={styles.imgWave}
      />
    </div>
  );
}
