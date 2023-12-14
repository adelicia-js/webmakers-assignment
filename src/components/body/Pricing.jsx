// TODO Make responsive!

export default function PricingSection() {
  return (
    <section id="pricing" className="p-20 flex flex-col gap-8 justify-center items-center text-center">
      <p className="text-center font-heading sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Pricing made for collaborative support.
      </p>
      <p className="-mt-4 font-general text-gray-500 sm:text-md md:text-lg lg:text-lg text-center">
        Plain is made for your entire company. Only pay for users that actually
        message customers. Everyone else is free, forever.
      </p>

      <section className="grid sm:grid-rows-3 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-8">
        <div className="border border-gray-400/20 shadow-lg shadow-gray-400/50 rounded-md p-8 flex flex-col justify-center items-start gap-6">
          <p className="font-heading lg:text-2xl font-bold">Freebie</p>
          <p className="font-general text-left lg:text-md">
            Ideal for individuals who need quick access to basic features.
          </p>
          <p className="font-heading text-gray-500 flex items-center">
            <span className="tracking-[-0.1em] lg:text-6xl text-black whitespace-pre">
              $0{" "}
            </span>
            / Month
          </p>
          <a
            href=""
            className="font-general text-center py-2 md:px-[7.5rem] md:place-self-center whitespace-pre border border-black rounded-md hover:border-white/60 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-pink-300/50"
          >
            Get Started Now
          </a>
          <ul className="font-general flex flex-col gap-3">
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>20,000+ of PNG & SVG graphics</p>
            </li>
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Access to 100 million stock images</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Upload custom icons and fonts</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Unlimited Sharing</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Upload graphics & video in up to 4k</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Unlimited Projects</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Instant Access to our design system</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Create teams to collaborate on designs</p>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 text-white border border-gray-400/20 shadow-lg shadow-gray-400/50 rounded-md p-8 flex flex-col justify-center items-start gap-6">
          <p className="font-heading lg:text-2xl font-bold">Professional</p>
          <p className="font-general text-left lg:text-md">
            Ideal for individuals who who need advanced features and tools for
            client work.
          </p>
          <p className="font-heading text-gray-500 flex items-center">
            <span className="tracking-tight lg:text-6xl text-white whitespace-pre">
              $25{" "}
            </span>
            / Month
          </p>
          <a
            href=""
            className="font-general text-center py-2 md:px-[7.5rem] md:place-self-center whitespace-pre border bg-white text-black border-white rounded-md hover:border-black/60 hover:shadow-lg hover:shadow-pink-300/30"
          >
            Get Started Now
          </a>
          <ul className="font-general flex flex-col gap-3">
            <li className="flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>20,000+ of PNG & SVG graphics</p>
            </li>
            <li className="flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Access to 100 million stock images</p>
            </li>
            <li className="flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Upload custom icons and fonts</p>
            </li>
            <li className="flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Unlimited Sharing</p>
            </li>
            <li className="flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Upload graphics & video in up to 4k</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Unlimited Projects</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Instant Access to our design system</p>
            </li>
            <li className="text-gray-400/80 flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Create teams to collaborate on designs</p>
            </li>
          </ul>
        </div>
        <div className="border border-gray-400/20 shadow-lg shadow-gray-400/50 rounded-md p-8 flex flex-col justify-center items-start gap-6">
          <p className="font-heading lg:text-2xl font-bold">Enterprise</p>
          <p className="font-general text-left lg:text-md">
          Ideal for businesses who need personalized services and security for large teams. 
          </p>
          <p className="font-heading text-gray-500 flex items-center">
            <span className="tracking-tight lg:text-6xl text-black whitespace-pre">
              $100{" "}
            </span>
            / Month
          </p>
          <a
            href=""
            className="font-general text-center py-2 md:px-[7.5rem] md:place-self-center whitespace-pre border border-black rounded-md hover:border-white/60 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-pink-300/50"
          >
            Get Started Now
          </a>
          <ul className="font-general flex flex-col gap-3">
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>20,000+ of PNG & SVG graphics</p>
            </li>
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Access to 100 million stock images</p>
            </li>
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Upload custom icons and fonts</p>
            </li>
            <li className="font-semibold  flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Unlimited Sharing</p>
            </li>
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Upload graphics & video in up to 4k</p>
            </li>
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Unlimited Projects</p>
            </li>
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Instant Access to our design system</p>
            </li>
            <li className="font-semibold flex gap-2 text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Create teams to collaborate on designs</p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
