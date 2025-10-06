// components/Testimonials.tsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface Testimonial {
  name: string;
  title: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Olivia Smith",
    title: "Marketing Director, BrightWave Inc.",
    message:
      "Working with this team was seamless! Their creativity and attention to detail truly elevated our brand presence online.",
    image: "/testimonial/testimonials-1.jpg",
  },
  {
    name: "Liam Johnson",
    title: "Founder, EcoGrow Ltd.",
    message:
      "The project exceeded our expectations. Timely delivery, clear communication, and excellent results. Highly recommended!",
    image: "/testimonial/testimonials-2.jpg",
  },
  {
    name: "Sophia Müller",
    title: "UI/UX Designer, PixelCraft Studios",
    message:
      "Their designs were both intuitive and visually stunning. They understood our vision perfectly and implemented it flawlessly.",
    image: "/testimonial/testimonials-3.jpg",
  },
  {
    name: "Ethan Williams",
    title: "Product Manager, FinTech Solutions",
    message:
      "Professional, efficient, and highly skilled. Their solutions made a tangible impact on our product performance.",
    image: "/testimonial/testimonials-4.jpg",
  },
  {
    name: "Isabella Rossi",
    title: "Content Strategist, BrightMedia",
    message:
      "Creative, reliable, and extremely talented. They turned our ideas into a beautiful and functional website effortlessly.",
    image: "/testimonial/testimonials-5.jpg",
  },
];


const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Autoplay every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url('/testimonial/testimonials-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        py: 12,
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          bgcolor: "rgba(0,0,0,0.7)",
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2, px: { xs: 2, md: 8 } }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#fff", fontWeight: "bold", mb: 8 }}
        >
          What Our Clients Say
        </Typography>

        <Box sx={{ position: "relative", textAlign: "center" }}>
          
          {testimonials.map((test, index) => (
            <Box
              key={index}
              sx={{
                display: index === current ? "block" : "none",
                textAlign: "center",
                // px: 3,
                // py: 8,
                color: "#fff",
              }}
            >
              <Avatar
                src={test.image}
                alt={test.name}
                sx={{
                  width: 90,
                  height: 90,
                  mx: "auto",
                  mb: 3,
                  border: "6px solid rgba(255,255,255,0.15)",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}
              >
                {test.name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ mb: 3, fontFamily: "'Roboto', sans-serif" }}
              >
                {test.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontStyle: "italic",
                  fontFamily: "'Open Sans', sans-serif",
                  position: "relative",
                }}
              >
                <span style={{ fontSize: 30, color: "rgba(255,255,255,0.15)" }}>"</span>
                {test.message}
                <span style={{ fontSize: 30, color: "rgba(255,255,255,0.15)" }}>"</span>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
