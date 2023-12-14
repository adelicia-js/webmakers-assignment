import Introduction from "./body/Intro";
import ImageCarousel from "./body/Carousel";
import HowItWorks from "./body/Working";

const image_list = [
  {
      imageUrl:"../../imageOne.webp"
  },
  {
      imageUrl:"../../imageTwo.webp"
  },
  {
      imageUrl:"../../imageThree.webp"
  },
  {
      imageUrl:"../../imageFour.webp"
  },
  {
      imageUrl:"../../imageFive.webp"
  },
  {
      imageUrl:"../../imageSix.webp"
  },
]

export default function MainSection() {
  return (
    <main>
      <Introduction />
      <ImageCarousel images={image_list}/>
      <HowItWorks/>
      <section id="pricing"></section>
      <section id="faq"></section>
      <section id="contact-us"></section>
    </main>
  );
}
