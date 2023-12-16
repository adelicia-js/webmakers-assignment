import PropTypes from "prop-types";

export default function ImageCarousel({ images }) {
  return (
    <section id="carousel" className="flex flex-col ">
      <section
        id="carousel-wrapper"
        className="overflow-hidden -mt-12 md:-mt-16 mb-4 sm:mb-6"
      >
        <ul
          id="carousel-image-list"
          className="p-6 gap-6 md:pt-4 md:-mx-[30rem] lg:-mx-[15rem] grid grid-rows-3 grid-cols-2 md:grid-rows-1 md:grid-cols-6 md:gap-2 lg:gap-4 flex-wrap"
        >
          {images.map((image, index) => (
            <li
              id={`carousel-image-${index}-wrapper`}
              key={index}
              className="shadow-lg shadow-gray-500"
            >
              <img
                id={`carousel-image-${index}`}
                src={image.imageUrl}
                alt={`Work Image ${index + 1}`}
                className="w-[50vw] h-fit object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      <a
        id="view-recent-work-link"
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
