import { v4 as uuidv4 } from "uuid";

export default function Carousel(props) {
  const { images } = props;
  return (
    <div className="w-80 lg:w-full carousel rounded-box">
      {images.map((image) => {
        return (
          <div className="carousel-item w-full" key={uuidv4()}>
            <img src={image} className=""/>
          </div>
        );
      })}
    </div>
  );
}