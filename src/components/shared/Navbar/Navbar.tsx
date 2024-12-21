"use client"
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Typography
          variant="h4"
          component={Link}
          href="/"
          fontWeight={600}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <Box component="span" color="primary.main">
            Health
          </Box>{" "}
          Care
        </Typography>

        {/* Menu for Mobile */}
        {isMobile ? (
          <>
            <IconButton onClick={() => setMenuOpen(!menuOpen)}>
              <MenuIcon />
            </IconButton>
            {menuOpen && (
              <Stack
                position="absolute"
                top={70}
                right={16}
                bgcolor="background.paper"
                boxShadow={3}
                borderRadius={1}
                zIndex={10}
                p={2}
              >
                <Typography component={Link} href="/consultation" sx={{ textDecoration: "none", mb: 1 }}>
                  Consultation
                </Typography>
                <Typography sx={{ mb: 1 }}>Health Plans</Typography>
                <Typography sx={{ mb: 1 }}>Medicine</Typography>
                <Typography sx={{ mb: 1 }}>Diagnostics</Typography>
                <Typography sx={{ mb: 1 }}>NGOs</Typography>
                <Button component={Link} href="/login" variant="contained">
                  Login
                </Button>
              </Stack>
            )}
          </>
        ) : (
          // Menu for Desktop
          <Stack direction="row" alignItems="center" gap={4}>
            <Typography component={Link} href="/consultation" sx={{ textDecoration: "none" }}>
              Consultation
            </Typography>
            <Typography>Health Plans</Typography>
            <Typography>Medicine</Typography>
            <Typography>Diagnostics</Typography>
            <Typography>NGOs</Typography>
            <Button component={Link} href="/login" variant="contained">
              Login
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
