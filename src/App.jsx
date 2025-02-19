import "./App.css";

import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import VideoSection from "./components/VideoSection/VideoSection";

import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import LogoMarquee from "./components/Testimonials/LogoMarquee";
import GlowingAdSenseCard from "./components/Socials/GlowingAdSenseCard";
import BentoGrid from "./components/useFul/BentoGrid";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <div className="w-full mt-8">
        <LogoMarquee />
      </div>
      <div className="flex flex-col justify-center mt-14 mb-16 items-center w-full">
        <p className="text-[16px] text-gray-200">Adtask AI works with: </p>
        <GlowingAdSenseCard />
      </div>

      {/* Wrapper for Centering */}
      <div className="flex justify-center mt-10 items-center h-[350px] relative flex-col">
        {/* Features Button */}
        <button
          className="rounded-[15px] border-[1px] border-[#FFFFFF0D] w-[96px] h-[34px] text-sm mt-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
          }}
        >
          FEATURES
        </button>

        {/* Text & Gradient Borders */}
        <div className="w-[70%] flex flex-col mt-8 items-center justify-center relative z-10">
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

          {/* First Line */}
          <p className="text-5xl font-light">Feature packed to Make</p>

          {/* Borders (Shifted Further Left & Right) */}
          <div className="relative flex items-center w-full justify-center mt-1">
            <div className="absolute -left-40 h-[1px] w-[30%] bg-gradient-to-l to-black from-[#8096D2]" />
            <div className="absolute -right-40 h-[1px] w-[30%] bg-gradient-to-r to-black from-[#8096D2]" />
          </div>

          {/* Second Line */}
          <p className="text-5xl mt-2 bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent font-light leading-tight">
            Digital marketing easier and affordable
          </p>

          <p className="text-white mt-8">
            Experience Intelligent Features to optimize your marketing efforts.
          </p>
        </div>
      </div>

      <BentoGrid />

{/* Wrapper for Centering */}
<div className="flex justify-center items-center min-h-screen relative flex-col">
        {/* Features Button */}
        <button
          className="rounded-[15px] border-[1px] border-[#FFFFFF0D] w-[96px] h-[34px] text-sm mt-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
          }}
        >
          SERVICES
        </button>

        {/* Text & Gradient Borders */}
        <div className="w-[70%] flex flex-col mt-8 items-center justify-center relative z-10">
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

          {/* First Line */}
          <p className="text-5xl font-light">Innovative Services</p>

          {/* Borders (Shifted Further Left & Right) */}
          <div className="relative flex items-center w-full justify-center mt-1">
            <div className="absolute -left-40 h-[1px] w-[30%] bg-gradient-to-l to-black from-[#8096D2]" />
            <div className="absolute -right-40 h-[1px] w-[30%] bg-gradient-to-r to-black from-[#8096D2]" />
          </div>

          {/* Second Line */}
          <p className="text-5xl mt-2 bg-gradient-to-b from-[#7687B5] to-[#2f61df] bg-clip-text text-transparent font-light leading-tight">
          for Growth
          </p>

        </div>
      </div>
      <div className="flex justify-center items-center relative flex-col">

      
      <button
          className="rounded-[15px] border-[1px] border-[#FFFFFF0D] w-[100px] h-[50px] text-sm mt-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
          }}
        >
          Contact us 
        </button>
        </div>
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
