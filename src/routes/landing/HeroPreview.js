import { Link } from "react-router-dom";

const HeroPreview = () => {
  return (
    <article className="landing__hero">
      <h1 className="hero-font white-text">
        Hi, I'm <br></br>
        <em className="blue-text">Piyush Pradip Dhondge</em>
        <br></br>Full Stack Web Developer
      </h1>
      <p className="gray-text">MERN Stack | Frontend & Backend Development</p>
      <Link className="blue-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeroPreview;
