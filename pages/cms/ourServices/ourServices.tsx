import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CreateIcon from "@mui/icons-material/Create";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BrushIcon from "@mui/icons-material/Brush";
import GavelIcon from "@mui/icons-material/Gavel";
import CampaignIcon from "@mui/icons-material/Campaign";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AnimationIcon from "@mui/icons-material/Movie"; // Motion Graphics
import StorageIcon from "@mui/icons-material/Storage"; // Server Maintenance
import Link from "next/link";

const services = [
  {
    icon: <DesignServicesIcon fontSize="large" color="primary" />,
    label: "UI/UX Design",
  },
  { icon: <CreateIcon fontSize="large" color="primary" />, label: "Writing" },
  {
    icon: <GroupIcon fontSize="large" color="primary" />,
    label: "HR & Training",
  },
  {
    icon: <AccountBalanceIcon fontSize="large" color="primary" />,
    label: "Finance",
  },
  { icon: <CodeIcon fontSize="large" color="primary" />, label: "Development" },
  {
    icon: <HeadsetMicIcon fontSize="large" color="primary" />,
    label: "Admin Support",
  },
  { icon: <BrushIcon fontSize="large" color="primary" />, label: "Creative" },
  { icon: <GavelIcon fontSize="large" color="primary" />, label: "Legal" },
  {
    icon: <CampaignIcon fontSize="large" color="primary" />,
    label: "Marketing",
  },
  {
    icon: <SmartToyIcon fontSize="large" color="primary" />,
    label: "AI Services",
  },
  {
    icon: <AnimationIcon fontSize="large" color="primary" />,
    label: "Motion Graphics",
  },
  {
    icon: <StorageIcon fontSize="large" color="primary" />,
    label: "Server Maintenance",
  },
];

const steps = [
  {
    title: "Posting Jobs Is Always Free",
    description:
      "Generate a job post with AI or create your own and filter talent matches.",
  },
  {
    title: "Get Proposals And Hire",
    description:
      "Screen, interview, or book a consult with an expert before hiring.",
  },
  {
    title: "Pay When Work Is Done",
    description:
      "Release payments after approving work, by milestone or upon project completion.",
  },
];

const ExpertCategories: React.FC = () => {
  const [active, setActive] = useState("hiring");

  return (
    <>
      {/* Categories Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          backgroundColor: "#fafafa",
          px: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Find Experts For Every Need
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={4}>
          Choose from a variety of services to meet your goals
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {services.map((service, index) => (
            <Grid
              key={index}
              item
              sx={{
                width: "20%", // Always 5 columns
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                elevation={3}
                sx={{
                  borderRadius: "16px",
                  textAlign: "center",
                  py: 3,
                  px: 1,
                  width: "90%",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  <Box mb={1}>{service.icon}</Box>
                  <Typography variant="subtitle1" fontWeight="500">
                    {service.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* How It Works Section */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Title + Toggle Buttons */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#000",
                marginBottom: "30px",
                textAlign: "left",
              }}
            >
              How It Works
            </h2>
            <div
              style={{ display: "flex", gap: "10px", paddingBottom: "20px" }}
            >

            </div>
          </div>

          {/* Steps Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                  padding: "30px 20px",
                  textAlign: "left",
                  transition: "transform 0.2s ease-in-out",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#0b0b6b",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "16px", color: "#555" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertCategories;
