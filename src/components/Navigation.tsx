// top navigation bar
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './nav.module.css';

export default function Navigation() {
  const router = useRouter();

  const handleMouseDown = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Trigger on left click (button 0)
    if (e.button === 0) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>AW</div>
      <ul className={styles.navList}>
        <li>
          <Link href="/" prefetch={true} onMouseDown={(e) => handleMouseDown(e, '/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" prefetch={true} onMouseDown={(e) => handleMouseDown(e, '/projects')}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/work" prefetch={true} onMouseDown={(e) => handleMouseDown(e, '/work')}>
            Work
          </Link>
        </li>
        <li>
          <Link href="/math" prefetch={true} onMouseDown={(e) => handleMouseDown(e, '/math')}>
            Math
          </Link>
        </li>
        <li>
          <Link href="/blog" prefetch={true} onMouseDown={(e) => handleMouseDown(e, '/blog')}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}