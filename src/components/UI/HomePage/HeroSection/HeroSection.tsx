"use-client"
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 8, md: 16 },
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
          textAlign: { xs: "center", md: "left" },
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: "400px", md: "700px" },
            left: { xs: "calc(50% - 200px)", md: "-90px" },
            top: { xs: "-80px", md: "-120px" },
            zIndex: -1,
          }}
        >
          <Image src={assets.svgs.grid} alt="background grid" />
        </Box>
        <Typography variant="h2" component="h1" fontWeight={600} fontSize={{ xs: "2rem", md: "3rem" }}>
          Healthier Hearts
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600} fontSize={{ xs: "2rem", md: "3rem" }}>
          Come From
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
          fontSize={{ xs: "2rem", md: "3rem" }}
        >
          Preventive Care
        </Typography>
        <Typography sx={{ my: 4, fontSize: { xs: "0.9rem", md: "1rem" } }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eum
          iusto consequatur eius, doloribus nesciunt facere aliquid eveniet et.
          Rerum maiores saepe cupiditate repellat recusandae atque sed. Saepe,
          vitae id?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button>Make appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Box>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: { xs: "calc(50% - 50px)", md: "200px" },
            top: { xs: "-20px", md: "-30px" },
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "280px", md: "220px" },
            left: { xs: "calc(50% - 120px)", md: "150px" },
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={240}
            height={240}
            alt="doctor3"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "-80px", md: "-50px" },
            right: { xs: "calc(50% - 90px)", md: 0 },
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={180}
            height={180}
            alt="stethoscope"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
