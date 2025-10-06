"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const VerifiedSuccess = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* ✅ Success Icon */}
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: 2,
          backgroundColor: "#E0E4FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0B0B4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </Box>

      {/* ✅ Heading */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        VERIFIED
      </Typography>

      {/* ✅ Message */}
      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: 400, color: "#333" }}
      >
        You have successfully verified your account.
        <br />
        You’re all set to start your journey with us. Let’s complete your profile
        so you can make the most out of our platform.
      </Typography>

      {/* ✅ Continue Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0B0B4C",
          borderRadius: "10px",
          px: 4,
          py: 1.2,
          fontSize: "16px",
          fontWeight: "500",
          textTransform: "none",
          "&:hover": { backgroundColor: "#00005C" },
        }}
        onClick={() => {
          window.location.href = "/dashboard"; // 🔹 Change route as needed
        }}
      >
        Continue
      </Button>
    </Container>
  );
};

export default VerifiedSuccess;
