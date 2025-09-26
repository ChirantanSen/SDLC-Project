"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  Link,
  Container,
} from "@mui/material";
import { Google, Facebook, Instagram, Email } from "@mui/icons-material";

import { useRouter } from "next/router";
import { login } from "@/redux/authSlice/authSlice";
import { Cookies } from "react-cookie";
import toast from "react-hot-toast";

import { useAppDispatch } from "@/typeScript/hooks.type";
import { LoginPayload } from "@/typeScript/auth.interface";

// ✅ Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Minimum 4 characters required")
    .required("Password is required"),
});

function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cookies = new Cookies();
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Show toast if redirected without token
  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      toast.error("Please login first");
    }
  }, []);

  // ✅ Handle form submit
  const onSubmit = async (data: LoginPayload) => {
    setLoading(true);

    const formData = {
      email: data.email,
      password: data.password,
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate delay
      const response = await dispatch(login(formData)).unwrap();

      console.log(response, "response");

      if (response?.status === true) {
        router.push("/cms/landingPage/landingPage");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 5,
          overflow: "hidden",
          backgroundColor: "#f5f7fb",
        }}
      >
        {/* 🔹 Background Vector Graphics */}
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "40%",
            zIndex: 0,
          }}
        >
          <path
            fill="#4B4B9D"
            fillOpacity="0.1"
            d="M0,64L40,96C80,128,160,192,240,213.3C320,235,400,213,480,202.7C560,192,640,192,720,176C800,160,880,128,960,133.3C1040,139,1120,181,1200,197.3C1280,213,1360,203,1400,197.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </Box>

        {/* Floating Circles */}
        <Box
          sx={{
            position: "absolute",
            width: 200,
            height: 200,
            background: "#4b4b9d20",
            borderRadius: "50%",
            top: "10%",
            left: "5%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            background: "#0b0b4520",
            borderRadius: "50%",
            bottom: "5%",
            right: "5%",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 3,
              backgroundColor: "white",
              position: "relative",
              height: { md: "80vh" },
            }}
          >
            {/* Left Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                component="img"
                // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                // alt="Office Workspace"

                // src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                // alt="Team Collaboration"

                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                alt="Creative Office Space"
                // src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                // alt="Team Working Together"

                // src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                // alt="Open Plan Office"

                // src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                // alt="Team Meeting"

                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Right Login Form */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
                backgroundColor: "rgba(255,255,255,0.95)",
              }}
            >
              <Box sx={{ width: "100%", maxWidth: 400 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  WELCOME BACK!
                </Typography>
                <Typography variant="body1" mb={3}>
                  Sign in to continue your journey.
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    fullWidth
                    label="Email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    margin="normal"
                  />

                  <Box textAlign="right" mt={1}>
                    <Link href="#" underline="hover">
                      Forgot Password?
                    </Link>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "#0B0B45",
                      mt: 2,
                      mb: 2,
                      "&:hover": { backgroundColor: "#0b0b6a" },
                    }}
                    disabled={loading || isSubmitting}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </form>

                <Divider sx={{ my: 3 }}>or continue with</Divider>

                <Box display="flex" justifyContent="center" gap={2} mb={2}>
                  <IconButton>
                    <Google />
                  </IconButton>
                  <IconButton>
                    <Facebook />
                  </IconButton>
                  <IconButton>
                    <Instagram />
                  </IconButton>
                  <IconButton>
                    <Email />
                  </IconButton>
                </Box>

                <Box textAlign="center">
                  <Typography variant="body2">
                    Not a member?{" "}
                    <Link href="/auth/register" underline="hover">
                      Register Now!
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Login;
