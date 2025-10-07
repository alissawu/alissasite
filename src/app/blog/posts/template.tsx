// TEMPLATE FOR NEW BLOG POSTS
// Copy this file and rename it to your blog post slug (e.g., my-first-post.tsx)
// Fill in the metadata and replace the content in the BlogPostContent component

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from '../post.module.css';

// Export metadata for the blog listing page
export const metadata = {
  title: 'Songs to Recommend to a DJ',
  date: 'October 7, 2025',
  preview: 'This is mostly an excuse to post music I like, and to see how a blog post looks.'
};

// The actual blog post content
function BlogPostContent() {
  return (
    <>
      <Navigation />

      <main className={styles.postPage}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>

        <article className={styles.postContent}>
          <h1>{metadata.title}</h1>
          <p className={styles.date}>{metadata.date}</p>

          <section>
            <p>
              I have a friend who dropped quant to pursue being a DJ. He's a hardcore West-Coast lover, 
              and I've spent my whole life on the East Coast (aside from this summer in SF, which I really liked!), 
              so the goal here was to introduce NYC-ish sounds to his sound-repository.
            </p>
            <p>
              So this isn't geared to my tastes, but rather the overlap of what I like and what I hear in NYC,
              along with some unique sounds I thought were pretty good.
              Obviously the categories aren't great, and there's a lot of overlap, but this is fun for a first blog post. 
              I'll probably revise it later...
            </p>
            <p>
              Classic EDM-ish: 
              Rave Love - W&W, AXMO, SONJA <br />
              edmLUV - nanobii <br />
              Next to Me - Mqx <br />
              Back Home - Gym Class Heroes, suyan remix <br />
              Sonder x Blame Myself - Kronus Mashup (soundcloud) <br />
              <hr />
              UK Speed Garage:
              Black Beatles - Rae Sremmurd, Leo Wait remix <br />
              <hr />
              Vibes:
              ava - xo <br />
              Gajowka - Bassvictim <br />
              Girl Party - MGNA Crrta <br />
              Unifier - Ayegy, User2222 <br />
              Lover - kadi (soundcloud) <br />
              rotten - anna luna <br />
              Xoxo - Feng <br />
              <hr />
              Alt Vocals:
              blush [2019] - damon r.
              Hot Fun - The Hellp <br />
              Ether - The Hellp <br />
              Forever salty - Bassvictim <br />
              Canary Wharf drift - Bassvictim, Oatmilkandcodeine <br />
              GTHRMX - Suzy Sheer <br />
              Under Your Spell - Snow Strippers <br />
              beginning - 2hollis <br />
              <hr />
              Ethereal vibe: 
              Electronica - Brothel in Belize <br />
              Passionate Highs - Snow Strippers <br />
              Days - Suzy Sheer <br />
              Cycles - Switch Angel Remix - DJ_Dave, Switch Angel
              <hr />
              Electro-dance:
              movies for guys - Jane Remover <br />
              JAM! - BETWEEN FRIENDS <br />
              CECIL Mc BEE - Lilniina <br />
              <hr />
              Opener / Ski music:
              Yosemite - Wilkinson Remix - KETTAMA 
            </p>
          </section>

        </article>
      </main>
    </>
  );
}

export default BlogPostContent;
