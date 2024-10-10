import { experienceData } from "../../data/experienceData";

const Experience = () => {
  return (
    <section className="about__experience">
      <h2 className="title-font pink-text">Work Experience</h2>
      {experienceData.map((info, index) => (
        <section key={index}>
          <h3>{info.jobtitle}</h3>
          <section className="experience__company">
            <p>{info.companyname} - </p>
            <p>{info.worktype}</p>
          </section>
          <p>{info.duration}</p>
          <p>{info.location}</p>
          <ol className="experience__responsibilities">
            {info.responsibility.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ol>
        </section>
      ))}
    </section>
  );
};
export default Experience;
