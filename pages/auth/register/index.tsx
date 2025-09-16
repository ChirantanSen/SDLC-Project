// import { yupResolver } from "@hookform/resolvers/yup";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";

// const schema = yup.object().shape({
//   name: yup.string().min(2, "Minimum 2 letters required").required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup.string().min(4, "Minimum 4 characters required").required("Password is required"),
//   role: yup.string().min(2, "Minimum 2 letters required").required("Role is required"),
//   skills: yup.string().min(2, "Minimum 2 letters required").required("Skills are required"),
//   bio: yup.string().min(2, "Minimum 2 letters required").required("Bio is required"),
//   profilePic: yup.mixed().required("Profile Picture is required"),
// });

// export default function Register() {
//   const [img, setImg] = useState<File | null>(null);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     clearErrors,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("image/")) {
//       setImg(file);
//       setValue("profilePic", file);
//       clearErrors("profilePic");
//     } else {
//       alert("Please upload a valid image file");
//     }
//   };

//   const onSubmit = (data: any) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           borderRadius: 2,
//           overflow: "hidden",
//           boxShadow: 3,
//         }}
//       >
//         {/* Left Image */}
//         <Box
//           component="img"
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&fit=crop&auto=format"
//           alt="office workspace"
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             objectFit: "cover",
//           }}
//         />

//         {/* Right Form */}
//         <Box
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             p: 4,
//             display: "flex",
//             alignItems: "center",
//             backgroundColor: "#fff",
//           }}
//         >
//           <Paper elevation={0} sx={{ width: "100%" }}>
//             <Typography variant="h4" fontWeight="bold" gutterBottom>
//               CREATE ACCOUNT
//             </Typography>

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 margin="normal"
//                 {...register("name")}
//                 error={!!errors.name}
//                 helperText={errors.name?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 {...register("email")}
//                 error={!!errors.email}
//                 helperText={errors.email?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 margin="normal"
//                 {...register("password")}
//                 error={!!errors.password}
//                 helperText={errors.password?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Role"
//                 margin="normal"
//                 {...register("role")}
//                 error={!!errors.role}
//                 helperText={errors.role?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Skills"
//                 margin="normal"
//                 {...register("skills")}
//                 error={!!errors.skills}
//                 helperText={errors.skills?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Bio"
//                 multiline
//                 rows={3}
//                 margin="normal"
//                 {...register("bio")}
//                 error={!!errors.bio}
//                 helperText={errors.bio?.message}
//               />

//               <Button component="label" variant="outlined" fullWidth sx={{ mt: 2 }}>
//                 Upload Profile Picture
//                 <input hidden accept="image/*" type="file" onChange={handleChange} />
//               </Button>
//               {errors.profilePic && (
//                 <Typography color="error" variant="body2" mt={1}>
//                   {errors.profilePic.message}
//                 </Typography>
//               )}

//               <Button
//                 fullWidth
//                 variant="contained"
//                 type="submit"
//                 sx={{
//                   backgroundColor: "#0B0B45",
//                   mt: 3,
//                   ":hover": { backgroundColor: "#101060" },
//                 }}
//               >
//                 Register
//               </Button>
//             </form>
//           </Paper>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

//................PART 2.............//

// import { yupResolver } from "@hookform/resolvers/yup";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";

// // ✅ Validation Schema
// const schema = yup.object().shape({
//   name: yup.string().min(2, "Minimum 2 letters required").required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup.string().min(4, "Minimum 4 characters required").required("Password is required"),
//   role: yup.string().min(2, "Minimum 2 letters required").required("Role is required"),
//   skills: yup.string().min(2, "Minimum 2 letters required").required("Skills are required"),
//   bio: yup.string().min(2, "Minimum 2 letters required").required("Bio is required"),
//   profilePic: yup.mixed().required("Profile Picture is required"),
// });

// export default function Register() {
//   const [img, setImg] = useState<File | null>(null);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     clearErrors,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("image/")) {
//       setImg(file);
//       setValue("profilePic", file);
//       clearErrors("profilePic");
//     } else {
//       alert("Please upload a valid image file");
//     }
//   };

//   const onSubmit = (data: any) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           borderRadius: 2,
//           overflow: "hidden",
//           boxShadow: 3,
//           position: "relative",
//         }}
//       >
//         {/* 🔹 LEFT IMAGE */}
//         <Box
//           component="img"
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&fit=crop&auto=format"
//           alt="office workspace"
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             objectFit: "cover",
//           }}
//         />

