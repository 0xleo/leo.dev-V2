import { motion } from "framer-motion";
import './styles/Contacts.css'
import { ItemsIMG } from './ItemsIMG'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1.7,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2
    }
  }
};

const imageSources = [
    <ItemsIMG key={1} src={'./src/components/assets/Github.svg'} className="item" alt="Instagram logo" />,
    <ItemsIMG key={3} src={'./src/components/assets/linkedin.svg'} className="item" alt="Instagram logo" />,
    <ItemsIMG key={2} src={'./src/components/assets/twitterX.svg'} className="item" alt="Instagram logo" />,
    <ItemsIMG key={4} src={'./src/components/assets/telegram.svg'} className="item" alt="Instagram logo" />,
  ];
  

const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const Contacts = () => (
  <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {imageSources.map((source, index) => (
      <motion.li key={index} className="item" variants={item}>
        {source}
      </motion.li>
    ))}
  </motion.ul>
);