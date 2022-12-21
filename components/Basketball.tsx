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

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/work");
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
      handleClick(event);
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
      </motion.div>
    </div>
  );
}
