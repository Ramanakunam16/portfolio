import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and as well as back-end technologies like Node.js, MySQL,and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL,  and MongoDB. My journey in web development began with a deep curiosity for how things work. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, reading tech articles , exploring new technologies.`;

export const EXPERIENCES = [];

export const PROJECTS = [
  {
    title: "University web portal",
    link: "https://github.com/ramanakunam16/University-web-portal",
    image: project1,
    description:
      "A web portal for university management, enabling student and faculty interaction, course Web Portal management, and administrative tasks like accessing semester results, reserving library books,writing blog posts, and semester fee registration",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "MariaDB",
    ],
  },

  {
    title: "Portfolio Website",
    image: project2,
    link: "https://ramanareddyportfolio.onrender.com",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "framer motion"],
  },
  {
    title: "Responsive Static website",
    link: "https://responsive-website-uifry.vercel.app/",
    image: project3,
    description:
      "A responsive website aimed at demonstrating modern web design techniques and user Website interface responsiveness",
    technologies: ["HTML", "CSS", "Javascript", "CSS Media Queries"],
  },
  {
    title: "https://accizone-finder.onrender.com/",
    image: project4,
    description: "Designed and developed an app to identify accident-prone zones using the Leaflet library
and available data.",
    technologies: ["HTML", "CSS", "React", "Redux", "React Router"],
  },
];

export const CONTACT = {
  address: "10/876 gayatri nagar , medavakkam , chennai , India",
  phoneNo: "+91 7672073206 ",
  email: "ramanakunam16@gmail.com",
};
