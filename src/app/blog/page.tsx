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
    id: 'qol',
    title: 'High +QOL/Price Ratio Items',
    date: 'May 11, 2026',
    preview: 'Little things I have bought that have outsized positive impacts on my QOL'
  },
  {
    id: 'doodles',
    title: 'Doodles',
    date: 'March 11, 2026',
    preview: 'A collection of notes app doodles (obviously not comprehensive, some are Secret).'
  },
  {
    id: 'bert',
    title: 'How BERT Works (incomplete)',
    date: 'December 16, 2025',
    preview: 'I\'m mostly just writing this to log what I learned in NLP. ALso I\'m not done.'
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
