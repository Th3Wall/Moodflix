import "./revealTransition.scss";
import {motion} from "framer-motion";
import {defaultEasing} from "../../motionUtils";

const blackBox = {
  initial: {
    height: "100vh",
    top: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: defaultEasing,
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: "50.5%",
  },
  animate: {
    y: "44.5%",
    transition: {
      duration: 1.5,
      ease: defaultEasing,
    },
  },
};


const RevealTransition = () => {
  return (
    <div className="reveal__wrp">
      <motion.div
        className="reveal__sheet"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <motion.svg className="reveal__svg--wrp" variants={textContainer}>
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
            className="reveal__svg--pattern"
          >
            <rect className="reveal__svg--pattern rect" />
            <motion.rect variants={text} className="reveal__svg--pattern motion-rect" />
          </pattern>
          <text
            className="reveal__svg--text"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            MOODFLIX
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default RevealTransition;