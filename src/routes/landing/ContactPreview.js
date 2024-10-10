import ContactForm from "../contact/ContactForm";

const ContactPreview = () => {
  return (
    <article className="landing__contact">
      <h2 className="title-font pink-text">Contact Me</h2>
      <p className="white-text">
        If you are interested in hiring me I am always open to new opportunities
        and interesting projects! Feel free to contact me if you have any other
        requests or questions regarding web development.
      </p>
      <ContactForm />
    </article>
  );
};

export default ContactPreview;
