import { v4 as uuidv4 } from "uuid";

export default function Carousel(props) {
  const { images, classNames } = props;
  return (
    <div className="carousel carousel-center max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl space-x-4 bg-neutral rounded-box">
      {images.map((image) => {
        return (
          <div className="carousel-item" key={uuidv4()}>
            <img src={image} className="rounded-box max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"/>
          </div>
        );
      })}
    </div>
  );
}
