export default function BackToTop() {
    return (
        <a
        href="#home"
        className="hidden sm:block sm:p-2 md:p-3 border text-black/50 border-black/50 hover:bg-black hover:text-white rounded-full fixed bottom-[5%] right-[2%]"
      >
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
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </a>
    )
}