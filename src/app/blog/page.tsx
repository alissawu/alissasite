import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from './blog.module.css';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
}

const posts: BlogPost[] = [
  {
    id: 'zombieland-2009',
    title: 'Zombieland (2009)',
    date: 'October 15, 2025',
    preview: 'I\'m into Jesse Eisenberg lately, so here\'s an honest review of Zombieland (2009).'
  },
  {
    id: 'song-recs',
    title: 'Songs to Recommend to a DJ',
    date: 'October 7, 2025',
    preview: 'After a summer at Citadel, my friend decided to drop quant and pursue his lifelong dream of being a DJ.'
  }
];

export default function Blog() {

  return (
    <>
      <Navigation />

      <main className={styles.blogPage}>
        <h1 className={styles.pageTitle}>Blog</h1>

        <div className={styles.postsList}>
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className={styles.postCard}
              prefetch={true}
            >
              <div className={styles.postContent}>
                <p className={styles.postTitle}>{post.title}</p>
                <p className={styles.postDate}>{post.date}</p>
                <p className={styles.postPreview}>{post.preview}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
