import "../App.css";

export default function NavBar() {
  return (
      <ul className="min-h-[5vh] flex flex-row justify-between px-8 items-center text-center">
        <li>
          <a href="#home" className="font-heading font-bold md:text-xl">
            UniCraft
          </a>
        </li>
        <ul className="font-general flex flex-row justify-center items-center gap-8 md:text-md">
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
        <li>
          <a
            href="#contact-us"
            className="font-general border border-black px-8 py-3 rounded-md md:text-md"
          >
            Contact Us
          </a>
        </li>
      </ul>
  );
}
