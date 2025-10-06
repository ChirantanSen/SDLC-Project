
//.......part 1......//

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// // MUI imports
// import {
//   Box,
//   CircularProgress,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";

// function CategoryList() {
//   const dispatch = useDispatch();
//   const { categoryListData, loading, error } = useSelector((state) => state.Cms);

//   useEffect(() => {
//     dispatch(categoryList());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" align="center" mt={3}>
//         {error}
//       </Typography>
//     );
//   }

//   return (
//     <Box p={3}>
//       <Typography variant="h5" gutterBottom>
//         Category List
//       </Typography>

//       <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Name</strong></TableCell>
//               <TableCell><strong>Slug</strong></TableCell>
//               <TableCell><strong>Created At</strong></TableCell>
//               <TableCell><strong>Updated At</strong></TableCell>
//               <TableCell><strong>Deleted?</strong></TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {categoryListData?.map((cat) => (
//               <TableRow key={cat._id}>
//                 <TableCell>{cat.name}</TableCell>
//                 <TableCell>{cat.slug}</TableCell>
//                 <TableCell>
//                   {new Date(cat.createdAt).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell>
//                   {new Date(cat.updatedAt).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell>{cat.isDeleted ? "Yes" : "No"}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

// export default CategoryList;

//.....................................//



//...............Part 2.......//

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// // MUI imports
// import { Box, CircularProgress, Typography } from "@mui/material";

// function CategoryList() {
//   const dispatch = useDispatch();
//   const { categoryListData, loading, error } = useSelector(
//     (state) => state.Cms
//   );

//   useEffect(() => {
//     dispatch(categoryList());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" align="center" mt={3}>
//         {error}
//       </Typography>
//     );
//   }

//   // styles as inline JS objects
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     width: "100%",
//     margin: "0 auto",
//     gap: "20px",
//   };

//   const colStyle = {
//     flex: "0 0 calc(25% - 20px)", // 4 per row
//     maxWidth: "calc(25% - 20px)",
//     boxSizing: "border-box",
//   };

//   const cardStyle = {
//     background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
//     borderRadius: "12px",
//     padding: "20px",
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#2c3e50",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   };

//   const cardHover = {
//     transform: "scale(1.05)",
//     boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
//   };

//   return (
//     <Box p={3}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//       >
//         Category List
//       </Typography>

//       <div style={containerStyle}>
//         {categoryListData?.map((cat) => (
//           <div style={colStyle} key={cat._id}>
//             <div
//               style={cardStyle}
//               onMouseEnter={(e) => {
//                 Object.assign(e.currentTarget.style, cardHover);
//               }}
//               onMouseLeave={(e) => {
//                 Object.assign(e.currentTarget.style, cardStyle);
//               }}
//             >
//               <h3 style={{ margin: 0, fontSize: "18px", textTransform: "capitalize" }}>
//                 {cat.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Box>
//   );
// }

// export default CategoryList;

//...............................part 3.............//

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// // MUI imports
// import { Box, CircularProgress, Typography } from "@mui/material";

// function CategoryList() {
//   const dispatch = useDispatch();
//   const { categoryListData, loading, error } = useSelector(
//     (state) => state.Cms
//   );

//   useEffect(() => {
//     dispatch(categoryList());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" align="center" mt={3}>
//         {error}
//       </Typography>
//     );
//   }

//   // styles inline
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     width: "100%",
//     margin: "0 auto",
//     gap: "20px",
//   };

//   const colStyle = {
//     flex: "0 0 calc(33.33% - 20px)", // 3 per row
//     maxWidth: "calc(33.33% - 20px)",
//     boxSizing: "border-box",
//   };

//   const cardStyle = {
//     background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
//     borderRadius: "12px",
//     padding: "20px",
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#2c3e50",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   };

//   const cardHover = {
//     transform: "scale(1.05)",
//     boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
//   };

//   return (
//     <Box p={3}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//       >
//         Category List
//       </Typography>

//       <div style={containerStyle}>
//         {categoryListData?.map((cat) => (
//           <div style={colStyle} key={cat._id}>
//             <div
//               style={cardStyle}
//               onMouseEnter={(e) => {
//                 Object.assign(e.currentTarget.style, cardHover);
//               }}
//               onMouseLeave={(e) => {
//                 Object.assign(e.currentTarget.style, cardStyle);
//               }}
//             >
//               <h3
//                 style={{
//                   margin: 0,
//                   fontSize: "18px",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {cat.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Box>
//   );
// }

