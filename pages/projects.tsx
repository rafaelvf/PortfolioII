import styles from "../styles/ProjectsPage.module.scss";

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>All</div>
        <div className={styles.filter}>Work projects</div>
        <div className={styles.filter}>Freelance</div>
        <div className={styles.filter}>Side-Projects</div>
      </div>
    </div>
  );
}
