// landing page
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import styles from './home.module.css';

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
              CS+Math at NYU | Dev Team @ Tech@NYU
            </p>
  
            <p>
              Prev SWE @ Visa, R&D DS @ Interos.ai, Data Science Research @ Duke, SDE @ AYR.ai, Algo Research @ NJIT
            </p>
            
            {/* social links */}
            <div className={styles.socialLinks}>
              <a href="https://github.com/alissawu" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/alissawu" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://x.com/alissawuu" target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href="mailto:aw5571@nyu.edu">
                Email
              </a>
            </div>
            
            <p className={styles.bio}>
            I&apos;m a junior studying CS and Math at NYU. 
            I&apos;m mainly a software engineer, though I have done some MLE projects, and I enjoy math. 
            I want to add a page of interesting math problems I&apos;ve solved, if I can find all of them.
            </p>
            <p className={styles.bio}>
            I&apos;m on Tech@NYU&apos;s Dev Team,
            I&apos;m a member of Women in Computing, Business Analytics Club, and I volunteer with Give Where You Live! 
            </p>
            <p className={styles.bio}>
            I&apos;ve attended Point72 Investment Academy. I was also a DTech Scholar this summer, and attended many events in SF, like YC Summer Conference 2025.
            I&apos;m also hoping to add blog posts; at least one would be about Garry Tan&apos;s &quot;Prompt or Be Prompted&quot; speech. 
            </p>
            <p className={styles.bio}>
            I&apos;m a National Merit Scholarship Awardee.
            I transferred from Duke for cultural fit reasons. 
            Pre-transfer I was involved with Duke Quant, Art Union (Events Committee), and DTech (still involved!). 
            </p>
          </div>
        </section>
      </main>
    </>
  );
}