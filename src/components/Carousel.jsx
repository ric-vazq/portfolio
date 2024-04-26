import { v4 as uuidv4 } from "uuid";

export default function Carousel(props) {
  const { images, classNames } = props;
  return (
    <div className="carousel carousel-center max-w-md space-x-4 bg-neutral rounded-box">
      {images.map((image) => {
        return (
          <div className="carousel-item" key={uuidv4()}>
            <img src={image} className="rounded-box max-w-md"/>
          </div>
        );
      })}
    </div>
  );
}
