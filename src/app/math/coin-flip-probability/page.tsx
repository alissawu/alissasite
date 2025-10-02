import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from './problem.module.css';

export default function CoinFlipProbability() {
  return (
    <>
      <Navigation />

      <main className={styles.problemPage}>
        <Link href="/math" className={styles.backLink}>
          ← Back to Math Problems
        </Link>

        <article className={styles.problemContent}>
          <h1>Coin Flip Probability</h1>
          <p className={styles.date}>October 2, 2025</p>

          <section className={styles.question}>
            <h2>Question</h2>
            <p>
              You flip a fair coin 100 times. What is the probability that the total number of heads is odd?
            </p>
          </section>

          <section className={styles.solution}>
            <h2>Solution</h2>
            <p>
              At 99 flips, you either have an odd or even number of heads. 
              So the probability entirely depends on the last flip, making the answer 1/2.
            </p>
            <p>
              Apparently this was a QFS interview question. We were talking about this after an 8am discrete math lecture.
              QFS and BAC Quant ran their interviews around the same time, I guess. I heard quant conversations in the library for like a week, lol.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
