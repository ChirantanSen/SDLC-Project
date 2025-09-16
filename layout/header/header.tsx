// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function Header() {
//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               //   onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               //   anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               //   open={Boolean(anchorElNav)}
//               //   onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page}>
//                   <Typography sx={{ textAlign: "center" }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 // onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               //   anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               //   open={Boolean(anchorElUser)}
//               //   onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting}>
//                   <Typography sx={{ textAlign: "center" }}>
//                     {setting}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Header;

//..........//

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  };

  const iconStyle: React.CSSProperties = {
    color: "white",
    transition: "color 0.3s ease",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  };

  return (
    <header
      style={{
        backgroundColor: "#0D0B4C",
        // background: "linear-gradient(245deg,#8c605a 20%, #382520ff 100%)",

        color: "white",
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          JobJolt
        </a>
      </div>

      {/* Navigation */}
      <nav style={{ margin: "10px 0" }}>
        <ul
          style={{
            display: "flex",
            gap: "30px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            "Home",
            "About",
            "Services",
            "Contact",
            "Find Talent",
            "Find Work",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFDD00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social + Auth Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Email */}
        <a href="mailto:info@jobjolt.com" style={iconStyle}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        {/* Instagram */}
        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        {/* Facebook */}
        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>

        {/* Sign In */}
        <button
          style={{
            ...buttonStyle,
            background: "transparent",
            border: "1px solid white",
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#FFDD00";
            e.currentTarget.style.color = "#0D0B4C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "white";
          }}
        >
          Sign In
        </button>

        {/* Sign Up */}
        <button
          style={{
            ...buttonStyle,
            background: "#ff6600",
            color: "#ffffffff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#FFDD00";
          }}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}