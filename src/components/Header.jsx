import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import photo from "../assets/Ricardo-transp.png";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-between">
    <div className="w-full aspect-900/90 waves bg-cover bg-no-repeat"></div>
      <div className={`hero`}>
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="flex flex-col items-center gap-10 lg:gap-4 lg:flex-col-reverse p-0">
            <h1 className="text-5xl lg:text-3xl font-bold text-center">
              Ricardo Vazquez
            </h1>
            <img
              src={photo}
              className="rounded-full w-96 bg-secondary animate-fade-left animate-duration-1000 animate-ease-in hover:cursor-pointer"
              onClick={() => {
                navigate("/about-me");
              }}
            />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
            <h1 className="text-5xl font-bold">
              <span className="text-primary">Full-Stack</span>
              <br className="hidden lg:inline-block" /> Web Dev
            </h1>
            <p className="pt-6 pb-7 max-w-md text-center lg:text-left">
              Helping you turn ideas into fully functioning web apps.
            </p>
            <Link
              to={"/contact"}
              className="btn btn-primary text-primary-content"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full aspect-900/90 waves bg-cover bg-no-repeat transform rotate-180"></div>
    </div>
  );
}
