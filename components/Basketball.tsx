import * as React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Basketball.module.scss";
import Link from "next/link";

export default function Basketball() {
  const constraintsRef = useRef(null);
  const [goal, setGoal] = useState(false);

  function handleDragEnd(event: any, info: any) {
    let hooppos = document.getElementById("hoop")?.getBoundingClientRect();
    let top = hooppos?.top;
    let left = hooppos?.left;
    let right = hooppos?.right;
    let bottom = hooppos?.bottom;
    console.log(top, bottom, left, right, "top,left");
    console.log(info.point.x, info.point.y, "end");

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
      console.log("hola");
      setGoal(true);
    } else setGoal(false);
  }
  //   React.useEffect(() => {
  //     if (goal) {
  //       <Link href="/work" />;
  //     }
  //   }, [goal]);
  console.log(goal, "goal");
  return (
    <div>
      <Link href={goal ? "/work" : ""}>
        <div id="hoop" className={styles.hoop}></div>
      </Link>
      <motion.div ref={constraintsRef} className={styles.container}>
        <motion.div
          id="ball"
          drag
          dragConstraints={constraintsRef}
          onDragEnd={handleDragEnd}
          className={styles.ball}
          dragSnapToOrigin={false}
          whileDrag={{ scale: 1.2 }}
        />
      </motion.div>

      {/* <Link href="/work">
        <div
          style={{
            color: "#000000",
            position: "absolute",
            top: "400px",
            cursor: "pointer",
          }}
        >
          aplastame
        </div>
      </Link> */}
    </div>
  );
}
