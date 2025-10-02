import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from './problem.module.css';

export default function EchoPerfectSquare() {
  return (
    <>
      <Navigation />

      <main className={styles.problemPage}>
        <Link href="/math" className={styles.backLink}>
          ← Back to Math Problems
        </Link>

        <article className={styles.problemContent}>
          <h1>Echo Perfect Square</h1>
          <p className={styles.date}>October 2, 2025</p>

          <section className={styles.question}>
            <h2>Question</h2>
            <p>
              For a given positive integer x, define its echo to be x printed twice in a row. For example the echo of 23 would be 2323. Can you find an integer with an echo that is a perfect square? If you can, explain what qualifies an integer to work. If you believe none exist, provide a proof. This does not need to be completely rigorous, but should follow the framework of a mathematical proof; a simple justification or trial of a few cases will not suffice.
            </p>
          </section>

          <section className={styles.solution}>
            <h2>Solution</h2>
            <p>
              I&apos;m working on getting the proof up for this (I've solved it, it's just annoying to format and upload a proof; if you've seen my handwriting you'll understand why this is necessary), but it was interesting. 
              I was severely sick with mold poisoning, which I didn&apos;t know at the time, so this took me quite a while to think up. 
              If you want to solve it, think of the factors two numbers would have to independently have versus share to comprise a square number, think of how to represent an echo in terms of its echee(?), and consider &quot;number of integers&quot; reasoning.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
