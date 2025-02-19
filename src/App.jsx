import "./App.css";

import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import VideoSection from "./components/VideoSection/VideoSection";

import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import LogoMarquee from "./components/Testimonials/LogoMarquee";
import GlowingAdSenseCard from "./components/Socials/GlowingAdSenseCard";
import BentoGrid from "./components/useFul/BentoGrid";
import Grid2 from "./components/useFul/Grid2";
import Grid from "./components/useFul/Grid";

import {
  Gauge,
  Globe,
  
  Megaphone,
  MousePointerClick,
  
  SquareDashedMousePointer,
  TrendingUpIcon,
} from "lucide-react";

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
          <p className="text-[36px] font-light">Feature packed to Make</p>

          {/* Borders (Shifted Further Left & Right) */}
          <div className="relative flex items-center w-full justify-center mt-1">
            <div className="absolute -left-40 h-[1px] w-[30%] bg-gradient-to-l to-black from-[#8096D2]" />
            <div className="absolute -right-40 h-[1px] w-[30%] bg-gradient-to-r to-black from-[#8096D2]" />
          </div>

          {/* Second Line */}
          <p className="text-[36px] mt-2 bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent font-light leading-tight">
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
        <div className="grid grid-cols-3 mt-14 gap-0 mb-10">
            <Grid
              title={"Smart Ad Targeting"}
              text={
                "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates."
              }
            >
              <MousePointerClick className="w-20 h-20" />
            </Grid>
            <Grid
              title={"Performance Analytics"}
              text={
                "Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies.."
              }
            >
              <Gauge className="w-20 h-20" />
            </Grid>
            <Grid
              title={"SEO Automation"}
              text={
                "Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort."
              }
            >
              <TrendingUpIcon className="w-20 h-20" />
            </Grid>
            <Grid
              title={"Social Media Marketing"}
              text={
                "AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact."
              }
            >
              <Globe className="w-20 h-20" />
            </Grid>
            <Grid
              title={"Conversion Optimization"}
              text={
                "AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates."
              }
            >
              <SquareDashedMousePointer className="w-20 h-20" />
            </Grid>
            <Grid
              title={"Campaign Automation"}
              text={
                "Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results."
              }
            >
              <Megaphone className="w-20 h-20" />
            </Grid>
          </div>
      </div>


     

      <div className="flex justify-center items-center relative flex-col mb-40">
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

      {/* Wrapper for Centering */}
      <div className="flex justify-center items-center mt-16 min-h-screen relative flex-col">
        {/* Features Button */}
        <button
          className="rounded-[15px] border-[1px] border-[#FFFFFF0D] w-[96px] h-[34px] text-sm mt-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
          }}
        >
          TESTINOMIALS
        </button>

        {/* Text & Gradient Borders */}
        <div className="w-[70%] flex flex-col mt-8 items-center justify-center relative z-10 ">
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
          <p className="text-5xl font-light">Trusted by </p>

          {/* Borders (Shifted Further Left & Right) */}
          <div className="relative flex items-center w-full justify-center mt-1">
            <div className="absolute -left-40 h-[1px] w-[30%] bg-gradient-to-l to-black from-[#8096D2]" />
            <div className="absolute -right-40 h-[1px] w-[30%] bg-gradient-to-r to-black from-[#8096D2]" />
          </div>

          {/* Second Line */}
          <p className="text-5xl mt-2 bg-gradient-to-b from-[#7687B5] to-[#2f61df] bg-clip-text text-transparent font-light leading-tight">
          satisfied clients
          </p>

          <p className="text-white text-[14px] h-[21px] mt-7">Discover how we’ve driven growth and innovation.</p>

          <div className="grid grid-cols-3 mt-14 gap-4 mb-10 ">
            <Grid2
              text="We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time"
              name="Brand Director at a Tech Startup"
            />
            <Grid2
              text="Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics."
              name="Digital Strategist at a SaaS Company"
            />
            <Grid2
              text="adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!"
              name="Head of Growth at a Tech Startup"
            />
            <Grid2
              text="adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers."
              name="Social Media Lead at a Non-Profit Organization"
            />
            <Grid2
              text="We've tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!"
              name="Ecommerce Manager at a Home Décor Brand"
            />
            <Grid2
              text="We've seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!"
              name=" Social Media Manager at a Fitness Brand"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center relative flex-col ">
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
