import styles from './ProjectsStyles.module.css';
import College from '../../assets/College-pic.png'
import Travel from '../../assets/Travel-pic.jpg';
import ProjectCard from '../../common/ProjectCard';
import Blog from '../../assets/Blog-App.png';
import Git from '../../assets/Git.jpg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={College}
          link="https://github.com/Ibad81/GLA-Portal"
          h3="CP"
          p="College portal"
        />
        <ProjectCard
          src={Travel}
          link="https://github.com/Ibad81/WT"
          h3="WT"
          p="World Tour"
        />
        <ProjectCard
          src={Blog}
          link="https://github.com/Ibad81/WT"
          h3="Blog"
          p="Blog App"
        />
        <ProjectCard
          src={Git}
          link="https://github.com/Ibad81/WT"
          h3="Git"
          p="Github Profile"
        />
      </div>
      
    </section>
  );
}

export default Projects;
