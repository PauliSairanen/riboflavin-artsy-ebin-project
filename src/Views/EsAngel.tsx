import React from 'react'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'

const EsAngel = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          transition: {
            duration: 10,
            yoyo: Infinity,
          },
        }}
      >
        <img src="images/ESangel.png" alt="" width={'20%'} height={'20%'} />
      </motion.div>
    </Box>
  )
}

export default EsAngel
