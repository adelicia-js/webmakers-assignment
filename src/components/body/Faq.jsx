import { useState } from "react";
import PropTypes from "prop-types";

const FAQItem = ({ question, answer }) => {
  // State for determining whether the question item is open
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the question item
  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    // FAQ item
    <div id="faq-item" className="border-b border-gray-300/50">
      <div
        id="faq-item-wrapper"
        className={`flex flex-row justify-between items-center cursor-pointer py-2 px-4 ${
          isOpen ? "bg-pink-100/20" : "bg-transparent"
        }`}
        onClick={toggleQuestion}
      >
        {/* Question */}
        <p id="faq-question" className="text-lg">{question}</p>
        
        {/* Toggle Button - Open/Close */}
        <p id="faq-toggle-button">
          {isOpen ? (
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
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </p>
      </div>
      
      {/* Answer */}
      {isOpen && <p id="faq-answer" className="p-6 text-gray-600 text-md">{answer}</p>}
    </div>
  );
};

export default function FAQSection() {
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time. Just go to your account settings and select the plan that suits your needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. If you cancel before the end of your billing cycle, you won't be charged for the next cycle.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Certainly! You can add custom information to your invoices, such as additional notes or specific details. Our system is flexible to accommodate your needs.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done on a monthly basis. Your payment method will be charged automatically at the beginning of each billing cycle. You'll receive an invoice detailing the charges for that period.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "To change your account email, go to your account settings and look for the option to update your email. Follow the prompts, and you'll receive a confirmation email to complete the process.",
    },
  ];

  return (
    // FAQ Section
    <section id="faq" className="p-8 sm:py-16 md:py-20 lg:py-32 flex flex-col justify-center items-center gap-2">
        <p id="faq-title" className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold">Frequently Asked Questions</p>
        <p id="faq-description" className="text-center text-md font-general text-gray-500">Everything you need to know about the product and billing.</p>
        
        {/* FAQ Items List */}
        <div id="faq-items" className="flex flex-col sm:gap-6 md:gap-6 lg:gap-8 pt-4 sm:pt-6 font-general sm:w-[75vw] lg:w-[50vw]">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
    </section>
  );
}

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
