import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
function Experience() {
  console.log(EXPERIENCES);
  if (EXPERIENCES.length === 0)
    return (
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Experiences
        </motion.h2>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-lg text-neutral-400">Current</p>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <p className="mb-4 text-lg text-neutral-400">
              I am a recent graduate and a fresher actively looking for
              opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    );

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiences
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((experience, i) => {
          return (
            <div className="mb-8 flex flex-wrap lg:justify-center" key={i}>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role}-{" "}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">
                  {experience.description}
                </p>
                {experience.technologies.map((tech, i) => {
                  return (
                    <span
                      key={i}
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
