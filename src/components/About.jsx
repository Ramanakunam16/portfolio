import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        {" "}
        About <span className="text-neutral-500">me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-0">
          <div className="justifu-center flex items-center sm:justify-center">
            <img src={aboutImage} alt="about image" className="rounded-2xl" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
