import Project from "../components/Project";
import Feature from "../components/Feature";
import projectList from "../data/projects.json";
import "../styles/main.css";

const Main = () => {
  return (
    <Feature>
      <header className="header">
        <img alt="profile" src="profile.png" className="profile_img" />
        <div className="profile_text">
          Hi, I'm Harry. I'm a junior publisher! Always seeking for new events!
        </div>
      </header>
      <div className="project_wrapper">
        {projectList.map((project, id) => (
          <Project
            key={id}
            name={project.name}
            link={project.link}
            explain={project.explane}
          />
        ))}
      </div>
    </Feature>
  );
};

export default Main;
