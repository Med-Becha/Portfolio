"use client";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-6 sm:px-12 md:px-24 lg:px-36"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I’d love to hear from you! Whether you have a question, want to
          collaborate, or just say hi, feel free to reach out.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Contact Form */}
          <form
            className="bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <motion.input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <motion.input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-gray-300 mb-6">Or reach me on:</p>
            <a
              href="mailto:youremail@example.com"
              className="text-blue-400 hover:text-blue-500 mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: youremail@example.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-blue-400 hover:text-blue-500 mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourprofile"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
