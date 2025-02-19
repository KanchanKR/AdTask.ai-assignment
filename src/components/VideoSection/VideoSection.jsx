import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative w-[970px] h-[582px] bg-black rounded-2xl overflow-hidden"
        style={{
          position: "relative",
        }}
      >
        {/* Glowing revolving border animation */}
        <style>
          {`
            @keyframes glowing-border {
              0% {
                border: 4px solid rgba(91, 105, 139, 0.7);
                box-shadow: 0 0 8px rgba(91, 105, 139, 0.7);
                
              }
              25% {
                border: 4px solid rgba(91, 105, 139, 1);
                box-shadow: 0 0 12px rgba(91, 105, 139, 1);
                
              }
              50% {
                border: 4px solid rgba(91, 105, 139, 0.7);
                box-shadow: 0 0 8px rgba(91, 105, 139, 0.7);
                
              }
              75% {
                border: 4px solid rgba(91, 105, 139, 1);
                box-shadow: 0 0 12px rgba(91, 105, 139, 1);
                
              }
              100% {
                border: 4px solid rgba(91, 105, 139, 0.7);
                box-shadow: 0 0 8px rgba(91, 105, 139, 0.7);
                
              }
            }

            .glowing-border {
              animation: glowing-border 4s infinite linear;
            }
          `}
        </style>

        {/* Border with revolving glowing line */}
        <div
          className="glowing-border absolute inset-0 border-transparent rounded-2xl"
          style={{
            boxShadow: "0 0 0 4px rgba(91, 105, 139, 0.7)", // Initial glowing effect
            border: "4px solid rgba(91, 105, 139, 0.7)", // Border color
          }}
        ></div>

        {/* Text (Behind YouTube Logo) */}
        <motion.span
          className="text-white text-9xl font-light absolute inset-0 flex items-center justify-center z-0"
          initial={{ textShadow: "0px 0px 0px rgba(91, 105, 139, 0)" }}
          whileHover={{
            textShadow: [
              "0px 0px 5px rgba(91, 105, 139, 0.5)",
              "0px 0px 15px rgba(91, 105, 139, 0.7)",
              "0px 0px 25px rgba(91, 105, 139, 1)",
              "0px 0px 40px rgba(91, 105, 139, 1)",
              "0px 0px 60px rgba(91, 105, 139, 1)",
            ],
            scale: 1.12,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          style={{
            background: "linear-gradient(180deg, #E2E8F8 0%, #858992 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Ad<span className="font-semibold">Task</span>.ai
        </motion.span>

        {/* YouTube Icon (Centered & On Top inside the rectangle) */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="Youtube"
            className="w-[16%] h-[16%]"
          >
            <g
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#130101"
              className="color000000 svgShape"
            >
              <path
                fill="#f43636"
                d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                className="colorf44336 svgShape"
              ></path>
              <path
                fill="#fafafa"
                d="M6 11.5v-6l5 3z"
                className="colorfafafa svgShape"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
