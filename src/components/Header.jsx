import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import photo from "../assets/Ricardo-transp.png";
import waves from "../assets/layered-waves-haikei.svg";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen aspect-960/300 bg-cover bg-no-repeat" style={{backgroundImage: `url(${waves})`}}>
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
            <span className="lg:text-primary text-accent">Full-Stack</span>
            <br className="hidden lg:inline-block" /> Web Dev
          </h1>
          <p className="pt-6 pb-7 max-w-md text-center lg:text-left">
            Helping you turn ideas into fully functioning web apps.
          </p>
          <Link to={"/contact"} className="btn btn-accent text-accent-content lg:btn-primary lg:text-primary-content">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
