import { motion } from "framer-motion";
import { useState } from "react";
import GlowingButton from "../UseFulCompo/GlowingButton";
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center text-center text-white bg-black overflow-hidden">
      {/* Background Grid and Triangle Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[700px] h-[700px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
          }}
        />
      </div>

      {/* Taller Triangle Glow Effect */}
      <div className="absolute inset-x-0 top-[-80px] z-0 flex justify-center">
        {/* Larger Soft Ambient Glow */}
        <div
          className="w-0 h-0
            border-l-[450px] border-l-transparent
            border-r-[450px] border-r-transparent
            border-b-[900px] border-b-[#5B698B]/40
            blur-[100px]
            opacity-50"
        />

        {/* Inner Glow for More Softness */}
        <div
          className="absolute top-[80px]
            w-0 h-0
            border-l-[300px] border-l-transparent
            border-r-[300px] border-r-transparent
            border-b-[650px] border-b-[#5B698B]/50
            blur-[120px]
            opacity-60"
        />
      </div>

      {/* Animated Heading Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex items-center justify-center w-[440px] h-[60px] rounded-[15px] border border-[#FFFFFF0D] bg-gradient-to-r from-[#8E8D8D26] to-[#28282826] px-4 overflow-hidden mt-6"
      >
        {/* Slash Animation (Behind Content) */}
        <motion.div
          initial={{ x: "-100%" }} // Start fully outside on the left
          animate={{ x: "100%" }} // Move fully to the right
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center blur-md"
          style={{ zIndex: 0 }} // Ensures it's behind the text
        >
          <div
            className="absolute bg-[#D9D9D9]"
            style={{
              width: "15px",
              height: "65px",
              top: "-5px",
              left: "-20px",
              transform: "rotate(-20deg)",
              opacity: 0.3, // Lower opacity for a subtle glow
            }}
          ></div>
        </motion.div>

        {/* SVG Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 relative z-10" // Ensures it's above the slash
        >
          <path
            d="M6.26045 0C6.92918 2.75561 8.29889 5.16613 12.5876 6.13864C8.40532 7.25586 7.15818 8.82341 6.39161 12.2145C5.45196 8.75358 4.56928 6.86625 0 6.13763C3.9242 5.10238 5.47668 2.94485 6.26045 0ZM16.2398 8.83859C15.1066 12.8237 12.7273 15.5713 8.21718 16.2048C13.5971 17.0143 15.3711 20.2071 16.2398 24C16.9655 19.5402 19.7092 17.1429 24 16.3272C19.8328 15.2646 17.0246 12.849 16.2398 8.83859Z"
            fill="#D9D9D9"
          />
        </svg>

        {/* Heading */}
        <h2 className="relative font-[Poppins] font-medium text-[16px] uppercase leading-[40px] text-center tracking-wide z-10">
          TRANSFORM YOUR DIGITAL PRESENCE WITH AI
        </h2>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[120px] text-center mt-15 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
      >
        <motion.span
          className="text-[#d0d2d8] text-[120px] font-light relative flex space-x-1"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {"adTask.ai".split("").map((char, index) => (
            <motion.span
              key={index}
              className={`inline-block ${
                char === "T" ||
                (char === "a" && index === 3) ||
                char === "s" ||
                char === "k"
                  ? "font-semibold"
                  : ""
              }`}
              animate={
                isHovered
                  ? {
                      textShadow: "0px 0px 30px rgba(142, 146, 156, 1)", // Stronger Glow
                      color: "#d9dbdf", // Slight color change
                    }
                  : {
                      textShadow: "0px 0px 0px rgba(142, 146, 156, 0)",
                      color: "white", // Default color
                    }
              }
              whileHover={{ y: -7 }} // Moves letter slightly up when hovered
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="mt-4 text-white w-[760px] text-[16px]"
      >
        Stop struggling with marketing decisions. Our AI assistant analyzes your
        business, creates personalized strategies, and helps you execute them -
        all in real-time.
      </motion.p>

      {/* Start Free Trial Button */}
      <div className="mt-9">
        <GlowingButton text="Start Free Trial" />
      </div>

      <p className="mt-4 mb-5 text-sm text-white/50">Try AdTask AI free for 30 days</p>
    </div>
  );
};

export default HeroSection;
