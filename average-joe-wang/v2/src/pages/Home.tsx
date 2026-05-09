import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>Welcome!</h2>
      <p>
        Hi, I'm <strong>Joe</strong> — software engineer by day, Googler of
        error messages by night. This is my corner of the internet where I
        document my professional journey, pretend my notes are organized, and
        overshare about my interests.
      </p>
      <Link to="/resume" className={styles.btn}>
        View My Resume / Portfolio
      </Link>
    </section>
  );
}
