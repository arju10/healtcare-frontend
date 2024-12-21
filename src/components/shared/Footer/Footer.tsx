"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust breakpoint as needed
    };

    // Check initial screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        {/* Navigation Links */}
        <Stack
          direction={isMobile ? "column" : "row"}
          gap={isMobile ? 2 : 4}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography color="#fff" component={Link} href="/consultation" sx={{ textDecoration: "none" }}>
            Consultation
          </Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>

        {/* Social Media Icons */}
        <Stack
          direction="row"
          gap={2}
          justifyContent="center"
          alignItems="center"
          py={3}
        >
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="instagram" />
          <Image src={twitterIcon} width={30} height={30} alt="twitter" />
          <Image src={linkedIcon} width={30} height={30} alt="linkedin" />
        </Stack>

        {/* Divider */}
        <Box borderBottom="1px dashed #fff" my={2} />

        {/* Footer Bottom Section */}
        <Stack
          direction={isMobile ? "column" : "row"}
          gap={2}
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems="center"
          textAlign="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;{currentYear} HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
            sx={{ textDecoration: "none" }}
          >
            <Box component="span" color="primary.main">
              Health
            </Box>{" "}
            Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy | Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
