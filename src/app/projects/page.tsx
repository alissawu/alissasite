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
          {/* Project Card 1 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image 
                src="/projects/project1.png" 
                alt="Project Name"
                width={500}
                height={300}
              />
            </div>
            <h2>Project Title</h2>
            <p className={styles.projectDescription}>
              Brief description of what this project does and why it's cool.
            </p>
            <div className={styles.techTags}>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
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