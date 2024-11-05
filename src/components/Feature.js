import "../styles/feature.css";

const Feature = ({ children }) => {
  return (
    <div className="page">
      <nav className="nav">harrykotter</nav>
      {children}
      <footer>©2024 Harry.K</footer>
    </div>
  );
};

export default Feature;
