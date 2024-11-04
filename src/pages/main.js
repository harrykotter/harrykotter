import Project from "../components/project";
import projectList from "../data/projects.json";
import "./main.css";

const Main = () => {
  return (
    <div className="page">
      <nav className="nav">harrykotter</nav>
      <header className="header">
        <div className="profile_img"></div>
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
      <footer>©2024 Harry.K</footer>
    </div>
  );
};

export default Main;
