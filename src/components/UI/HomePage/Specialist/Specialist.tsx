"use client";

import { useState, useEffect } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = () => {
  const [specialties, setSpecialties] = useState<any[]>([]);
  const [displayedSpecialties, setDisplayedSpecialties] = useState<any[]>([]);
  const [viewAll, setViewAll] = useState(false);

  // Fetch data on the client
  useEffect(() => {
    const fetchSpecialties = async () => {
      const res = await fetch("http://localhost:5000/api/v1/specialties");
      const { data } = await res.json();
      setSpecialties(data);
      setDisplayedSpecialties(data.slice(0, 5)); // Show initial 5 items (first row)
    };

    fetchSpecialties();
  }, []);

  // Handle the "View More" / "View Less" button click
  const handleViewToggle = () => {
    if (viewAll) {
      // Show only the first 5 items (first row)
      setDisplayedSpecialties(specialties.slice(0, 5));
    } else {
      // Show all items
      setDisplayedSpecialties(specialties);
    }
    setViewAll(!viewAll); // Toggle the state
  };

  return (
    <Container>
      <Box
        sx={{
          margin: "80px 0px",
          textAlign: "center",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18} mt={1}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>

        {/* Grid Section */}
        <Stack
          direction="row"
          gap={4}
          mt={5}
          flexWrap="wrap"
          justifyContent="center"
        >
          {displayedSpecialties.map((specialty) => (
            <Box
              key={specialty.id}
              sx={{
                flex: "1 1 calc(16.66% - 16px)", // 5 items per row
                maxWidth: "calc(16.66% - 16px)", // Ensures 5 items per row
                backgroundColor: "rgba(245, 245, 245,1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                margin: "8px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid rgba(36, 153, 239, 1)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.5s",
                },
              }}
            >
              <Image
                src={specialty.icon}
                width={100}
                height={100}
                alt="specialty icon"
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* View More / View Less Button */}
        <Button
          variant="outlined"
          sx={{
            marginTop: "20px",
          }}
          onClick={handleViewToggle}
        >
          {viewAll ? "View Less" : "View More"}
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;





