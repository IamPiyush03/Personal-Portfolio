const stack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "RESTful API",
  "GitHub",
  "Git",
  "Visual Studio Code",
  "C++"
];


const Stack = () => {
  return (
    <section>
      <h3 className="title-font white-text ">
        Here are a few tools & technologies I’ve been working with:
      </h3>
      <ol className="stack-list">
        {stack.map((item, index) =>
          (<li key={index}>{item}</li>)
        )}
      </ol>
    </section>
  );
};

export default Stack;
