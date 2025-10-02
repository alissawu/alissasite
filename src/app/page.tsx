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
              CS+Math at NYU | Dev Team @ Tech@NYU, Quant Team @ Stern Business Analytics Club
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
              bio placeholder.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}