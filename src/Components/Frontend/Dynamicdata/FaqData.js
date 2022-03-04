import React from "react";
import FAQS from "react-faqs-component";

const FaqData = () => {
  const data = {
    faqs: [
      {
        question: "Do you offer refunds?",
        answer:
          "With many years of experience, we’ve developed over hundreds of official modules and severed over thousands of web solution providers across the globe with server administration, maintenance, custom development, and much more. So, whether you require modifying, customizing or integrating your WHMCS with other systems, you can opt for WHMCS Digital as we’re an outright leader in bespoke software development services linked to WHMCS.",
      },

      {
        question: "How do I choose between monthly and hourly billing?",
        answer:
          "With many years of experience, we’ve developed over hundreds of official modules and severed over thousands of web solution providers across the globe with server administration, maintenance, custom development, and much more. So, whether you require modifying, customizing or integrating your WHMCS with other systems, you can opt for WHMCS Digital as we’re an outright leader in bespoke software development services linked to WHMCS.",
      },

      {
        question: "How do I cancel my account?",
        answer:
          "With many years of experience, we’ve developed over hundreds of official modules and severed over thousands of web solution providers across the globe with server administration, maintenance, custom development, and much more. So, whether you require modifying, customizing or integrating your WHMCS with other systems, you can opt for WHMCS Digital as we’re an outright leader in bespoke software development services linked to WHMCS.",
      },

      {
        question: "What form of payments do you accept?",
        answer:
          "With many years of experience, we’ve developed over hundreds of official modules and severed over thousands of web solution providers across the globe with server administration, maintenance, custom development, and much more. So, whether you require modifying, customizing or integrating your WHMCS with other systems, you can opt for WHMCS Digital as we’re an outright leader in bespoke software development services linked to WHMCS.",
      },

      {
        question: "I have a credit, why am I still marked as suspended?",
        answer:
          "With many years of experience, we’ve developed over hundreds of official modules and severed over thousands of web solution providers across the globe with server administration, maintenance, custom development, and much more. So, whether you require modifying, customizing or integrating your WHMCS with other systems, you can opt for WHMCS Digital as we’re an outright leader in bespoke software development services linked to WHMCS.",
      },

      {
        question: "What is a Dedicated Server?",
        answer:
          "With many years of experience, we’ve developed over hundreds of official modules and severed over thousands of web solution providers across the globe with server administration, maintenance, custom development, and much more. So, whether you require modifying, customizing or integrating your WHMCS with other systems, you can opt for WHMCS Digital as we’re an outright leader in bespoke software development services linked to WHMCS.",
      },

    ],
    backgroundColor: "#f4f5f9", titleColor: "#5a5a5a", answerColor: "#333", iconColor: "#5a5a5a",
  };

  return (
    <>
      <FAQS data={data} />
    </>
  );
};

export default FaqData;
