// import React, { useState } from "react";
// import { Card, CardContent, Typography, Box } from "@mui/material";
// import Slider from "react-slick"; // ✅ carousel
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import CreateIcon from "@mui/icons-material/Create";
// import GroupIcon from "@mui/icons-material/Group";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import CodeIcon from "@mui/icons-material/Code";
// import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import BrushIcon from "@mui/icons-material/Brush";
// import GavelIcon from "@mui/icons-material/Gavel";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import SmartToyIcon from "@mui/icons-material/SmartToy";
// import AnimationIcon from "@mui/icons-material/Movie";
// import StorageIcon from "@mui/icons-material/Storage";

// const services = [
//   { icon: <DesignServicesIcon fontSize="large" color="primary" />, label: "UI/UX Design" },
//   { icon: <CreateIcon fontSize="large" color="primary" />, label: "Writing" },
//   { icon: <GroupIcon fontSize="large" color="primary" />, label: "HR & Training" },
//   { icon: <AccountBalanceIcon fontSize="large" color="primary" />, label: "Finance" },
//   { icon: <CodeIcon fontSize="large" color="primary" />, label: "Development" },
//   { icon: <HeadsetMicIcon fontSize="large" color="primary" />, label: "Admin Support" },
//   { icon: <BrushIcon fontSize="large" color="primary" />, label: "Creative" },
//   { icon: <GavelIcon fontSize="large" color="primary" />, label: "Legal" },
//   { icon: <CampaignIcon fontSize="large" color="primary" />, label: "Marketing" },
//   { icon: <SmartToyIcon fontSize="large" color="primary" />, label: "AI Services" },
//   { icon: <AnimationIcon fontSize="large" color="primary" />, label: "Motion Graphics" },
//   { icon: <StorageIcon fontSize="large" color="primary" />, label: "Server Maintenance" },
// ];

// const ExpertCategories2: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 4, // ✅ Show 4 at a time
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1200, // tablets
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 768, // mobile
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 480, // small mobile
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <>
//       {/* Categories Section */}
//       <Box sx={{ textAlign: "center", py: 6, backgroundColor: "#fafafa", px: 4 }}>
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//           Find Experts For Every Need
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary" mb={4}>
//           Choose from a variety of services to meet your goals
//         </Typography>

//         {/* ✅ Carousel Instead of Grid */}
//         <Slider {...settings}>
//           {services.map((service, index) => (
//             <Box key={index} px={2}>
//               <Card
//                 elevation={3}
//                 sx={{
//                   borderRadius: "16px",
//                   textAlign: "center",
//                   py: 3,
//                   px: 1,
//                   width: "90%",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease-in-out",
//                   "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
                  
//                 }}
//               >
//                 <CardContent>
//                   <Box mb={1}>{service.icon}</Box>
//                   <Typography variant="subtitle1" fontWeight="500">
//                     {service.label}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Box>
//           ))}
//         </Slider>
//       </Box>
//     </>
//   );
// };

// export default ExpertCategories2;

//...................................//

// import React from "react";
// import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
// import Slider from "react-slick";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import CreateIcon from "@mui/icons-material/Create";
// import GroupIcon from "@mui/icons-material/Group";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import CodeIcon from "@mui/icons-material/Code";
// import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import BrushIcon from "@mui/icons-material/Brush";
// import GavelIcon from "@mui/icons-material/Gavel";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import SmartToyIcon from "@mui/icons-material/SmartToy";
// import AnimationIcon from "@mui/icons-material/Movie";
// import StorageIcon from "@mui/icons-material/Storage";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const services = [
//   { icon: <DesignServicesIcon fontSize="large" color="primary" />, label: "UI/UX Design" },
//   { icon: <CreateIcon fontSize="large" color="primary" />, label: "Writing" },
//   { icon: <GroupIcon fontSize="large" color="primary" />, label: "HR & Training" },
//   { icon: <AccountBalanceIcon fontSize="large" color="primary" />, label: "Finance" },
//   { icon: <CodeIcon fontSize="large" color="primary" />, label: "Development" },
//   { icon: <HeadsetMicIcon fontSize="large" color="primary" />, label: "Admin Support" },
//   { icon: <BrushIcon fontSize="large" color="primary" />, label: "Creative" },
//   { icon: <GavelIcon fontSize="large" color="primary" />, label: "Legal" },
//   { icon: <CampaignIcon fontSize="large" color="primary" />, label: "Marketing" },
//   { icon: <SmartToyIcon fontSize="large" color="primary" />, label: "AI Services" },
//   { icon: <AnimationIcon fontSize="large" color="primary" />, label: "Motion Graphics" },
//   { icon: <StorageIcon fontSize="large" color="primary" />, label: "Server Maintenance" },
// ];

// // ✅ Custom Arrows
// const NextArrow = ({ onClick }: any) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       position: "absolute",
//       top: "120%",
//       right: "40px",
//       transform: "translateY(-50%)",
//       zIndex: 2,
//       backgroundColor: "white",
//       boxShadow: 2,
//       "&:hover": { backgroundColor: "#f0f0f0" },
//     }}
//   >
//     <ArrowForwardIosIcon sx={{ color: "#0b0b6b" }} />
//   </IconButton>
// );

