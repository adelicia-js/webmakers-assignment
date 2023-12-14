import "../App.css";
import { useState } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header>
      {/* General Navbar */}
      <ul className="hidden sm:flex sm:flex-row lg:grid min-h-[5vh] lg:grid-cols-3 justify-between md:px-8 items-center text-center">
        <li className="col-start-1 justify-self-start font-heading font-bold sm:text-2xl md:text-xl">
          <a href="#home" className="">
            UniCraft
          </a>
        </li>
        <ul className="col-start-2 flex flex-row font-general justify-center items-center gap-8 sm:text-base">
          <li className="hover:underline underline-offset-8 decoration-black/40">
            <a href="#how-it-works">How It Works</a>
          </li>
          <li className="hover:underline underline-offset-8 decoration-black/40">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="hover:underline underline-offset-8 decoration-black/40">
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <li className="col-start-3 justify-self-end">
          <a
            href="#contact-us"
            className="font-general border border-black sm:py-3 sm:px-5 md:px-8 md:py-3 rounded-md sm:text-base hover:border-white/60 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-pink-300/50"
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Navbar for mobiles */}
      <div className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 sm:hidden"
          onClick={onClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {isVisible && (
          <div className="p-8 absolute bg-black text-white h-fit w-screen top-0 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 sm:hidden"
              onClick={onClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <ul className="max-h-[50vh] pt-8 pl-2 flex flex-col text-lg gap-8 uppercase font-general">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
