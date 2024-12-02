import SortingVisualizerImg from "../assets/images/portfolio/SortingVisualizer.png";
import FlavorFleetImg from "../assets/images/portfolio/FlavorFleet.png";
import CryptoPortfolioImg from "../assets/images/portfolio/CryptoPortfolioImg.png";
import GasUtilityImg from "../assets/images/portfolio/GasUtility.png"; 

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
  },
  {
    id: "crypto-portfolio",
    img: CryptoPortfolioImg,
    name: "Crypto Portfolio",
    stack: ["< React.js />", "< Chakra UI />", "< Axios />", "< CoinGecko API />"],
    src: "https://github.com/IamPiyush03/Crypto-Portfolio",
    source: "https://github.com/IamPiyush03/Crypto-Portfolio",
    description:
      "Crypto Portfolio is a web-based application that allows users to track their cryptocurrency investments in real time. Users can view live prices, market data, and detailed information about various cryptocurrencies, making it easier to manage their digital assets.",
  },
  {
    id: "gas-utility",
    img: GasUtilityImg, 
    name: "Gas Utility Service",
    stack: ["< Django />", "< PostgreSQL />", "< HTML5 />", "< CSS3 />"],
    src: "https://github.com/IamPiyush03/Gas-Utility-Website", 
    source: "https://gas-utility-website-1.onrender.com", // Link to the live website
    description:
      "Gas Utility Service is a Django-based web application that allows users to request services, track their requests, and manage their account information. It features user authentication and a user-friendly interface for managing gas utility services.",
  },
];

export { projectsData };
