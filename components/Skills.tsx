import styles from "../styles/Skills.module.scss";
import { useState } from "react";
//import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Languages", "Frameworks", "Libraries", "Tools"];

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>SKILLS</div>
      <div className={styles.window}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {tabs.map((item) => (
              <li
                key={item}
                //id={styles.id}
                className={
                  item === selectedTab
                    ? `${styles.selected} ${styles.li}`
                    : `${styles.li}`
                }
                onClick={() => setSelectedTab(item)}
              >
                {`${item}`}
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
              key={selectedTab ? selectedTab : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab : "😋"}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
