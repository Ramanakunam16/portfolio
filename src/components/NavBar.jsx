import logo from "../assets/kunamRamanareddyLogo.png";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="my logo" className="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ramanareddy-kunam-ba7850211/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ramanakunam16">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
