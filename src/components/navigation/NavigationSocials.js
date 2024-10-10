import Linkedin from "../../assets/images/socials/linkedin-blue.svg"; // Updated image to a blue theme
import Github from "../../assets/images/socials/github-blue.svg"; // Updated image to a blue theme

const NavigationSocials = () => {
  return (
    <section className="navigation__socials">
      <a
        href="https://www.linkedin.com/in/piyush-dhondge/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="Piyush Pradip Dhondge LinkedIn profile" />
      </a>
      <a
        href="https://github.com/IamPiyush03"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="Piyush Pradip Dhondge GitHub profile" />
      </a>
      
    </section>
  );
};

export default NavigationSocials;
