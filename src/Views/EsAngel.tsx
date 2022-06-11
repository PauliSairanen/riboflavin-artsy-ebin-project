import React from 'react'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'

interface props {
  position: number
}

const EsAngel: React.FC<props> = ({ position }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '400px',
        left: '50px',
      }}
    >
      <motion.div
        animate={{
          rotate: [position, position + 360],
          transition: {
            duration: 7,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      >
        <img src="images/ESangel.png" alt="" width={'15%'} height={'15%'} />
      </motion.div>
    </Box>
  )
}

export default EsAngel
