
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react"; // Ensure you have 'lucide-react' installed

const ContactForm = () => {
  const [isHovered2, setIsHovered2] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div className="flex w-full flex-col bg-gradient-to-b to-[#040508] from-[#0C0F15] bg-transparent justify-center items-center relative">
      {/* Gradient Circle Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#293249] to-transparent opacity-40 blur-3xl"></div>

      <div className="w-[80%] mt-10 mb-10 gap-20 flex flex-row items-center justify-evenly">
        {/* Left Section (Text & Contact Info) */}
        <div className="flex flex-col relative">
          <div className="absolute inset-x-0 top-[-50px] z-0 flex justify-center">
            {/* Outer Soft Glow - Larger Ellipse */}
            <div
              className="absolute w-[400px] h-[200px] bg-[#5B698B]/40 opacity-80 blur-[80px]"
              style={{ borderRadius: "50%" }}
            />
            {/* Inner Glow - Smaller & Brighter Ellipse */}
            <div
              className="absolute w-[300px] h-[150px] bg-[#5B698B]/50 opacity-80 blur-[100px]"
              style={{ borderRadius: "50%" }}
            />
          </div>

          <p className="text-4xl font-light">Ask whatever you have</p>
          <p className="text-4xl bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent font-light leading-tight">
            In your Mind now
          </p>
          <p className="font-light text-sm mt-8">
            Whether you have questions or are ready to discuss your
          </p>
          <p className="font-light text-sm">
            business, we&apos;re here to help—reach out today!
          </p>

          {/* Contact Details */}
          <div className="mt-8 flex flex-row gap-3 items-end">
            <Mail className="w-6 h-6 text-[#8096D2]" />
            <p className="font-light text-sm">contact@adtask.ai</p>
          </div>
          <div className="mt-8 flex flex-row gap-3 items-end">
            <Phone className="w-6 h-6 text-[#8096D2]" />
            <p className="font-light text-sm">(969) 819 8061</p>
          </div>
          <div className="mt-8 flex flex-row gap-3 items-end">
            <MapPin className="w-6 h-6 text-[#8096D2]" />
            <p className="font-light text-sm">San Francisco Bay Area</p>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="flex gap-4 flex-col">
          <div className="flex flex-col">
            <p className="font-light text-sm">Name</p>
            <input
              className="w-[500px] text-sm pl-3 bg-transparent border-[1px] mt-2 h-[35px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]"
              style={{ zIndex: 50, position: "relative" }}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-sm">Email</p>
            <input
              className="w-[500px] text-sm pl-3 bg-transparent border-[1px] mt-2 h-[35px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]"
              style={{ zIndex: 50, position: "relative" }}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-sm">Message</p>
            <textarea
              className="w-[500px] text-sm pl-3 pt-2 bg-transparent border-[1px] mt-2 h-[100px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]"
              style={{ zIndex: 50, position: "relative" }}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            className="group relative w-[100px] border-[2px] border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] px-2 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]"
            onMouseMove={handleMouseMove}
            onHoverStart={() => setIsHovered2(true)}
            onHoverEnd={() => setIsHovered2(false)}
          >
            <span className="relative z-10">Submit</span>
            {isHovered2 && (
              <motion.div
                className="absolute inset-0 z-0"
                animate={{
                  background: [
                    `radial-gradient(40px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 50%)`,
                  ],
                }}
                transition={{ duration: 0.15 }}
              />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
