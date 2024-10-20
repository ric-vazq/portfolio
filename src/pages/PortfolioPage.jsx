import { v4 as uuid } from "uuid";
import veganease from "../assets/veganease.png";
import brickedup from "../assets/bricked.png";
import CompactCard from "../components/CompactCard";
import flappymon from "../assets/flappymon.png";

export default function PortfolioPage() {
  let projects = [
    {
      image: veganease,
      title: "Veganease Planner",
      description: "Your vegan meal-planning assistant!",
      url: "https://veganease-planner.netlify.app/",
    },
    {
      image: brickedup,
      title: "Brckd Up",
      description: "Plan your LEGO's with our App!",
      url: "https://bricked-up.onrender.com/",
    },
    {
      image: flappymon,
      title: "Flappymon",
      description: "Vanilla HTML/CSS/JS Game!",
      url: "https://ric-vazq.github.io/Flappymon/",
    },
  ];
  return (
    <div>
      <div className="hero h-[50vh] bg-cover ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">My Projects</h1>
            <p className="mb-5">Feel free to examine my previous works!</p>
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-items-center">
        {projects.map(({ image, title, description, url }) => {
          return (
            <CompactCard
              key={uuid()}
              image={image}
              title={title}
              description={description}
              url={url}
            />
          );
        })}
      </div>
    </div>
  );
}
