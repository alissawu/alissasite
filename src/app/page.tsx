// landing page
import Image from 'next/image';
export default function Home() {
  return (
    <>
      {/* nav bar (sticky, at top) */}
      <nav>
        <div className="logo">AW</div>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/education">Education</a></li>
        </ul>
      </nav>

      {/* landing page */}
      <main>
        <section className="hero">
          {/* dot art portrait. diff sizes for diff screen sizes */}
          <div className="portrait">
            <Image 
              src="/portrait.png"
              alt="Alissa Wu"
              width={729}
              height={1214}
              priority
              className="portrait-img"
            />
          </div>

          {/* content / about */}
          <div className="content">
            <h1>ALISSA WU</h1>
            
            <p className="tagline">
              CS+Math at NYU | Dev Team, Tech@NYU ; Quant Team, Stern Business Analytics Club | Prev @ Visa, Interos.ai, AYR.ai
            </p>
            
            {/* social links */}
            <div className="social-links">
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
            
            <p className="bio">
              bio placeholder.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}