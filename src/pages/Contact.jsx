import React, { useState, useEffect } from "react";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { MdOutlinePhone } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    country: "",
  });

  const [countries, setCountries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    fetch("/country.json")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading countries:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append("access_key", "2b6c2867-c8e5-4891-9d93-54d4d04b26b6");
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("lastName", formData.lastName);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("message", formData.message);
    formDataObj.append("country", formData.country);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          country: "",
        });
      } else {
        setResponseMessage(data.message || "Failed to send the message.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResponseMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="font-Afacad">
      <div className="bg-primary border-b py-20 flex flex-col lg:flex-row gap-20 overflow-hidden px-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2 flex flex-col gap-7 rounded-2xl bg-gray-800 px-10 py-20 lg:ml-32 order-2 lg:order-1"
        >
          <h1 className="text-[#FEB763] text-3xl lg:text-5xl font-semibold">
            Let's Connect
          </h1>
          <p className="text-white text-xl">
            Interested in AI, research, or internships? Reach out to explore how we can innovate together with Neura AI.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-5 w-full">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="px-5 w-full py-3 text-white focus:border-[#FEB763] transition-all duration-500 focus:border-[2px] bg-primary border-[1px] border-gray-500 rounded-xl outline-none"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="px-5 w-full py-3 text-white focus:border-[#FEB763] transition-all duration-500 focus:border-[2px] bg-primary border-[1px] border-gray-500 rounded-xl outline-none"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-5 py-3 w-full text-white focus:border-[#FEB763] transition-all duration-500 focus:border-[2px] bg-primary border-[1px] border-gray-500 rounded-xl outline-none"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="px-5 py-3 w-full text-white focus:border-[#FEB763] transition-all duration-500 focus:border-[2px] bg-primary border-[1px] border-gray-500 rounded-xl outline-none"
                placeholder="Phone Number"
                required
               
              />
            </div>

            {/* Country Select */}
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="px-5 py-3 w-full text-white focus:border-[#FEB763] transition-all duration-500 focus:border-[2px] bg-primary border-[1px] border-gray-500 rounded-xl outline-none"
            >
              <option value="">Select your Country</option>
              {countries.map((country, index) => (
                <option
                  key={index}
                  value={`${country.name} (+${country.dialing_code})`}
                >
                  {country.name} (+{country.dialing_code})
                </option>
              ))}
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="px-5 py-3 w-full h-52 text-white focus:border-[#FEB763] transition-all duration-500 focus:border-[2px] bg-primary border-[1px] border-gray-500 rounded-xl outline-none"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary relative w-fit px-8 py-4 overflow-hidden rounded-full group z-10 text-white font-semibold"
              disabled={isSubmitting}
            >
              <div className="absolute top-0 bg-white w-full -left-[100%] h-full z-0 rounded-full group-hover:left-0 transition-all duration-300 ease-in-out"></div>
              <span className="relative z-10 group-hover:text-gray-900">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
          {responseMessage && <p className="text-white mt-4">{responseMessage}</p>}
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-10 px-5 justify-center items-start lg:w-1/2 order-1 lg:order-2"
        >
          <div className="text-white flex flex-col gap-3">
            <h1 className="text-xl lg:text-3xl font-semibold text-[#FEB763]">
              Collaboration Starts Here
            </h1>
            <p className="text-lg lg:text-xl">
              Join us in exploring cutting-edge AI applications. We're always open to:
            </p>
            <ul className="flex flex-col gap-3 text-lg">
              <li className="flex items-center gap-2">
                <span><VscActivateBreakpoints /></span> Academic and research partnerships
              </li>
              <li className="flex items-center gap-2">
                <span><VscActivateBreakpoints /></span> Internship and mentorship programs
              </li>
              <li className="flex items-center gap-2">
                <span><VscActivateBreakpoints /></span> Product collaboration and pilots
              </li>
            </ul>
          </div>
          {/* Email */}
          <div className="text-white flex items-center justify-center gap-7">
            <span className="text-3xl bg-gray-800 p-5 rounded-full">
              <TfiEmail />
            </span>
            <div className="flex flex-col gap-3">
              <p className="lg:text-2xl text-lg font-light">Email</p>
              <a
                href="mailto:neuraaiservices@gmail.com"
                className="text-sm lg:text-xl font-semibold hover:text-[#FEB763] transition-all duration-500"
              >
                neuraaiservices@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="text-white flex items-center justify-center gap-7">
            <span className="text-3xl bg-gray-800 p-5 rounded-full">
              <MdOutlinePhone aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-3">
              <p className="lg:text-2xl text-lg font-light">For Enquiry</p>
              <a
                href="tel:+918778171529"
                className="text-sm lg:text-xl font-semibold hover:text-[#FEB763] transition-all duration-500"
              >
                +91 87781 71529
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
