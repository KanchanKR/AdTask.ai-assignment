import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex w-full pt-32 flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] bg-transparent justify-center items-center relative">
      {/* Background Glows */}
      <div className="absolute inset-x-0 top-[-120px] z-0 flex justify-center">
        <div
          className="w-0 h-0 border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-b-[600px] border-b-[#5B698B]/40 blur-[100px] opacity-50"
        />
        <div
          className="absolute top-[80px] w-0 h-0 border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-b-[600px] border-b-[#5B698B]/50 blur-[120px] opacity-80"
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[700px] h-[700px] bg-grid-black/[0.15] dark:bg-grid-white/[0.2] bg-[length:50px_50px]"
          style={{
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
          }}
        />
      </div>

      {/* Footer Title */}
      <motion.h1
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.4 }}
        className="text-8xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      >
        <motion.span className="text-[#d0d2d8] text-8xl font-light relative flex space-x-1">
          {"adTask.ai".split("").map((char, index) => (
            <motion.span
              key={index}
              className={`inline-block ${
                char === "T" || (char === "a" && index === 3) || char === "s" || char === "k"
                  ? "font-semibold"
                  : ""
              }`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.h1>

      {/* Call to Action */}
      <div className="w-[70%] flex flex-col mt-16 items-center justify-center relative z-10">
        <p className="text-5xl">Are you ready to boost</p>
        <p className="text-5xl mt-2 bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent leading-tight">
          your Digital Presence?
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex mt-14 flex-col gap-8 items-center w-full justify-center">
        <motion.button className="group relative font-light overflow-hidden border-[2px] border-[#5B698B] rounded-full bg-gradient-to-b from-black to-[rgb(65,64,64)] h-[43px] w-[191px] text-white backdrop-blur-sm transition-colors hover:bg-[rgba(0,0,0,0.30)]">
          <span className="relative z-10">Start Free Trial</span>
        </motion.button>

        <motion.button className="group relative border-[2px] font-light border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] h-[43px] w-[191px] text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]">
          <span className="relative z-10">Schedule a Call</span>
        </motion.button>
      </div>

      {/* Divider */}
      <div className="border-t-[#333B4F] w-[90%] border-[1px] mt-10"></div>

      {/* Footer Content */}
      <div className="w-full flex justify-center items-center py-10">
        <div className="flex flex-row w-[90%] justify-evenly">
          {/* Logo & Contact Info */}
          <div className="flex flex-col gap-4">
            <p className="text-[#C5CDE3] text-7xl font-light">
              ad<span className="font-bold">Task</span>.ai
            </p>
            <div className="flex flex-row gap-3 items-end">
              <Mail className="w-4 h-4 text-[#8096D2]" />
              <p className="font-light text-[#C5CDE3] underline text-sm">
                contact@adtask.ai
              </p>
            </div>
            <div className="flex flex-row gap-3 items-end">
              <MapPin className="w-4 h-4 text-[#8096D2]" />
              <p className="font-light text-[#C5CDE3] text-sm">
                San Francisco Bay Area
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="text-[#C5CDE3] text-2xl font-bold">Utilities</p>
            <div className="flex flex-col text-gray-400 gap-1 items-center">
              <p>Home</p>
              <p>Product</p>
              <p>Tools</p>
              <p>Contact Us</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-[#C5CDE3] text-2xl font-bold">Socials</p>
            <div className="flex flex-col text-gray-400 gap-1 items-center">
              <p>X</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full flex justify-center text-gray-400 text-sm font-light mb-3 items-center">
        <p>All rights reserved &copy; 2025 adTask</p>
      </div>
    </div>
  );
};

export default Footer;
