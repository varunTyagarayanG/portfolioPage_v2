import React from 'react';
import styles from '../styles/ProjectsSection.module.css';

const ProjectsSection = () => {
  const recentProjects = [
    {
      date: "Dec 26, 2024",
      title: "ID generation system similar to Instagram's snowflake ID generation.",
      link: "https://github.com/varunTyagarayanG/SystemDesign101-Instagram-snowflake-ID-generation"
    },
    {
      date: "Dec 21, 2024",
      title: "Implementing database sharding for a phonebook app using MySQL.",
      link: "https://github.com/varunTyagarayanG/SystemDesign101-Database-Sharding"
    },
    {
      date: "Dec 16, 2024",
      title: "Flight seat reservation system that supports concurrent seat bookings",
      link: "https://github.com/varunTyagarayanG/SystemDesign101-Concurrent-Ticket-Booking-System"
    },
    {
      date: "Dec 02, 2024",
      title: "Cubicles- A job portal Site(M.E.R.N)",
      link: "https://github.com/Cubicles2024/Cubicals-main"
    },
    {
      date: "Nov 20, 2024",
      title: "Interstate Traffic Volume Prediction(Random-Forest-Regressor)",
      link: "https://github.com/varunTyagarayanG/InterstateTrafficVolumePrediction-Random-Forest-Regressor-"
    },
    {
      date: "Nov 18, 2024",
      title: "Automatic Number Plate Detection(Deep Learning Algo)",
      link: "https://github.com/varunTyagarayanG/Automatic-Number-Plate-Detection"
    },
    {
      date: "Oct 06, 2024",
      title: "Feature detection descriptor and Matching(ComputerVision)",
      link: "https://github.com/varunTyagarayanG/FeatureDetectionDescriptorAndMatching-ComputerVision"
    }
  ];

  const currentProjects = [
    "Scalable Load Balancer",
    "Slack's realtime communication (Scaling the edge Server)",
    "Implementing Kafka message streams",
    "Distributed key-value DB on relational Database",
    "Efficient offline and Online indicator",
    "Scaling PubSub with WebSockets and Redis"
  ];

  return (
    <section className={`${styles.projectsSection} container`}>
      <div className={styles.recentProjects}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recent projects</h2>
          <a href="https://github.com/varunTyagarayanG" className={styles.sectionLink}>Full archive →</a>
        </div>
        <p className={styles.sectionDescription}>Things I have created recently.</p>
        <ul className={styles.postList}>
          {recentProjects.map((project, index) => (
            <li key={index} className={styles.postItem}>
              <span className={styles.postDate}>{project.date}</span>
              <span className={styles.postSeparator}>:</span>
              <a href={project.link} className={styles.postLink}>{project.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.currentProjects}>
        <h2 className={styles.sectionTitle}>Currently Working Projects</h2>
        <br />
        <ul className={styles.projectList}>
          {currentProjects.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              {index + 1}. {project}
            </li>
          ))}
        </ul>
        <p className={styles.conclusion}>So, essentially all fundamental aspects of system design.</p>
      </div>
    </section>
  );
};

export default ProjectsSection;

