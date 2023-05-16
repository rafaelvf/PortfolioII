import styles from "../styles/Nav.module.scss";
import Link from "next/link";
export default function Nav() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img src="/LogoFi-02.png" className={styles.logo} />
      </Link>
    </div>
  );
}
