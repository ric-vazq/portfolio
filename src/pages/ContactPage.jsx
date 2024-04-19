import { BsPhone, BsClock, BsLinkedin } from "react-icons/bs";
import { useState, useRef } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { IoIosCloseCircle } from "react-icons/io";

export default function ContactPage() {
  const [success, setSuccess] = useState(undefined);
  const [error, setError] = useState(undefined);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = await emailjs.sendForm(
        "service_586r9hw",
        "template_63nsvz7",
        form.current,
        {
          publicKey: "FS50HFJD2Ak56LcYp",
        }
      );
      setSuccess(true);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        return;
      }
    }
  };
  return (
    <div className="w-full mx-auto p-7">
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-lg shadow-lg bg-neutral">
        <div className="bg-neutral lg:col-span-4 p-10 text-base-content rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
          <p className="mt-4 text-sm leading-7 uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-light">
            Get In <span className="text-primary">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-azure">
            Like what you saw? Reach out either through the phone or fill our
            the contact form.
          </p>
          <div className="flex items-center mt-5">
            <BsPhone className="h-6 mr-2 text-primary" />
            <span>+49 1520 7503117</span>
          </div>
          <div className="flex items-center mt-5">
            <BsClock className="h-6 mr-3 text-primary" />
            <span>8:00 - 16:00</span>
          </div>
          <div className="flex items-center mt-5">
            <BsLinkedin className="h-6 mr-3 text-primary" />
            <Link
              className="link text-secondary overflow-hidden"
              to={"https://www.linkedin.com/in/ric-vazq/"}
            >
              https://www.linkedin.com/in/ric-vazq/
            </Link>
          </div>
        </div>
        <form className="md:col-span-8 p-10" onSubmit={handleSubmit} ref={form}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="firstName"
                className="block text-base-content uppercase tracking-wide text-xs font-bold mb-2"
              >
                First Name
              </label>
              <input
                name="user_firstname"
                type="text"
                id="firstName"
                className="appearance-none block w-full text-base-content bg-base-200 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-base-100 focus:border-secondary"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                htmlFor="lastName"
                className="block uppercase tracking-wide text-base-content text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                name="user_lastname"
                type="text"
                id="lastName"
                className="appearance-none block w-full bg-base-200 text-base-content border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-base-100 focus:border-secondary"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-base-content text-xs font-bold mb-2"
              >
                Email Address
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                className="appearance-none block w-full bg-base-200 text-base-content border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-base-100 focus:border-secondary"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="message"
                className="block uppercase tracking-wide text-base-content text-xs font-bold mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="10"
                className="appearance-none block w-full bg-base-200 text-base-content border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-base-100 focus:border-secondary"
              ></textarea>
            </div>

            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="flex items-center justify-center md:justify-end w-full px-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      {success && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your message has been sent successfully!</span>
          <button
            onClick={() => {
              {
                setSuccess(false);
              }
            }}
          >
            <IoIosCloseCircle className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
