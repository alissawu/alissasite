// landing page
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { Github, Linkedin } from 'lucide-react';
import styles from './home.module.css';

// X (Twitter) icon - not available in lucide-react, using custom SVG
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="24" height="24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* NAV BAR */}
      <Navigation />

      {/* landing page */}
      <main className={styles.homePage}>
        <section className={styles.hero}>
          {/* dot art portrait. diff sizes for diff screen sizes */}
          <div className={styles.portrait}>
            <Image 
              src="/portrait.png"
              alt="Alissa Wu"
              width={729}
              height={1214}
              priority
              sizes="(max-width: 480px) 250px, (max-width: 768px) 320px, 400px"
              className={styles.portraitImg}
            />
          </div>

          {/* content / about */}
          <div className={styles.content}>
            <h1>ALISSA WU</h1>

            <p className={styles.tagline}>
              CS+Math at NYU | Prev Software & Data @ Visa, Interos, Point72, Duke, AYR, NJIT
            </p>

            <p className={styles.bio}>
            I&apos;m a senior studying CS and Math at NYU.
            I&apos;ve mainly worked on software (agent systems, evals, automations) and data (pipelines, RAG, scraping, analytics), though I do pursue other interests.
            I&apos;m currently working through Neel Nanda&apos;s mechinterp roadmap, and will upload some notes once I&apos;m at a good stopping point.
            I enjoy interesting problems. I also like nightcore, ai alignment, cats, light mode, and other somewhat idiosyncratic things.
            </p>
            <p className={styles.bio}>
            I&apos;m the Startup Week Engineering Lead for Tech@NYU, and I&apos;m a member of Stern EEG and Business Analytics Club.
            </p>
            <p className={styles.bio}>
            I&apos;ve attended Point72 Investment Academy. I became a DTech (Women in Tech) Scholar this summer, and attended many events in SF, like YC Summer Conference 2025.
            I&apos;m also hoping to add blog posts; at least one would be about Garry Tan&apos;s &quot;Prompt or Be Prompted&quot; speech.
            </p>
            <p className={styles.bio}>
            I&apos;m a National Merit Scholarship Awardee.
            I was involved with DQF and DUU Art Union (Events Committee).
            </p>
            <p className={styles.bio}>
            I&apos;m driven by a love of exploration, learning, and creation. Software, music, art.
            People become real by creating real things, externalizing intention into the emptiness.
            It&apos;s what makes life meaningful to me.
            </p>
            <p className={styles.bio}>
            (PS: If you explore around, this site may feel incomplete, random, or kind of strange. I haven&apos;t finalized it yet, and also haven&apos;t really linked it anywhere. It&apos;s a work in progress... Notably, the projects page is kinda bare. Welp)
            </p>


            {/* social links */}
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/alissawu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Alissa's GitHub profile"
                data-platform="github"
              >
                <Github size={24} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/alissawu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Alissa's LinkedIn profile"
                data-platform="linkedin"
              >
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a
                href="https://x.com/alissawu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Alissa's X profile"
                data-platform="x"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}