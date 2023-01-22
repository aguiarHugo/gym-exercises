import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg : '212px', xs: '70px' },
        ml: { sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="28px">
            Clube Fitness
        </Typography>

        <Typography fontWeight={700}
        sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
            Suor, Sorriso<br />
            e Repetição!
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={2}>
           Confira os exercícios mais eficientes
        </Typography>

        <Button 
        variant='contained'
        color='error' href="#exercises"
        sx={{backgroundColor: '#ff2625', padding: '10px'}}
        >
            Explore os Exercícios
        </Button>
        <Typography
            fontWeight={600}
            color="#ff2625"
            sx={{
                opacity:0.1,
                display: { lg: 'block', xs:'none'}
            }}
            mt={8}
            fontSize="200px">
            Exercício
        </Typography>
        <img  src={ HeroBannerImage } alt="banner"
        className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner