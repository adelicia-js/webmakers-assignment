import Introduction from "./body/Intro";
import ImageCarousel from "./body/Carousel";

const image_list = [
  {
      imageUrl:"../../public/imageOne.webp"
  },
  {
      imageUrl:"../../public/imageTwo.webp"
  },
  {
      imageUrl:"../../public/imageThree.webp"
  },
  {
      imageUrl:"../../public/imageFour.webp"
  },
  {
      imageUrl:"../../public/imageFive.webp"
  },
  {
      imageUrl:"../../public/imageSix.webp"
  },
]


export default function MainSection() {
  return (
    <main>
      <Introduction />
      <ImageCarousel images={image_list}/>
      <section id="how-it-works"></section>
      <section id="pricing"></section>
      <section id="faq"></section>
      <section id="contact-us"></section>
    </main>
  );
}
