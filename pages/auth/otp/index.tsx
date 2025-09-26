// import React, { useRef, useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Box, Typography, Button, Paper, TextField } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { otp } from "@/redux/authSlice/authSlice";
// import { useRouter } from "next/navigation";
// import { useAppDispatch } from "@/typeScript/hooks.type";
// import { OtpPayload } from "@/typeScript/auth.interface";

// // ✅ Yup schema for OTP validation
// const schema = yup.object().shape({
//   otp1: yup.string().required("Required").length(1, "Required"),
//   otp2: yup.string().required("Required").length(1, "Required"),
//   otp3: yup.string().required("Required").length(1, "Required"),
//   otp4: yup.string().required("Required").length(1, "Required"),
// });

// interface OtpForm {
//   otp1: string;
//   otp2: string;
//   otp3: string;
//   otp4: string;
// }

// const Otp = () => {
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   const [expired, setExpired] = useState(false);
//   const [email, setEmail] = useState("");
//   const [timeLeft, setTimeLeft] = useState(120); // 2 min timer

//   // ✅ Get email from localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedEmail = localStorage.getItem("email") || "";
//       setEmail(savedEmail);
//     }
//   }, []);

//   // ✅ Timer logic
//   useEffect(() => {
//     if (timeLeft <= 0) {
//       setExpired(true);
//       return;
//     }
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const formatTime = (seconds: number) => {
//     const m = Math.floor(seconds / 60);
//     const s = seconds % 60;
//     return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };

//   // ✅ React Hook Form
//   const {
//     control,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<OtpForm>({
//     resolver: yupResolver(schema),
//     defaultValues: { otp1: "", otp2: "", otp3: "", otp4: "" },
//   });

//   const watchFields = watch(["otp1", "otp2", "otp3", "otp4"]);
//   const inputsRef = useRef<HTMLInputElement[]>([]);

//   // ✅ OTP navigation
//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.target.value && index < inputsRef.current.length - 1) {
//       inputsRef.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     if (e.key === "Backspace" && !watchFields[index] && index > 0) {
//       inputsRef.current[index - 1]?.focus();
//     }
//   };

//   // ✅ Submit OTP
//   const onSubmit = async (data: OtpForm) => {
//     if (expired) {
//       alert("OTP expired! Please request a new one.");
//       return;
//     }

//     const otpValue = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;

//     const payload: OtpPayload = {
//       email,
//       otp: otpValue,
//     };

//     try {
//       const response = await dispatch(otp(payload)).unwrap();
//       console.log("OTP response:", response);

//       if (response?.status === true) {
//         router.push("/auth/login");
//       } else {
//         alert(response?.message || "OTP verification failed!");
//       }
//     } catch (error: any) {
//       console.error("OTP submission error:", error);
//       alert(error?.message || "Something went wrong!");
//     }
//   };
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f5f5f5",
//         overflow: "hidden",
//       }}
//     >
//       {/* 🔹 SVG Wave Background */}
//       <Box
//         component="svg"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 320"
//         sx={{
//           position: "absolute",
//           top: -30,
//           left: 0,
//           width: "100%",
//           height: "50%",
//           zIndex: 0,
//         }}
//       >
//         <path
//           fill="#4B4B9D"
//           fillOpacity="0.1"
//           d="M0,64L40,96C80,128,160,192,240,213.3C320,235,400,213,480,202.7C560,192,640,192,720,176C800,160,880,128,960,133.3C1040,139,1120,181,1200,197.3C1280,213,1360,203,1400,197.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
//         />
//       </Box>

//       {/* 🔹 Floating Circles */}
//       <Box
//         sx={{
//           position: "absolute",
//           width: 200,
//           height: 200,
//           background: "#4b4b9d20",
//           borderRadius: "50%",
//           top: "10%",
//           left: "5%",
//           zIndex: 0,
//           animation: "moveLeftRight 3s ease-in-out infinite alternate",
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           width: 250,
//           height: 250,
//           background: "#0b0b4520",
//           borderRadius: "50%",
//           bottom: "5%",
//           right: "5%",
//           zIndex: 0,
//           animation: "moveRightLeft 2s ease-in-out infinite alternate",
//         }}
//       />

//       {/* 🔹 OTP Card */}
//       <Paper
//         elevation={3}
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           padding: "30px",
//           borderRadius: "16px",
//           textAlign: "center",
//           width: "100%",
//           maxWidth: "400px",
//           backgroundColor: "#fff",
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
//           Verify OTP
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
//           {email ? `OTP sent to ${email}` : "No email found"}
//         </Typography>

//         {/* Timer */}
//         <Typography
//           variant="body2"
//           sx={{ mb: 3, color: expired ? "red" : "#555" }}
//         >
//           {expired ? "OTP expired!" : `Time remaining: ${formatTime(timeLeft)}`}
//         </Typography>

//         {/* OTP Form */}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               mb: 3,
//               gap: 2,
//             }}
//           >
//             {[0, 1, 2, 3].map((index) => (
//               <Controller
//                 key={index}
//                 name={`otp${index + 1}`}
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     inputRef={(el) => {
//                       inputsRef.current[index] = el!;
//                     }}
//                     onChange={(e: any) => {
//                       field.onChange(e);
//                       handleInputChange(e, index);
//                     }}
//                     onKeyDown={(e: any) => handleKeyDown(e, index)}
//                     error={!!errors[`otp${index + 1}`]}
//                     helperText={errors[`otp${index + 1}`] ? " " : " "}

//                     inputProps={{
//                       maxLength: 1,
//                       style: {
//                         textAlign: "center",
//                         fontSize: "1.5rem",
//                         width: "60px",
//                         height: "60px",
//                       },
//                     }}
//                     sx={{
//                       "& .MuiInputBase-root": {
//                         borderRadius: "12px",
//                         backgroundColor: "#f8f9fa",
//                       },
//                     }}
//                   />
//                 )}
//               />
//             ))}
//           </Box>

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{
//               backgroundColor: "#1976d2",
//               padding: "12px 0",
//               borderRadius: "12px",
//               fontWeight: "bold",
//               "&:hover": { backgroundColor: "#125ea2" },
//             }}
//           >
//             Verify OTP
//           </Button>
//         </form>

//         <Typography variant="body2" sx={{ mt: 2, color: "#777" }}>
//           Didn’t get the code?{" "}
//           <span
//             style={{ color: "#1976d2", cursor: "pointer" }}
//             onClick={() => {
//               setExpired(false);
//               setTimeLeft(120);
//             }}
//           >
//             Resend
//           </span>
//         </Typography>
//       </Paper>

//       {/* 🔹 Keyframe Animations */}
//       <style>{`
//         @keyframes moveLeftRight {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(20px); }
//         }
//         @keyframes moveRightLeft {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-20px); }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default Otp;

import React, { useRef, useState, useEffect } from "react";
import { useForm, Controller, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Typography, Button, Paper, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/typeScript/hooks.type";
import { otp } from "@/redux/authSlice/authSlice";
import { OtpForm, OtpPayload } from "@/typeScript/auth.interface";

// ✅ Yup schema for OTP validation
const schema = yup.object().shape({
  otp1: yup.string().required("Required").length(1, "Required"),
  otp2: yup.string().required("Required").length(1, "Required"),
  otp3: yup.string().required("Required").length(1, "Required"),
  otp4: yup.string().required("Required").length(1, "Required"),
});

const Otp = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [expired, setExpired] = useState(false);
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState(120); // 2 min timer

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEmail = localStorage.getItem("email") || "";
      setEmail(savedEmail);
    }
  }, []);

  // ✅ Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      setExpired(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // ✅ React Hook Form
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OtpForm>({
    resolver: yupResolver(schema),
    defaultValues: { otp1: "", otp2: "", otp3: "", otp4: "" },
  });

  const otpKeys: (keyof OtpForm)[] = ["otp1", "otp2", "otp3", "otp4"];
  const watchFields = watch(otpKeys);
  const inputsRef = useRef<Array<HTMLInputElement | null>>(
    new Array(otpKeys.length).fill(null)
  );

  // ✅ OTP navigation
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !watchFields[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // ✅ Submit OTP
  const onSubmit = async (data: OtpForm) => {
    if (expired) {
      alert("OTP expired! Please request a new one.");
      return;
    }

    // Concatenate OTP digits
    const otpValue = otpKeys.map((key) => data[key]).join("");

    const payload: OtpPayload = {
      email,
      otp: otpValue,
    };

    try {
      const response = await dispatch(otp(payload)).unwrap();
      console.log("OTP response:", response);

      if (response?.status) {
        router.push("/auth/login");
      } else {
        alert(response?.message || "OTP verification failed!");
      }
    } catch (error: any) {
      console.error("OTP submission error:", error);
      alert(error?.message || "Something went wrong!");
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      {/* 🔹 SVG Wave Background */}
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        sx={{
          position: "absolute",
          top: -30,
          left: 0,
          width: "100%",
          height: "50%",
          zIndex: 0,
        }}
      >
        <path
          fill="#4B4B9D"
          fillOpacity="0.1"
          d="M0,64L40,96C80,128,160,192,240,213.3C320,235,400,213,480,202.7C560,192,640,192,720,176C800,160,880,128,960,133.3C1040,139,1120,181,1200,197.3C1280,213,1360,203,1400,197.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
      </Box>

      {/* 🔹 OTP Card */}
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          zIndex: 1,
          padding: "30px",
          borderRadius: "16px",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Verify OTP
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
          {email ? `OTP sent to ${email}` : "No email found"}
        </Typography>

        {/* Timer */}
        <Typography
          variant="body2"
          sx={{ mb: 3, color: expired ? "red" : "#555" }}
        >
          {expired ? "OTP expired!" : `Time remaining: ${formatTime(timeLeft)}`}
        </Typography>

        {/* OTP Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3,
              gap: 2,
            }}
          >
            {otpKeys.map((key, index) => (
              <Controller
                key={key}
                name={key}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    inputRef={(el) => (inputsRef.current[index] = el)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e);
                      handleInputChange(e, index);
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                      handleKeyDown(e, index)
                    }
                    error={!!errors[key]}
                    helperText={errors[key]?.message || " "}
                    inputProps={{
                      maxLength: 1,
                      style: {
                        textAlign: "center",
                        fontSize: "1.5rem",
                        width: "60px",
                        height: "60px",
                      },
                      "aria-label": `OTP digit ${index + 1}`,
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        borderRadius: "12px",
                        backgroundColor: "#f8f9fa",
                      },
                    }}
                  />
                )}
              />
            ))}
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#1976d2",
              padding: "12px 0",
              borderRadius: "12px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#125ea2" },
            }}
          >
            Verify OTP
          </Button>
        </form>

        <Typography variant="body2" sx={{ mt: 2, color: "#777" }}>
          Didn’t get the code?{" "}
          <span
            style={{ color: "#1976d2", cursor: "pointer" }}
            onClick={() => {
              setExpired(false);
              setTimeLeft(120);
            }}
          >
            Resend
          </span>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Otp;
