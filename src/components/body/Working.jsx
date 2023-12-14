export default function HowItWorks() {
  return (
    <section className="p-8 md:p-12 lg:p-20 min-h-[30vh]">
      <div className="p-12 lg:p-20 border border-gray-200/50 rounded-lg shadow-lg shadow-gray-400/50 text-center flex flex-col gap-8">
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl text-center font-bold mb-6">
            How it works
          </h1>
          <h2 className="font-heading sm:text-sm md:text-md text-center ">
            Premium designs, unlimited requests, super fast delivery, for one
            flat monthly fee.
          </h2>
        </div>

        <div className="relative">
          <ul className="z-10 grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 justify-center items-center md:gap-12">
            <li className="justify-self-center md:justify-self-start w-full">
              <ul>
                <li className="">
                  <p className="font-heading text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] z-0 text-pink-500/20">
                    1
                  </p>
                </li>
              </ul>
            </li>

            <li className="justify-self-center rotate-[110deg] md:rotate-0">
              <svg
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

            <li className="justify-self-center md:justify-self-center w-full">
              <ul>
                <li className="">
                  <p className="font-heading text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] z-0 text-pink-500/20">
                    2
                  </p>
                </li>
              </ul>
            </li>

            <li className="justify-self-center transform -scale-y-100 rotate-[80deg] md:transform-none md:scale-y-0 md:rotate-0">
              <svg
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

            <li className="justify-self-center md:justify-self-end w-full">
              <ul>
                <li className="">
                  <p className="font-heading text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] z-0 text-pink-500/20">
                    3
                  </p>
                </li>
              </ul>
            </li>
          </ul>

          
        </div>
      </div>
    </section>
  );
}
