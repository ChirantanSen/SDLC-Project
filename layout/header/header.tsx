// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faGear } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { handleLoggedout } from "@/redux/authSlice/authSlice";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const dispatch = useDispatch();
//   const { islogin } = useSelector((state: any) => state.Auth);
//   const pathname = usePathname();

//   const linkStyle: React.CSSProperties = {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "16px",
//     transition: "color 0.3s ease",
//   };

//   const activeLinkStyle: React.CSSProperties = {
//     ...linkStyle,
//     fontWeight: "bold",
//   };

//   const iconStyle: React.CSSProperties = {
//     color: "white",
//     transition: "color 0.3s ease",
//     cursor: "pointer",
//   };

//   const baseButton: React.CSSProperties = {
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "bold",
//     transition: "all 0.3s ease",
//   };

//   const logout = () => {
//     dispatch(handleLoggedout(""));
//     window.location.href = "/auth/login";
//   };

//   const navLinks = [
//     { name: "Home", href: "/cms/landingPage/landingPage" },
//     { name: "About", href: "/cms/AboutUs/aboutUs" },
//     { name: "Services", href: "/cms/ourServices/ourServices" },
//     { name: "Contact", href: "/cms/contactus/contactus" },
//     { name: "Find Talent", href: "/cms/createCategory/createCategory" },
//     { name: "Find Work", href: "/cms/categoryList/categoryList" },
//   ];

