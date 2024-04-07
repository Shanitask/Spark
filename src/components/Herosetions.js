import React, { useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/herosection.css';

import { Grid, Typography,Container, Box } from '@mui/material';
import '../styles/homeStyles.css'
import {Button} from '@mui/material'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';




function Herosetions() {
    //useEffect
 useEffect(() => {
    AOS.init({duration:2000});
  }, [])
    return (

        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
              
                    <div className='slider1'>
                    <Container maxWidth="lg" >
                    <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' ,mt:10}}>
                        <Typography className="TextHeros" data-aos="fade-right">
                        <h1 > Experienced<span className="colorText"> Mobile and web</span>  application and website makers</h1>
                          <p className='heroText'>where to grow your business as a photographer site or social mediav</p>
                          <Button variant="contained" className='btncolor'>Register </Button>
                        </Typography>
                        <Typography variant="h6" component="h2">
                        
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" data-aos="fade-left" className="HeroImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5kcuOM4sfLI5RKxi3glM867M3wrCREaoxkUQ7wPK7Q&s" sx={{ width: '100%', height: '100%',mt:12 }} />
                </Grid>
            </Grid>
            </Container>
                    </div>
                 

                </SwiperSlide>

                <SwiperSlide>
                <div className='slider2'>
                <Container maxWidth="lg" >
                    <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' ,mt:10}}>
                        <Typography className="TextHeros" data-aos="fade-right">
                        <h1 > Experienced<span className="colorText"> Mobile and web</span>  application and website makers</h1>
                          <p className='heroText'>where to grow your business as a photographer site or social mediav</p>
                          <Button variant="contained" className='btncolor'>Register </Button>
                        </Typography>
                        <Typography variant="h6" component="h2">
                        
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" data-aos="fade-left" className="HeroImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5kcuOM4sfLI5RKxi3glM867M3wrCREaoxkUQ7wPK7Q&s" sx={{ width: '100%', height: '100%',mt:12 }} />
                </Grid>
            </Grid>
            </Container>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='slider3'>
                <Container maxWidth="lg" >
                    <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' ,mt:10}}>
                        <Typography className="TextHeros" data-aos="fade-right">
                        <h1 > Experienced<span className="colorText"> Mobile and web</span>  application and website makers</h1>
                          <p className='heroText'>where to grow your business as a photographer site or social mediav</p>
                          <Button variant="contained" className='btncolor'>Register </Button>
                        </Typography>
                        <Typography variant="h6" component="h2">
                        
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" data-aos="fade-left" className="HeroImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5kcuOM4sfLI5RKxi3glM867M3wrCREaoxkUQ7wPK7Q&s" sx={{ width: '100%', height: '100%',mt:12 }} />
                </Grid>
            </Grid>
            </Container>
                    </div>
                </SwiperSlide>

            </Swiper>



        </>
    )
}

export default Herosetions
