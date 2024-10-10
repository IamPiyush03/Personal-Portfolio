import { useEffect } from "react";
import { Footer } from "../../components";
import ContactForm from "./ContactForm";
import "./Contact.sass";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Piyush Dhondge";
    window.scrollTo(0, 0);
  })
  return (
    <main className="contact">
      <h2 className="title-font pink-text">Contact Me</h2>
      <p className="white-text">
        If you are interested in hiring me I am always open to new opportunities
        and interesting projects! Feel free to contact me if you have any other
        requests or questions regarding web development.
      </p>
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Contact;
