import React from 'react'
import { Box } from '@mui/system'
import EsAngel from './EsAngel'

const BidenEsView = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <EsAngel position={0} />
      <EsAngel position={90} />
      <EsAngel position={180} />
      <EsAngel position={270} />

      <img
        src="images/BidenES.png"
        alt=""
        width={'80%'}
        height={'80%'}
        style={{
          position: 'absolute',
          top: '100px',
          left: '200px',
          borderRadius: '50%',
          objectFit: 'scale-down',
        }}
      />
    </Box>
  )
}

export default BidenEsView
