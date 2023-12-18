import PropTypes from "prop-types";
import { useState } from "react";

const ContactUsModal = ({ isOpen, onClose }) => {
  // Form data object to store & record input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Make the form submission message visible on submit
    document
      .getElementById("contact-us-form-submission-wrapper")
      .classList.remove("hidden");
    document.getElementById("contact-us-form-submission-wrapper").classList.add("block");
  };

  return (
    // Contact us modal that opens up a form for users to enter their details & a message
    <div
      id="contact-us-modal"
      className={`fixed top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center bg-black/50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        id="contact-us-modal-content"
        className="relative bg-white p-8 w-fit sm:w-96 rounded-md shadow-md"
      >
        <p
          id="contact-us-modal-title"
          className="font-heading text-2xl font-semibold mb-4"
        >
          Leave us a message
        </p>

        {/* Contact Us form */}
        <form
          id="contact-us-form"
          onSubmit={handleSubmit}
          className="font-general flex flex-col gap-4 sm:gap-6"
        >
          <div id="contact-us-form-name-wrapper">
            <label
              htmlFor="name"
              className="block text-md font-light text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="contact-us-form-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              required
              autoComplete="on"
            />
          </div>

          <div id="contact-us-form-email-wrapper">
            <label
              htmlFor="email"
              className="block text-md font-light text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="contact-us-form-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              required
              autoComplete="on"
            />
          </div>

          <div id="contact-us-message-wrapper">
            <label
              htmlFor="message"
              className="block text-md font-light text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              placeholder="Type something here . . ."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white py-2 px-4 border border-transparent rounded-md hover:bg-white hover:border-black hover:text-black hover:shadow-lg focus:outline-none"
          >
            Submit
          </button>
        </form>

        {/* Form submission message that appears on submit */}
        <div
          id="contact-us-form-submission-wrapper"
          className="mt-4 px-4 hidden text-sm text-center font-heading w-[70vw] sm:w-fit"
        >
          <p id="contact-us-form-submission-message" className="break-words">
            Thanks for your message!{" "}
            <span className="whitespace-pre">
              We shall get back to you soon. 💖
            </span>
          </p>
        </div>

        <button
          id="close-contact-modal-button"
          className="absolute top-[2%] left-[2%] text-black hover:bg-black hover:rounded-full hover:text-white cursor-pointer"
          onClick={onClose}
        >
          <svg
            aria-label="Close button for contact us modal"
            id="contact-modal-close-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 border border-black rounded-full p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ContactUs = () => {
  // State to determine modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility (open)
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    // Contact us section
    <section
      id="contact-us"
      className="p-8 sm:p-12 sm:pb-8 md:py-20 md:pb-16 lg:py-24 lg:pb-20 place-content-center text-center"
    >
      <p
        id="contact-us-header-1"
        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold mb-1"
      >
        No long-term contracts.
      </p>
      <p
        id="contact-us-header-2"
        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold mb-6"
      >
        No catches. Simple.
      </p>
      <p
        id="contact-us-description"
        className="text-lg font-general text-gray-500 mb-8"
      >
        Start your 30-day free trial.{" "}
        <span className="whitespace-nowrap">Cancel anytime.</span>
      </p>

      {/* Contact Us Button that opens up modal */}
      <button
        id="contact-us-button"
        href="#contact-us"
        className="font-general bg-black border border-transparent hover:border-white/60 hover:shadow-lg hover:shadow-pink-200 text-white py-2 px-4 sm:py-3 sm:px-5 md:px-8 md:py-2 rounded-md sm:text-base md:text-lg"
        onClick={openModal}
      >
        Contact Us
      </button>

      {/* Contact Us Modal */}
      <ContactUsModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

const FooterSocials = () => {
  // Company Socials
  return (
    <div
      id="footer-socials"
      className="flex flex-row gap-8 mt-4 items-center justify-between"
    >
      <p id="footer-copyright" className="text-gray-500 font-general text-lg">
        © 2077 Untitled UI.{" "}
        <span className="whitespace-pre">All rights reserved.</span>
      </p>

      {/* Company Socials List */}
      <ul
        id="footer-socials-list"
        className="sm:grid-rows-1 sm:grid-cols-6 grid grid-rows-2 grid-cols-3 gap-x-8 gap-y-3 items-center place-items-center justify-items-center"
      >
        <li
          id="twitter-link-wrapper"
          className="text-gray-400 hover:text-blue-500"
        >
          <a
            id="twitter-link"
            aria-label="Twitter Link"
            href="https://twitter.com/unicraft"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              id="twitter-icon"
              className="h-6 w-6 sm:w-8 sm:h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
        </li>
        <li
          id="linkedin-link-wrapper"
          className="text-gray-400 hover:text-blue-800"
        >
          <a
            id="linkedin-link"
            aria-label="LinkedIn Link"
            href="https://www.linkedin.com/company/unicraft"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              id="linkedin-icon"
              className="h-6 w-6 sm:h-8 sm:w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </li>
        <li
          id="facebook-link-wrapper"
          className="text-gray-400 hover:text-sky-600"
        >
          <a
            id="facebook-link"
            aria-label="Facebook Link"
            href="https://www.facebook.com/unicraft"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              id="facebook-icon"
              className="h-6 w-6 sm:h-8 sm:w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </li>
        <li id="github-link-wrapper" className="text-gray-400 hover:text-black">
          <a
            id="github-link"
            aria-label="GitHub Link"
            href="https://github.com/chetanverma16"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="h-6 w-6 sm:h-8 sm:w-8 -mb-[0.2rem]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
        </li>
        <li
          id="angel_list-link-wrapper"
          className="text-gray-400 hover:text-red-600"
        >
          <a
            id="angel_list-link"
            aria-label="Angel List Link"
            href="https://wellfound.com/company/unicraft"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              id="angel_list-icon"
              className="h-6 w-6 sm:h-8 sm:w-8 -mb-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <line x1="12" y1="12" x2="12" y2="12.01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
          </a>
        </li>
        <li
          id="dribble-link-wrapper"
          className="text-gray-400 hover:text-pink-500"
        >
          <a
            id="dribble-link"
            aria-label="Dribble Link"
            href="https://dribbble.com/unicraft"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              id="dribble-icon"
              className="h-6 w-6 sm:h-8 sm:w-8 -mb-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="12" r="9" />{" "}
              <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />{" "}
              <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4" />{" "}
              <path d="M3.1 10.75c5 0 9.814-.38 15.314-5" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

const FooterContent = () => {
  return (
    // Footer content (logo + description + socials)
    <section id="footer-content-wrapper" className="p-8 flex flex-col">
      <div id="footer-description" className="border-t flex flex-col gap-4">
        <a
          id="footer-logo"
          href="#home"
          className="font-heading mt-4 text-2xl sm:text-2xl lg:text-3xl font-bold"
        >
          UniCraft
        </a>
        <p
          id="footer-company-description-text"
          className="text-lg sm:text-md font-general text-gray-500"
        >
          Design amazing digital experiences that create more happy in the
          world.
        </p>
      </div>
      <FooterSocials />
    </section>
  );
};

export default function FooterSection() {
  // Footer section
  return (
    <footer
      id="footer"
      className="bg-local bg-gradient-to-b from-violet-400/20 via-white to-violet-200/50"
    >
      <ContactUs />
      <FooterContent />
    </footer>
  );
}

ContactUsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
