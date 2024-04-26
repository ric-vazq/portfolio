import { Link } from "react-router-dom";
export default function CompactCard({ image, title, description, url }) {
  return (
    <div className="card card-compact w-96 bg-neutral shadow-xl">
      <figure>
        <img className="h-56 w-96"
        src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={url} className="btn btn-primary">
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