//         {/* 🔹 RIGHT FORM SECTION */}
//         <Box
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             p: 4,
//             display: "flex",
//             alignItems: "center",
//             backgroundColor: "#fff",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           {/* 🔹 SVG Animated Background */}
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               zIndex: 0,
//               pointerEvents: "none",
//             }}
//           >
//             <svg width="100%" height="100%">
//               {[...Array(5)].map((_, i) => (
//                 <circle
//                   key={i}
//                   cx={`${20 + i * 20}%`}
//                   cy={`${20 + i * 15}%`}
//                   r="30"
//                   fill="#0B0B45"
//                   opacity="0.1"
//                 >
//                   <animate
//                     attributeName="cy"
//                     values="0%;100%;0%"
//                     dur={`${8 + i * 2}s`}
//                     repeatCount="indefinite"
//                   />
//                   <animate
//                     attributeName="cx"
//                     values="0%;100%;0%"
//                     dur={`${10 + i * 2}s`}
//                     repeatCount="indefinite"
//                   />
//                 </circle>
//               ))}
//             </svg>
//           </Box>

//           {/* 🔹 REGISTER FORM */}
//           <Paper elevation={0} sx={{ width: "100%", zIndex: 1 }}>
//             <Typography variant="h4" fontWeight="bold" gutterBottom>
//               CREATE ACCOUNT
//             </Typography>

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 margin="normal"
//                 {...register("name")}
//                 error={!!errors.name}
//                 helperText={errors.name?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 {...register("email")}
//                 error={!!errors.email}
//                 helperText={errors.email?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 margin="normal"
//                 {...register("password")}
//                 error={!!errors.password}
//                 helperText={errors.password?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Role"
//                 margin="normal"
//                 {...register("role")}
//                 error={!!errors.role}
//                 helperText={errors.role?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Skills"
//                 margin="normal"
//                 {...register("skills")}
//                 error={!!errors.skills}
//                 helperText={errors.skills?.message}
//               />
//               <TextField
//                 fullWidth
//                 label="Bio"
//                 multiline
//                 rows={3}
//                 margin="normal"
//                 {...register("bio")}
//                 error={!!errors.bio}
//                 helperText={errors.bio?.message}
//               />

//               <Button component="label" variant="outlined" fullWidth sx={{ mt: 2 }}>
//                 Upload Profile Picture
//                 <input hidden accept="image/*" type="file" onChange={handleChange} />
//               </Button>
//               {errors.profilePic && (
//                 <Typography color="error" variant="body2" mt={1}>
//                   {errors.profilePic.message}
//                 </Typography>
//               )}

//               <Button
//                 fullWidth
//                 variant="contained"
//                 type="submit"
//                 sx={{
//                   backgroundColor: "#0B0B45",
//                   mt: 3,
//                   ":hover": { backgroundColor: "#101060" },
//                 }}
//               >
//                 Register
//               </Button>
//             </form>
//           </Paper>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

//...............//
// "use client";
// import { yupResolver } from "@hookform/resolvers/yup";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";

// // ✅ Validation Schema
// const schema = yup.object().shape({
//   name: yup.string().min(2, "Minimum 2 letters required").required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup.string().min(4, "Minimum 4 characters required").required("Password is required"),
//   role: yup.string().min(2, "Minimum 2 letters required").required("Role is required"),
//   skills: yup.string().min(2, "Minimum 2 letters required").required("Skills are required"),
//   bio: yup.string().min(2, "Minimum 2 letters required").required("Bio is required"),
//   profilePic: yup.mixed().required("Profile Picture is required"),
// });

// export default function Register() {
//   const [img, setImg] = useState<File | null>(null);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     clearErrors,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("image/")) {
//       setImg(file);
//       setValue("profilePic", file);
//       clearErrors("profilePic");
//     } else {
//       alert("Please upload a valid image file");
//     }
//   };

