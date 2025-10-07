// TEMPLATE PAGE TO RENDER ALL THE POSTS IN /POSTS
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const { slug } = params;

  try {
    // Dynamically import the blog post component
    const PostComponent = require(`../posts/${slug}`).default;
    return <PostComponent />;
  } catch (error) {
    notFound();
  }
}

// static params for all blog posts
export async function generateStaticParams() {
  const fs = require('fs');
  const path = require('path');

  const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName: string) => fileName.endsWith('.tsx') || fileName.endsWith('.ts'))
    .map((fileName: string) => ({
      slug: fileName.replace(/\.(tsx|ts)$/, '')
    }));
}
