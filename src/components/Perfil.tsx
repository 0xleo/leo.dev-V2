import { motion } from "framer-motion";
import './styles/Perfil.css'
import { ItemsIMG } from './ItemsIMG'

const Perfil = () => {
  return (
    <div>
            <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <ItemsIMG src={'./src/components/assets/perfil.png'} className="perfil" alt="Instagram logo" />
    </motion.div>
    </div>
  )
}

export default Perfil

