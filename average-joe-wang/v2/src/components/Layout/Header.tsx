import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          The Average Joe{" "}
          <a
            href="https://en.wikipedia.org/wiki/Wang_(surname)"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.highlight}>Wang's</span>
          </a>{" "}
          Home Page
        </h1>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : undefined}>
            Home
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? styles.active : undefined}>
            Resume
          </NavLink>
          <NavLink to="/notes" className={({ isActive }) => isActive ? styles.active : undefined}>
            Study Notes
          </NavLink>
          <NavLink to="/interests" className={({ isActive }) => isActive ? styles.active : undefined}>
            Interests
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
