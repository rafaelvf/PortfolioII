import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.scss";
import { projectsInfo } from "../data";
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
          <a href="#">Long Lost Friends</a>
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
        {projectsInfo.map((i: any, key: any) => (
          <ProjectCard
            website={i.website}
            title={i.title}
            text={i.text}
            stack={i.stack}
            tag={i.tag}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
