import Navigation from '@/components/Navigation';
import Image from 'next/image';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <>
      <Navigation />

      <main className={styles.projectsPage}>
        <h1>Projects</h1>

        <div className={styles.projectsGrid}>
          {/* Project Card - MarketMentor */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src="/projects/hacktech.png"
                alt="MarketMentor"
                width={500}
                height={300}
              />
            </div>
            <h2>MarketMentor</h2>
            <p className={styles.projectSubtitle}>Hacktech&apos;25 Finalist</p>
            <p className={styles.projectDescription}>
              AI-powered financial news clustering system using OpenAI embeddings and Flask
              APIs to generate market predictions with confidence scores and personalized
              portfolio insights. Implemented real-time analysis pipeline processing
              AlphaVantage/Polygon data with sub-second response times. Built React/TypeScript
              dashboards visualizing event relationships and risk/opportunity signals.
            </p>
            <div className={styles.techTags}>
              <span>Python</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Flask</span>
              <span>MongoDB</span>
              <span>OpenAI</span>
              <span>AlphaVantage</span>
              <span>Polygon API</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/LiSiruiRay/hacktech" target="_blank"
                rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>

          {/* Project Card - Humanizing the MTA */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src="/projects/mta.png"
                alt="Humanizing the MTA"
                width={500}
                height={300}
              />
            </div>
            <h2>Humanizing the MTA</h2>
            <p className={styles.projectSubtitle}>Cubist&apos;24 Finalist</p>
            <p className={styles.projectDescription}>
              Interactive transit safety platform with real-time data visualization.
              Built with Flask and Folium for geospatial mapping, uses scikit-learn
              autoregression models to predict subway crowding and safety metrics
              from NYC crime and MTA APIs.
            </p>
            <div className={styles.techTags}>
              <span>Python</span>
              <span>Flask</span>
              <span>pandas</span>
              <span>scikit-learn</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/alissawu/point72_2024" target="_blank"
                rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>

          {/* Project Card - Reddit Sentiment Analysis */}
          <div className={styles.projectCard}>
            <a
              href="https://realtime-reddit-sentiments.alissawu.dev"
              className={styles.projectImageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.projectImage}>
                <Image
                  src="/projects/rtreddit.png"
                  alt="Reddit Real-Time Sentiment Analysis"
                  width={500}
                  height={300}
                />
                <div className={styles.imageOverlay}>
                  <span>Live Demo</span>
                </div>
              </div>
            </a>
            <h2>Reddit Real-Time Sentiment Analysis</h2>
            <p className={styles.projectSubtitle}>NLP Full-Stack Web Application</p>
            <p className={styles.projectDescription}>
              Real-time sentiment analysis platform for Reddit subreddits using NLP. Computes average and median sentiment of subreddit posts.
              Uses Reddit API (PRAW) and fine-tuned DistilBERT model hosted on Hugging Face Inference Endpoints, cached with Redis.
            </p>
            <div className={styles.techTags}>
              <span>Python</span>
              <span>JavaScript</span>
              <span>Flask</span>
              <span>Redis</span>
              <span>PyTorch</span>
              <span>HuggingFace</span>
              <span>DistilBERT</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>pandas</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/alissawu/realtime-reddit-sentiments" target="_blank"
                rel="noopener noreferrer">
                View Code
              </a>
              <a href="https://realtime-reddit-sentiments.alissawu.dev" target="_blank"
                rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Card - Mini Trading System */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src="/projects/miniex.png"
                alt="Mini Trading System"
                width={500}
                height={300}
              />
            </div>
            <h2>Mini Trading System</h2>
            <p className={styles.projectSubtitle}>High-Performance Order Book Engine</p>
            <p className={styles.projectDescription}>
              Limit order book exchange sim w/ optimal DSA for low-latency trading. Uses hybrid indexing: std::map (red-black tree) for O(log L)
              price lookups with O(1) best-bid/ask, std::list for O(1) FIFO operations with stable iterators, and unordered_map for O(1) cancel-by-ID. Read the /planning_docs for thought processes.
            </p>
            <div className={styles.techTags}>
              <span>C++20</span>
              <span>Data Structures</span>
              <span>CMake</span>
              <span>Algorithm Optimization</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/alissawu/miniex" target="_blank"
                rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>

          {/* Project Card - Amazon E-Commerce Simulation */}
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src="/projects/baseamazon.png"
                  alt="Amazon E-Commerce Simulation"
                  width={500}
                  height={300}
                />
              </div>
              <h2>Amazon E-Commerce Simulation</h2>
              <p className={styles.projectSubtitle}>CS316 Databases Final Project</p>
              <p className={styles.projectDescription}>
                Full-stack e-commerce platform with secure authentication, catalog
            management,
                seller inventory, and transaction processing. Optimized PostgreSQL
            schema with
                strategic indexing reduced query response times from 800ms+ to 150ms.
            Built
                RESTful API architecture in Flask handling concurrent financial
            transactions
                with distributed processing capabilities.
              </p>
              <div className={styles.techTags}>
                <span>TypeScript</span>
                <span>Python</span>
                <span>Flask</span>
                <span>PostgreSQL</span>
                <span>Bootstrap</span>
                <span>RESTful APIs</span>
                <span>SQL</span>
              </div>
              <div className={styles.projectLinks}>
                <a href="https://github.com/alissawu/baseamazon" target="_blank"
                  rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>

          {/* Project Card - EasyProofFormat */}
          <div className={styles.projectCard}>
            <a
              href="https://easyproofformat.alissawu.dev"
              className={styles.projectImageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.projectImage}>
                <Image
                  src="/projects/easyproofformat.png"
                  alt="EasyProofFormat"
                  width={500}
                  height={300}
                />
                <div className={styles.imageOverlay}>
                  <span>Live Demo</span>
                </div>
              </div>
            </a>
            <h2>EasyProofFormat</h2>
            <p className={styles.projectSubtitle}>Discrete Math Side Project</p>
            <p className={styles.projectDescription}>
              Makes it easy to format proofs, boolean algebra, set notation, etc. Intuitive conversion to latex.
            </p>
            <div className={styles.techTags}>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/alissawu/easyproofformat" target="_blank" rel="noopener noreferrer">
                View Code
              </a>
              <a href="https://easyproofformat.alissawu.dev" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
