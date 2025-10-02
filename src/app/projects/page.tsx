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
          {/* Project Card - EasyProofFormat */}
          <div className={styles.projectCard}>
            <a 
              href="/easyproofformat/index.html" 
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
              <a href="/easyproofformat/index.html" target="_blank" rel="noopener noreferrer">
                Live Demo
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


          {/* Project Card 3 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image 
                src="/projects/project1.png" 
                alt="Project Name"
                width={500}
                height={300}
              />
            </div>
            <h2>Third Project</h2>
            <p className={styles.projectDescription}>
              Another cool project description goes here.
            </p>
            <div className={styles.techTags}>
              <span>TypeScript</span>
              <span>Next.js</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/..." target="_blank" rel="noopener noreferrer">
                View Code
              </a>
              <a href="https://demo.com" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image 
                src="/projects/project1.png" 
                alt="Project Name"
                width={500}
                height={300}
              />
            </div>
            <h2>Fourth Project</h2>
            <p className={styles.projectDescription}>
              Final project placeholder for layout testing.
            </p>
            <div className={styles.techTags}>
              <span>C++</span>
              <span>OpenGL</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/..." target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}