//   const onSubmit = (data: any) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#f9f9f9",
//         position: "relative",
//         overflow: "hidden",
//         pt: { xs: 8, md: 10 }, // Leaves space for header
//         pb: { xs: 6, md: 8 }, // Leaves space for footer
//       }}
//     >
//       {/* 🔹 Animated SVG Background */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       >
//         <svg width="100%" height="100%">
//           {[...Array(6)].map((_, i) => (
//             <circle
//               key={i}
//               cx={`${15 + i * 15}%`}
//               cy={`${10 + i * 15}%`}
//               r="25"
//               fill="#0B0B45"
//               opacity="0.08"
//             >
//               <animate
//                 attributeName="cx"
//                 values="0%;100%;0%"
//                 dur={`${5 + i * 1.5}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="cy"
//                 values="0%;100%;0%"
//                 dur={`${6 + i * 1.2}s`}
//                 repeatCount="indefinite"
//               />
//             </circle>
//           ))}
//         </svg>
//       </Box>

//       <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt: 6, mb: 6 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             borderRadius: 2,
//             overflow: "hidden",
//             boxShadow: 3,
//             position: "relative",
//             backgroundColor: "#fff",
//           }}
//         >
//           {/* 🔹 LEFT IMAGE */}
//           <Box
//             component="img"
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&fit=crop&auto=format"
//             alt="office workspace"
//             sx={{
//               width: { xs: "100%", md: "50%" },
//               objectFit: "cover",
//             }}
//           />

//           {/* 🔹 RIGHT FORM */}
//           <Box
//             sx={{
//               width: { xs: "100%", md: "50%" },
//               p: 4,
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "#fff",
//             }}
//           >
//             <Paper elevation={0} sx={{ width: "100%" }}>
//               <Typography variant="h4" fontWeight="bold" gutterBottom>
//                 CREATE ACCOUNT
//               </Typography>

//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   margin="normal"
//                   {...register("name")}
//                   error={!!errors.name}
//                   helperText={errors.name?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   margin="normal"
//                   {...register("email")}
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Password"
//                   type="password"
//                   margin="normal"
//                   {...register("password")}
//                   error={!!errors.password}
//                   helperText={errors.password?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Role"
//                   margin="normal"
//                   {...register("role")}
//                   error={!!errors.role}
//                   helperText={errors.role?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Skills"
//                   margin="normal"
//                   {...register("skills")}
//                   error={!!errors.skills}
//                   helperText={errors.skills?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Bio"
//                   multiline
//                   rows={3}
//                   margin="normal"
//                   {...register("bio")}
//                   error={!!errors.bio}
//                   helperText={errors.bio?.message}
//                 />

//                 <Button component="label" variant="outlined" fullWidth sx={{ mt: 2 }}>
//                   Upload Profile Picture
//                   <input hidden accept="image/*" type="file" onChange={handleChange} />
//                 </Button>
//                 {errors.profilePic && (
//                   <Typography color="error" variant="body2" mt={1}>
//                     {errors.profilePic.message}
//                   </Typography>
//                 )}

//                 <Button
//                   fullWidth
//                   variant="contained"
//                   type="submit"
//                   sx={{
//                     backgroundColor: "#0B0B45",
//                     mt: 3,
//                     ":hover": { backgroundColor: "#101060" },
//                   }}
//                 >
//                   Register
//                 </Button>
//               </form>
//             </Paper>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

//..................//

//.....part 2 important...//

// import { yupResolver } from "@hookform/resolvers/yup";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { useRouter } from "next/router";

// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { registerForm } from "@/redux/authSlice/authSlice";

// // ✅ Validation Schema
// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .min(4, "Minimum 4 characters required")
//     .required("Password is required"),
//   role: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Role is required"),
//   skills: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Skills are required"),
//   bio: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Bio is required"),
//   profilePic: yup.mixed().required("Profile Picture is required"),
// });