// export default CategoryList;

//................................................part 4................//

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// // MUI imports
// import { Box, CircularProgress, Typography } from "@mui/material";

// function CategoryList() {
//   const dispatch = useDispatch();
//   const { categoryListData, loading, error } = useSelector(
//     (state) => state.Cms
//   );

//   useEffect(() => {
//     dispatch(categoryList());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" align="center" mt={3}>
//         {error}
//       </Typography>
//     );
//   }

//   // styles inline
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     width: "100%",
//     margin: "0 auto",
//     columnGap: "40px", // increased column gap
//     rowGap: "40px", // increased row gap
//   };

//   const colStyle = {
//     flex: "0 0 calc(33.33% - 40px)", // 3 per row with gap adjustment
//     maxWidth: "calc(33.33% - 40px)",
//     boxSizing: "border-box",
//   };

//   const cardStyle = {
//     background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
//     borderRadius: "12px",
//     padding: "30px 20px",
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#2c3e50",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   };

//   const cardHover = {
//     transform: "scale(1.05)",
//     boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
//   };

//   return (
//     <Box p={3}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//       >
//         Category List
//       </Typography>

//       <div style={containerStyle}>
//         {categoryListData?.map((cat, index) => (
//           <div style={colStyle} key={cat._id}>
//             <div
//               style={cardStyle}
//               onMouseEnter={(e) => {
//                 Object.assign(e.currentTarget.style, cardHover);
//               }}
//               onMouseLeave={(e) => {
//                 Object.assign(e.currentTarget.style, cardStyle);
//               }}
//             >
//               <h2
//                 style={{
//                   margin: "0 0 10px",
//                   fontSize: "24px",
//                   color: "#2980b9",
//                 }}
//               >
//                 {index + 1}
//               </h2>
//               <h3
//                 style={{
//                   margin: 0,
//                   fontSize: "18px",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {cat.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Box>
//   );
// }

// export default CategoryList;

//.....................................Part 5.....//

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// // MUI imports
// import { Box, CircularProgress, Typography } from "@mui/material";

// function CategoryList() {
//   const dispatch = useDispatch();
//   const { categoryListData, loading, error } = useSelector(
//     (state) => state.Cms
//   );

//   useEffect(() => {
//     dispatch(categoryList());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" align="center" mt={3}>
//         {error}
//       </Typography>
//     );
//   }

//   // styles inline
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     width: "100%",
//     margin: "0 auto",
//     columnGap: "40px",
//     rowGap: "40px",
//   };

//   const colStyle = {
//     flex: "0 0 calc(33.33% - 40px)", // 3 per row
//     maxWidth: "calc(33.33% - 40px)",
//     boxSizing: "border-box",
//   };

//   const cardStyle = {
//     background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
//     borderRadius: "12px",
//     padding: "20px",
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     fontWeight: "bold",
//     color: "#2c3e50",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   };

//   const cardHover = {
//     transform: "scale(1.05)",
//     boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
//   };

//   const numberStyle = {
//     fontSize: "20px",
//     fontWeight: "bold",
//     color: "#2980b9",
//     minWidth: "25px",
//     textAlign: "right",
//   };

//   const nameStyle = {
//     margin: 0,
//     fontSize: "18px",
//     textTransform: "capitalize",
//   };

//   return (
//     <Box p={3}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//       >
//         Category List
//       </Typography>

//       <div style={containerStyle}>
//         {categoryListData?.map((cat, index) => (
//           <div style={colStyle} key={cat._id}>
//             <div
//               style={cardStyle}
//               onMouseEnter={(e) => {
//                 Object.assign(e.currentTarget.style, cardHover);
//               }}
//               onMouseLeave={(e) => {
//                 Object.assign(e.currentTarget.style, cardStyle);
//               }}
//             >
//               <span style={numberStyle}>{index + 1}.</span>
//               <h3 style={nameStyle}>{cat.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Box>
//   );
// }

// export default CategoryList;


//................................part 6.........//

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// // MUI imports
// import { Box, CircularProgress, Typography } from "@mui/material";

// function CategoryList() {
//   const dispatch = useDispatch();
//   const { categoryListData, loading, error } = useSelector(
//     (state) => state.Cms
//   );

//   useEffect(() => {
//     dispatch(categoryList());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" align="center" mt={3}>
//         {error}
//       </Typography>
//     );
//   }

