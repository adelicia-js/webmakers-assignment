import "../App.css";
import { useState } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      
      {/* General Navbar */}
      <ul className="hidden sm:flex min-h-[5vh] flex-row justify-between sm:px-8 items-center text-center">
        <li className="">
          <a href="#home" className="font-heading font-bold md:text-xl">
            UniCraft
          </a>
        </li>
        <ul className="flex font-general flex-row justify-center items-center gap-8 md:text-md">
          <li>
            <a href="#how-it-works">How It Works</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <li className="">
          <a
            href="#contact-us"
            className="font-general border border-black px-8 py-3 rounded-md md:text-md"
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
    </div>
  );
}
