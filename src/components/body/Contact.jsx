export default function ContactUs() {
  return (
    <section id="contact-us" className="p-8 text-center">
      <p id="contact-us-header-1" className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold mb-1">No long-term contracts.</p>
      <p id="contact-us-header-2" className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold mb-3">No catches. Simple.</p>
      <p id="contact-us-description" className="text-lg font-general text-gray-500 mb-6">Start your 30-day free trial. <span className="whitespace-nowrap">Cancel anytime.</span></p>
      <a id="contact-us-button"
        href="#contact-us"
        className="font-general bg-black border border-transparent hover:border-white/60 hover:shadow-lg hover:shadow-pink-200 text-white  py-3 px-4 w-full sm:py-3 sm:px-5 md:px-8 md:py-3 rounded-md sm:text-base md:text-lg"
      >
        Contact Us
      </a>
    </section>
  );
}