//   // Inline styles
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     width: "100%",
//     margin: "0 auto",
//     columnGap: "30px",
//     rowGap: "30px",
//     justifyContent: "center",
//   };

//   const colStyle = {
//     flex: "0 0 calc(33.33% - 30px)",
//     maxWidth: "calc(33.33% - 30px)",
//     boxSizing: "border-box",
//   };

//   const cardBase = {
//     display: "flex",
//     alignItems: "center",
//     padding: "20px",
//     borderRadius: "15px",
//     color: "#fff",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   };

//   const numberStyle = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     background: "rgba(255,255,255,0.3)",
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: "18px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: "15px",
//     flexShrink: 0,
//   };

//   const nameStyle = {
//     margin: 0,
//     fontSize: "20px",
//     letterSpacing: "0.5px",
//   };

//   // Gradient palette
//   const gradients = [
//     "linear-gradient(135deg, #6a11cb, #2575fc)",
//     "linear-gradient(135deg, #ff512f, #dd2476)",
//     "linear-gradient(135deg, #11998e, #38ef7d)",
//     "linear-gradient(135deg, #f7971e, #ffd200)",
//     "linear-gradient(135deg, #fc466b, #3f5efb)",
//     "linear-gradient(135deg, #ee9ca7, #ffdde1)",
//   ];

//   return (
//     <Box p={3}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//       >
//         Category List
//       </Typography>

//       <div style={containerStyle}>
//         {categoryListData?.map((cat, index) => {
//           const gradient =
//             gradients[index % gradients.length]; // cycle through gradients
//           return (
//             <div style={colStyle} key={cat._id}>
//               <div
//                 style={{ ...cardBase, background: gradient }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 20px rgba(0, 150, 255, 0.4)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "scale(1)";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 10px rgba(0,0,0,0.1)";
//                 }}
//               >
//                 <span style={numberStyle}>{index + 1}</span>
//                 <h3 style={nameStyle}>{cat.name}</h3>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Box>
//   );
// }

// export default CategoryList;

//.............................................Part 7 main.....................................//

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// // MUI imports
// import { Box, CircularProgress, Typography } from "@mui/material";

// function CategoryList() {
//   const dispatch = useDispatch();
//   const { categoryListData, loading, error } = useSelector(
//     (state) => state.Cms
//   );

//   useEffect(() => {
//     dispatch(categoryList());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" align="center" mt={3}>
//         {error}
//       </Typography>
//     );
//   }

//   // Inline styles
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     width: "100%",
//     margin: "0 auto",
//     columnGap: "30px",
//     rowGap: "30px",
//     justifyContent: "center",
//   };

//   const colStyle = {
//     flex: "0 0 calc(33.33% - 30px)",
//     maxWidth: "calc(33.33% - 30px)",
//     boxSizing: "border-box",
//   };

//   const cardBase = {
//     display: "flex",
//     alignItems: "center",
//     padding: "20px",
//     borderRadius: "15px",
//     background: "linear-gradient(to right, #e8e6f7, #fff)",
//     color: "#2c3e50",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   };

//   const numberStyle = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     // background: "#6a11cb",
//     // color: "#fff",
//     border:"#0b0b4c 2px solid",
//     fontWeight: "bold",
//     fontSize: "18px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: "15px",
//     flexShrink: 0,
//   };

//   const nameStyle = {
//     margin: 0,
//     fontSize: "20px",
//     letterSpacing: "0.5px",
//     textTransform: "capitalize",
//   };

//   return (
//     <Box p={3}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//       >
//         Category List
//       </Typography>

//       <div style={containerStyle}>
//         {categoryListData?.map((cat, index) => (
//           <div style={colStyle} key={cat._id}>
//             <div
//               style={cardBase}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
//                 e.currentTarget.style.boxShadow =
//                   "0 8px 20px rgba(0, 0, 0, 0.2)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 10px rgba(0,0,0,0.1)";
//               }}
//             >
//               <span style={numberStyle}>{index + 1}</span>
//               <h3 style={nameStyle}>{cat.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Box>
//   );
// }

// export default CategoryList;


