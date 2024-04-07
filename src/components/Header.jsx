import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header() {


  return (
    <div className=" bg-delftBlue-500 h-dvh w-full flex flex-col-reverse md:flex-row md:justify-evenly md:items-center gap-5 md:gap-3 px-4 py-5">
      <div className="max-w-sm md:max-w-md text-white flex flex-col gap-5 items-center mx-auto md:mx-0">
        <h1 className="text-5xl md:text-7xl text-center ">
          <span className="text-bakerPink-400">Full-Stack</span>
          <br /> Web Dev
        </h1>
        <p className="text-center text-3xl">
          Helping you turn web ideas into{" "}
          <span className="text-bakerPink-400 md:py-3 md:inline-block">
            fully functioning
          </span>
          <br className="md:hidden" /> full-stack apps
        </p>
        <Button
          classes={
            "flex max-w-sm px-5 py-5 my-3 mb-5 rounded-md bg-gradient-to-r from-bakerPink-400 to-bakerPink-400 text-white text-3xl cursor-pointer hover:to-bakerPink-700 hover:scale-125 transition duration-500 hover:drop-shadow-xl"
          }
        >
          <Link to={"/contact"}>Contact</Link>
        </Button>
      </div>
      <div className="flex flex-col-reverse md:flex-col items-center gap-5">
        <div className="w-64 md:w-80 h-64 md:h-80 bg-bakerPink-400 rounded-full flex items-center justify-center">
          <h2 className="">Here goes my picture</h2>
        </div>
        <h1 className="text-5xl md:text-4xl text-white py-5">Ricardo Vazquez</h1>
      </div>
    </div>
  );
}
