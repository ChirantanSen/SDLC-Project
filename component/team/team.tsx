// "use client";
// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   IconButton,
// } from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
//   socials: {
//     linkedin?: string;
//     facebook?: string;
//     twitter?: string;
//     instagram?: string;
//   };
// }

// // Sample royalty-free images
// const team: TeamMember[] = [
//   {
//     name: "John Doe",
//     role: "Ceo & Co-Founder",
//     image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
//     socials: { linkedin: "#", facebook: "#", twitter: "#", instagram: "#" },
//   },
//   {
//     name: "George Eliot",
//     role: "Ads Expert",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     socials: { linkedin: "#", facebook: "#", twitter: "#" },
//   },
//   {
//     name: "Jane Doe",
//     role: "Marketing",
//     image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
//     socials: { linkedin: "#", facebook: "#", twitter: "#", instagram: "#" },
//   },
//   {
//     name: "Alice Smith",
//     role: "Seo Expert",
//     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
//     socials: { linkedin: "#", facebook: "#", twitter: "#" },
//   },
// ];

// const TeamSection = () => (
//   <Box sx={{ background: "#fafafa", py: 8 }}>
//     <Container>
//       <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 6 }}>
//         OUR TEAM
//       </Typography>

//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
//             Meet The Professional Team
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Our In-House Crew Is A Mix Of Tech Experts, Design Enthusiasts, Marketing Strategists, And
//             Customer Support Champions – All Dedicated To Making Your Experience Smooth, Secure, And
//             Rewarding. We're Here To Connect Opportunities With Skills And Ideas With Results.
//           </Typography>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Grid container spacing={2}>
//             {team.map((member, idx) => (
//               <Grid item xs={12} sm={6} key={idx}>
//                 <Card
//                   sx={{
//                     borderRadius: 3,
//                     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                     textAlign: "center",
//                     p: 2,
//                     position: "relative",
//                   }}
//                 >
//                   <Box sx={{ position: "relative" }}>
//                     <Avatar
//                       src={member.image}
//                       alt={member.name}
//                       sx={{
//                         width: "100%",
//                         height: 260,
//                         borderRadius: 2,
//                         mb: 2,
//                         objectFit: "cover",
//                       }}
//                       variant="rounded"
//                     />
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 12,
//                         left: 12,
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: 1,
//                       }}
//                     >
//                       {member.socials.linkedin && (
//                         <IconButton size="small" sx={{
//                           bgcolor: "#fff",
//                           "&:hover": { bgcolor: "#0b0b4c", color: "#fff" },
//                         }} href={member.socials.linkedin}>
//                           <LinkedInIcon fontSize="small" />
//                         </IconButton>
//                       )}
//                       {member.socials.facebook && (
//                         <IconButton size="small" sx={{
//                           bgcolor: "#fff",
//                           "&:hover": { bgcolor: "#0b0b4c", color: "#fff" },
//                         }} href={member.socials.facebook}>
//                           <FacebookIcon fontSize="small" />
//                         </IconButton>
//                       )}
//                       {member.socials.twitter && (
//                         <IconButton size="small" sx={{
//                           bgcolor: "#fff",
//                           "&:hover": { bgcolor: "#0b0b4c", color: "#fff" },
//                         }} href={member.socials.twitter}>
//                           <TwitterIcon fontSize="small" />
//                         </IconButton>
//                       )}
//                       {member.socials.instagram && (
//                         <IconButton size="small" sx={{
//                           bgcolor: "#fff",
//                           "&:hover": { bgcolor: "#0b0b4c", color: "#fff" },
//                         }} href={member.socials.instagram}>
//                           <InstagramIcon fontSize="small" />
//                         </IconButton>
//                       )}
//                     </Box>
//                   </Box>
//                   <CardContent>
//                     <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                       {member.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
//                       {member.role}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   </Box>
// );

// export default TeamSection;

//.....................................2 correct-1................................//
// import React from "react";

// const teamMembers = [
//   {
//     name: "John Doe",
//     role: "Ceo & Co-Founder",
//     img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
//     socials: { linkedin: "#", facebook: "#", twitter: "#", instagram: "#" },
//   },
//   {
//     name: "George Eliot",
//     role: "Ads Expert",
//     img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     socials: { linkedin: "#", facebook: "#", twitter: "#", instagram: "#" },
//   },
//   {
//     name: "Jane Doe",
//     role: "Marketing",
//     img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
//     socials: { linkedin: "#", facebook: "#", twitter: "#", instagram: "#" },
//   },
//   {
//     name: "Alice Smith",
//     role: "SEO Expert",
//     img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
//     socials: { linkedin: "#", facebook: "#", twitter: "#", instagram: "#" },
//   },
// ];

