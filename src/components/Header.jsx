import { Link } from "react-router-dom";
import photo from "../assets/Ricardo-transp.png"

export default function Header() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="flex flex-col items-center gap-8 lg:gap-4 lg:flex-col-reverse p-2">
          <h1 className="text-5xl lg:text-3xl font-bold">Ricardo Vazquez</h1>
          <img
          src={photo}
          className="rounded-full w-96 bg-secondary"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
          <h1 className="text-5xl font-bold">
            <span className="text-primary">Full-Stack</span><br className="hidden lg:inline-block"/> Web Dev
          </h1>
          <p className="pt-6 pb-7 max-w-md text-center lg:text-left">
            Helping you turn ideas into fully functioning web apps.
          </p>
          <Link to={"/contact"} className="btn btn-primary">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
