import { PROJECTS } from "../constants";

import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, i) => {
          return (
            <div className="mb-8 flex flex-wrap lg:justify-center" key={i}>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <a href={project.link}>
                  <img
                    src={project.image}
                    alt={project.title}
                    width={250}
                    height={250}
                    className="mb-6 rounded transition-all duration-700 hover:w-[340px]"
                  />
                </a>
              </motion.div>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <a
                  href={project.link}
                  className="hover:text-cyan-300 hover:underline"
                >
                  {" "}
                  <h6 className="mb-2 font-semibold">{project.title}</h6>
                </a>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, i) => {
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

export default Projects;
