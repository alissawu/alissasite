// TEMPLATE FOR NEW BLOG POSTS

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from '../post.module.css';

export default function ExamplePost() {
  return (
    <>
      <Navigation />

      <main className={styles.postPage}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>

        <article className={styles.postContent}>
          <h1>Song Recommendations</h1>
          <p className={styles.date}>October 7, 2025 </p>

          <section>
            <p>
              After a summer at Citadel, my friend decided to drop quant and pursue his lifelong dream of being a DJ. 
              I didn&apos;t understand it at first, but a summer in SF showed me that the people who truly do what they want are happier. 
              He&apos;s been at Stanford for the last 4 years, so I guess the culture inspired him sooner. 
              Anyway, he&apos;s a hardcore West-Coast lover, and I&apos;ve spent my whole life on the East Coast, 
              so the goal here was to introduce NYC-ish sounds to his sound-repository.
            </p>
            <p>
              So this isn&apos;t geared to my tastes, but rather the overlap of what I like and what I hear in NYC,
              along with some unique sounds I thought were pretty good. The categories are not rigorous.
            </p>
            <p>
              Classic EDM-ish: <br />
              Rave Love - W&W, AXMO, SONJA <br />
              edmLUV - nanobii <br />
              Next to Me - Mqx <br />
              Back Home - Gym Class Heroes, suyan remix <br />
              Sonder x Blame Myself - Kronus Mashup (soundcloud) <br />
              <hr />
              UK Speed Garage: <br />
              Black Beatles - Rae Sremmurd, Leo Wait remix <br />
              Yosemite - Wilkinson Remix - KETTAMA <br />
              Never Wanted It To End - FULLCLIP <br />
              <hr />
              Vibes: <br />
              ava - xo <br />
              Gajowka - Bassvictim <br />
              Girl Party - MGNA Crrta <br />
              Unifier - Ayegy, User2222 <br />
              Lover - kadi (soundcloud) <br />
              rotten - anna luna <br />
              Xoxo - Feng <br />
              <hr />
              Alt Vocals: <br />
              blush [2019] - damon r. <br />
              Hot Fun - The Hellp <br />
              Ether - The Hellp <br />
              Forever salty - Bassvictim <br />
              Canary Wharf drift - Bassvictim, Oatmilkandcodeine <br />
              GTHRMX - Suzy Sheer <br />
              Under Your Spell - Snow Strippers <br />
              beginning - 2hollis <br />
              <hr />
              Ethereal vibe: <br />
              Electronica - Brothel in Belize <br />
              Passionate Highs - Snow Strippers <br />
              Days - Suzy Sheer <br />
              Cycles - Switch Angel Remix - DJ_Dave, Switch Angel
              <hr />
              Electro-dance: <br />
              movies for guys - Jane Remover <br />
              JAM! - BETWEEN FRIENDS <br />
              CECIL Mc BEE - Lilniina <br />
            </p>
          </section>
        </article>
      </main>
    </>
  );
}

