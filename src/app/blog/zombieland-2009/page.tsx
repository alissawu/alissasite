import Navigation from '@/components/Navigation';
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
          <h1>My Thoughts on Jesse Eisenberg, and Zombieland (2009)</h1>
          <p className={styles.date}>October 15, 2025 </p>

          <section>
            <p>
              Techies <i>love</i> &quot;The Social Network&quot;. It&apos;s practically the holy grail media piece of Bay Area startup culture.
              And I most commonly see people interested in Mark Zuckerberg, but honestly?
              Sure, he&apos;s smart and all, but his actor has a <i>much</i> better face. 
              I mean, there are entire TikToks dedicated to analyzing how Zuck&apos;s glowup (new hair and all) was inspired by Jesse Eisenberg.
              So obviously, instead of watching the movie (I don&apos;t watch good movies alone, because a good movie is a good experience, 
              and spending time with friends/loved ones is a good experience, so watching a good movie alone is limiting the
              highest potential of the experience.), I watched Jesse Eisenberg tiktoks instead, and decided I wanted to watch one of his movies.
            </p>
            <p>
              &quot;Now You Can See Me&quot; seemed interesting, so for the same reasons as &quot;The Social Network&quot;, I decided to put it off.
              That left me with some movie about a summer camp, and a zombie movie. I&apos;d actually seen an edit of the zombie movie (to the song Mishka by Poshlaya Molly!
              would be much cooler and nicher if it <i>hadn&apos;t</i> just blown up on TikTok. Ugh, my claim to niche taste.), so obviously, I open up this ticket I&apos;m doing
              for Tech@NYU dev team, and attach my iPad as a second screen, and pull up Zombieland (2009) on some shady piracy site.
              Actually, I went on Netflix first, but after 8 years of using my middle school friend&apos;s account, Netflix finally enforced anti password-sharing by checking if all devices share
              the same home wifi...Netflix you&apos;re such a ***
            </p>
            <p>
              For the record, I probably would get Netflix if I actually watched more than like 2 hours of English media every few weeks...but since I don&apos;t it&apos;s just not worthwhile.
              When I get back into [favorite show, redacting because if an opp finds this they might SPOIL it for me and then i will have to do bad things...also no i don't mean black mirror though that&apos;s also a fave], i will subscribe, cuz it's a 
              smoother interface than piracy, which is worth it for my favorite show, but that aside,
              nothing else is worthwhile.
            </p>
            <p>
                Actually, I don&apos;t have much to say about the movie. I thought the intro would be funnier. 
                It seemed really stupid. There were like no stakes. No relevant backstory to the characters.
                It was basically a comedy movie. It&apos;s all about Jesse Eisenberg&apos;s character&apos;s quest to pull women basically.
                I mean it&apos;s a &quot;quest for survival&quot;, but the plot is about him and women.
            </p>
            <p>
                Also the kiss at the end was really awkward. I could see it coming, and didn&apos;t watch it.
                Not because I&apos;m Puritan or anything, it just didn&apos;t feel like they established the emotional build-up enough.
                Can movie directors STOP making movies with a male MC, and putting a woman in the &quot;main character group&quot;, and automatically
                assuming the presence of a man and a woman is enough to imply/establish a romantic subtext? ugh!
            </p>
            <p>
                (PS: the tiktoks)
                <a href="https://www.tiktok.com/t/ZP8AQuY4R/">
                Jesse Eisenberg - Zombieland (2009), Mishka </a>
                <a href="https://www.tiktok.com/t/ZP8AQrCUk/">
                Jesse Eisenberg - Zombieland (2009), Pumped Up Kicks
                </a>
            </p>


          </section>
        </article>
      </main>
    </>
  );
}

