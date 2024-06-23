import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || message === "") {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY!,
        }
      );
      console.log("SUCCESS!");
      alert("Message sent successfully!");
    } catch (error) {
      console.log("FAILED...", error);
      alert(
        "Message failed to send. Please try again later or get in contact through other platforms!"
      );
    }
  };

  return (
    <div className="w-full h-full bg-contactform rounded-3xl  overflow-hidden hover:shadow-gray-300/10 hover:shadow-2xl duration-150">
      <div className="flex flex-col">
        <h1 className="px-5 pt-5 azeret-mono-600 font-bold text-2xl dark:text-black">
          &#x1F4E5; <span className="opacity-70">Say Hello!</span>
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="dark:text-darkgrey flex flex-col py-3 px-6 gap-2 azeret-mono-400"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="rounded-xl text-md pl-5 min-h-8 focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />

          <textarea
            placeholder="Type your message..."
            name="message"
            value={message}
            onChange={handleMessageChange}
            className="rounded-xl text-sm pl-3 pr-5 py-2 min-h-10 md:h-36 xl:h-full resize-none focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          ></textarea>

          <input
            type="submit"
            className="bg-gray-400 p-2 text-white font-bold rounded-3xl hover:cursor-pointer hover:bg-gray-500 duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            value="Send!"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
