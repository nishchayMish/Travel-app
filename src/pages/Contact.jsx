import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#ff7e5f] flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-2xl p-8 max-w-lg w-full border border-white/30"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold text-center text-white mb-4"
        >
          Contact Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white text-center mb-6"
        >
          Feel free to reach out by filling out the form below.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-white font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-white/40 rounded-lg focus:ring-2 focus:ring-white outline-none placeholder-white"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-white/40 rounded-lg focus:ring-2 focus:ring-white outline-none placeholder-white"
            />
          </div>
          <div>
            <label className="block text-white font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-white bg-opacity-20 text-white border border-white/40 rounded-lg focus:ring-2 focus:ring-white outline-none placeholder-white"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-[#1e3c72] font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-white font-medium">Or connect with me on</p>
          <div className="flex justify-center space-x-4 mt-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-gray-200 text-xl"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-gray-200 text-xl"
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-gray-200 text-xl"
            >
              <i className="fab fa-github"></i>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
