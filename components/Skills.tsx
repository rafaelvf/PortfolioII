import styles from "../styles/Skills.module.scss";
import { useState } from "react";
//import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    title: "Languages",
    stack: [
      "/typescript-icon-svgrepo-com.svg",
      "/javascript-svgrepo-com.svg",
      "/c.png",
      "/sql-svgrepo-com.svg",
      "/html-5-svgrepo-com.svg",
      "/css-3-svgrepo-com.svg",
    ],
  },
  {
    title: "Frameworks",
    stack: [
      "/nextjs-svgrepo-com.svg",
      "/express-svgrepo-com.svg",
      "/tailwind-svgrepo-com.svg",
    ],
  },
  {
    title: "Libraries",
    stack: [
      "/react-javascript-js-framework-facebook-svgrepo-com.svg",
      "/redux-svgrepo-com.svg",
      "/node-js-svgrepo-com.svg",
      "/mongoose.png",
      "/gsap.svg",
      "/framer-motion-seeklogo.com.svg",
    ],
  },
  {
    title: "Tools",
    stack: [
      "/git-svgrepo-com.svg",
      "/github-color-svgrepo-com.svg",
      "/scss2-svgrepo-com.svg",
      "/powerbi-svgrepo-com.svg",
    ],
  },
  {
    title: "ORM",
    stack: ["/sequelize-svgrepo-com.svg"],
  },
  {
    title: "Databases",
    stack: ["/postgressql.png", "/mongodb-logo-svgrepo-com.svg"],
  },
];
const imageAnimate = {
  offScreen: { x: -1000 },
  onScreen: {
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.3,
    },
  },
};
const imageAnimate2 = {
  offScreen: { x: 1000 },
  onScreen: {
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.3,
    },
  },
};
export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.titleContainer}
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={imageAnimate} className={styles.title}>
          Ski
        </motion.div>
        <motion.div variants={imageAnimate2} className={styles.title}>
          lls
        </motion.div>
      </motion.div>
      <div className={styles.window}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {tabs.map((item) => (
              <li
                key={item.title}
                className={
                  item === selectedTab
                    ? `${styles.selected} ${styles.li}`
                    : `${styles.li}`
                }
                onClick={() => setSelectedTab(item)}
              >
                {`${item.title}`}
                {item === selectedTab ? (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.main}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.title : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.logoContainer}
            >
              {selectedTab &&
                selectedTab.stack.map((i: any, key: any) => (
                  <img src={i} className={styles.logos} key={key} />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
