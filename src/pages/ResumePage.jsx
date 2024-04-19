import { Link } from "react-router-dom";

export default function ResumePage() {
  return (
    <div className="md:flex justify-evenly items-start">
      <div
        id="experienceTimeline"
        className="max-w-sm md:max-w-md mx-auto md:rounded-box md:bg-neutral p-4 mt-10 mb-5"
      >
        <h1 className="font-black text-2xl text-base-content md:text-center py-4">
          Experience
        </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li id="ausbildung">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 md:text-end">
              <time className="font-mono italic">Apr 2019 - Mar 2022</time>
              <div className="text-lg font-black text-primary">
                Ausbildung: Gesundheits- und Krankenpfleger
              </div>
              <div className="italic text-secondary">Charite</div>3 year
              practical education to become a state certified nurse in Germany.
            </div>
            <hr className="bg-primary" />
          </li>
          <li id="nurse-work">
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="md:timeline-start timeline-end mb-10">
              <time className="font-mono italic">Jun 2022 - Present</time>
              <div className="text-lg font-black text-primary">
                Intermediate Care Nurse
              </div>
              <div className="italic text-secondary">Charite</div>
              Developed effective communication strategies to collaborate with
              interdisciplinary teams including physicians, physiotherapists,
              patients and family members thereof, as well as other healthcare
              providers. Utilised strong organisational skills to prioritise
              tasks efficiently while working independently or as part of a
              team.
            </div>
            <hr className="bg-primary" />
          </li>
          <li id="bootcamp">
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:text-end mb-10">
              <time className="font-mono italic">Oct 2023 - Mar 2024</time>
              <div className="text-lg font-black text-primary">
                Full-Stack Software Developer Trainee
              </div>
              <div className="italic text-secondary">Ironhack</div>6 month
              Part-Time Programm to learn and apply web development skills.
              Skills used include basic HTML, CSS, JavaScript, CSS Libraries:
              Bootstrap and Tailwind, Current Development Stack: MERN (MongoDB,
              Express, React, NodeJS)
            </div>
            <hr className="bg-primary animate-fade-down animate-infinite animate-duration-[2000ms] animate-ease-in" />
          </li>
          <li>
            <hr className="bg-primary animate-fade-down animate-infinite animate-duration-[2000ms] animate-ease-in" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 animate-pulse"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-4">
              <time className="font-mono italic">Mai 2024 - Jul 2024</time>
              <div className="text-lg font-black text-primary">
                AI and Python Course
              </div>
              <div className="italic text-secondary">Ironhack</div>8 week course
              for Python to write efficient code for AI and ML applications.
              Taught will be NumPy, Pandas, Keras / TensorFlow. Projects will
              include building own AI.
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col max-w-md mx-auto mb-10">
        <div
          id="experienceTimeline"
          className="max-w-sm md:max-w-md mx-auto md:rounded-box md:bg-neutral p-4 md:my-10"
        >
          <h1 className="font-black text-2xl text-base-content md:text-center py-4">
            Education
          </h1>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li id="ausbildung">
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 md:text-end">
                <time className="font-mono italic">Aug 2011 - Mai 2015</time>
                <div className="text-lg font-black text-primary">
                  Advanced High School Diploma
                </div>
                <div className="italic text-secondary">
                  King George High School
                </div>
                4.0 GPA and graduated with honors. Advanced Placement courses
                for Biology, Englisch, Math, and Psychology.
              </div>
              <hr className="bg-primary" />
            </li>
            <li id="nurse-work">
              <hr className="bg-primary" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="md:timeline-start timeline-end mb-10">
                <time className="font-mono italic">2018</time>
                <div className="text-lg font-black text-primary">
                  Associates of Math and Science: Pre-Med
                </div>
                <div className="italic text-secondary">
                  Raritan Valley Community College
                </div>
                4.0 GPA, Phi Theta Kappa Honor Society nominee. Strong focuses
                on Sciences (Organic Chem, Physic, Chem, Biology) and Maths
                (Calculus I and II)
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-primary rounded-box p-5 flex flex-col items-center gap-4">
          <h1 className="text-2xl text-center text-primary-content">
            Interested? Reach out to me here!{" "}
          </h1>
          <Link to={'/contact'} className="btn btn-lg btn-secondary animate-wiggle animate-infinite">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
