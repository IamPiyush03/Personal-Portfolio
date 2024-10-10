import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Piyush Pradip Dhondge Resume.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Piyush Pradip Dhondge Resume">
        <img
          src={DownloadIcon}
          alt="Resume download button"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
