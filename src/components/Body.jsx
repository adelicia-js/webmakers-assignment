import Introduction from "./body/Intro";
import ImageCarousel from "./body/Carousel";
import HowItWorks from "./body/Working";
import CustomerReview from "./body/Review";
// import PricingSection from "./body/Pricing";
import FAQSection from "./body/Faq";

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
    <main id="main-content-wrapper">
      <Introduction />
      <ImageCarousel images={image_list}/>
      <HowItWorks/>
      <CustomerReview/>
      {/* <PricingSection/> */}
      <FAQSection/>
    </main>
  );
}