//   return (
//     <header
//       style={{
//         backgroundColor: "#0D0B4C",
//         color: "white",
//         padding: "20px 60px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexWrap: "wrap",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ fontSize: "24px", fontWeight: "bold" }}>
//         <Link href="/" style={{ color: "white", textDecoration: "none" }}>
//           JobJolt
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       {islogin && (
//         <nav style={{ margin: "10px 0" }}>
//           <ul
//             style={{
//               display: "flex",
//               gap: "30px",
//               listStyle: "none",
//               margin: 0,
//               padding: 0,
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             {navLinks.map((item) => (
//               <li key={item.name} style={{ textAlign: "center" }}>
//                 <Link
//                   href={item.href}
//                   style={pathname === item.href ? activeLinkStyle : linkStyle}
//                 >
//                   {item.name}
//                 </Link>

//                 {pathname === item.href && (
//                   <span
//                     style={{
//                       display: "block",
//                       width: "6px",
//                       height: "6px",
//                       backgroundColor: "white",
//                       borderRadius: "50%",
//                       margin: "6px auto 0",
//                     }}
//                   />
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}

//       {/* Icons and Buttons */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "15px",
//         }}
//       >
//         <a href="mailto:info@jobjolt.com" style={iconStyle}>
//           <FontAwesomeIcon icon={faEnvelope} size="lg" />
//         </a>

//         <a href="#" style={iconStyle}>
//           <FontAwesomeIcon icon={faInstagram} size="lg" />
//         </a>

//         <a href="#" style={iconStyle}>
//           <FontAwesomeIcon icon={faFacebook} size="lg" />
//         </a>

//         {islogin ? (
//           <button
//             style={{
//               ...baseButton,
//               background: "white",
//               color: "#0D0B4C",
//             }}
//             onClick={logout}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "#ff6600";
//               e.currentTarget.style.color = "white";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "white";
//               e.currentTarget.style.color = "#0D0B4C";
//             }}
//           >
//             Logout
//           </button>
//         ) : (
//           <>
//             <Link href="/auth/login">
//               <button
//                 style={{ ...baseButton, border: "1px solid white", background: "transparent", color: "white" }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#ff6600";
//                   e.currentTarget.style.color = "#0D0B4C";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "transparent";
//                   e.currentTarget.style.color = "white";
//                 }}
//               >
//                 Sign In
//               </button>
//             </Link>

//             <Link href="/auth/register">
//               <button
//                 style={{
//                   ...baseButton,
//                   background: "#ff6600",
//                   color: "#ffffff",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "white";
//                   e.currentTarget.style.color = "#0D0B4C";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "#ff6600";
//                   e.currentTarget.style.color = "#ffffff";
//                 }}
//               >
//                 Sign Up
//               </button>
//             </Link>
//           </>
//         )}

//         <Link href="/auth/updatePassword/updatePassword" style={iconStyle}>
//           <FontAwesomeIcon
//             icon={faGear}
//             size="lg"
//             onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6600")}
//             onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
//           />
//         </Link>
//       </div>
//     </header>
//   );
// }

//...............................Main...PART 2.......................//

// import React, { useState, useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { handleLoggedout } from "@/redux/authSlice/authSlice";
// import { usePathname } from "next/navigation";
// import { RootState } from "@/redux/store/store"; // ✅ your RootState

// export default function Header() {
//   const dispatch = useDispatch();
//   const islogin = useSelector((state: RootState) => state.Auth.islogin); // ✅ capital A
//   const pathname = usePathname();

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const logout = () => {
//     dispatch(handleLoggedout(""));
//     window.location.href = "/auth/login";
//   };

//   const linkStyle: React.CSSProperties = {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "16px",
//     transition: "color 0.3s ease",
//   };

//   const activeLinkStyle: React.CSSProperties = {
//     ...linkStyle,
//     fontWeight: "bold",
//   };

//   const iconStyle: React.CSSProperties = {
//     color: "white",
//     transition: "color 0.3s ease",
//     cursor: "pointer",
//   };

//   const baseButton: React.CSSProperties = {
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "bold",
//     transition: "all 0.3s ease",
//   };

//   const navLinks = [
//     { name: "Home", href: "/cms/landingPage/landingPage" },
//     { name: "About", href: "/cms/AboutUs/aboutUs" },
//     { name: "Services", href: "/cms/ourServices/ourServices" },
//     { name: "Contact", href: "/cms/contactus/contactus" },
//     { name: "Find Talent", href: "/cms/createCategory/createCategory" },
//     { name: "Find Work", href: "/cms/categoryList/categoryList" },
//   ];

//   return (
//     <header
//       style={{
//         backgroundColor: "#0D0B4C",
//         color: "white",
//         padding: "20px 60px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexWrap: "wrap",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ fontSize: "24px", fontWeight: "bold" }}>
//         <Link href="/" style={{ color: "white", textDecoration: "none" }}>
//           JobJolt
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       {islogin && (
//         <nav style={{ margin: "10px 0" }}>
//           <ul
//             style={{
//               display: "flex",
//               gap: "30px",
//               listStyle: "none",
//               margin: 0,
//               padding: 0,
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             {navLinks.map((item) => (
//               <li key={item.name} style={{ textAlign: "center" }}>
//                 <Link
//                   href={item.href}
//                   style={pathname === item.href ? activeLinkStyle : linkStyle}
//                 >
//                   {item.name}
//                 </Link>

//                 {pathname === item.href && (
//                   <span
//                     style={{
//                       display: "block",
//                       width: "6px",
//                       height: "6px",
//                       backgroundColor: "white",
//                       borderRadius: "50%",
//                       margin: "6px auto 0",
//                     }}
//                   />
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}

//       {/* Icons + Profile Dropdown */}
//       <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
//         <a href="mailto:info@jobjolt.com" style={iconStyle}>
//           <FontAwesomeIcon icon={faEnvelope} size="lg" />
//         </a>

//         <a href="#" style={iconStyle}>
//           <FontAwesomeIcon icon={faInstagram} size="lg" />
//         </a>

//         <a href="#" style={iconStyle}>
//           <FontAwesomeIcon icon={faFacebook} size="lg" />
//         </a>

//         {islogin ? (
//           <div ref={dropdownRef} style={{ position: "relative" }}>
//             <div
//               onClick={() => setDropdownOpen((prev) => !prev)}
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 backgroundColor: "white",
//                 cursor: "pointer",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Replace with actual profile image */}
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Profile"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </div>

//             {dropdownOpen && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "50px",
//                   right: 0,
//                   backgroundColor: "white",
//                   color: "#0D0B4C",
//                   borderRadius: "6px",
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                   minWidth: "180px",
//                   zIndex: 100,
//                   overflow: "hidden",
//                 }}
//               >
//                 <button
//                   onClick={logout}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                     width: "100%",
//                     padding: "10px",
//                     background: "transparent",
//                     border: "none",
//                     textAlign: "left",
//                     cursor: "pointer",
//                     color: "#0D0B4C",
//                     fontSize: "14px",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "#ff6600";
//                     e.currentTarget.style.color = "white";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "transparent";
//                     e.currentTarget.style.color = "#0D0B4C";
//                   }}
//                 >
//                   <FontAwesomeIcon icon={faRightFromBracket} /> Logout
//                 </button>

//                 <Link href="/auth/updatePassword/updatePassword">
//                   <button
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                       width: "100%",
//                       padding: "10px",
//                       background: "transparent",
//                       border: "none",
//                       textAlign: "left",
//                       cursor: "pointer",
//                       color: "#0D0B4C",
//                       fontSize: "14px",
//                       transition: "all 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = "#ff6600";
//                       e.currentTarget.style.color = "white";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = "transparent";
//                       e.currentTarget.style.color = "#0D0B4C";
//                     }}
//                   >
//                     <FontAwesomeIcon icon={faGear} /> Update Password
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             <Link href="/auth/login">
//               <button
//                 style={{
//                   ...baseButton,
//                   border: "1px solid white",
//                   background: "transparent",
//                   color: "white",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#ff6600";
//                   e.currentTarget.style.color = "#0D0B4C";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "transparent";
//                   e.currentTarget.style.color = "white";
//                 }}
//               >
//                 Sign In
//               </button>
//             </Link>

//             <Link href="/auth/register">
//               <button
//                 style={{
//                   ...baseButton,
//                   background: "#ff6600",
//                   color: "#ffffff",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "white";
//                   e.currentTarget.style.color = "#0D0B4C";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "#ff6600";
//                   e.currentTarget.style.color = "#ffffff";
//                 }}
//               >
//                 Sign Up
//               </button>
//             </Link>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }

//.................//

//...............................Main Part 3.........//
// import React, { useState, useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faGear, faRightFromBracket, faGlobe } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { handleLoggedout } from "@/redux/authSlice/authSlice";
// import { usePathname } from "next/navigation";
// import { RootState } from "@/redux/store/store";
// import { useTranslation } from "next-i18next";
// import { useRouter } from "next/router";

// export default function Header() {
//   const dispatch = useDispatch();
//   const islogin = useSelector((state: RootState) => state.Auth.islogin);
//   const pathname = usePathname();
//   const { t } = useTranslation("common");
//   const router = useRouter();

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [langOpen, setLangOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setDropdownOpen(false);
//         setLangOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const logout = () => {
//     dispatch(handleLoggedout(""));
//     window.location.href = "/auth/login";
//   };

//   const changeLanguage = (lng: string) => {
//     router.push(router.pathname, router.asPath, { locale: lng });
//     setLangOpen(false);
//   };

//   const linkStyle: React.CSSProperties = {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "16px",
//     transition: "color 0.3s ease",
//   };

//   const activeLinkStyle: React.CSSProperties = {
//     ...linkStyle,
//     fontWeight: "bold",
//   };

//   const iconStyle: React.CSSProperties = {
//     color: "white",
//     transition: "color 0.3s ease",
//     cursor: "pointer",
//   };

//   const baseButton: React.CSSProperties = {
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "bold",
//     transition: "all 0.3s ease",
//   };

//   const navLinks = [
//     { name: t("Home"), href: "/cms/landingPage/landingPage" },
//     { name: t("About"), href: "/cms/AboutUs/aboutUs" },
//     { name: t("Services"), href: "/cms/ourServices/ourServices" },
//     { name: t("Contact"), href: "/cms/contactus/contactus" },
//     { name: t("FindTalent"), href: "/cms/createCategory/createCategory" },
//     { name: t("FindWork"), href: "/cms/categoryList/categoryList" },
//   ];

//   const languages = [
//     { code: "en", label: "English" },
//     { code: "es", label: "Español" },
//     { code: "fr", label: "Français" },
//     { code: "de", label: "Deutsch" },
//   ];

//   return (
//     <header
//       style={{
//         backgroundColor: "#0D0B4C",
//         color: "white",
//         padding: "20px 60px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexWrap: "wrap",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ fontSize: "24px", fontWeight: "bold" }}>
//         <Link href="/" style={{ color: "white", textDecoration: "none" }}>
//           JobJolt
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       {islogin && (
//         <nav style={{ margin: "10px 0" }}>
//           <ul
//             style={{
//               display: "flex",
//               gap: "30px",
//               listStyle: "none",
//               margin: 0,
//               padding: 0,
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             {navLinks.map((item) => (
//               <li key={item.name} style={{ textAlign: "center" }}>
//                 <Link
//                   href={item.href}
//                   style={pathname === item.href ? activeLinkStyle : linkStyle}
//                 >
//                   {item.name}
//                 </Link>

//                 {pathname === item.href && (
//                   <span
//                     style={{
//                       display: "block",
//                       width: "6px",
//                       height: "6px",
//                       backgroundColor: "white",
//                       borderRadius: "50%",
//                       margin: "6px auto 0",
//                     }}
//                   />
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}

//       {/* Icons + Profile Dropdown */}
//       <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
//         <a href="mailto:info@jobjolt.com" style={iconStyle}>
//           <FontAwesomeIcon icon={faEnvelope} size="lg" />
//         </a>

//         <a href="#" style={iconStyle}>
//           <FontAwesomeIcon icon={faInstagram} size="lg" />
//         </a>

//         <a href="#" style={iconStyle}>
//           <FontAwesomeIcon icon={faFacebook} size="lg" />
//         </a>

//         {islogin ? (
//           <div ref={dropdownRef} style={{ position: "relative" }}>
//             <div
//               onClick={() => setDropdownOpen((prev) => !prev)}
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 backgroundColor: "white",
//                 cursor: "pointer",
//                 overflow: "hidden",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Profile"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//               <FontAwesomeIcon
//                 icon={faGlobe}
//                 style={{
//                   position: "absolute",
//                   right: "-5px",
//                   bottom: "-5px",
//                   color: "#0D0B4C",
//                   background: "white",
//                   borderRadius: "50%",
//                   padding: "2px",
//                   fontSize: "12px",
//                 }}
//               />
//             </div>

//             {dropdownOpen && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "50px",
//                   right: 0,
//                   backgroundColor: "white",
//                   color: "#0D0B4C",
//                   borderRadius: "6px",
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                   minWidth: "180px",
//                   zIndex: 100,
//                   overflow: "hidden",
//                 }}
//               >
//                 <button
//                   onClick={logout}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                     width: "100%",
//                     padding: "10px",
//                     background: "transparent",
//                     border: "none",
//                     textAlign: "left",
//                     cursor: "pointer",
//                     color: "#0D0B4C",
//                     fontSize: "14px",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "#ff6600";
//                     e.currentTarget.style.color = "white";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "transparent";
//                     e.currentTarget.style.color = "#0D0B4C";
//                   }}
//                 >
//                   <FontAwesomeIcon icon={faRightFromBracket} /> {t("logout")}
//                 </button>

//                 <Link href="/auth/updatePassword/updatePassword">
//                   <button
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                       width: "100%",
//                       padding: "10px",
//                       background: "transparent",
//                       border: "none",
//                       textAlign: "left",
//                       cursor: "pointer",
//                       color: "#0D0B4C",
//                       fontSize: "14px",
//                       transition: "all 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = "#ff6600";
//                       e.currentTarget.style.color = "white";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = "transparent";
//                       e.currentTarget.style.color = "#0D0B4C";
//                     }}
//                   >
//                     <FontAwesomeIcon icon={faGear} /> {t("updatePassword")}
//                   </button>
//                 </Link>

//                 {/* Language Switcher */}
//                 <div style={{ borderTop: "1px solid #ccc" }}>
//                   {languages.map((lang) => (
//                     <button
//                       key={lang.code}
//                       onClick={() => changeLanguage(lang.code)}
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         width: "100%",
//                         padding: "8px 10px",
//                         background: "transparent",
//                         border: "none",
//                         cursor: "pointer",
//                         fontSize: "14px",
//                         color: "#0D0B4C",
//                         justifyContent: "space-between",
//                         transition: "all 0.2s ease",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.background = "#ff6600";
//                         e.currentTarget.style.color = "white";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.background = "transparent";
//                         e.currentTarget.style.color = "#0D0B4C";
//                       }}
//                     >
//                       {lang.label} {router.locale === lang.code && "✓"}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             <Link href="/auth/login">
//               <button
//                 style={{
//                   ...baseButton,
//                   border: "1px solid white",
//                   background: "transparent",
//                   color: "white",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#ff6600";
//                   e.currentTarget.style.color = "#0D0B4C";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "transparent";
//                   e.currentTarget.style.color = "white";
//                 }}
//               >
//                 {t("signIn")}
//               </button>
//             </Link>

//             <Link href="/auth/register">
//               <button
//                 style={{
//                   ...baseButton,
//                   background: "#ff6600",
//                   color: "#ffffff",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "white";
//                   e.currentTarget.style.color = "#0D0B4C";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "#ff6600";
//                   e.currentTarget.style.color = "#ffffff";
//                 }}
//               >
//                 {t("signUp")}
//               </button>
//             </Link>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }

//..................................//


"use client";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGear, faRightFromBracket, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleLoggedout } from "@/redux/authSlice/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { RootState } from "@/redux/store/store";
import { useTranslation } from "next-i18next";
import Image from "next/image";


export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, i18n } = useTranslation("common"); // ✅ useTranslation
  const islogin = useSelector((state: RootState) => state.Auth.islogin);
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = () => {
    dispatch(handleLoggedout(""));
    router.push("/auth/login");
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false); // close dropdown
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  };

  const activeLinkStyle: React.CSSProperties = {
    ...linkStyle,
    fontWeight: "bold",
  };

  const iconStyle: React.CSSProperties = {
    color: "white",
    transition: "color 0.3s ease",
    cursor: "pointer",
  };

  const baseButton: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  const navLinks = [
    { name: t("Home"), href: "/cms/landingPage/landingPage" },
    { name: t("About"), href: "/cms/AboutUs/aboutUs" },
    { name: t("Services"), href: "/cms/ourServices/ourServices" },
    { name: t("Contact"), href: "/cms/contactus/contactus" },
    { name: t("FindTalent"), href: "/cms/createCategory/createCategory" },
    { name: t("FindWork"), href: "/cms/categoryList/categoryList" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
  ];

  return (
    <header
      style={{
        backgroundColor: "#0D0B4C",
        color: "white",
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      {/* <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          JobJolt
        </Link>
      </div> */}

      <div style={{ fontSize: "24px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
  <Link href="/" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
    <Image
      src="/logoImage/favicon.png"
      alt="TaskOrbit Logo"
      width={28}
      height={28}
      style={{ marginRight: "8px" }}
    />
    TaskOrbit
  </Link>
</div>

      {/* Navigation Links */}
      {islogin && (
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
            {navLinks.map((item) => (
              <li key={item.name} style={{ textAlign: "center" }}>
                <Link
                  href={item.href}
                  style={pathname === item.href ? activeLinkStyle : linkStyle}
                >
                  {item.name}
                </Link>

                {pathname === item.href && (
                  <span
                    style={{
                      display: "block",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      margin: "6px auto 0",
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Icons + Profile Dropdown */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <a href="mailto:info@jobjolt.com" style={iconStyle}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>

        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>

        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>

        {islogin ? (
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <div
              onClick={() => setDropdownOpen((prev) => !prev)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <FontAwesomeIcon icon={faChevronDown} style={{ color: "white" }} />
            </div>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: 0,
                  backgroundColor: "white",
                  color: "#0D0B4C",
                  borderRadius: "6px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  minWidth: "200px",
                  zIndex: 100,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={logout}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                    padding: "10px",
                    background: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#0D0B4C",
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ff6600";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#0D0B4C";
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} /> {t("logout")}
                </button>

                <Link href="/auth/updatePassword/updatePassword">
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "10px",
                      background: "transparent",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      color: "#0D0B4C",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#ff6600";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#0D0B4C";
                    }}
                  >
                    <FontAwesomeIcon icon={faGear} /> {t("updatePassword")}
                  </button>
                </Link>

                <div style={{ borderTop: "1px solid #ddd" }}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        padding: "10px",
                        background: i18n.language === lang.code ? "#ff6600" : "transparent",
                        color: i18n.language === lang.code ? "white" : "#0D0B4C",
                        border: "none",
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "14px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#ff6600";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          i18n.language === lang.code ? "#ff6600" : "transparent";
                        e.currentTarget.style.color =
                          i18n.language === lang.code ? "white" : "#0D0B4C";
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/auth/login">
              <button
                style={{
                  ...baseButton,
                  border: "1px solid white",
                  background: "transparent",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff6600";
                  e.currentTarget.style.color = "#0D0B4C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "white";
                }}
              >
                {t("signIn")}
              </button>
            </Link>

            <Link href="/auth/register">
              <button
                style={{
                  ...baseButton,
                  background: "#ff6600",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = "#0D0B4C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ff6600";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                {t("signUp")}
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

