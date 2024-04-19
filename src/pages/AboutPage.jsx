import Carousel from "../components/Carousel";
import photo1 from "../assets/small-kazack.jpg";
import photo2 from "../assets/small-streetwear.jpg";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const images = [photo1, photo2];
  const navigate = useNavigate();
  const toResume = () => {
    return navigate("/resume");
  };
  return (
    <div className="h-full w-11/12 mx-auto py-8 lg:py-12 flex flex-col gap-8 items-center lg:grid lg:grid-cols-2 lg:grid-rows-9 lg:place-items-start">
      <h1 className="text-4xl lg:text-5xl font-semibold">Who is Ricardo?</h1>
      <div className="lg:row-span-9 lg:place-self-start">
        <Carousel images={images} />
      </div>
      <article className="lg:row-span-8 prose max-w-md">
        <h2 className="text-primary">About Me</h2>
        <p className="">
          I am a young professional living and working in Berlin, Germany.
          Originally from Puerto Rico, I presently work as an intermediate care
          nurse for the Charité. My experience in a hospital setting has
          developed strong interdisciplinary communication, self-reflection, and
          organisational skills.
        </p>
        <p className="">
          Parallel to my work as a nurse I took part in a Full Stack Web
          Developer Bootcamp. During that time I found a new passion in coding.
          The constant learning, growth, and creativity have made it an
          attractive field for me. As such, I will be partaking in a AI & Python
          Course from May until July to broaden my skillset. Nevertheless, I am
          actively looking for work as a junior Full-Stack Developer. Interested
          recruiters may access my resume{" "}
          <span className="link text-primary" onClick={toResume}>
            here
          </span>{" "}
          or through the navigation bar.
        </p>
        <p>
          On a more personal note, I am an avid gym-goer, yogi, and swimmer. I
          enjoy subjects such as relational psychology, etymology, different
          sciences, and health in all its distinct forms.{" "}
        </p>
      </article>
    </div>
  );
}
