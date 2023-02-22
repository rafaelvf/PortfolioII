import styles from "../styles/Birds.module.scss";

export default function Birds() {
  return (
    <div className={styles.container}>
      <div className={`${styles.birdContainer} ${styles.birdContainerOne}`}>
        <div className={`${styles.bird} ${styles.birdOne}`}></div>
      </div>

      <div className={`${styles.birdContainer} ${styles.birdContainerTwo}`}>
        <div className={`${styles.bird} ${styles.birdTwo}`}></div>
      </div>

      <div className={`${styles.birdContainer} ${styles.birdContainerThree}`}>
        <div className={`${styles.bird} ${styles.birdThree}`}></div>
      </div>

      <div className={`${styles.birdContainer} ${styles.birdContainerFour}`}>
        <div className={`${styles.bird} ${styles.birdFour}`}></div>
      </div>
    </div>
  );
}
