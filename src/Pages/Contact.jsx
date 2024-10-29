import React from "react";
import Subscribe from "../Components/Subscribe";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold">
          Contact Us
        </h1>
      </div>
      <div className="-translate-y-1/2">
        <Subscribe />
      </div>
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
