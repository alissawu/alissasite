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

          {/* Project Card 2 - No Demo */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image 
                src="/projects/project1.png" 
                alt="Project Name"
                width={500}
                height={300}
              />
            </div>
            <h2>Another Project</h2>
            <p className={styles.projectDescription}>
              Description here.
            </p>
            <div className={styles.techTags}>
              <span>Python</span>
              <span>Flask</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com/..." target="_blank" rel="noopener noreferrer">
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