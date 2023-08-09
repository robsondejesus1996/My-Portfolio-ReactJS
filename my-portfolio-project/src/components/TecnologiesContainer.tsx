import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql, 
    DiReact,
    DiAndroid,
    DiJava, 
    DiPython,
    DiGithubBadge,
    DiPostgresql, 
    DiDjango
} from 'react-icons/di'

import '../styles/components/tecnologiescontainer.sass'

//DiPostgresql, DiDocker, DiDjango

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "postgres", name: "Postgres", icon: <DiPostgresql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "django", name: "Django", icon: <DiDjango /> },
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "android", name: "Android", icon: <DiAndroid /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "git", name: "GitHub", icon: <DiGithubBadge /> }
  ];

  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default TechnologiesContainer