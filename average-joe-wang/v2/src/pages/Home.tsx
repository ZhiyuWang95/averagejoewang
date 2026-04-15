import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>Welcome!</h2>
      <p>
        Hi, I'm <strong>Joe</strong>. Welcome to my average website where I
        share my average professional journey, average study notes, and normal
        personal interests.
      </p>
      <Link to="/resume" className={styles.btn}>
        View My Resume / Portfolio
      </Link>
    </section>
  );
}
