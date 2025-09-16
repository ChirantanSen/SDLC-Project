import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const ClientProfileSetup: React.FC = () => {
  const [form, setForm] = useState({
    companyName: "",
    projectType: "",
    budgetRange: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Replace with API call
    alert("Profile saved!");
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        px: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 1, textTransform: "uppercase" }}
      >
        Set Up Your Client Profile
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ mb: 4, maxWidth: "600px", margin: "0 auto", color: "text.secondary" }}
      >
        Tell us about your business and what kind of projects you want to post.
        This will help us match you with the right freelancers.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "16px",
          backgroundColor: "#f5f5f5",
          maxWidth: "500px",
          mx: "auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <TextField
            fullWidth
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Enter Your Company Name"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "#fff" }}
          />

          {/* Project Type */}
          <TextField
            select
            fullWidth
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            variant="outlined"
            placeholder="Choose The Type Of Projects You Hire For"
            sx={{ mb: 2, backgroundColor: "#fff" }}
          >
            <MenuItem value="web-dev">Web Development</MenuItem>
            <MenuItem value="app-dev">App Development</MenuItem>
            <MenuItem value="uiux">UI/UX Design</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
          </TextField>

          {/* Budget Range */}
          <TextField
            select
            fullWidth
            name="budgetRange"
            value={form.budgetRange}
            onChange={handleChange}
            variant="outlined"
            placeholder="Select Your Budget Range"
            sx={{ mb: 2, backgroundColor: "#fff" }}
          >
            <MenuItem value="under-1k">Under $1,000</MenuItem>
            <MenuItem value="1k-5k">$1,000 - $5,000</MenuItem>
            <MenuItem value="5k-10k">$5,000 - $10,000</MenuItem>
            <MenuItem value="10k-plus">Above $10,000</MenuItem>
          </TextField>

          {/* Company Description */}
          <TextField
            fullWidth
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Write A Short Description About Your Company"
            multiline
            rows={3}
            variant="outlined"
            sx={{ mb: 3, backgroundColor: "#fff" }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#0b0b6b",
              color: "#fff",
              fontWeight: "bold",
              py: 1.5,
              "&:hover": { backgroundColor: "#050550" },
              borderRadius: "8px",
            }}
          >
            Save & Continue To Dashboard
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ClientProfileSetup;
