import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import RevealOnScroll from "../RevealOnScroll";

export const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    
    const formData = new FormData(formRef.current);
    formData.append("date", new Date().toLocaleString()); // Add date field

    emailjs.sendForm(
      "service_tn153bi", // EmailJS Service ID
      "template_0vt1yzb", // EmailJS Template ID
      formRef.current,
      "1bT383znp9MwWWt2F" // EmailJS Public Key
    )
    .then(
      () => {
        setIsSending(false);
        setMessageSent(true);
        formRef.current.reset();
      },
      (error) => {
        console.error("Email send error:", error);
        setError("Failed to send message. Please try again later.");
        setIsSending(false);
      }
    );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-100">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {messageSent && <p className="text-green-400 mb-4">Message sent successfully!</p>}
          {error && <p className="text-red-400">{error}</p>}

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <input type="text" name="user_name" required className="w-full border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500/5 focus:bg-blue-500/5" placeholder="Name.." />
            </div>

            <div className="relative">
              <input type="email" name="user_email" required className="w-full border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500/5 focus:bg-blue-500/5" placeholder="example@gmail.com" />
            </div>

            <div className="relative">
              <textarea name="message" required rows={5} className="w-full border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500/5 focus:bg-blue-500/5" placeholder="Your Message..." />
            </div>

            <button type="submit" disabled={isSending} className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,230,248,0.4)]">
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
