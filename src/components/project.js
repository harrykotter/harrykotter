import "./project.css";

const Project = ({ name, link, explain, image }) => {
  return (
    <a className="project" href={link} target="_tab" rel="noopnener noreferrer">
      <div className="proj_name">{name}</div>
      <img width={200} height={120} alt="thumbnail" src="no_image.jpg" />
      <div className="proj_exp">{explain ?? link}</div>
    </a>
  );
};

export default Project;
