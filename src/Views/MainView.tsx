import React from 'react'
import { Box } from '@mui/system'
import useWindowDimensions from '../CustomHooks/useWindowDimensions'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

const MainView = () => {
  const [randomX, setRandomX] = React.useState<number>(250)
  const [randomY, setRandomY] = React.useState<number>(250)
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate()


  const generateRandomX = () => {
    return Math.floor(Math.random() * width - 100) 
  }
  const generateRandomY = () => {
    return Math.floor(Math.random() * height)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setRandomX(generateRandomX())
      setRandomY(generateRandomY())
    }, 4000)
  }, [randomX, randomY])

  const handleClick = () => navigate('EbinBiden')

 return (
   <Box sx={{width: '100%', height: '100%'}}>
     <video  muted autoPlay loop width='100%' style={{objectFit: 'cover', width: '100vw', height: '100vh', position: 'fixed'}}>
       <source src='videos/static.mp4'/>
     </video>
    
     <Box sx={{ position: 'relative', top: `${randomY}px`, left: `${randomX}px`, }}>
       <Button sx={{fontSize: '50px', color: 'white', fontWeight: 'bold'}} onClick={handleClick}>
       Go Deeper?
       </Button>
       
       </Box>
   </Box>
 )
}

export default MainView