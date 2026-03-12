import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from '../post.module.css';
import PanelCarousel from '@/components/PanelCarousel';

export default function DoodlesPage() {
  return (
    <>
      <Navigation />

      <main className={styles.postPage}>
        <Link href="/blog" className={styles.backLink}>
          &larr; Back to Blog
        </Link>

        <article className={styles.postContent}>
          <h1>Doodles</h1>
          <p className={styles.date}>'A collection of notes app doodles (obviously not comprehensive, some are Secret).</p>

          <section>
            <PanelCarousel
              title="Doodles"
              slug="doodles"
              basePath="/blog/doodles/"
              showSpoilerControls={false}
              panels={[
                {
                  src: "angrypitchforkcat.jpeg",
                  description: "angry cat with a pitchfork watch out"
                },
                {
                  src: "appupdates.jpeg",
                  description: "lol"
                },
                {
                  src: "oohcat.jpeg",
                  description: "interested / excited cat"
                },
                {
                  src: "bubblememe.jpeg",
                  description: "this is basically the entirety of techtwitter"
                },
                {
                  src: "brithaircuts.jpeg",
                  description: "the options brit barbers probably give their clients"
                }
              ]}
            />
          </section>
        </article>
      </main>
    </>
  );
}
