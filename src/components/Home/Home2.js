import React from "react";

import Slide from "react-reveal/Slide";
import { Grid, Typography, Box,Tooltip } from "@mui/material";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaNpm } from "react-icons/fa"; 



function Home2() {
  return (
    <>
  <Box sx={{ backgroundColor: 'rgba(237,249,254,255)', padding: '2rem' }}>
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontSize: { xs: '2.5rem', md: '5rem' },
            fontWeight: 'bold',
            fontFamily: 'Caveat, cursive',
            marginBottom: '5rem',
            marginTop: '1rem'
          }}
        >
          What I Do?
        </Typography>

        <Grid container alignItems="flex-start" spacing={2}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: { xs: '0', md: '-20px' }
            }}
          >
            <Slide left>
              <img
                src="/WID.png"
                alt="Avatar"
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  height: 'auto',
                  maxHeight: '600px'
                }}
                className="responsive-img"
              />
            </Slide>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              sx={{
                marginLeft: { xs: '0', md: '100px', lg: '200px' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Slide right>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '3rem', md: '3.0rem' },
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    marginBottom: { xs: '2rem', md: '1.5rem' },
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
                    marginBottom: { xs: '2rem', md: '1.5rem' }
                  }}
                >
                  <Tooltip title="HTML5" arrow>
                    <span><FaHtml5 size={65} color="#E34F26" /></span>
                  </Tooltip>
                  <Tooltip title="CSS3" arrow>
                    <span><FaCss3Alt size={65} color="#1572B6" /></span>
                  </Tooltip>
                  <Tooltip title="JavaScript" arrow>
                    <span><FaJsSquare size={65} color="#F7DF1E" /></span>
                  </Tooltip>
                  <Tooltip title="React.js" arrow>
                    <span><FaReact size={65} color="#61DAFB" /></span>
                  </Tooltip>
                  <Tooltip title="Node.js" arrow>
                    <span><FaNodeJs size={65} color="#339933" /></span>
                  </Tooltip>
                  <Tooltip title="NPM" arrow>
                    <span><FaNpm size={65} color="#CB3837" /></span>
                  </Tooltip>
                </Box>

                <Typography
                  sx={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: { xs: '1.4rem', md: '1.3rem' },
                    marginBottom: '0.5rem',
                    textAlign: { xs: 'center', md: 'left' },
                    marginBottom: { xs: '2rem', md: '1.5rem' }
                  }}
                >
                  ⚡ Building responsive website front end using React-Redux
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: { xs: '1.4rem', md: '1.3rem' },
                    marginBottom: '0.5rem',
                    textAlign: { xs: 'center', md: 'left' },
                    marginBottom: { xs: '2rem', md: '1.5rem' }
                  }}
                >
                  ⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: { xs: '1.4rem', md: '1.3rem' },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  ⚡ Creating application backend in NodeJS, Express & Flask
                </Typography>
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home2;