// export default function Register() {
//   const [img, setImg] = useState<File | null>(null);
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     clearErrors,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("image/")) {
//       setImg(file);
//       setValue("profilePic", file);
//       clearErrors("profilePic");
//     } else {
//       alert("Please upload a valid image file");
//     }
//   };

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     formData.append("role", data.role);
//     formData.append("skills", data.skills);
//     formData.append("bio", data.bio);
//     formData.append("profilePic", img);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       const response = await dispatch(registerForm(formData));
//       console.log(response, "response");
//       if (response.payload.status === true) {
//         router.push("/auth/otp");
//       }

//       // if(response?)
//     } catch (error) {
//       console.log(error, "Login error");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         bgcolor: "#f9f9f9",
//         overflow: "hidden",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         py: 6,
//       }}
//     >
//       {/* 🔹 SVG Background Animation */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       >
//         <svg width="100%" height="100%">
//           {[...Array(6)].map((_, i) => (
//             <circle
//               key={i}
//               cx={`${15 + i * 15}%`}
//               cy={`${10 + i * 15}%`}
//               r="40"
//               fill="#0B0B45"
//               opacity="0.15"
//             >
//               <animate
//                 attributeName="cx"
//                 values="0%;100%;0%"
//                 dur={`${6 + i * 2}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="cy"
//                 values="0%;100%;0%"
//                 dur={`${7 + i * 2}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="fill"
//                 values="#0B0B45;#FFD700;#0B0B45"
//                 dur="6s"
//                 repeatCount="indefinite"
//               />
//             </circle>
//           ))}
//         </svg>
//       </Box>

//       {/* 🔹 Form Container */}
//       <Container maxWidth="md" sx={{ zIndex: 1 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             borderRadius: 2,
//             overflow: "hidden",
//             boxShadow: 5,
//             bgcolor: "white",
//             maxWidth: "850px",
//             mx: "auto",
//           }}
//         >
//           {/* Left Image */}
//           <Box
//             component="img"
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&fit=crop&auto=format"
//             alt="office workspace"
//             sx={{
//               width: { xs: "100%", md: "50%" },
//               objectFit: "cover",
//             }}
//           />

//           {/* Right Form */}
//           <Box
//             sx={{
//               width: { xs: "100%", md: "50%" },
//               p: 4,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Paper elevation={0} sx={{ width: "100%" }}>
//               <Typography variant="h4" fontWeight="bold" gutterBottom>
//                 CREATE ACCOUNT
//               </Typography>

//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   margin="normal"
//                   {...register("name")}
//                   error={!!errors.name}
//                   helperText={errors.name?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   margin="normal"
//                   {...register("email")}
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Password"
//                   type="password"
//                   margin="normal"
//                   {...register("password")}
//                   error={!!errors.password}
//                   helperText={errors.password?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Role"
//                   margin="normal"
//                   {...register("role")}
//                   error={!!errors.role}
//                   helperText={errors.role?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Skills"
//                   margin="normal"
//                   {...register("skills")}
//                   error={!!errors.skills}
//                   helperText={errors.skills?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Bio"
//                   multiline
//                   rows={3}
//                   margin="normal"
//                   {...register("bio")}
//                   error={!!errors.bio}
//                   helperText={errors.bio?.message}
//                 />

//                 <Button
//                   component="label"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ mt: 2 }}
//                 >
//                   Upload Profile Picture
//                   <input
//                     hidden
//                     accept="image/*"
//                     type="file"
//                     onChange={handleChange}
//                   />
//                 </Button>
//                 {errors.profilePic && (
//                   <Typography color="error" variant="body2" mt={1}>
//                     {errors.profilePic.message}
//                   </Typography>
//                 )}

//                 <Button
//                   fullWidth
//                   variant="contained"
//                   type="submit"
//                   sx={{
//                     backgroundColor: "#FFD700",
//                     mt: 3,
//                     ":hover": { backgroundColor: "#e6c200" },
//                   }}
//                 >
//                   Register
//                 </Button>
//               </form>
//             </Paper>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// .......//
//.......part 3.........//

// import { yupResolver } from "@hookform/resolvers/yup";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { useRouter } from "next/router";

// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { registerForm } from "@/redux/authSlice/authSlice";

// // ✅ Validation Schema
// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .min(4, "Minimum 4 characters required")
//     .required("Password is required"),
//   role: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Role is required"),
//   skills: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Skills are required"),
//   bio: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Bio is required"),
//   profilePic: yup.mixed().required("Profile Picture is required"),
// });

// export default function Register() {
//   const [img, setImg] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null); // 🔥 NEW STATE for preview
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     clearErrors,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("image/")) {
//       setImg(file);
//       setPreview(URL.createObjectURL(file)); // 🔥 SET PREVIEW URL
//       setValue("profilePic", file);
//       clearErrors("profilePic");
//     } else {
//       alert("Please upload a valid image file");
//     }
//   };
// let sendEmail
//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     formData.append("role", data.role);
//     formData.append("skills", data.skills);
//     formData.append("bio", data.bio);
//     formData.append("profilePic", img);
//     sendEmail=localStorage.setItem("email",data.email)
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       const response = await dispatch(registerForm(formData));
//       console.log(response, "response");
//       if (response.payload.status === true) {
//         router.push("/auth/otp");
//       }
//     } catch (error) {
//       console.log(error, "Login error");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         bgcolor: "#f9f9f9",
//         overflow: "hidden",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         py: 6,
//       }}
//     >
//       {/* 🔹 SVG Background Animation */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       >
//         <svg width="100%" height="100%">
//           {[...Array(6)].map((_, i) => (
//             <circle
//               key={i}
//               cx={`${15 + i * 15}%`}
//               cy={`${10 + i * 15}%`}
//               r="40"
//               fill="#0B0B45"
//               opacity="0.15"
//             >
//               <animate
//                 attributeName="cx"
//                 values="0%;100%;0%"
//                 dur={`${6 + i * 2}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="cy"
//                 values="0%;100%;0%"
//                 dur={`${7 + i * 2}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="fill"
//                 values="#0B0B45;#FFD700;#0B0B45"
//                 dur="6s"
//                 repeatCount="indefinite"
//               />
//             </circle>
//           ))}
//         </svg>
//       </Box>

//       {/* 🔹 Form Container */}
//       <Container maxWidth="md" sx={{ zIndex: 1 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             borderRadius: 2,
//             overflow: "hidden",
//             boxShadow: 5,
//             bgcolor: "white",
//             maxWidth: "850px",
//             mx: "auto",
//           }}
//         >
//           {/* Left Image */}
//           <Box
//             component="img"
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&fit=crop&auto=format"
//             alt="office workspace"
//             sx={{
//               width: { xs: "100%", md: "50%" },
//               objectFit: "cover",
//             }}
//           />

//           {/* Right Form */}
//           <Box
//             sx={{
//               width: { xs: "100%", md: "50%" },
//               p: 4,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Paper elevation={0} sx={{ width: "100%" }}>
//               <Typography variant="h4" fontWeight="bold" gutterBottom>
//                 CREATE ACCOUNT
//               </Typography>

//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   margin="normal"
//                   {...register("name")}
//                   error={!!errors.name}
//                   helperText={errors.name?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   margin="normal"
//                   {...register("email")}
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Password"
//                   type="password"
//                   margin="normal"
//                   {...register("password")}
//                   error={!!errors.password}
//                   helperText={errors.password?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Role"
//                   margin="normal"
//                   {...register("role")}
//                   error={!!errors.role}
//                   helperText={errors.role?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Skills"
//                   margin="normal"
//                   {...register("skills")}
//                   error={!!errors.skills}
//                   helperText={errors.skills?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Bio"
//                   multiline
//                   rows={3}
//                   margin="normal"
//                   {...register("bio")}
//                   error={!!errors.bio}
//                   helperText={errors.bio?.message}
//                 />

//                 <Button
//                   component="label"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ mt: 2 }}
//                 >
//                   Upload Profile Picture
//                   <input
//                     hidden
//                     accept="image/*"
//                     type="file"
//                     onChange={handleChange}
//                   />
//                 </Button>
//                 {errors.profilePic && (
//                   <Typography color="error" variant="body2" mt={1}>
//                     {errors.profilePic.message}
//                   </Typography>
//                 )}

//                 {/* 🔥 Image Preview */}
//                 {preview && (
//                   <Box
//                     sx={{
//                       mt: 2,
//                       display: "flex",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={preview}
//                       alt="Preview"
//                       sx={{
//                         width: 100,
//                         height: 100,
//                         borderRadius: "8px",
//                         objectFit: "cover",
//                         boxShadow: 2,
//                       }}
//                     />
//                   </Box>
//                 )}

//                 <Button
//                   fullWidth
//                   variant="contained"
//                   type="submit"
//                   sx={{
//                     backgroundColor: "#FFD700",
//                     mt: 3,
//                     ":hover": { backgroundColor: "#e6c200" },
//                   }}
//                 >
//                   Register
//                 </Button>
//               </form>
//             </Paper>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

//.......part 4.......//

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { registerForm } from "@/redux/authSlice/authSlice";

// ✅ Validation Schema
const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Minimum 2 letters required")
    .required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(4, "Minimum 4 characters required")
    .required("Password is required"),
  role: yup
    .string()
    .min(2, "Minimum 2 letters required")
    .required("Role is required"),
  skills: yup
    .string()
    .min(2, "Minimum 2 letters required")
    .required("Skills are required"),
  bio: yup
    .string()
    .min(2, "Minimum 2 letters required")
    .required("Bio is required"),
  profilePic: yup.mixed().required("Profile Picture is required"),
});