// const TeamSection = () => {
//   return (
//     <section
//       style={{
//         padding: "50px 20px",
//         background: "#fff",
//         fontFamily: "Poppins, sans-serif",
//         textAlign: "center",
//       }}
//     >
//       {/* Header */}
//       <div
//         style={{
//           background: "linear-gradient(to right, #e8e6f7, #fff)",
//           padding: "30px 0",
//           marginBottom: "40px",
//         }}
//       >
//         <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#0b0b4c", margin: 0 }}>
//           OUR TEAM
//         </h2>
//       </div>

//       {/* Intro */}
//       <div style={{ maxWidth: "800px", margin: "0 auto 50px" }}>
//         <h3 style={{ fontSize: "22px", fontWeight: "500", marginBottom: "15px" }}>
//           Meet The Professional Team
//         </h3>
//         <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
//           Our In-House Crew Is A Mix Of Tech Experts, Design Enthusiasts, Marketing
//           Strategists, And Customer Support Champions – All Dedicated To Making Your
//           Experience Smooth, Secure, And Rewarding. We're Here To Connect Opportunities
//           With Skills And Ideas With Results.
//         </p>
//       </div>

//       {/* Cards */}
//       <div
//         style={{
//           display: "flex",
//           gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
//           gap: "115px",
//           justifyItems: "center",
//           marginLeft:"30px"
//         }}
//       >
//         {teamMembers.map((member, idx) => (
//           <div
//             key={idx}
//             style={{
//               background: "#f7f7ff",
//               border: "2px solid #d3d2f0",
//               borderRadius: "20px",
//               overflow: "hidden",
//               width: "250px",
//               transition: "transform 0.3s ease",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
//           >
//             {/* Image */}
//             <div
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 height: "280px",
//                 overflow: "hidden",
//               }}
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   borderBottom: "2px solid #d3d2f0",
//                 }}
//               />

//               {/* Social Icons */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   left: "10px",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "8px",
//                 }}
//               >
//                 {Object.entries(member.socials).map(([platform, link]) => (
//                   <a
//                     key={platform}
//                     href={link}
//                     style={{
//                       width: "28px",
//                       height: "28px",
//                       background: "#fff",
//                       color: "#0b0b4c",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       borderRadius: "50%",
//                       fontSize: "14px",
//                       fontWeight: "bold",
//                       textDecoration: "none",
//                       boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                       transition: "0.3s",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = "#0b0b4c";
//                       e.currentTarget.style.color = "#fff";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = "#fff";
//                       e.currentTarget.style.color = "#0b0b4c";
//                     }}
//                   >
//                     {platform[0].toUpperCase()}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Info */}
//             <div style={{ padding: "15px" }}>
//               <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
//                 {member.name}
//               </h4>
//               <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}>
//                 {member.role}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

//...............................................//

import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Ceo & Co-Founder",
    img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "George Eliot",
    role: "Ads Expert",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Jane Doe",
    role: "Marketing",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Alice Smith",
    role: "Seo Expert",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const getIcon = (platform: string) => {
  switch (platform) {
    case "linkedin":
      return <FaLinkedinIn />;
    case "facebook":
      return <FaFacebookF />;
    case "twitter":
      return <FaTwitter />;
    case "instagram":
      return <FaInstagram />;
    default:
      return null;
  }
};

const TeamCards = () => {
  return (
    <>
      <div
        style={{
          padding: "50px 20px",
          background: "#fff",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        <div>
          <div
            style={{
              background: "linear-gradient(to right, #e8e6f7, #fff)",
              padding: "30px 0",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#0b0b4c",
                margin: 0,
              }}
            >
              OUR TEAM
            </h2>
          </div>

          {/* Intro */}
          <div style={{ maxWidth: "800px", margin: "0 auto 50px" }}>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "500",
                // marginBottom: "10px",
              }}
            >
              Meet The Professional Team
            </h3>
            <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.6" }}>
              Our In-House Crew Is A Mix Of Tech Experts, Design Enthusiasts,
              Marketing Strategists, And Customer Support Champions – All
              Dedicated To Making Your Experience Smooth, Secure, And Rewarding.
              We're Here To Connect Opportunities With Skills And Ideas With
              Results.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        //   padding: "20px 20px",
        paddingBottom:"25px",
        }}
      >
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            style={{
              background: "#f7f7ff",
              border: "3px solid #d3d2f0",
              borderRadius: "20px",
              width: "250px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              position: "relative",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Image Section */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "280px",
                overflow: "hidden",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Social Icons */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {Object.entries(member.socials).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "#0b0b4c",
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "#0b0b4c";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#0b0b4c";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    {getIcon(platform)}
                  </a>
                ))}
              </div>
            </div>

            {/* Name Box */}
            <div
              style={{
                background: "#e7e6ff",
                borderRadius: "15px",
                padding: "15px 10px",
                margin: "15px auto",
                width: "85%",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#0b0b4c",
                }}
              >
                {member.name}
              </h4>
              <p style={{ margin: "5px 0 0", fontSize: "14px", color: "#777" }}>
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamCards;
