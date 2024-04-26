import html from "../assets/html.png"
import css from "../assets/css.png"
import reactlogo from "../assets/react.png"
import js from "../assets/javascript.png"
import tailwind from "../assets/tailwind.png"
import mongodb from "../assets/mongodb.png"


export default function Skills() {
  return (
    <>
      <div className="border border-primary rounded-box bg-neutral mx-auto grid grid-cols-3 place-items-center p-4 gap-y-4">
        <h2 className="text-2xl text-neutral-content md:text-4xl font-bold m-4">
          My <br /> Tech <br /> Stack{" "}
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 md:w-[100px] h-24">
            <img src={html} alt="" className="w-12 h-14"/>
            <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 md:w-[100px] h-24">
            <img src={css} alt="" className="w-10 h-14"/>
            <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 md:w-[100px] h-24">
            <img src={js} alt="" className="w-14 h-14"/>
            <p className="mt-2">Javascript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 md:w-[100px] h-24">
            <img src={reactlogo} alt="" className="w-auto h-14"/>
            <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 md:w-[100px] h-24">
            <img src={tailwind} alt="" className="w-auto h-14"/>
            <p className="mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 md:w-[100px] h-24">
            <img src={mongodb} alt="" className="w-auto h-14"/>
            <p className="mt-2">Mongo DB</p>
        </div>
      </div>
    </>
  );
}
