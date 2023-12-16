const ContactUs = () => {
  return (
    <section id="contact-us" className="p-8 sm:p-12 sm:pb-8 md:py-20 md:pb-16 lg:py-24 lg:pb-20 place-content-center text-center">
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
      <a
        id="contact-us-button"
        href="#contact-us"
        className="font-general bg-black border border-transparent hover:border-white/60 hover:shadow-lg hover:shadow-pink-200 text-white  py-3 px-4 w-full sm:py-3 sm:px-5 md:px-8 md:py-3 rounded-md sm:text-base md:text-lg"
      >
        Contact Us
      </a>
    </section>
  );
};

const FooterSocials = () => {
  return (
    <div
      id="footer-socials"
      className="flex flex-row gap-8 mt-4 items-center justify-between"
    >
      <p id="footer-copyright" className="text-gray-500 font-general text-lg">
        © 2077 Untitled UI.{" "}
        <span className="whitespace-pre">All rights reserved.</span>
      </p>
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
            href="https://twitter.com/webmakersstudio"
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
            href="https://www.linkedin.com/in/chetanverma7/"
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
            href="https://www.facebook.com/"
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
            href="https://wellfound.com/company/webmakers-studio"
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
            href="https://dribbble.com/chetanverma"
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
