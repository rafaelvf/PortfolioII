import styles from "../styles/ProjectCard.module.scss";

type Props = {
  website: string;
  github?: string;
  title: string;
  text: string;
  stack: [];
  tag: string;
  grid: boolean;
};

export default function ProjectCard({
  website,
  github,
  title,
  text,
  stack,
  tag,
  grid,
}: Props) {
  return (
    <div className={grid ? styles.container : styles.containerList}>
      <div className={grid ? styles.iconContainer : styles.iconContainerList}>
        <a href={website} target="_blank" rel="noopener noreferrerz">
          <img
            src="/link_FILL0_wght400_GRAD0_opsz48.svg"
            className={styles.icon2}
          />
        </a>
        {github !== "" && (
          <a href={github} target="_blank" rel="noopener noreferrerz">
            <div className={styles.icon}></div>
          </a>
        )}
      </div>
      <a href={website} target="_blank" rel="noopener noreferrerz">
        <div
          className={
            grid
              ? tag === "Freelance"
                ? `${styles.title} ${styles.titleFreelance}`
                : tag === "Side project"
                ? `${styles.title} ${styles.titleSide}`
                : `${styles.title} ${styles.titleLLF}`
              : tag === "Freelance"
              ? `${styles.titleList} ${styles.titleListFreelance}`
              : tag === "Side project"
              ? `${styles.titleList} ${styles.titleListSide}`
              : `${styles.titleList} ${styles.titleListLLF}`
          }
        >
          {title}
        </div>
      </a>
      <div className={grid ? styles.text : styles.textList}>{text}</div>
      <div className={grid ? styles.stackContainer : styles.stackContainerList}>
        {stack.map((i: any, key: any) => (
          <div className={styles.stack} key={key}>
            {i}
          </div>
        ))}
      </div>
      <div
        className={
          grid
            ? tag === "Freelance"
              ? `${styles.tag} ${styles.tagFreelance}`
              : tag === "Side project"
              ? `${styles.tag} ${styles.tagSide}`
              : `${styles.tag} ${styles.tagLLF}`
            : tag === "Freelance"
            ? `${styles.tagList} ${styles.tagListFreelance}`
            : tag === "Side project"
            ? `${styles.tagList} ${styles.tagListSide}`
            : `${styles.tagList} ${styles.tagListLLF}`
        }
      >
        {tag}
      </div>
    </div>
  );
}
