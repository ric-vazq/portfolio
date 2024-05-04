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
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(443.2310230960272 311.8375626112666)">
              <path id="blob1"
                d="M95.7 -170.6C122.4 -150.3 141.3 -121.4 157.2 -91.5C173.1 -61.7 186.1 -30.8 179.7 -3.7C173.3 23.4 147.5 46.9 129.4 73C111.4 99.1 100.9 127.9 80.6 143.2C60.3 158.5 30.2 160.3 -3.7 166.6C-37.5 173 -75 183.9 -105 174.2C-135 164.6 -157.6 134.3 -164.8 101.8C-172.1 69.3 -164 34.7 -163.3 0.4C-162.6 -33.8 -169.2 -67.7 -160 -96.8C-150.9 -126 -125.9 -150.5 -96.6 -169.2C-67.3 -188 -33.7 -201 0.4 -201.7C34.5 -202.4 69 -190.8 95.7 -170.6"
                fill="#e779c1"
              ></path>
            </g>

            <g transform="translate(460.89213239545074 280.5612396337159)">
              <path
              id="blob2"
                d="M74.2 -128.2C94.7 -116.6 108.8 -93.8 122.4 -70.6C136 -47.3 149 -23.7 154.3 3.1C159.7 29.8 157.3 59.7 149.1 92.1C140.8 124.6 126.7 159.7 100.8 176.7C75 193.6 37.5 192.3 4.8 183.9C-27.8 175.5 -55.7 160.1 -77.9 141.1C-100.1 122.1 -116.7 99.5 -136.8 75.4C-156.9 51.3 -180.5 25.7 -178.9 0.9C-177.3 -23.8 -150.6 -47.7 -132.4 -75.1C-114.2 -102.5 -104.6 -133.5 -84 -145.1C-63.3 -156.6 -31.7 -148.6 -2.4 -144.4C26.8 -140.2 53.7 -139.8 74.2 -128.2"
                fill="#e779c1"
              ></path>
            </g>
          </svg>
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
