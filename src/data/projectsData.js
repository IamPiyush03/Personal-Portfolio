import SortingVisualizerImg from "../assets/images/portfolio/SortingVisualizer.png";
import FlavorFleetImg from "../assets/images/portfolio/FlavorFleet.png";

const projectsData = [
  {
    id: "sorting-visualizer",
    img: SortingVisualizerImg,
    name: "Sorting Visualizer",
    stack: ["< JavaScript />", "< HTML5 />", "< CSS3 />", "< React.js />"],
    src: "https://github.com/IamPiyush03/Sorting-Visualizer-Project",
    source: "https://github.com/IamPiyush03/Sorting-Visualizer-Project",
    description:
      "Sorting Visualizer is a web-based application that visually demonstrates various sorting algorithms with real-time animations. Users can select from a variety of algorithms like Bubble Sort, Merge Sort, and Quick Sort to see how the sorting process works step by step.",
  },
  {
    id: "flavor-fleet",
    img: FlavorFleetImg,
    name: "FlavorFleet: A Full-Stack Food Ordering Platform",
    stack: ["< MongoDB />", "< Express.js />", "< React.js />", "< Node.js />"],
    src: "https://github.com/IamPiyush03/FlavorFleet",
    source: "https://github.com/IamPiyush03/FlavorFleet",
    description:
      "FlavorFleet is a full-stack web application for online food ordering. The platform features user registration, menu filtering, cart management, and a secure checkout process. It efficiently handles both frontend and backend tasks using the MERN stack, offering a seamless user experience.",
  }
];

export { projectsData };
