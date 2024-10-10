import ProjectsPreview from "./ProjectsPreview";

const PortfolioPreview = () => {
  return (
    <article className="landing__portfolio">
      <section className="portfolio-content">
        <h2 className="title-font pink-text">Portfolio</h2>
        <p className="white-text">
          Over the course of my studies and internships, I've had the opportunity to work on various projects, ranging from web applications to algorithms visualizations. These projects have allowed me to apply and enhance my skills in full-stack development using technologies like React.js, Node.js, and MongoDB. Below are some of the key projects that showcase my experience and technical proficiency. Feel free to explore more of my work on {" "}
          <span>
            <a
              href="https://github.com/IamPiyush03?tab=repositories"
              className="pink-text"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </span>.
        </p>
      </section>
      <ProjectsPreview />
    </article>
  );
};

export default PortfolioPreview;
