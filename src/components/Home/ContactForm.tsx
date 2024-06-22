import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and message are not empty
    if (email.trim() === "" || message.trim() === "") {
      alert("Please enter both email and message.");
      return;
    }

    // EmailJS configuration and sending email
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent successfully!");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="w-full h-full bg-contactform rounded-3xl">
      <div className="flex flex-col">
        <h1 className=" px-5 pt-5 azeret-mono-600 font-bold text-2xl dark:text-black">
          &#x1F4E5; <span className="opacity-70">Say Hello!</span>
        </h1>
        <div className="dark:text-darkgrey flex flex-col py-3 px-6 gap-2 azeret-mono-400">
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl text-md pl-5 min-h-8 focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />

          <textarea
            placeholder="Type your message..."
            className="rounded-xl text-sm pl-3 pr-5 py-2 h-20 resize-none focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          ></textarea>

          <button className="bg-gray-400 p-2 text-white font-bold rounded-3xl">
            Send!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
