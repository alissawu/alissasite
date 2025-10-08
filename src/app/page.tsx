// landing page
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { Github, Linkedin, Mail } from 'lucide-react';
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
              CS+Math at NYU | Dev Team @ Tech@NYU | Prev Software & Data @ Visa, Interos, Point72, Duke, AYR, NJIT
            </p>

            <p className={styles.bio}>
            I&apos;m a junior studying CS and Math at NYU.
            I&apos;m mainly a software engineer, though I have done some data science / MLE work.
            I enjoy interesting math problems (think: logic puzzles, interesting proofs, etc), which is what my Math page is about.
            </p>
            <p className={styles.bio}>
            I&apos;m on Tech@NYU&apos;s Dev Team, NYU&apos;s premier & most competitive software organization.
            I&apos;m a member of Business Analytics Club, BUGS (Open Source Club), and I volunteer with Give Where You Live!
            </p>
            <p className={styles.bio}>
            I&apos;ve attended Point72 Investment Academy. I became a DTech (Women in Tech) Scholar this summer, and attended many events in SF, like YC Summer Conference 2025.
            I&apos;m also hoping to add blog posts; at least one would be about Garry Tan&apos;s &quot;Prompt or Be Prompted&quot; speech.
            </p>
            <p className={styles.bio}>
            I&apos;m a National Merit Scholarship Awardee.
            Pre-transfer I was involved with Duke Quant and DUU Art Union (Events Committee).
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
                href="https://x.com/alissawuu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Alissa's X profile"
                data-platform="x"
              >
                <XIcon />
              </a>
              <a
                href="mailto:aw5571@nyu.edu"
                aria-label="Email Alissa"
                data-platform="email"
              >
                <Mail size={24} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}