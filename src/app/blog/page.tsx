import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from './blog.module.css';
import fs from 'fs';
import path from 'path';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
}

// dynamically load all blog posts from the posts directory
function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

  // if no posts, return / render nothing
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName: string) => fileName.endsWith('.tsx') || fileName.endsWith('.ts'))
    .map((fileName: string) => {
      const id = fileName.replace(/\.(tsx|ts)$/, '');
      const filePath = path.join(postsDirectory, fileName);

      // dynamic import get metadata
      const postModule = require(`./posts/${fileName.replace(/\.(tsx|ts)$/, '')}`);
      return {
        id,
        ...postModule.metadata
      };
    });

  return posts;
}

export default function Blog() {
  const posts = getBlogPosts();

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
