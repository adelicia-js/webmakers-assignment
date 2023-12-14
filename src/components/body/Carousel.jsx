import "../../App.css";
import PropTypes from "prop-types";

export default function ImageCarousel({ images }) {
  return (
    <section className="flex flex-col ">
      <section className="overflow-hidden -mt-12 md:-mt-16 mb-4 sm:mb-6">
        <ul className="p-6 gap-6 md:pt-4 md:-mx-[30rem] lg:-mx-[15rem] grid grid-rows-3 grid-cols-2 md:grid-rows-1 md:grid-cols-6 md:gap-2 lg:gap-4 flex-wrap">
          {images.map((image, index) => (
            <li
              key={index}
              className="border border-gray-100/10 rounded-sm shadow-lg md:shadow-md shadow-gray-400/20 md:shadow-gray-200"
            >
              <img
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
                className="md:w-full md:h-full"
              />
            </li>
          ))}
        </ul>
      </section>

      <a
        className="font-general text-sm sm:text-md md:text-lg border border-black hover:border-white/60 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-pink-300/50 px-12 py-3 rounded-md w-fit place-self-center"
        href=""
      >
        View Recent Work
      </a>
    </section>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
