import React, { useRef, useEffect } from 'react';

import Layout from '../components/Layout'
import { MenuList } from "../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography, Grid, Button, Container
} from "@mui/material";
// import { Grid, Container, Typography, Box } from '@mui/material';
import '../styles/homeStyles.css'
// import {Button} from '@mui/material'
import Herosetions from '../components/Herosetions';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import imag from "../images/images.png";
import imags from "../images/phone.png";
import flower from "../images/flower.png";
import PeopleIcon from '@mui/icons-material/People';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import MoreIcon from '@mui/icons-material/More';
import PaymentIcon from '@mui/icons-material/Payment';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
   //useEffect
   useEffect(() => {
    AOS.init({duration:2000});
  }, [])
  return (
  
  <>
    <div>
      <Layout>
        <Herosetions></Herosetions>
        <Box
          sx={{
            my: 2,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4 ": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">Manage our entire Community <br />in a single system</Typography>


          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

            <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }} data-aos="flip-up">
              <CardActionArea>
                <Diversity3Icon className='ICON'></Diversity3Icon>
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    MemberShip Organization
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }} data-aos="flip-up">
              <CardActionArea>
                <LocationCityIcon className='ICON'></LocationCityIcon>
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    National Association
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }} data-aos="flip-up">
              <CardActionArea>
                <WorkspacesIcon className='ICON'></WorkspacesIcon>
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    Clubs And Groups
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>


          </Box>
          <br />







          <Container maxWidth="lg" >
            <Grid container >

              <Grid item xs={12} md={6}>
                <Box component="img" src={imag} sx={{ width: '90%', height: '100%' }} data-aos="zoom-out-right"/>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }} data-aos="zoom-out-left">
                  <Typography >
                    <h1 className='Digital'> Full Service Digital Marketing</h1>
                    <p className=''> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!</p>
                    <Button variant="contained"  className='btncolor'>Learn More</Button>
                  </Typography>
                  <Typography variant="h6" component="h2">

                  </Typography>
                </Box>
              </Grid>

            </Grid>
          </Container>

          <section className='backGround'>
            <Container maxWidth="xl" >
              <Grid container >

                <Grid item xs={12} md={6} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">

                  <Typography className='textCenter' >
                    <h1 className='Digital'> Helping a <span className="colorText"> business itself</span> </h1>
                    <p className='heroText'>We reached here with our hard work and dedication</p>

                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                  <Grid container >

                    <Grid item xs={12} md={6}>

                      <Typography sx={{ display: "flex" }}>
                        <PeopleIcon className='sectionIcon'></PeopleIcon>
                        <h1><span ></span>  2,245,341 <br />Members</h1>


                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ display: "flex" }}>
                        <SignLanguageIcon className='sectionIcon'></SignLanguageIcon>
                        <h1><span ></span>  46,328 <br />Event Booking</h1>


                      </Typography>
                    </Grid>


                    <Grid item xs={12} md={6}>

                      <Typography sx={{ display: "flex" }}>
                        <MoreIcon className='sectionIcon'></MoreIcon>
                        <h1><span ></span>  828,867 <br />Clubs</h1>


                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ display: "flex" }}>
                        <PaymentIcon className='sectionIcon'></PaymentIcon>
                        <h1><span ></span>  1,926,436 <br />Payments</h1>


                      </Typography>
                    </Grid>

                  </Grid>
                </Grid>

              </Grid>
            </Container>
          </section>
        </Box>



        <Container maxWidth="lg" >
          <Grid container >

            <Grid item xs={12} md={6}  data-aos="fade-up"
     data-aos-duration="3000">
              <Box component="img" src={imags} sx={{ width: '90%', height: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Typography >
                  <h1 className='Digital'> How to design your site footer like we did</h1>
                  <p className=''>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                  <Button variant="contained"  className='btncolor'>Learn More</Button>
                </Typography>
                <Typography variant="h6" component="h2">

                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Container>


        <section className='backGround'>
          <Container maxWidth="xl" >
            <Grid container >

              <Grid item xs={12} md={6} data-aos="zoom-out-up">

                <Box component="img" className='imagestyle' src={flower}  />
              </Grid>
              <Grid item xs={12} md={6} data-aos="zoom-out-down">
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Typography >

                    <p className=''>Aenean vitae fringilla metus, sed pellentesque nisl. Morbi quis mi tincidunt, consequat risus et, dapibus magna. In lacinia dictum nunc, non dignissim quam vitae fringilla metus, sed pellentesque nisl. Morbi quis mi tincidunt, consequat risus et, dapibus magna. In lacinia dictum nunc, non dignissim quam Aenean vitae fringilla metus, sed pellentesque nisl. Morbi quis mi tincidunt, consequat risus et, dapibus magna. In lacinia dictum nunc, non dignissim quam Aenean vitae fringilla metus, sed pellentesque nisl. Morbi quis mi tincidunt, consequat risus et, dapibus magna. In lacinia dictum nunc, non dignissim quam</p>
                    <h1 className='text'> Tim Smith</h1>
                    <p>British Dragon Boat Racing Association</p>

                  </Typography>

                </Box>
              </Grid>

            </Grid>
          </Container>
        </section>





        <Box
          sx={{
            my: 2,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4 ": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">Caring is the new marketing </Typography>

          <Typography variant="p">The Nextcent blog is the best place to read about the latest membership insights,<br /> trends and more. See who's joining the community, read about how our community<br /> are increasing their membership income and lot's more.​ </Typography>


          <Box
          sx={{
            my: 2,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4 ": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Container maxWidth="lg" >
          <div className="container11">
        <div className="blog-post"  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <img src="https://imgeng.jagran.com/images/2024/feb/best%20laptop1708696409603.jpg" alt="Man" />
           
            <div className="text-content">
               
                <h2 className="post-title">
                Creating Streamlined Safeguarding Processes with OneRent
                </h2>
                <p >Read More</p>
            </div>
        </div>

        <div className="blog-post">
            <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?cs=srgb&dl=pexels-life-of-pix-7974.jpg&fm=jpg" alt="Man" />
           
            <div className="text-content">
               
                <h2 className="post-title">
                Creating Streamlined Safeguarding Processes with OneRent
                </h2>
                <p >Read More</p>
            </div>
        </div>
        <div className="blog-post"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <img src="https://imgeng.jagran.com/images/2024/feb/best%20laptop1708696409603.jpg" alt="Man" />
           
            <div className="text-content">
               
                <h2 className="post-title">
                Creating Streamlined Safeguarding Processes with OneRent
                </h2>
                <p >Read More</p>
            </div>
        </div>
    </div>
    </Container>


          </Box>
          <br />








      


         
      </Box>


    </Layout>
    </div >
    </>
  )
}

export default Home
