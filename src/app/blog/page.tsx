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
    id: 'song-recs',
    title: 'Songs to Recommend to a DJ',
    date: 'October 7, 2025',
    preview: 'Song recs for west-coast music artists looking to diversify their sounds with east-coast music'
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