// const PrevArrow = ({ onClick }: any) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       position: "absolute",
//       top: "120%",
//       right: "100px",
//       transform: "translateY(-50%)",
//       zIndex: 2,
//       backgroundColor: "white",
//       boxShadow: 2,
//       "&:hover": { backgroundColor: "#f0f0f0" },
//     }}
//   >
//     <ArrowBackIosIcon sx={{ color: "#0b0b6b" }} />
//   </IconButton>
// );

// const ExpertCategories2: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     // appendDots: (dots: any) => (
//     //   <div style={{ marginTop: "20px" }}>
//     //     <ul style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
//     //       {dots}
//     //     </ul>
//     //   </div>
//     // ),
//     customPaging: () => (
//       <div
//         style={{
//           width: "14px",
//           height: "14px",
//           marginTop:"50px",
//           border: "2px solid #0b0b6b", // blue border
//           borderRadius: "50%",
//         }}
//       />
//     ),
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <Box sx={{ textAlign: "center", py: 6, backgroundColor: "#fafafa", px: 4, position: "relative" }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Find Experts For Every Need
//       </Typography>
//       <Typography variant="subtitle1" color="text.secondary" mb={4}>
//         Choose from a variety of services to meet your goals
//       </Typography>

//       <Slider {...settings}>
//         {services.map((service, index) => (
//           <Box key={index} px={2}>
//             <Card
//               elevation={3}
//               sx={{
//                 borderRadius: "16px",
//                 textAlign: "center",
//                 py: 3,
//                 px: 1,
//                 width: "90%",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease-in-out",
//                 "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
//               }}
//             >
//               <CardContent>
//                 <Box mb={1}>{service.icon}</Box>
//                 <Typography variant="subtitle1" fontWeight="500">
//                   {service.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default ExpertCategories2;

////....................................................//

import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import Slider from "react-slick";
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
import AnimationIcon from "@mui/icons-material/Movie";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ✅ Services List
const services = [
  { icon: <DesignServicesIcon fontSize="large" color="primary" />, label: "UI/UX Design" },
  { icon: <CreateIcon fontSize="large" color="primary" />, label: "Writing" },
  { icon: <GroupIcon fontSize="large" color="primary" />, label: "HR & Training" },
  { icon: <AccountBalanceIcon fontSize="large" color="primary" />, label: "Finance" },
  { icon: <CodeIcon fontSize="large" color="primary" />, label: "Development" },
  { icon: <HeadsetMicIcon fontSize="large" color="primary" />, label: "Admin Support" },
  { icon: <BrushIcon fontSize="large" color="primary" />, label: "Creative" },
  { icon: <GavelIcon fontSize="large" color="primary" />, label: "Legal" },
  { icon: <CampaignIcon fontSize="large" color="primary" />, label: "Marketing" },
  { icon: <SmartToyIcon fontSize="large" color="primary" />, label: "AI Services" },
  { icon: <AnimationIcon fontSize="large" color="primary" />, label: "Motion Graphics" },
  { icon: <StorageIcon fontSize="large" color="primary" />, label: "Server Maintenance" },
];

// ✅ Custom Arrows
const NextArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "130%",
      right: "40px",
      transform: "translateY(-50%)",
      zIndex: 2,
      backgroundColor: "white",
      boxShadow: 2,
      "&:hover": { backgroundColor: "#f0f0f0" },
    }}
  >
    <ArrowForwardIosIcon sx={{ color: "#0b0b6b" }} />
  </IconButton>
);

const PrevArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "130%",
      right: "100px",
      transform: "translateY(-50%)",
      zIndex: 2,
      backgroundColor: "white",
      boxShadow: 2,
      "&:hover": { backgroundColor: "#f0f0f0" },
    }}
  >
    <ArrowBackIosIcon sx={{ color: "#0b0b6b" }} />
  </IconButton>
);

const ExpertCategories2: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div
        style={{
          width: "14px",
          height: "14px",
          border: "2px solid #0b0b6b",
          borderRadius: "50%",
          marginTop:"50px"
        }}
      />
    ),
    appendDots: (dots: any) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "40px",
        }}
      >
        {dots}
      </ul>
    ),
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 18,
        backgroundColor: "#fafafa",
        px: 4,
        position: "relative",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Find Experts For Every Need
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={4}>
        Choose from a variety of services to meet your goals
      </Typography>

      <Slider {...settings}>
        {services.map((service, index) => (
          <Box key={index} px={2}>
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
          </Box>
        ))}
      </Slider>

      {/* ✅ Dot Styles */}
      <style>
        {`
          .slick-dots li div {
            background-color: transparent;
            transition: all 0.3s ease;
          }
          .slick-dots li.slick-active div {
            background-color: #0b0b6b;
            border-color: #0b0b6b;
          }
        `}
      </style>
    </Box>
  );
};

export default ExpertCategories2;
