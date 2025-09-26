// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Container,
//   Divider,
// } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { categoryCreate } from "@/redux/cmsSlice/cmsSlice"; // ✅ your thunk
// import { Router, useRouter } from "next/router";

// // ✅ Validation schema
// const schema = yup.object().shape({
//   name: yup.string().required("Category name is required"),
// });

// function CreateCategory() {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = React.useState(false);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
  

//   const onSubmit = async (data: any) => {
//     setLoading(true);

//     const formData = {
//       name: data.name,
//     };

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       const response = await dispatch(categoryCreate(formData));

//       console.log(response, "response");

//       if (response?.payload?.status) {
//         router.push("/cms/categoryList/categoryList");
//       }
//     } catch (error) {
//       console.error(error, "Login error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         py: 5,
//         overflow: "hidden",
//         backgroundColor: "#f5f7fb",
//       }}
//     >
//       <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             borderRadius: 3,
//             overflow: "hidden",
//             boxShadow: 3,
//             backgroundColor: "white",
//             position: "relative",
//             p: 4,
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             Create Category
//           </Typography>
//           <Typography variant="body1" mb={3}>
//             Add a new category to your CMS.
//           </Typography>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               fullWidth
//               label="Category Name"
//               {...register("name")}
//               error={!!errors.name}
//               helperText={errors.name?.message}
//               margin="normal"
//             />

//             <Button
//               fullWidth
//               variant="contained"
//               type="submit"
//               sx={{
//                 backgroundColor: "#0B0B45",
//                 mt: 2,
//                 mb: 2,
//                 "&:hover": { backgroundColor: "#0b0b6a" },
//               }}
//               disabled={loading || isSubmitting}
//             >
//               {loading ? "Creating..." : "Create Category"}
//             </Button>
//           </form>

//           <Divider sx={{ my: 3 }} />

//           <Typography variant="body2" color="textSecondary" textAlign="center">
//             Manage all categories from the CMS dashboard.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default CreateCategory;

//.....................................//

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { categoryCreate } from "@/redux/cmsSlice/cmsSlice"; // ✅ your thunk
import { useRouter } from "next/router";

// ✅ Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Category name is required"),
});

function CreateCategory() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
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
    setLoading(true);

    const formData = {
      name: data.name,
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await dispatch(categoryCreate(formData));

      console.log(response, "response");

      if (response?.payload?.status) {
        router.push("/cms/categoryList/categoryList");
      }
    } catch (error) {
      console.error(error, "Category creation error");
    } finally {
      setLoading(false);
    }
  };

  return (
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

      {/* 🔹 Floating Circles */}
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

      {/* 🔹 Form Container */}
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
            backgroundColor: "white",
            position: "relative",
            p: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Create Category
          </Typography>
          <Typography variant="body1" mb={3}>
            Add a new category to your CMS.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Category Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              margin="normal"
            />

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
              {loading ? "Creating..." : "Create Category"}
            </Button>
          </form>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" color="textSecondary" textAlign="center">
            Manage all categories from the CMS dashboard.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default CreateCategory;
