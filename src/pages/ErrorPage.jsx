import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">OOPS!</h1>
          <p className="py-6">
            My website is currently still under construction or the desired link
            does not exist. Please check in again soon to see further
            developments.
          </p>
          <Link to={"/"} className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
