// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faYoutube, faXTwitter, faLinkedin, faFacebook, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'

// <FontAwesomeIcon icon={faInstagram} size="lg" />

// // pages/_app.js

// export default function Footer() {
//   return (
//     <div>
//       <footer
//       style={{
//         backgroundColor: "#0D0B4C",
//         color: "white",
//         padding: "60px 80px",
//         width: "100%",
//       }}
//     >
//       {/* First Row: 4 equal columns */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//           gap: "40px",
//           marginBottom: "40px",
//           marginLeft:"120px"
//         }}
//       >
//         {/* For Clients */}
//         <div>
//           <h4 style={{ color: "#B0AFC6", marginBottom: "20px", fontSize: "16px" }}>
//             For Clients
//           </h4>
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             {[
//               "How to hire",
//               "Talent Marketplace",
//               "Project Catalog",
//               "Hire an agency",
//               "Enterprise",
//               "Any Hire",
//               "Contract-to-hire",
//               "Direct Contracts",
//               "Hire worldwide",
//             ].map((item) => (
//               <li key={item} style={{ marginBottom: "12px" }}>
//                 <a
//                   href="#"
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontSize: "14px",
//                   }}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* For Freelancers */}
//         <div>
//           <h4 style={{ color: "#B0AFC6", marginBottom: "20px", fontSize: "16px" }}>
//             For Freelancers
//           </h4>
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             {[
//               "How to find work",
//               "Direct Contracts",
//               "Find freelance jobs worldwide",
//               "Exclusive resources with Freelancer Plus",
//             ].map((item) => (
//               <li key={item} style={{ marginBottom: "12px" }}>
//                 <a
//                   href="#"
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontSize: "14px",
//                   }}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h4 style={{ color: "#B0AFC6", marginBottom: "20px", fontSize: "16px" }}>
//             Resources
//           </h4>
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             {[
//               "Help & support",
//               "Success stories",
//               "Reviews",
//               "Blog",
//               "Affiliate programme",
//               "Free Business Tools",
//             ].map((item) => (
//               <li key={item} style={{ marginBottom: "12px" }}>
//                 <a
//                   href="#"
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontSize: "14px",
//                   }}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h4 style={{ color: "#B0AFC6", marginBottom: "20px", fontSize: "16px" }}>
//             Company
//           </h4>
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             {[
//               "About us",
//               "Leadership",
//               "Investor relations",
//               "Careers",
//               "Our impact",
//               "Contact us",
//               "Partners",
//               "Trust, safety & security",
//               "Modern slavery statement",
//             ].map((item) => (
//               <li key={item} style={{ marginBottom: "12px" }}>
//                 <a
//                   href="#"
//                   style={{
//                     textDecoration: "none",
//                     color: "white",
//                     fontSize: "14px",
//                   }}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div
//         style={{
//           borderTop: "1px solid rgba(255,255,255,0.2)",
//           paddingTop: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//         }}
//       >
//         {/* Social Links */}
//         <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
//           <span style={{ fontSize: "14px", marginRight: "10px" }}>Follow us</span>
//           <a href="#" style={{ color: "white", fontSize: "18px" }}>
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="#" style={{ color: "white", fontSize: "18px" }}>
//             <i className="fab fa-youtube"></i>
//           </a>
//           <a href="#" style={{ color: "white", fontSize: "18px" }}>
//             <i className="fab fa-x-twitter"></i>
//           </a>
//           <a href="#" style={{ color: "white", fontSize: "18px" }}>
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a href="#" style={{ color: "white", fontSize: "18px" }}>
//             <i className="fab fa-facebook"></i>
//           </a>
//         </div>

//         {/* Mobile Apps */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "15px",
//             justifyContent: "flex-start",
//           }}
//         >
//           <span style={{ fontSize: "14px", marginRight: "10px" }}>Mobile App</span>
//           <a href="#" style={{ color: "white", fontSize: "18px" }}>
//             <i className="fab fa-apple"></i>
//           </a>
//           <a href="#" style={{ color: "white", fontSize: "18px" }}>
//             <i className="fab fa-android"></i>
//           </a>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// }

//........................//


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faLinkedin,
  faFacebook,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#0D0B4C",
          color: "white",
          padding: "60px 80px",
          width: "100%",
        }}
      >
        {/* First Row: 4 equal columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "130px",
            marginBottom: "40px",
            marginLeft: "12px",
          }}
        >
          {/* For Clients */}
          <div>
            <h4 style={{ color: "#B0AFC6", marginBottom: "20px", fontSize: "16px" }}>
              For Clients
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "How to hire",
                "Talent Marketplace",
                "Project Catalog",
                "Hire an agency",
                "Enterprise",
                "Any Hire",
                "Contract-to-hire",
                "Direct Contracts",
                "Hire worldwide",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Freelancers */}
          <div>
            <h4 style={{ color: "#B0AFC6", marginBottom: "20px", fontSize: "16px" }}>
              For Freelancers
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "How to find work",
                "Direct Contracts",
                "Find freelance jobs worldwide",
                "Exclusive resources with Freelancer Plus",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color: "#B0AFC6", marginBottom: "20px", fontSize: "16px" }}>
              Resources
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Help & support",
                "Success stories",
                "Reviews",
                "Blog",
                "Affiliate programme",
                "Free Business Tools",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#B0AFC6", marginBottom: "20px", fontSize: "16px" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "About us",
                "Leadership",
                "Investor relations",
                "Careers",
                "Our impact",
                "Contact us",
                "Partners",
                "Trust, safety & security",
                "Modern slavery statement",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between", // ⬅️ Space between Follow & Mobile
            alignItems: "center", // ⬅️ Vertically center items
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px",
            marginLeft: "12px",
          }}
        >
          {/* Social Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ fontSize: "14px", marginRight: "10px" }}>Follow us</span>
            <a href="#" style={{ color: "white", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" style={{ color: "white", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="#" style={{ color: "white", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a href="#" style={{ color: "white", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" style={{ color: "white", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>

          {/* Mobile Apps */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ fontSize: "14px", marginRight: "10px" }}>Mobile App</span>
            <a href="#" style={{ color: "white", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faApple} size="lg" />
            </a>
            <a href="#" style={{ color: "white", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faAndroid} size="lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
