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
        <div className="project">project1</div>
        <div className="project">project2</div>
        <div className="project">project3</div>
        <div className="project">project4</div>
        <div className="project">project5</div>
        <div className="project">project6</div>
      </div>
      <footer>©2024 Harry.K</footer>
    </div>
  );
};

export default Main;
