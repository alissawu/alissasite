import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../post.module.css';

export default function Poast() {
  return (
    <>
      <Navigation />

      <main className={styles.postPage}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>

        <article className={styles.postContent}>
          <h1>High +QOL/Price Ratio Items</h1>
          <p className={styles.date}>May 11, 2026</p>

          <section>
            <p>
              Little things I&apos;ve bought that have had outsized positive impacts on my quality of life.
            </p>
            <p>
              This list is ongoing. I&apos;ll add to it as I find more.
            </p>
          </section>

          <section>
            <h2>1. A portable charger with 100W output</h2>
            <p>
              Study cafes occasionally intentionally lack outlets, to discourage you from staying
              too long. A good power bank makes this someone else&apos;s problem. 100W output is fast enough to
              properly charge a large laptop (I have a 16-in M2 Max MacBook Pro), and at 25,000mAh, the capacity
              sits just under the TSA carry-on limit, so you can carry it with you wherever you go without any worries. 
              I got{' '}
              <a
                href="https://www.amazon.com/INIU-Charging-25000mAh-Ultimate-Compatible/dp/B08VDJP7WN"
                target="_blank"
                rel="noopener noreferrer"
              >
                this INIU one 
              </a>{' '}
              for $60. It&apos;s a little heavy (I&apos;ve often called it a &lsquo;brick&rsquo;), but worth it IMO.
            </p>
          </section>

          <section>
            <h2>2. Individually wrapped flossers</h2>
            <p>
              Marginally more expensive than the regular bagged kind, but definitely worth the few extra bucks. 
              They&apos;re tiny and individually wrapped, so you can keep a few in your bag and forget about
              them until the exact moment you have food stuck in your teeth &mdash; I use{' '}
              <a
                href="https://www.amazon.com/gp/aw/d/B0DP4K4QLQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                these
              </a>.
            </p>
          </section>

          <section>
            <h2>3. An SD card reader</h2>
            <p>
              For the digicam person of the friend group, or other hobby/professional photographers: transfer photos straight to your phone instead of going
              camera &rarr; laptop &rarr; phone. Extreme convenience upgrade for under $10 &mdash;{' '}
              <a
                href="https://www.amazon.com/Hicober-USB-Card-Reader-Camera-Android/dp/B07T55DL33"
                target="_blank"
                rel="noopener noreferrer"
              >
                this Hicober one
              </a>{' '}
              is USB-C compatible.
            </p>
            <Image
              src="/blog/qol/sd-card-convo.png"
              alt="iMessage conversation about SD card readers"
              width={1256}
              height={538}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </section>

          <section>
            <h2>4. Earbuds with noise cancellation</h2>
            <p>
              Everyone ends up doing work in loud environments (library w ppl talking, cafes, outside, coworking space where people are taking calls), and being able to
              tune it all out is so frequently useful. I currently have the AirPods 4 with
              noise cancellation (do not get these, the battery life sucks. I bought them after
              losing my Pros with the intent to try them out, then missed the return deadline. I would repurchase the AirPods Pro 2nd/3rd Gen. I&apos;ve heard good things about AirPods Maxes but I haven&apos;t bought it bc it squashes my hair and makes my face look like an egg.)
              I think AirPods Pros are vastly worthwhile, but even if you&apos;re more cost-sensitive, make sure to get a pair w/ noise cancelling feature.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
