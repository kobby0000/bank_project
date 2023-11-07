import React, { useState } from 'react';
import "./faq.css";

const faqData = [
  {
    question: 'How do I open a new bank account?',
    answer: 'You can open a new bank account by visiting our nearest branch or applying online through our website.',
  },
  {
    question: 'What are the interest rates for savings accounts?',
    answer: 'Our savings account interest rates vary depending on the account type. Please check our Rates and Fees section for detailed information.',
  },
  {
    question: 'How can I reset my online banking password?',
    answer: 'To reset your online banking password, go to the login page and click on the "Forgot Password" link. Follow the instructions to reset your password.',
  },
  {
    question: 'What should I do if I have lost my credit card?',
    answer: 'If you\'ve lost your credit card, please contact our customer support immediately at (123) 456-7890 to report the loss and request a replacement card.',
  },
  {
    question: 'How can I check my account balance online?',
    answer: 'You can check your account balance by logging into your online banking account. Your account balance will be displayed on the dashboard.',
  },
  {
    question: 'Are my deposits insured by the FDIC?',
    answer: 'Yes, your deposits are insured by the FDIC (Federal Deposit Insurance Corporation) up to $250,000 per account holder.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can contact our customer support team by phone at (123) 456-7890 or by email at support@bankexample.com. We are available 24/7 to assist you.',
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);   
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      // If the clicked item is already open, close it
      setOpenIndex(null);
    } else {
      // If the clicked item is closed, open it
      setOpenIndex(index);
    }
  }

return (
    <div>
        <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <button className="faq-question" >
            {faq.question}
          </button>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Faq