export default function Register() {
  const [img, setImg] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // 🔹 Handle Image Selection
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      alert("Please upload a valid image file (JPG, PNG, etc.)");
      return;
    }
    setImg(file);
    setPreview(URL.createObjectURL(file));
    setValue("profilePic", file);
    clearErrors("profilePic");
  };

  // 🔹 Form Submit Handler
  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", data.role);
    formData.append("skills", data.skills);
    formData.append("bio", data.bio);
    if (img) formData.append("profilePic", img);

    localStorage.setItem("email", data.email);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await dispatch(registerForm(formData));
      console.log(response, "response");

      if (response?.payload?.status) {
        router.push("/auth/otp");
      }
    } catch (error) {
      console.error(error, "Register error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        bgcolor: "#f9f9f9",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
      }}
    >
      {/* 🔹 SVG Background Animation */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="100%">
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx={`${15 + i * 15}%`}
              cy={`${10 + i * 15}%`}
              r="40"
              fill="#0B0B45"
              opacity="0.15"
            >
              <animate
                attributeName="cx"
                values="0%;100%;0%"
                dur={`${6 + i * 2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values="0%;100%;0%"
                dur={`${7 + i * 2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#0B0B45;#FFD700;#0B0B45"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </Box>

      {/* 🔹 Form Container */}
      <Container maxWidth="md" sx={{ zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 5,
            bgcolor: "white",
            maxWidth: "850px",
            mx: "auto",
          }}
        >
          {/* Left Image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&fit=crop&auto=format"
            alt="office workspace"
            sx={{
              width: { xs: "100%", md: "50%" },
              objectFit: "cover",
            }}
          />

          {/* Right Form */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper elevation={0} sx={{ width: "100%" }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                CREATE ACCOUNT
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  margin="normal"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <TextField
                  fullWidth
                  label="Role"
                  margin="normal"
                  {...register("role")}
                  error={!!errors.role}
                  helperText={errors.role?.message}
                />
                <TextField
                  fullWidth
                  label="Skills"
                  margin="normal"
                  {...register("skills")}
                  error={!!errors.skills}
                  helperText={errors.skills?.message}
                />
                <TextField
                  fullWidth
                  label="Bio"
                  multiline
                  rows={3}
                  margin="normal"
                  {...register("bio")}
                  error={!!errors.bio}
                  helperText={errors.bio?.message}
                />

                <Button
                  component="label"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Upload Profile Picture
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleChange}
                  />
                </Button>
                {errors.profilePic && (
                  <Typography color="error" variant="body2" mt={1}>
                    {errors.profilePic.message}
                  </Typography>
                )}

                {/* 🔥 Image Preview */}
                {preview && (
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={preview}
                      alt="Preview"
                      sx={{
                        width: 100,
                        height: 100,
                        borderRadius: "8px",
                        objectFit: "cover",
                        boxShadow: 2,
                      }}
                    />
                  </Box>
                )}

                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  sx={{
                    backgroundColor: "#FFD700",
                    mt: 3,
                    ":hover": { backgroundColor: "#e6c200" },
                  }}
                >
                  {loading ? "Registering..." : "Register"}
                </Button>
              </form>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

//......................part 5........//

// import { yupResolver } from "@hookform/resolvers/yup";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { useRouter } from "next/router";
// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { registerForm } from "@/redux/authSlice/authSlice";

// // ✅ Validation Schema
// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .min(4, "Minimum 4 characters required")
//     .required("Password is required"),
//   role: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Role is required"),
//   skills: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Skills are required"),
//   bio: yup
//     .string()
//     .min(2, "Minimum 2 letters required")
//     .required("Bio is required"),
//   profilePic: yup.mixed().required("Profile Picture is required"),
// });

// export default function Register() {
//   const [img, setImg] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     clearErrors,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   // 🔹 Handle Image Selection
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file || !file.type.startsWith("image/")) {
//       alert("Please upload a valid image file (JPG, PNG, etc.)");
//       return;
//     }
//     setImg(file);
//     setPreview(URL.createObjectURL(file));
//     setValue("profilePic", file);
//     clearErrors("profilePic");
//   };

//   // 🔹 Submit Handler
//   const onSubmit = async (data: any) => {
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     formData.append("role", data.role);
//     formData.append("skills", data.skills);
//     formData.append("bio", data.bio);
//     if (img) formData.append("profilePic", img);

//     localStorage.setItem("email", data.email);

//     try {
//       // 🔥 Using unwrap() so Redux errors go to catch
//       const response = await dispatch(registerForm(formData)).unwrap();
//       console.log(response, "response");

//       if (response?.status) {
//         router.push("/auth/otp");
//       }
//     } catch (error: any) {
//       console.error("Register error:", error);

//       if (error?.response?.status === 409) {
//         alert("This email is already registered. Please log in instead.");
//       } else {
//         alert(
//           error?.response?.data?.message ||
//             "Something went wrong. Please try again."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         bgcolor: "#f9f9f9",
//         overflow: "hidden",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         py: 6,
//       }}
//     >
//       {/* 🔹 SVG Background Animation */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       >
//         <svg width="100%" height="100%">
//           {[...Array(6)].map((_, i) => (
//             <circle
//               key={i}
//               cx={`${15 + i * 15}%`}
//               cy={`${10 + i * 15}%`}
//               r="40"
//               fill="#0B0B45"
//               opacity="0.15"
//             >
//               <animate
//                 attributeName="cx"
//                 values="0%;100%;0%"
//                 dur={`${6 + i * 2}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="cy"
//                 values="0%;100%;0%"
//                 dur={`${7 + i * 2}s`}
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="fill"
//                 values="#0B0B45;#FFD700;#0B0B45"
//                 dur="6s"
//                 repeatCount="indefinite"
//               />
//             </circle>
//           ))}
//         </svg>
//       </Box>

//       {/* 🔹 Form Container */}
//       <Container maxWidth="md" sx={{ zIndex: 1 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             borderRadius: 2,
//             overflow: "hidden",
//             boxShadow: 5,
//             bgcolor: "white",
//             maxWidth: "850px",
//             mx: "auto",
//           }}
//         >
//           {/* Left Image */}
//           <Box
//             component="img"
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&fit=crop&auto=format"
//             alt="office workspace"
//             sx={{
//               width: { xs: "100%", md: "50%" },
//               objectFit: "cover",
//             }}
//           />

//           {/* Right Form */}
//           <Box
//             sx={{
//               width: { xs: "100%", md: "50%" },
//               p: 4,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Paper elevation={0} sx={{ width: "100%" }}>
//               <Typography variant="h4" fontWeight="bold" gutterBottom>
//                 CREATE ACCOUNT
//               </Typography>

//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   margin="normal"
//                   {...register("name")}
//                   error={!!errors.name}
//                   helperText={errors.name?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   margin="normal"
//                   {...register("email")}
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Password"
//                   type="password"
//                   autoComplete="new-password"
//                   margin="normal"
//                   {...register("password")}
//                   error={!!errors.password}
//                   helperText={errors.password?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Role"
//                   margin="normal"
//                   {...register("role")}
//                   error={!!errors.role}
//                   helperText={errors.role?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Skills"
//                   margin="normal"
//                   {...register("skills")}
//                   error={!!errors.skills}
//                   helperText={errors.skills?.message}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Bio"
//                   multiline
//                   rows={3}
//                   margin="normal"
//                   {...register("bio")}
//                   error={!!errors.bio}
//                   helperText={errors.bio?.message}
//                 />

//                 <Button
//                   component="label"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ mt: 2 }}
//                 >
//                   Upload Profile Picture
//                   <input
//                     hidden
//                     accept="image/*"
//                     type="file"
//                     onChange={handleChange}
//                   />
//                 </Button>
//                 {errors.profilePic && (
//                   <Typography color="error" variant="body2" mt={1}>
//                     {errors.profilePic.message}
//                   </Typography>
//                 )}

//                 {/* 🔥 Image Preview */}
//                 {preview && (
//                   <Box
//                     sx={{
//                       mt: 2,
//                       display: "flex",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={preview}
//                       alt="Preview"
//                       sx={{
//                         width: 100,
//                         height: 100,
//                         borderRadius: "8px",
//                         objectFit: "cover",
//                         boxShadow: 2,
//                       }}
//                     />
//                   </Box>
//                 )}

//                 <Button
//                   fullWidth
//                   variant="contained"
//                   type="submit"
//                   disabled={loading}
//                   sx={{
//                     backgroundColor: "#FFD700",
//                     mt: 3,
//                     ":hover": { backgroundColor: "#e6c200" },
//                   }}
//                 >
//                   {loading ? "Registering..." : "Register"}
//                 </Button>
//               </form>
//             </Paper>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

