import Navigation from '@/components/Navigation';
import styles from './work.module.css';

export default function Work() {
  return (
    <>
      <Navigation />
      
      <main className={styles.workPage}>
        <h1>Work Experience</h1>
        
        <div className={styles.intro}> 
         <p>
            SWE @ Visa, Data Research @ Duke, R&D DS @ Interos, Attendee @ Point72 Academy, SDE @ AYR.ai, Research @ NJIT
          </p>
          <p>
            Dev @ Tech@NYU, Competitor @ Stern BAC, Member @ WinC, Member @ NYU BUGS, Scholar @ DTech
         </p>
        </div>

        <div className={styles.timeline}>
          {/* Tech@NYU */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>Tech@NYU Dev Team</h2>
              <p className={styles.role}>Developer • Sept 2025 - Present</p>
              <p className={styles.tech}>Next.js, TypeScript, Cloudfare Workers, Convex API, SQLite, Bun</p>
              <ul>
                <li>Building an all-in-one app for NYU students to find courses, compare professors, and organize schedules.</li>
                <li>Developing a faster, more optimized alternative to Albert with clean UI and responsive calendar features.</li>
                <li>Working on a fast-paced team targeting deployment before Spring 2026 course registration.</li>
              </ul>
            </div>
          </div>


          {/* Visa */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>Visa Inc.</h2>
              <p className={styles.role}>Software Engineer Intern • May 2025 - Aug 2025</p>
              <p className={styles.tech}>Python, MCP, Langchain, Langgraph, JIRA, Kafka, Agile/Scrum, CI/CD</p>
              <ul>
                <li>Built AI incident analysis system reducing MTTR by 75% for 1.5k monthly incidents with 91.4% root cause accuracy</li>
                <li>Increased LangChain agent capacity by 36% via async streaming, connection pooling, and intelligent codebase context retrieval (MCP)</li>
                <li>Engineered parallel search pipeline processing 2.5k+ JIRA tickets per incident via Python asyncio with batched API calls, connection pooling, and streaming results</li>
                <li>Wrote onboarding documentation and streamlined adoption in global SRE teams</li>
                <li>Worked in Agile/Scrum sprint system with daily code reviews</li>
              </ul>
            </div>
          </div>

          {/* DTech */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>DTech (Women in Tech)</h2>
              <p className={styles.role}>DTech Scholar • Jan 2024 - Present</p>
              <ul>
                <li>Contributed to community of women in computer science; attended networking events, resume reviews, and workshops.</li>
                <li>Attended Scholar Events in San Francisco, including a fireside chat with Deb Liu, founder of Ancestry</li>
                <li>Volunteered at FEMMES+Hacks 2024, a one-day hackathon for high school students in RDU area</li> 
              </ul>
            </div>
          </div>

          {/* Interos */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>Interos</h2>
              <p className={styles.role}>Data Science, Research & Development Intern • Jun 2024 - Jul 2024</p>
              <p className={styles.tech}>Python, PyPDF, Selenium, OCR, SQL, LLM</p>
              <ul>
                <li>Built OCR pipeline (Tesseract, Azure AI) processing 10k+ supply chain PDFs with 94% text extraction accuracy</li>
                <li>Implemented MongoDB caching layer with TTL indexes and query optimization, reducing preprocessing time by 32%</li>
                <li>Wrote automated testing suite and monitoring dashboards ensuring data pipeline reliability</li>
              </ul>
            </div>
          </div>

          {/* Point72 Academy */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>Point72 Academy</h2>
              <p className={styles.role}>Investment Analysis Training Program • April 2024</p>
              <p className={styles.tech}>Finance, Research, Market Analysis, Equity Valuation</p>
              <ul>
                <li>Selected for Point72 Academy&apos;s investment analyst training program through achievement recognition at Cubist Hackathon.</li>
                <li>Completed intensive program covering fundamentals of finance, research methodology, and market behavior.</li>
                <li>Trained in idea generation, pitching, data analysis, accounting and modeling, and regulatory compliance.</li>
                <li>Gained hands-on experience building research processes and developing equity pitches presented to investment professionals.</li>
              </ul>
            </div>
          </div>

          {/* Duke Quant Finance */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>Duke Quantitative Finance</h2>
              <p className={styles.role}>Competitor • Sept 2023 - May 2025</p>
              <p className={styles.tech}>Python, Finance, Algorithms</p>
              <ul>
                <li>Studied options trading, valuation, market making, systemic equities in Point72 Investment Analysis Academy</li>
                <li>Developed Python trading algorithm bot to calculate positive EV strategies in market scenarios</li>
                <li>Traded $1M simulated equities, derivatives, and ETFs during Duke FINTECH Spring Trading Competition</li>
              </ul>
            </div>
          </div>

          {/* Duke Visual Arts */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>DUU Visual Arts Events Committee</h2>
              <p className={styles.role}>Committee Member • Jan 2024 - May 2025</p>
              <ul>
                <li>Planned logistics for local artists to showcase works at Duke Brown Gallery for monthly installation series.</li>
                <li>Coordinated arts programming including collaborations with Duke Votes, Asian Students Association, and other campus organizations.</li>
              </ul>
            </div>
          </div>

          {/* AYR.ai */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>AYR.ai</h2>
              <p className={styles.role}>Software Development Intern • Sep 2021 - Aug 2023</p>
              <p className={styles.tech}>Python, Selenium, scrapy, PostgreSQL, React.js, TypeScript, Docker</p>
              <ul>
                <li>Improved handwriting classification by 28% with Transformer-based OCR model</li>
                <li>Reduced data retrieval time by 64% by developing automated web scraper in Python with Selenium</li>
                <li>Developed responsive product features in React (real-time dashboards, alert system, data visualization) with MVC architecture patterns for A/B testing</li>
              </ul>
            </div>
          </div>

          {/* NJIT */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h2>NJ Institute of Technology</h2>
              <p className={styles.role}>Algorithmic Research Intern • Jul 2021 - Sep 2021</p>
              <p className={styles.tech}>C++, Algorithms</p>
              <ul>
                <li>Designed parallel-capable C++ algorithm for graph processing that iteratively connected components.</li>
                <li>Optimized algorithm by reducing computational complexity through innovative data structures.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}