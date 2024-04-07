import {  AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography ,Button} from '@mui/material'
import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from 'react'

const Header = () => {



    const [mobileOpen, setMobileOpen] = useState(false);
    // hndle menu click
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    //menu drawer
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography
          color={"goldenrod"}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, my: 2 }}
        >
         LOGO
        </Typography>
        <Divider />
        <ul className="mobile-navigation">
      
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/About'}>Features</Link>
            </li>
            <li>
                <Link to={'/About'}>Community</Link>
            </li>
            <li>
                <Link to={'/About'}>Blog</Link>
            </li>
            <li>
                <Link to={'/About'}>Pricing</Link>
            </li>
            
            <li>
            <Button variant="contained">Register Now</Button>
            </li>
            
        </ul>
      </Box>
    );
    return (
      <>
        <Box>
          <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                color={"goldenrod"}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
               LOGO
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className='navigation-menu'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/About'}>Features</Link>
            </li>
            <li>
                <Link to={'/About'}>Community</Link>
            </li>
            <li>
                <Link to={'/About'}>Blog</Link>
            </li>
            <li>
                <Link to={'/About'}>Pricing</Link>
            </li>
             
            <li>
            <Button variant="contained"  className='btncolor'>Register Now</Button>
            </li>
        </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "240px",
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box>
            <Toolbar />
          </Box>
        </Box>
      </>
    );











}

export default Header
