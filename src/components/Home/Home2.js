import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import { Container, Grid, Typography, Box } from "@mui/material";


function Home2() {
  return (
    <>
     <Box sx={{ backgroundColor: 'rgba(237,249,254,255)', padding: '2rem' }}>
        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'bold', fontFamily: 'Caveat, cursive', marginBottom: '2rem' }}
        >
          What I Do?
        </Typography>

        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/WID.png"
              alt="Avatar" 
              style={{ 
                width: '100%', 
                maxWidth: '500px', 
                height: 'auto', 
                marginLeft: { xs: '0', md: '20px' } // Adjusted to add space on larger screens
              }} 
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ marginLeft: { xs: '0', md: '40px' }, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h3"
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' }, 
                  fontWeight: 'bold', 
                  fontFamily: 'Roboto, sans-serif', 
                  marginBottom: '1rem' 
                }}
              >
                Full Stack Development
              </Typography>

              <Typography 
                sx={{ 
                  fontFamily: 'Open Sans, sans-serif', 
                  fontSize: '1.2rem', 
                  marginBottom: '0.5rem', 
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                ⚡ Building responsive website front end using React-Redux
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: 'Open Sans, sans-serif', 
                  fontSize: '1.2rem', 
                  marginBottom: '0.5rem', 
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                ⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: 'Open Sans, sans-serif', 
                  fontSize: '1.2rem', 
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                ⚡ Creating application backend in Node, Express & Flask
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home2;
