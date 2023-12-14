import Introduction from "./body/Intro";
import ImageCarousel from "./body/Carousel";
import HowItWorks from "./body/Working";
import CustomerReview from "./body/Review";
import PricingSection from "./body/Pricing";

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
      <CustomerReview/>
      <PricingSection/>
      <section id="faq"></section>
      <section id="contact-us"></section>
    </main>
  );
}
