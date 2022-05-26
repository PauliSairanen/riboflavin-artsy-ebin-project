import React from 'react'
import { Box } from '@mui/system'

const MainView = () => {
 return (
   <Box sx={{width: '100%', height: '100%'}}>
     <video  muted autoPlay loop width='100%' style={{objectFit: 'cover', width: '100vw', height: '100vh', position: 'fixed'}}>
       <source src='videos/static.mp4'/>
     </video>
    
   </Box>
 )
}

export default MainView