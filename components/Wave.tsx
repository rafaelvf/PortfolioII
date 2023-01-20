import * as React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/Wave.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Wave() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil((scrollpx / winHeightPx) * 8);
    setScrolled(scrollLen);
    console.log(scrollpx, "px");
    console.log(winHeightPx, "win");
  };
  console.log(scrolled, "scrolled");

  //   useEffect(() => {
  //     const videoContainer = document.querySelector(".containerVideo");
  //     const videoTag = document.querySelector(".video");

  //     gsap.to(".video", {
  //       scrollTrigger: {
  //         trigger: ".video",
  //         markers: true,
  //         scrub: true,
  //         start: "top top",
  //         end: "99% bottom",
  //         //pin: true,
  //       },
  //     });

  //     //video animation
  //     let accelamount = 0.1;
  //     let scrollpos = 0;
  //     let delay = 0;
  //   });
  return (
    <div className={`${styles.container} containerVideo`}>
      {/* <video
        //autoPlay
        //muted
        className={`${styles.video} video`}
        //loop={true}
      >
        <source src="/2.MP4" type="video/mp4" />
      </video> */}
      <img
        src={`/frame_${scrolled.toString()}_delay-1s.png`}
        className={styles.imgWave}
      />
    </div>
  );
}
