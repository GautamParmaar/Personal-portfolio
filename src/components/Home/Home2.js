import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import { Container, Grid, Typography, Box,Tooltip } from "@mui/material";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaNpm } from "react-icons/fa"; 



function Home2() {
  return (
    <>
 <Box sx={{ backgroundColor: 'rgba(237,249,254,255)', padding: '2rem' }}>
        <Typography
          variant="h1"
          align="center"
          sx={{ 
            fontSize: { xs: '2.5rem', md: '4rem' }, 
            fontWeight: 'bold', 
            fontFamily: 'Caveat, cursive', 
            marginBottom: '5rem',
            marginTop: '1rem' // Added margin top
          }}
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
                maxWidth: '750px', 
                height: 'auto'
              }}
              className="responsive-img"
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Box 
              sx={{ 
                marginLeft: { xs: '0', md: '40px', lg: '180px' }, 
                textAlign: { xs: 'center', md: 'left' } 
              }}
            >
              <Typography
                variant="h3"
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' }, 
                  fontWeight: 'bold', 
                  fontFamily: 'Roboto, sans-serif', 
                  marginBottom: { xs: '2rem', md: '1rem' }, // Adjusted margin-bottom for mobile
                  marginTop: '15px'
                }}
              >
                Full Stack Development
              </Typography>

              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: { xs: 'center', md: 'flex-start' }, 
                  flexWrap: 'wrap', 
                  gap: '20px', 
                  marginBottom: { xs: '2rem', md: '1rem' } // Adjusted margin-bottom for mobile
                }}
              >
                <Tooltip title="HTML5" arrow>
                  <span><FaHtml5 size={55} color="#E34F26" /></span>
                </Tooltip>
                <Tooltip title="CSS3" arrow>
                  <span><FaCss3Alt size={55} color="#1572B6" /></span>
                </Tooltip>
                <Tooltip title="JavaScript" arrow>
                  <span><FaJsSquare size={55} color="#F7DF1E" /></span>
                </Tooltip>
                <Tooltip title="React.js" arrow>
                  <span><FaReact size={55} color="#61DAFB" /></span>
                </Tooltip>
                <Tooltip title="Node.js" arrow>
                  <span><FaNodeJs size={55} color="#339933" /></span>
                </Tooltip>
                <Tooltip title="NPM" arrow>
                  <span><FaNpm size={55} color="#CB3837" /></span>
                </Tooltip>
              </Box>

              <Typography 
                sx={{ 
                  fontFamily: 'Open Sans, sans-serif', 
                  fontSize: '1.2rem', 
                  marginBottom: '0.5rem', 
                  textAlign: { xs: 'center', md: 'left' },
                  marginBottom: { xs: '2rem', md: '0.5rem' } // Adjusted margin-bottom for mobile
                }}
              >
                ⚡ Building responsive website front end using ReactJS
              </Typography>
             
              <Typography 
                sx={{ 
                  fontFamily: 'Open Sans, sans-serif', 
                  fontSize: '1.2rem', 
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                ⚡ Creating application backend in NodeJS & ExpressJS
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home2;
