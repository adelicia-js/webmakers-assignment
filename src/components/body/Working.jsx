const Process = () => {
  // Process Section: Step 1 -> Step 2 -> Step 3
  return (
    <div id="process-wrapper" className="relative md:px-6">
      {/* List of steps */}
      <ul
        id="process-list"
        className="z-10 flex flex-col md:flex-row lg:grid lg:grid-rows-1 lg:grid-cols-5 justify-center items-center md:gap-6"
      >
        {/* Step 1 */}
        <li
          id="process-1"
          className="justify-self-center md:justify-self-start w-full relative md:px-6"
        >
          <p
            id="process-1-number"
            className="font-heading text-[10rem] md:text-[12rem] lg:text-[12rem] z-0 text-pink-500/20 relative"
          >
            1
          </p>

          {/* Step 1 content */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-1 justify-center items-center text-black">
            <p className="font-bold font-heading text-lg sm:text-xl lg:text-[1.4rem]">
              Subscribe
            </p>
            <p className="font-general font-light text-gray-600 text-[0.7rem] sm:text-xs md:text-[0.8rem] lg:text-sm h-fit w-[50vw] sm:w-[30vw] md:w-[18vw] lg:w-[12vw]">
              Subscribe to a plan & you{`'`}ll get instant access to your
              private Slack channel.
            </p>
          </div>
        </li>

        {/* Arrow */}
        <li
          id="process-arrow-1"
          className="justify-self-center rotate-[110deg] md:rotate-0"
        >
          <svg
            id="process-arrow-1-svg"
            width="46"
            height="25"
            viewBox="0 0 46 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 lg:w-16 h-12 lg:h-12"
          >
            <path
              d="M45.1672 13.2985C44.0795 15.6782 41.2583 16.015 39.1955 17.1511C34.0722 19.203 28.9576 21.2695 24.0226 23.7821C23.1162 24.2919 23.3098 22.9191 23.5667 22.4366C24.4239 19.5399 27.4334 18.9336 29.7584 17.7392C32.1679 16.6104 34.6319 15.6254 37.1047 14.6622C34.8642 14.6404 32.5973 14.9335 30.3832 15.1119C21.3914 16.279 12.2658 18.1707 4.04481 22.229C3.04593 22.7676 2.08019 23.3696 1.15313 24.0315C0.952489 24.1844 0.544169 24.4575 0.352329 24.1353C0.112969 23.1885 0.790568 22.2035 1.26225 21.4279C6.87313 15.4561 25.6048 11.9148 36.5802 11.8729C33.8821 10.187 31.309 8.2789 28.6619 6.51647C27.3279 5.51327 25.7509 4.72309 24.6685 3.41948C24.3675 2.44723 25.1842 1.23829 25.9779 0.770376C26.1522 0.708473 26.2806 0.837742 26.3422 0.996141C32.4741 4.72673 38.4915 8.99079 45.3239 11.2321C46.1387 11.5033 45.4066 12.7651 45.1672 13.3022V13.2985Z"
              fill="#4B5563"
            />
          </svg>
        </li>

        {/* Step 2 */}
        <li
          id="process-2"
          className="justify-self-center md:justify-self-center w-full relative md:px-4"
        >
          <ul id="process-2-wrapper">
            <li id="process-2-item">
              <p
                id="process-2-number"
                className="font-heading text-[10rem] sm:text-[10rem] md:text-[12rem] lg:text-[12rem] z-0 text-pink-500/20"
              >
                2
              </p>

              {/* Step 2 content */}
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-1 justify-center items-center text-black">
                <p className="font-heading font-bold text-lg sm:text-xl lg:text-[1.4rem]">
                  Request
                </p>
                <p className="font-general font-light text-gray-600 text-[0.7rem] sm:text-xs md:text-[0.8rem] lg:text-sm h-fit w-[50vw] sm:w-[30vw] md:w-[18vw] lg:w-[15vw]">
                  Submit any number of requests. We{`'`}ll work through them,
                  one at a time, ensuring consistent updates every 24-48 hours.
                </p>
              </div>
            </li>
          </ul>
        </li>

        {/* Arrow */}
        <li
          id="process-arrow-2"
          className="justify-self-center transform -scale-y-100 rotate-[80deg] md:transform-none md:scale-y-0 md:rotate-0"
        >
          <svg
            id="process-arrow-2-svg"
            width="46"
            height="25"
            viewBox="0 0 46 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-12 lg:w-16 lg:h-12"
          >
            <path
              d="M45.1672 13.2985C44.0795 15.6782 41.2583 16.015 39.1955 17.1511C34.0722 19.203 28.9576 21.2695 24.0226 23.7821C23.1162 24.2919 23.3098 22.9191 23.5667 22.4366C24.4239 19.5399 27.4334 18.9336 29.7584 17.7392C32.1679 16.6104 34.6319 15.6254 37.1047 14.6622C34.8642 14.6404 32.5973 14.9335 30.3832 15.1119C21.3914 16.279 12.2658 18.1707 4.04481 22.229C3.04593 22.7676 2.08019 23.3696 1.15313 24.0315C0.952489 24.1844 0.544169 24.4575 0.352329 24.1353C0.112969 23.1885 0.790568 22.2035 1.26225 21.4279C6.87313 15.4561 25.6048 11.9148 36.5802 11.8729C33.8821 10.187 31.309 8.2789 28.6619 6.51647C27.3279 5.51327 25.7509 4.72309 24.6685 3.41948C24.3675 2.44723 25.1842 1.23829 25.9779 0.770376C26.1522 0.708473 26.2806 0.837742 26.3422 0.996141C32.4741 4.72673 38.4915 8.99079 45.3239 11.2321C46.1387 11.5033 45.4066 12.7651 45.1672 13.3022V13.2985Z"
              fill="#4B5563"
            />
          </svg>
        </li>

        {/* Step 3 */}
        <li
          id="process-3"
          className="justify-self-center md:justify-self-end w-full relative"
        >
          <ul id="process-3-wrapper">
            <li id="">
              <p
                id="process-3-number"
                className="font-heading text-[10rem] sm:text-[10rem] md:text-[12rem] lg:text-[12rem] z-0 text-pink-500/20"
              >
                3
              </p>

              {/* Step 3 content */}
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-1 justify-center items-center text-black">
                <p className="font-heading font-bold text-lg sm:text-xl lg:text-[1.4rem]">
                  Revise
                </p>
                <p className="font-light text-gray-600 font-general text-[0.7rem] sm:text-xs md:text-[0.8rem] lg:text-sm h-fit w-[50vw] sm:w-[30vw] md:w-[18vw] lg:w-[15vw]">
                  Need changes? We guarantee unlimited revisions until you{`'`}
                  re 200% satisfied.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default function HowItWorks() {
  // How it works section
  return (
    <section
      id="how-it-works"
      className="p-8 md:p-12 lg:px-20 lg:py-48 min-h-[30vh]"
    >
      <div
        id="how-it-works-wrapper"
        className="p-12 lg:px-20 lg:py-12 border border-t-gray-400/20 border-x-gray-400/20 border-b-gray-200 rounded-lg shadow-lg shadow-gray-400/50 text-center flex flex-col lg:gap-8"
      >
        <div id="how-it-works-header-wrapper" className="">
          <h1
            id="how-it-works-header"
            className="text-4xl sm:text-6xl md:text-7xl text-center font-bold mb-6 md:mb-2 min-[400px]:whitespace-pre"
          >
            How it works
          </h1>
          <h2
            id="how-it-works-description"
            className="font-general font-light sm:text-md text-center"
          >
            Premium designs, unlimited requests, super fast delivery,
            <span className="md:whitespace-nowrap">
              for one flat monthly fee.
            </span>
          </h2>
        </div>

        <Process />
      </div>
    </section>
  );
}
