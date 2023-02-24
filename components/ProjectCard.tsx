import styles from "../styles/ProjectCard.module.scss";

export default function ProjectCard() {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.title}>GQ Magazine</div>
      <div className={styles.text}>
        Lorem ipsum loe asud enald daie daler adfa qe aldf uq e r adaf d adfadf
        Lorem ipsum loe asud enald daie daler adfa qe aldf uq e r adaf d adfadf{" "}
      </div>
      <div className={styles.stackContainer}>
        <div className={styles.stack}>React</div>
        <div className={styles.stack}>Mongodb</div>
      </div>
      <div className={styles.tag}>Freelance</div>
    </div>
  );
}
