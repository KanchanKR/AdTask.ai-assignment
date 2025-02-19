import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./GlowingButton.css"; // Import external styles

const GlowingButton = ({ text }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="glowing-button"
    >
      {/* Glitter SVG (Left) */}
      <div className="glitter left">
        <svg width="50" height="30" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8" fill="white" />
          <circle cx="40" cy="15" r="5" fill="white" />
          <circle cx="60" cy="5" r="3" fill="white" />
        </svg>
      </div>

      {/* Button Text */}
      <span className="text">{text}</span>

      {/* Glitter SVG (Right) */}
      <div className="glitter right">
        <svg width="50" height="30" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8" fill="white" />
          <circle cx="40" cy="15" r="5" fill="white" />
          <circle cx="60" cy="5" r="3" fill="white" />
        </svg>
      </div>
    </motion.button>
  );
};

GlowingButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GlowingButton;
