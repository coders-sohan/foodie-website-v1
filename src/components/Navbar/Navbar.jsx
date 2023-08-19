import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import GetStarted from "../GetStarted";
import NavLinks from "./NavLinks.jsx";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur bg-lightGray/30 fixed w-full shadow z-20">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="flex items-center gap-3 -mt-3.5">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
            <h1 className="text-3xl font-extrabold text-primary mt-3">
              Foodie
            </h1>
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoCloseCircle /> : <FaBarsStaggered />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-5">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <GetStarted />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-lightGray fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <GetStarted />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
