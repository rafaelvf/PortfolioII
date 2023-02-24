import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.scss";

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <div className={styles.filterInner}></div>
          <a href="#">All</a>
        </div>
        <div className={styles.filter}>
          <div className={styles.filterInner2}></div>
          <a href="#">Work Projects</a>
        </div>
        <div className={styles.filter}>
          <div className={styles.filterInner3}></div>
          <a href="#">Side-projects</a>
        </div>
        <div className={styles.filter}>
          <div className={styles.filterInner4}></div>
          <a href="#">Freelance</a>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <ProjectCard />
      </div>
    </div>
  );
}
