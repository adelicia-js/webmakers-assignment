const FreebiePlan = () => {
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
      <a
        id="freebie-start-plan-button"
        href=""
        className="font-general border border-black hover:bg-black hover:text-white hover:border-white hover:shadow-md hover:shadow-pink-500/20 px-4 py-2 text-center rounded-lg mb-2"
      >
        Get Started Now
      </a>
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
    </div>
  );
};

const ProfessionalPlan = () => {
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
      <a
        id="professional-start-plan-button"
        href=""
        className="font-general border border-white bg-white text-black hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-pink-500/20 px-4 py-2 text-center rounded-lg mb-2"
      >
        Get Started Now
      </a>
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
    </div>
  );
};

const EnterprisePlan = () => {
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
      <a
        id="enterprise-start-plan-button"
        href=""
        className="font-general border border-black hover:bg-black hover:text-white hover:border-white hover:shadow-md hover:shadow-pink-500/20 px-4 py-2 text-center rounded-lg mb-2"
      >
        Get Started Now
      </a>
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
