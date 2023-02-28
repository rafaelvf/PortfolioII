import styles from "../styles/ProjectCard.module.scss";

type Props = {
  website: string;
  github?: string;
  title: string;
  text: string;
  stack: [];
  tag: string;
};

export default function ProjectCard({
  website,
  github,
  title,
  text,
  stack,
  tag,
}: Props) {
  console.log(github, "github");
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
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
            tag === "Freelance"
              ? `${styles.title} ${styles.titleFreelance}`
              : tag === "Side project"
              ? `${styles.title} ${styles.titleSide}`
              : `${styles.title} ${styles.titleLLF}`
          }
        >
          {title}
        </div>
      </a>
      <div className={styles.text}>{text}</div>
      <div className={styles.stackContainer}>
        {stack.map((i: any, key: any) => (
          <div className={styles.stack} key={key}>
            {i}
          </div>
        ))}
      </div>
      <div
        className={
          tag === "Freelance"
            ? `${styles.tag} ${styles.tagFreelance}`
            : tag === "Side project"
            ? `${styles.tag} ${styles.tagSide}`
            : `${styles.tag} ${styles.tagLLF}`
        }
      >
        {tag}
      </div>
    </div>
  );
}
