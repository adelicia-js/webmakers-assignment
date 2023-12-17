import "../App.css";
import { useState, useEffect } from "react";

const GeneralNavbar = () => {
  // State to determine whether the navbar should be sticky
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scrolling & determine sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // General Navbar - Visible to devices with screen width >= 640px
    <ul
      id="general-navbar-wrapper"
      className={`hidden sm:flex sm:flex-row lg:grid min-h-[5vh] lg:grid-cols-3 justify-between md:px-8 items-center text-center ${
        isSticky
          ? "lg:fixed top-0 left-0 right-0 w-full sm:py-6 z-50 bg-pink-50 shadow-md"
          : ""
      }`}
    >
      {/* General Navbar - Logo */}
      <li
        id="home-logo"
        className="col-start-1 justify-self-start font-heading font-bold sm:text-2xl md:text-xl"
      >
        <a id="general-home-link" href="#home" className="">
          UniCraft
        </a>
      </li>

      {/* General Navbar - Sub Menu/Links */}
      <li id="general-sub-menu">
        <ul
          id="general-sub-menu"
          className="col-start-2 flex flex-row font-general justify-center items-center gap-8 sm:text-base"
        >
          {/* General Navbar - How It Works Link */}
          <li
            id="general-how-it-works"
            className="hover:underline underline-offset-8 decoration-black/40"
          >
            <a id="general-how-it-works-link" href="#how-it-works">
              How It Works
            </a>

          {/* General Navbar - Pricing Link */}
          </li>
          <li
            id="general-pricing"
            className="hover:underline underline-offset-8 decoration-black/40"
          >
            <a id="general-pricing-link" href="#pricing">
              Pricing
            </a>
          </li>

          {/* General Navbar - FAQ Link */}
          <li
            id="general-faq"
            className="hover:underline underline-offset-8 decoration-black/40"
          >
            <a id="general-faq-link" href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </li>

      {/* General Navbar - Contact Us Link*/}
      <li id="general-contact-us" className="col-start-3 justify-self-end">
        <a
          id="general-contact-us-link"
          href="#contact-us"
          className="font-general border border-black sm:py-3 sm:px-5 md:px-8 md:py-3 rounded-md sm:text-base hover:border-white/60 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-pink-300/50"
        >
          Contact Us
        </a>
      </li>
    </ul>
  );
};

const SmallNavbar = () => {
  // State to determine navbar menu visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle navbar menu
  const onClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    // Small Navbar - Visible to devices with screen width < 640px / mobiles
    <div id="small-navbar-wrapper" className="sm:hidden">
      
      {/* Small Navbar - Hamburger Menu Icon */}
      <svg
        id="small-navbar-hamburger-icon"
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

      {/* Small Navbar - Menu: Opens/closes when hamburger menu icon/close icon is clicked */}
      {isVisible && (
        <div
          id="small-navbar-menu-wrapper"
          className="p-8 absolute bg-black text-white h-fit w-screen top-0 left-0"
        >
          {/* Small Navbar - Close Icon */}
          <svg
            id="small-navbar-close-icon"
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

          {/* Small Navbar - Menu Items */}
          <ul
            id="small-navbar-menu"
            className="max-h-[50vh] pt-8 pl-2 flex flex-col text-lg gap-8 uppercase font-general"
          >
            {/* Small Navbar - Home Link*/}
            <li id="small-home">
              <a id="small-home-link" href="#home">
                Home
              </a>
            </li>

            {/* Small Navbar - How It Works Link */}
            <li id="small-how-it-works">
              <a id="small-how-it-works-link" href="#how-it-works">
                How It Works
              </a>
            </li>

            {/* Small Navbar - Pricing Link */}
            <li id="small-pricing">
              <a id="small-pricing" href="#pricing">
                Pricing
              </a>
            </li>

            {/* Small Navbar - FAQ Link */}
            <li id="small-faq">
              <a id="small-faq-link" href="#faq">
                FAQ
              </a>
            </li>

            {/* Small Navbar - Contact Us Link*/}
            <li id="small-contact-us">
              <a id="small-contact-us-link" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default function NavBar() {
  return (
    <header id="header-navbar-wrapper" className="p-8">
      {/* General Navbar - devices of width > 640px*/}
      <GeneralNavbar />
      {/* Navbar for mobiles / devices of width < 640px */}
      <SmallNavbar />
    </header>
  );
}
