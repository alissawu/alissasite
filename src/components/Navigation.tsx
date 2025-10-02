// top navigation bar
import Link from 'next/link';
import styles from './nav.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>AW</div>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/work">Work</Link></li>
        <li><Link href="/math">Math</Link></li>
      </ul>
    </nav>
  );
}