import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Basketball.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Basketball() {
  const constraintsRef = useRef(null);
  const [goal, setGoal] = useState(false);
  const router = useRouter();

  const handleClick = (e: any, route: string) => {
    e.preventDefault();
    router.push(`/${route}`);
  };

  function handleDragEnd(event: any, info: any) {
    let hooppos = document.getElementById("hoop")?.getBoundingClientRect();
    let top = hooppos?.top;
    let left = hooppos?.left;
    let right = hooppos?.right;
    let bottom = hooppos?.bottom;

    if (
      //@ts-ignore
      info.point.x > left &&
      //@ts-ignore
      info.point.x < right &&
      //@ts-ignore
      info.point.y > top &&
      //@ts-ignore
      info.point.y < bottom
    ) {
      setGoal(true);
      handleClick(event, "work");
    } else setGoal(false);
  }
  function handleDragEnd2(event: any, info: any) {
    let hooppos = document.getElementById("hoop")?.getBoundingClientRect();
    let top = hooppos?.top;
    let left = hooppos?.left;
    let right = hooppos?.right;
    let bottom = hooppos?.bottom;

    if (
      //@ts-ignore
      info.point.x > left &&
      //@ts-ignore
      info.point.x < right &&
      //@ts-ignore
      info.point.y > top &&
      //@ts-ignore
      info.point.y < bottom
    ) {
      setGoal(true);
      handleClick(event, "skills");
    } else setGoal(false);
  }

  return (
    <div>
      <Link href={goal ? "/work" : ""}>
        <div id="hoop" className={styles.hoop}></div>
      </Link>
      <motion.div ref={constraintsRef} className={styles.container}>
        <div className={styles.position}>
          <motion.div
            id="ball"
            drag
            dragConstraints={constraintsRef}
            onDragEnd={handleDragEnd}
            className={styles.ball}
            dragSnapToOrigin={false}
            whileDrag={{ scale: 1.2 }}
          >
            Work
          </motion.div>
        </div>
        <div className={styles.position2}>
          <motion.div
            id="ball2"
            drag
            dragConstraints={constraintsRef}
            onDragEnd={handleDragEnd2}
            className={styles.ball2}
            dragSnapToOrigin={false}
            whileDrag={{ scale: 1.2 }}
          >
            Skills
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
