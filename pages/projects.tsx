import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.scss";
import { projectsInfo } from "../data";
import { useState } from "react";
export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredArray =
    filter === "All"
      ? projectsInfo
      : projectsInfo.filter((i: any) => i.tag === filter);

  console.log(filter, "filter");
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.filterContainer}>
        <div className={styles.filter} onClick={() => setFilter("All")}>
          <div className={styles.filterInner}></div>
          <a href="#">All</a>
        </div>
        <div
          className={styles.filter}
          onClick={() => setFilter("Long Lost Friends")}
        >
          <div className={styles.filterInner2}></div>
          <a href="#">Long Lost Friends</a>
        </div>
        <div
          className={styles.filter}
          onClick={() => setFilter("Side project")}
        >
          <div className={styles.filterInner3}></div>
          <a href="#">Side-projects</a>
        </div>
        <div className={styles.filter} onClick={() => setFilter("Freelance")}>
          <div className={styles.filterInner4}></div>
          <a href="#">Freelance</a>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {filteredArray.map((i: any, key: any) => (
          <ProjectCard
            website={i.website}
            github={i.github}
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
