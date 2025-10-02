// top navigation bar
import styles from './nav.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>AW</div>
      <ul className={styles.navList}>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/work">Work</a></li>
      </ul>
    </nav>
  );
}