import { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, Spring } from "@react-spring/web";

function MenuButton() {
  const [open, setOpen] = useState(false);
  const spring = useSpring({
    to: {
      y: open ? 0 : -100,
    },
  });

  return (
    <>
      {open ? (
        <animated.div
          className="flex flex-col absolute z-100 top-0 right-0 lg:hidden w-full bg-white border-b-4 border-teal-500 px-5"
          style={spring}
        >
          <div className="flex flex-row z-100 w-full justify-start items-center text-2xl text-black">
            <div
              className="h-10 w-10 ml-10 mt-5 pt-1 rounded-2xl hover:bg-teal-500 hover:text-white text-center align-middle z-100"
              onClick={() => setOpen(false)}
            >
              <h1>X</h1>
            </div>
          </div>
          <div className="flex flex-row w-full justify-end mr-10 py-2 items-center text-2xl text-black font-mundial hover:text-teal-500">
            <Link onClick={() => setOpen(false)} to="/about">
              About
            </Link>
          </div>
          <div className="flex flex-row w-full justify-end mr-10 py-2 items-center text-2xl text-black font-mundial hover:text-teal-500">
            <Link onClick={() => setOpen(false)} to="/services">
              Services
            </Link>
          </div>
          <div className="flex flex-row w-full justify-end mr-10 py-2 items-center text-2xl pb-5 text-black font-mundial hover:text-teal-500">
            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
          </div>
        </animated.div>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="absolute visible md:collapse text-white font-sans hover:border-2 border-white bg-teal-500 rounded-full px-3 py-2"
        >
          <h1>Menu</h1>
        </div>
      )}
    </>
  );
}

export default function Header() {
  return (
    <>
      <div className="flex fixed z-10 top-0 w-full bg-transparent items-center py-5 px-10">
        <div className="flex flex-row w-1/2">
          <Link className="w-full sm:w-14" to="/">
            <img className="rounded-xl h-12 w-12" src="nf-green.png" />
          </Link>
          <h1 className="collapse md:visible text-2xl font-mundial text-white font-normal ml-5 mt-2">
            {" "}
            Navarrete Financial
          </h1>
        </div>
        <div className="flex flex-row w-1/2 justify-end">
          <div className="flex flex-row collapse md:visible rounded-full px-1 justify-between text-xl font-sans text-white font-light items-center">
            <div className="collapse md:visible text-white hover:bg-white hover:text-teal-500 bg-teal-500 rounded-full px-3 py-2 mr-3">
              <Link to="/about">About</Link>
            </div>
            <div className="collapse md:visible hover:bg-white hover:text-green-700 rounded-full px-3 py-2">
              <Link to="/services">Services</Link>
            </div>
            <div className="collapse md:visible hover:bg-white hover:text-green-700 rounded-full px-3 py-2">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <MenuButton />
        </div>
      </div>
    </>
  );
}
