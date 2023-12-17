import PropTypes from "prop-types";
import { useState } from "react";

const FreePricingModal = ({ isOpen, onClose }) => {
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
    document
      .getElementById("free-pricing-form-submission-wrapper")
      .classList.remove("hidden");
    document
      .getElementById("free-pricing-form-submission-wrapper")
      .classList.add("block");
  };

  return (
    <div
      id="free-pricing-modal"
      className={`fixed top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center bg-black/50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        id="free-pricing-modal-content"
        className="relative bg-white p-8 w-fit sm:w-96 rounded-md shadow-md"
      >
        <p
          id="free-pricing-modal-title"
          className="font-heading text-2xl font-semibold mb-4 text-center"
        >
          Sign Up
        </p>
        <form
          id="free-pricing-form"
          onSubmit={handleSubmit}
          className="font-general flex flex-col gap-4 sm:gap-6"
        >
          <div id="free-pricing-form-name-wrapper">
            <label
              htmlFor="name"
              className="block text-md font-light text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              required
              autoComplete="on"
            />
          </div>

          <div id="free-pricing-form-email-wrapper">
            <label
              htmlFor="email"
              className="block text-md font-light text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              required
              autoComplete="on"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white py-2 px-4 border border-transparent rounded-md hover:bg-white hover:border-black hover:text-black hover:shadow-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
        <div
          id="free-pricing-form-submission-wrapper"
          className="mt-4 px-4 hidden text-sm text-center font-heading w-[70vw] sm:w-fit break-words"
        >
          <p id="free-pricing-form-submission-message" className="break-words">
            Thank you for registering.
          </p>
          <p>Please check your mail for instructions.</p>
        </div>
        <button
          id="close-free-pricing-modal-button"
          className="absolute top-[2%] left-[2%] text-black hover:bg-black hover:rounded-full hover:text-white cursor-pointer"
          onClick={onClose}
        >
          <svg
            aria-label="Close button for freebie pricing modal"
            id="free-pricing-modal-close-icon"
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

const ProfessionalPricingModal = ({ isOpen, onClose }) => {
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
    document
      .getElementById("professional-pricing-form-submission-wrapper")
      .classList.remove("hidden");
    document
      .getElementById("professional-pricing-form-submission-wrapper")
      .classList.add("block");
  };

  return (
    <div
      id="professional-pricing-modal"
      className={`fixed top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center bg-black/50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        id="professional-pricing-modal-content"
        className="relative bg-white p-8 w-fit sm:w-96 rounded-md shadow-md"
      >
        <p
          id="professional-pricing-modal-title"
          className="font-heading text-black text-2xl font-semibold mb-4 text-center"
        >
          Sign Up
        </p>
        <form
          id="professional-pricing-form"
          onSubmit={handleSubmit}
          className="font-general flex flex-col gap-4 sm:gap-6"
        >
          <div id="professional-pricing-form-name-wrapper">
            <label
              htmlFor="name"
              className="block text-md font-light text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              required
              autoComplete="on"
            />
          </div>

          <div id="professional-pricing-form-email-wrapper">
            <label
              htmlFor="email"
              className="block text-md font-light text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              required
              autoComplete="on"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white py-2 px-4 border border-transparent rounded-md hover:bg-white hover:border-black hover:text-black hover:shadow-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
        <div
          id="professional-pricing-form-submission-wrapper"
          className="text-black mt-4 px-4 hidden text-sm text-center font-heading w-[70vw] sm:w-fit break-words"
        >
          <p
            id="professional-pricing-form-submission-message"
            className="break-words"
          >
            Thank you for registering.
          </p>
          <p>Please check your mail for instructions.</p>
        </div>
        <button
          id="close-professional-pricing-modal-button"
          className="absolute top-[2%] left-[2%] text-black hover:bg-black hover:rounded-full hover:text-white cursor-pointer"
          onClick={onClose}
        >
          <svg
            aria-label="Close button for professional pricing modal"
            id="professional-pricing-modal-close-icon"
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

const EnterprisePricingModal = ({ isOpen, onClose }) => {
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
    document
      .getElementById("enterprise-pricing-form-submission-wrapper")
      .classList.remove("hidden");
    document
      .getElementById("enterprise-pricing-form-submission-wrapper")
      .classList.add("block");
  };

  return (
    <div
      id="enterprise-pricing-modal"
      className={`fixed top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center bg-black/50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        id="enterprisepricing-modal-content"
        className="relative bg-white p-8 w-fit sm:w-96 rounded-md shadow-md"
      >
        <p
          id="enterprise-pricing-modal-title"
          className="font-heading text-2xl font-semibold mb-4 text-center"
        >
          Sign Up
        </p>
        <form
          id="enterprise-pricing-form"
          onSubmit={handleSubmit}
          className="font-general flex flex-col gap-4 sm:gap-6"
        >
          <div id="enterprise-pricing-form-name-wrapper">
            <label
              htmlFor="name"
              className="block text-md font-light text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              required
              autoComplete="on"
            />
          </div>

          <div id="enterprise-pricing-form-email-wrapper">
            <label
              htmlFor="email"
              className="block text-md font-light text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border border-gray-200 rounded-md text-xs font-light text-gray-400 focus:text-sm focus:text-black focus:outline-black focus-visible:outline-black"
              required
              autoComplete="on"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white py-2 px-4 border border-transparent rounded-md hover:bg-white hover:border-black hover:text-black hover:shadow-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
        <div
          id="enterprise-pricing-form-submission-wrapper"
          className="mt-4 px-4 hidden text-sm text-center font-heading w-[70vw] sm:w-fit break-words"
        >
          <p
            id="enterprise-pricing-form-submission-message"
            className="break-words"
          >
            Thank you for registering.
          </p>
          <p>Please check your mail for instructions.</p>
        </div>
        <button
          id="close-enterprise-pricing-modal-button"
          className="absolute top-[2%] left-[2%] text-black hover:bg-black hover:rounded-full hover:text-white cursor-pointer"
          onClick={onClose}
        >
          <svg
            aria-label="Close button for enterprise pricing modal"
            id="enterprise-pricing-modal-close-icon"
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

const FreebiePlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id="freebie-plan-wrapper"
      className="flex flex-col p-4 border border-gray-500/20 bg-white text-black shadow-lg shadow-gray-500/50 rounded-md gap-2 text-left"
    >
      <p
        id="freebie-title"
        className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl"
      >
        Freebie
      </p>
      <p
        id="freebie-description"
        className="font-light font-general text-sm sm:text-md pb-4"
      >
        Ideal for individuals who need quick access to basic features.
      </p>
      <p
        id="freebie-price"
        className="font-heading font-light pb-4 flex flex-row items-center gap-2"
      >
        <span className="font-heading font-semibold text-black text-4xl sm:text-5xl">
          $0
        </span>
        <span className="text-md text-gray-500 ">/ month</span>
      </p>
      <button
        id="freebie-start-plan-button"
        href=""
        className="font-general border border-black hover:bg-black hover:text-white hover:border-white hover:shadow-md hover:shadow-pink-500/20 px-4 py-2 text-center rounded-lg mb-2"
        onClick={openModal}
      >
        Get Started Now
      </button>
      <ul
        id="freebie-features-list"
        className="font-general font-light text-gray-400 flex flex-col justify-center items-start gap-2 text-left text-sm md:text-lg"
      >
        <li
          id="freebie-feature_1"
          className="text-black font-semibold flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>20,000+ of PNG & SVG graphics</p>
        </li>
        <li
          id="freebie-feature_2"
          className="text-black font-semibold flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Access to 100 million stock images</p>
        </li>
        <li
          id="freebie-feature_3"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Upload custom icons and fonts</p>
        </li>
        <li
          id="freebie-feature_4"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Unlimited Sharing</p>
        </li>
        <li
          id="freebie-feature_5"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Upload graphics & video in up to 4k</p>
        </li>
        <li
          id="freebie-feature_6"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Unlimited Projects</p>
        </li>
        <li
          id="freebie-feature_7"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Instant Access to our design system</p>
        </li>
        <li
          id="freebie-feature_8"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Create teams to collaborate on designs</p>
        </li>
      </ul>

      {/* Free Plan Pricing Modal */}
      <FreePricingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const ProfessionalPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      id="professional-plan-wrapper"
      className="flex flex-col p-4 border border-gray-500 bg-gray-800 text-white shadow-xl shadow-gray-500/50 rounded-md gap-2 text-left"
    >
      <p
        id="professional-title"
        className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl"
      >
        Professional
      </p>
      <p
        id="professional-description"
        className="font-light font-general text-sm sm:text-md pb-4"
      >
        Ideal for individuals who need advanced features and tools for client
        work.
      </p>
      <p
        id="professional-price"
        className="font-heading font-light pb-4 flex flex-row items-center gap-2"
      >
        <span className="font-semibold text-white text-4xl sm:text-5xl">
          $25
        </span>
        <span className="text-md text-white/50">/ month</span>
      </p>
      <button
        id="professional-start-plan-button"
        href=""
        className="font-general border border-white bg-white text-black hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-pink-500/20 px-4 py-2 text-center rounded-lg mb-2"
        onClick={openModal}
      >
        Get Started Now
      </button>
      <ul
        id="professional-features-list"
        className="font-general text-white flex flex-col justify-center items-start gap-2 text-left text-sm md:text-lg"
      >
        <li
          id="professional-feature_1"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>20,000+ of PNG & SVG graphics</p>
        </li>
        <li
          id="professional-feature_2"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Access to 100 million stock images</p>
        </li>
        <li
          id="professional-feature_3"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Upload custom icons and fonts</p>
        </li>
        <li
          id="professional-feature_4"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Unlimited Sharing</p>
        </li>
        <li
          id="professional-feature_5"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Upload graphics & video in up to 4k</p>
        </li>
        <li
          id="professional-feature_6"
          className="font-light text-white/60 flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Unlimited Projects</p>
        </li>
        <li
          id="professional-feature_7"
          className="font-light text-white/60 flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Instant Access to our design system</p>
        </li>
        <li
          id="professional-feature_8"
          className="font-light text-white/60 flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Create teams to collaborate on designs</p>
        </li>
      </ul>

      {/* Professional Plan Pricing Modal */}
      <ProfessionalPricingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const EnterprisePlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      id="enterprise-plan-wrapper"
      className="flex flex-col p-4 border border-gray-500/20 bg-white text-black shadow-lg shadow-gray-500/50 rounded-md gap-2 text-left"
    >
      <p
        id="enterprise-title"
        className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl"
      >
        Enterprise
      </p>
      <p
        id="enterprise-description"
        className="font-light font-general text-sm sm:text-md pb-4"
      >
        Ideal for businesses who need personalized services and security for
        large teams.
      </p>
      <p
        id="enterprise-price"
        className="font-heading font-light pb-4 flex flex-row items-center gap-2"
      >
        <span className="font-heading font-semibold text-black text-4xl sm:text-5xl">
          $100
        </span>
        <span className="text-md text-gray-500 ">/ month</span>
      </p>
      <button
        id="enterprise-start-plan-button"
        href=""
        className="font-general border border-black hover:bg-black hover:text-white hover:border-white hover:shadow-md hover:shadow-pink-500/20 px-4 py-2 text-center rounded-lg mb-2"
        onClick={openModal}
      >
        Get Started Now
      </button>
      <ul
        id="enterprise-features-list"
        className="font-general font-semibold text-black flex flex-col justify-center items-start gap-2 text-left text-sm md:text-lg"
      >
        <li
          id="enterprise-feature_1"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>20,000+ of PNG & SVG graphics</p>
        </li>
        <li
          id="enterprise-feature_2"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Access to 100 million stock images</p>
        </li>
        <li
          id="enterprise-feature_3"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Upload custom icons and fonts</p>
        </li>
        <li
          id="enterprise-feature_4"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Unlimited Sharing</p>
        </li>
        <li
          id="enterprise-feature_5"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Upload graphics & video in up to 4k</p>
        </li>
        <li
          id="enterprise-feature_6"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Unlimited Projects</p>
        </li>
        <li
          id="enterprise-feature_7"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Instant Access to our design system</p>
        </li>
        <li
          id="enterprise-feature_8"
          className="flex flex-row justify-center items-center gap-2"
        >
          <p>
            <svg
              className="feature-icon h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </p>
          <p>Create teams to collaborate on designs</p>
        </li>
      </ul>

      {/* Enterprise Plan Pricing Modal */}
      <EnterprisePricingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const PricingPlans = () => {
  return (
    <section
      id="pricing-plans-wrapper"
      className="flex flex-col gap-4 px-4 min-[400px]:px-12 min-[500px]:px-16 sm:px-20 md:flex-row md:grid md:grid-rows-2 md:grid-cols-2 md:px-2 md:gap-6 lg:grid-rows-1 xl:grid-cols-3 xl:px-32"
    >
      <FreebiePlan />
      <ProfessionalPlan />
      <EnterprisePlan />
    </section>
  );
};

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="p-4 md:p-8 lg:py-32 flex flex-col gap-8 justify-center items-center text-center"
    >
      <p
        id="pricing-header"
        className="text-center font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
      >
        Pricing made for{" "}
        <span className="whitespace-pre sm:whitespace-normal">
          collaborative support.
        </span>
      </p>
      <p
        id="pricing-description"
        className="-mt-4 font-general text-gray-500 text-md md:text-lg lg:text-lg text-center"
      >
        Plain is made for your entire company. Only pay for users that actually
        message customers. Everyone else is free, forever.
      </p>

      <PricingPlans />
    </section>
  );
}

FreePricingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

ProfessionalPricingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

EnterprisePricingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