//............................... part 8 main build1..................//

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// MUI imports
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function CategoryList() {
  const dispatch = useDispatch();
  const { categoryListData, loading, error } = useSelector(
    (state) => state.Cms
  );

  useEffect(() => {
    dispatch(categoryList());
  }, [dispatch]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" mt={3}>
        {error}
      </Typography>
    );
  }

  return (
    <Box p={3}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
      >
        Category List
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
      >
        {categoryListData?.map((cat, index) => (
          <Card
            key={cat._id}
            sx={{
              width: "350px",
              borderRadius: "12px",
              border: "1px solid #ccc",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <CardContent>
              {/* Top tags */}
              <Box display="flex" gap={1} mb={1}>
                <Typography
                  variant="caption"
                  sx={{
                    background: "#e0e7ff",
                    color: "#1e3a8a",
                    px: 1,
                    py: 0.3,
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Web Development
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    background: "#ffedd5",
                    color: "#c2410c",
                    px: 1,
                    py: 0.3,
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Intermediate
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1e1e4c", mb: 1 }}
              >
                {cat.name}
              </Typography>

              {/* Author Info */}
              <Box display="flex" alignItems="center" mb={1}>
                <Avatar
                  src="/profile.png"
                  sx={{ width: 32, height: 32, mr: 1 }}
                />
                <Typography variant="body2" fontWeight="bold">
                  John Smith
                </Typography>
              </Box>

              {/* Meta Info */}
              <Box display="flex" gap={2} mb={1} alignItems="center">
                <Box display="flex" alignItems="center" gap={0.5}>
                  <WorkOutlineIcon fontSize="small" />
                  <Typography variant="body2">Full-Time</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="body2">Posted 5 days ago</Typography>
                </Box>
              </Box>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" mb={2}>
                {cat.description
                  ? cat.description
                  : "Short description not available."}
              </Typography>

              {/* Price + Button */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" fontWeight="bold" color="#1e1e4c">
                  ₹1,000 <Typography component="span">/ Hour</Typography>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0b0b4c",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#1e1e6c" },
                  }}
                >
                  Bidding
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;

//..................part 9 main build 2......................//

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { categoryList } from "../../../redux/cmsSlice/cmsSlice";

// // MUI imports
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
// } from "@mui/material";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";

// function CategoryList() {
//   const dispatch = useDispatch();
//   const { categoryListData, loading, error } = useSelector(
//     (state) => state.Cms
//   );

//   useEffect(() => {
//     dispatch(categoryList());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <Typography>Loading...</Typography>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" align="center" mt={3}>
//         {error}
//       </Typography>
//     );
//   }

//   // Function to format deadline date
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <Box p={3}>
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
//       >
//         Project List
//       </Typography>

//       <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
//         {categoryListData?.map((project) => (
//           <Card
//             key={project._id}
//             sx={{
//               width: "350px",
//               borderRadius: "12px",
//               border: "1px solid #ccc",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//               transition: "0.3s",
//               "&:hover": {
//                 boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//                 transform: "translateY(-5px)",
//               },
//             }}
//           >
//             <CardContent>
//               {/* Top tags */}
//               <Box display="flex" gap={1} mb={1}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     background: "#e0e7ff",
//                     color: "#1e3a8a",
//                     px: 1,
//                     py: 0.3,
//                     borderRadius: "6px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {project.status || "Open"}
//                 </Typography>
//               </Box>

//               {/* Title */}
//               <Typography
//                 variant="h6"
//                 sx={{ fontWeight: "bold", color: "#1e1e4c", mb: 1 }}
//               >
//                 {project.title}
//               </Typography>

//               {/* Meta Info */}
//               <Box display="flex" gap={2} mb={1} alignItems="center">
//                 <Box display="flex" alignItems="center" gap={0.5}>
//                   <WorkOutlineIcon fontSize="small" />
//                   <Typography variant="body2">Budget: ₹{project.budget}</Typography>
//                 </Box>
//                 <Box display="flex" alignItems="center" gap={0.5}>
//                   <AccessTimeIcon fontSize="small" />
//                   <Typography variant="body2">
//                     Deadline: {formatDate(project.deadline)}
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Description */}
//               <Typography variant="body2" color="text.secondary" mb={2}>
//                 {project.description
//                   ? project.description
//                   : "Short description not available."}
//               </Typography>

//               {/* Button */}
//               <Box display="flex" justifyContent="flex-end">
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#0b0b4c",
//                     textTransform: "none",
//                     fontWeight: "bold",
//                     "&:hover": { backgroundColor: "#1e1e6c" },
//                   }}
//                 >
//                   Bidding
//                 </Button>
//               </Box>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// export default CategoryList;

//..................................//




