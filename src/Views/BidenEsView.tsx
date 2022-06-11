import React from 'react'
import { Box } from '@mui/system'
import EsAngel from './EsAngel'

const BidenEsView = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <EsAngel />
      <EsAngel />
      <EsAngel />
      <EsAngel />
      <EsAngel />
      <EsAngel />
      <img
        src="images/BidenES.png"
        alt=""
        width={'100%'}
        height={'100%'}
        style={{ margin: '200px' }}
      />
    </Box>
  )
}

export default BidenEsView
