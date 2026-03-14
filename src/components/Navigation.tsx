// top navigation bar
import Link from 'next/link';
import styles from './nav.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>AW</div>
      <ul className={styles.navList}>
        <li>
          <Link href="/" prefetch={true}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" prefetch={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/work" prefetch={true}>
            Work
          </Link>
        </li>
        <li>
          <Link href="/math" prefetch={true}>
            Math
          </Link>
        </li>
        <li>
          <Link href="/blog" prefetch={true}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/photos" prefetch={true}>
            Photos
          </Link>
        </li>
      </ul>
    </nav>
  );
}