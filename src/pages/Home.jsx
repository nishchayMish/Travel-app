import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#ff7e5f]">
      <motion.h1
        className="text-white text-3xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Discover Breathtaking Destinations 🌅
      </motion.h1>
    </div>
  );
};

export default Home;
