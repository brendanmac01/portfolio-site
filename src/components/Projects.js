import React, { useState } from 'react';
import './Projects.css';
import '../App.css';


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A simple weather data tracking app.',
      link: 'https://weather-app-01.herokuapp.com/',
      screenshot: require('../images/weather-app.png')
    },
    {
      id: 2,
      title: 'Choruso',
      description: 'A Playlist creator app that allows users to sign up/in and listen to or create playlists.',
      link: 'https://choruso.herokuapp.com',
      screenshot: require('../images/choruso.png')
    },
    {
      id: 3,
      title: 'Watchlist',
      description: 'Allow user to create a watchlist for TV shows and movies they have seen/ would like to see.',
      link: 'https://tvshowlookup.herokuapp.com/',
      screenshot: require('../images/watchlist.png')
    },
    {
      id: 4,
      title: 'Cinema Lookup',
      description: 'Allow user to enter the name of a TV show or movie and receive info about it.',
      link: 'https://cinema-lookup-machub0174.vercel.app/',
      screenshot: require('../images/cinema-lookup.jpeg')
    }
  ];

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    setExpandedProjectId(projectId === expandedProjectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project ${expandedProjectId === project.id ? 'expanded' : ''}`}
            onClick={() => handleProjectClick(project.id)}
          >
            <h3 className="project-title">{project.title}</h3>
            {expandedProjectId === project.id && (
              <div className="project-screenshot">
                <img src={project.screenshot} alt={project.title} />
              </div>
            )}
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">Open App</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
