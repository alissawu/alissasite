import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from './math.module.css';

interface MathProblem {
  id: string;
  title: string;
  date: string;
}

const problems: MathProblem[] = [
    {
    id: 'coin-flip-probability',
    title: 'You flip a fair coin 100 times. What is the probability that the total number of heads is odd?',
    date: 'September 27, 2025'
  },
  {
    id: 'rock-paper-scissors-optimal',
    title: 'You are playing rock paper scissors with a perfectly optimal opponent. However, players lose the overall game the first time that they lose with rock, the first time they lose with paper, or the third time they lose with scissors. Wins and ties do not affect this count. Losses do not have to be consecutive. What is your strategy?',
    date: 'September 26, 2025'
  },
  {
    id: 'echo-perfect-square',
    title: 'For a given positive integer x, define its echo to be x printed twice in a row. For example the echo of 23 would be 2323. Can you find an integer with an echo that is a perfect square? If you can, explain what qualifies an integer to work. If you believe none exist, provide a proof. This does not need to be completely rigorous, but should follow the framework of a mathematical proof; a simple justification or trial of a few cases will not suffice.',
    date: 'September 26, 2025'
  }
];

export default function Math() {
  return (
    <>
      <Navigation />

      <main className={styles.mathPage}>
        <h1 className={styles.pageTitle} style={{ fontSize: '3rem' }}>Math Problems</h1>

        <div className={styles.problemsList}>
          {problems.map((problem) => (
            <Link
              key={problem.id}
              href={`/math/${problem.id}`}
              className={styles.problemCard}
            >
              <div className={styles.problemContent}>
                <p className={styles.problemTitle}>{problem.title}</p>
                <p className={styles.problemDate}>{problem.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
