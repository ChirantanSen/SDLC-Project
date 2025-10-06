
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

// Redux
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { updatepassword } from "@/redux/authSlice/authSlice";

// ✅ Validation Schema
const schema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm your new password"),
});

function UpdatePassword() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const formData = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
      confirmPassword:data.confirmPassword
    };

    try {
      const response = await dispatch(updatepassword(formData));
      console.log(response, "Update Password Response ✅");

      if (response?.payload?.status) {
        reset();
        // 👉 redirect if needed
        router.push("/cms/settings"); 
      }
    } catch (error) {
      console.error("Update Password Error:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {/* Left Side - Image */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            minWidth: 280,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            p: 2,
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/853/853371.png"
            alt="Password Security"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
          />
        </Paper>

        {/* Right Side - Form */}
        <Paper
          elevation={3}
          sx={{
            flex: 2,
            minWidth: 300,
            p: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #fdfdfd, #f5f7fb)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#0B0B45" }}
          >
            Update Password
          </Typography>

          <Typography variant="body2" mb={3} color="text.secondary">
            Please enter your current password and choose a new one.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Current Password"
              type="password"
              {...register("currentPassword")}
              error={!!errors.currentPassword}
              helperText={errors.currentPassword?.message}
              margin="normal"
            />

            <TextField
              fullWidth
              label="New Password"
              type="password"
              {...register("newPassword")}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Confirm New Password"
              type="password"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              margin="normal"
            />

            <Box mt={3}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "#0B0B45",
                  py: 1.2,
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#0b0b6a" },
                }}
              >
                {isSubmitting ? "Updating..." : "Update Password"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default UpdatePassword;
