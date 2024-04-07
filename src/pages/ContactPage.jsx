import { BsPhone } from "react-icons/bs";
import Button from "../components/Button";
import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccess("Your message has been sent successfully!");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        return;
      }
    }
  };
  return (
    <div className="w-full mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border border-delftBlue-500 rounded-lg shadow-lg">
        <div className="bg-delftBlue-500 md:col-span-4 p-10 text-white rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
          <p className="mt-4 text-sm leading-7 uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-light">
            Get In <span className="text-bakerPink-400">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-azure">
            Like what you saw? Reach out either through the phone or fill our
            the contact form.
          </p>
          <div className="flex items-center mt-5">
            <BsPhone className="h-6 mr-2 text-bakerPink-400" />
            <span>+49 1520 7503117</span>
          </div>
          <div className="flex items-center mt-5"></div>
        </div>
        <form className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="firstName"
                className="block text-delftBlue-500 uppercase tracking-wide text-xs font-bold mb-2"
              >
                First Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="firstName"
                className="appearance-none block w-full bg-delftBlue-100 text-gray-700 border border-delftBlue-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-delftBlue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                htmlFor="lastName"
                className="block uppercase tracking-wide text-delftBlue-500 text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="lastName"
                className="appearance-none block w-full bg-delftBlue-100 text-gray-700 border border-delftBlue-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-delftBlue-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-delftBlue-500 text-xs font-bold mb-2"
              >
                Email Address
              </label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                className="appearance-none block w-full bg-delftBlue-100 text-gray-700 border border-delftBlue-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-delftBlue-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="message"
                className="block uppercase tracking-wide text-delftBlue-500 text-xs font-bold mb-2"
              >
                Your Message
              </label>
              <textarea
                onChange={handleChange}
                name="message"
                id="message"
                rows="10"
                className="appearance-none block w-full bg-delftBlue-100 text-gray-700 border border-delftBlue-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-delftBlue-500"
              ></textarea>
            </div>
            <div className="flex items-center justify-center md:justify-end w-full px-3 pt-4">
              <Button
                type={"submit"}
                classes={
                  "shadow bg-bakerPink-400 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-6 rounded"
                }
              >
                Send Message
              </Button>
            </div>
            {success && <p className="text-green-500 bold">{success}</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
