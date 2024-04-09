import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";

import service from "../../assets/services-img.jpg";

const ServiceHero = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "510px",
          backgroundImage: `url(${service})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></Box>
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            Width: "100%",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: ".7rem",
                md: "1rem",
                textDecoration: "underline",
              },
            }}
          >
            GET GREATEST SERVICE FROM OUR COMPANY
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "4.7rem" },
              marginBottom: "1.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span>OUR</span>
            <span
              style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
            ></span>
            <span style={{ color: "orange" }}>SERVICES</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: ".5rem", md: ".7rem" },

              margin: "0 auto",
              maxWidth: { md: "70%", xs: "100%" },
            }}
          >
            Unlock the full potential of your online presence with our
            comprehensive suite of design and development services. From
            captivating website design that transforms your vision into reality,
            to innovative branding solutions that elevate your brand identity
            and leave a lasting impression. Our hosting services ensure
            reliability and security, keeping your website performing at its
            best. Additionally, our strategic digital marketing strategies
            empower your online presence, reaching new audiences and maximizing
            your impact. And with our expert app development team, we bring your
            ideas to life , crafting cutting-edge mobile applications that
            redefine user experiences. Trust us to be your partner in achieving
            digital success
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default ServiceHero;
