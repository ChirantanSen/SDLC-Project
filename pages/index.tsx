// // export default function Home() {
// //   return (
// //     <div
// //       style={{ margin: 0, fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
// //     >
// //       {/* Hero Section */}
// //       <section
// //         id="home"
// //         style={{
// //           background:
// //             "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
// //           color: "white",
// //           textAlign: "center",
// //           padding: "200px 20px",
// //           backgroundAttachment: "fixed",
// //         }}
// //       >
// //         <div style={{ maxWidth: "900px", margin: "0 auto" }}>
// //           <h1
// //             style={{
// //               fontSize: "48px",
// //               marginBottom: "20px",
// //               fontWeight: "bold",
// //             }}
// //           >
// //             Perfect IT Solutions for Your Business
// //           </h1>
// //           <p style={{ fontSize: "20px", marginBottom: "30px" }}>
// //             We help you access experts and the latest technology to grow faster.
// //           </p>
// //           <a
// //             href="#services"
// //             style={{
// //               background: "#ff6600",
// //               color: "white",
// //               padding: "14px 28px",
// //               textDecoration: "none",
// //               borderRadius: "6px",
// //               fontWeight: "bold",
// //               fontSize: "16px",
// //               display: "inline-block",
// //             }}
// //           >
// //             Get Started
// //           </a>
// //         </div>
// //       </section>

// //       <section
// //         id="services"
// //         style={{
// //           padding: "80px 20px",
// //           textAlign: "center",
// //           background: `
// //       url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23c7d2fe' stroke-width='1'%3E%3Cpath d='M0 100 Q400 200 800 100 T1600 100'/%3E%3Cpath d='M0 300 Q400 400 800 300 T1600 300'/%3E%3Cpath d='M0 500 Q400 600 800 500 T1600 500'/%3E%3Cpath d='M0 700 Q400 800 800 700 T1600 700'/%3E%3Ccircle cx='400' cy='400' r='200' stroke='%23a5b4fc' stroke-dasharray='4 6'/%3E%3Ccircle cx='400' cy='400' r='300' stroke='%2399a8fc' stroke-dasharray='2 8'/%3E%3C/g%3E%3C/svg%3E")`,
// //           backgroundSize: "cover",
// //           // backgroundAttachment: "fixed",
// //         }}
// //       >
// //         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
// //           <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>
// //             Our Services
// //           </h2>
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "center",
// //               flexWrap: "wrap",
// //               gap: "30px",
// //             }}
// //           >
// //             {[
// //               {
// //                 title: "IT Consulting",
// //                 desc: "Expert advice to streamline your business processes with technology.",
// //               },
// //               {
// //                 title: "Cloud Solutions",
// //                 desc: "Secure and scalable cloud services to power your business growth.",
// //               },
// //               {
// //                 title: "Cybersecurity",
// //                 desc: "Protect your digital assets with modern security solutions.",
// //               },
// //             ].map((service, index) => (
// //               <div
// //                 key={index}
// //                 style={{
// //                   background: "white",
// //                   padding: "40px 25px",
// //                   borderRadius: "16px",
// //                   boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
// //                   width: "300px",
// //                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //                   cursor: "pointer",
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = "translateY(-10px)";
// //                   e.currentTarget.style.boxShadow =
// //                     "0 12px 24px rgba(0,0,0,0.15)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = "translateY(0)";
// //                   e.currentTarget.style.boxShadow =
// //                     "0 6px 16px rgba(0,0,0,0.08)";
// //                 }}
// //               >
// //                 <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>
// //                   {service.title}
// //                 </h3>
// //                 <p style={{ fontSize: "16px", color: "#555" }}>
// //                   {service.desc}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section
// //         id="about"
// //         style={{
// //           padding: "80px 20px",
// //           display: "flex",
// //           flexWrap: "wrap",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           gap: "50px",
// //           maxWidth: "1200px",
// //           margin: "0 auto",
// //         }}
// //       >
// //         <div style={{ flex: "1", minWidth: "300px" }}>
// //           <img
// //             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
// //             alt="About Us"
// //             style={{ width: "100%", borderRadius: "10px" }}
// //           />
// //         </div>
// //         <div style={{ flex: "1", minWidth: "300px" }}>
// //           <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Us</h2>
// //           <p style={{ marginBottom: "20px", fontSize: "17px", color: "#333" }}>
// //             We are a team of passionate IT professionals dedicated to providing
// //             tailored solutions that drive business success. From consultation to
// //             execution, we partner with you at every stage.
// //           </p>
// //           <a
// //             href="#contact"
// //             style={{
// //               background: "#0b2e59",
// //               color: "white",
// //               padding: "14px 28px",
// //               textDecoration: "none",
// //               borderRadius: "6px",
// //               fontWeight: "bold",
// //               fontSize: "16px",
// //               display: "inline-block",
// //             }}
// //           >
// //             Learn More
// //           </a>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       {/* <section
// //         id="contact"
// //         style={{
// //           background: "#0b2e59",
// //           color: "white",
// //           textAlign: "center",
// //           padding: "80px 20px",
// //         }}
// //       >
// //         <div style={{ maxWidth: "600px", margin: "0 auto" }}>
// //           <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Get in Touch</h2>
// //           <p style={{ marginBottom: "40px", fontSize: "17px" }}>
// //             Ready to take your business to the next level? Contact us today!
// //           </p>
// //           <form style={{ textAlign: "left" }}>
// //             <input
// //               type="text"
// //               placeholder="Your Name"
// //               style={{
// //                 width: "100%",
// //                 padding: "14px",
// //                 marginBottom: "15px",
// //                 border: "none",
// //                 borderRadius: "6px",
// //                 fontSize: "15px",
// //               }}
// //             />
// //             <input
// //               type="email"
// //               placeholder="Your Email"
// //               style={{
// //                 width: "100%",
// //                 padding: "14px",
// //                 marginBottom: "15px",
// //                 border: "none",
// //                 borderRadius: "6px",
// //                 fontSize: "15px",
// //               }}
// //             />
// //             <textarea
// //               placeholder="Your Message"
// //               style={{
// //                 width: "100%",
// //                 padding: "14px",
// //                 marginBottom: "15px",
// //                 border: "none",
// //                 borderRadius: "6px",
// //                 height: "130px",
// //                 fontSize: "15px",
// //               }}
// //             ></textarea>
// //             <button
// //               type="submit"
// //               style={{
// //                 width: "100%",
// //                 background: "#ff6600",
// //                 color: "white",
// //                 padding: "14px",
// //                 border: "none",
// //                 borderRadius: "6px",
// //                 fontSize: "16px",
// //                 fontWeight: "bold",
// //                 cursor: "pointer",
// //               }}
// //             >
// //               Send Message
// //             </button>
// //           </form>
// //         </div>
// //       </section> */}

// //       <section
// //         id="contact"
// //         style={{
// //           position: "relative",
// //           background:
// //             "url('https://picsum.photos/1600/900?landscape') center/cover no-repeat",
// //           padding: "100px 20px",
// //           color: "#fff",
// //           textAlign: "center",
// //         }}
// //       >
// //         {/* Dark Overlay */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             top: 0,
// //             left: 0,
// //             width: "100%",
// //             height: "100%",
// //             // background: "rgba(11, 46, 89, 0.8)",
// //             zIndex: 0,
// //           }}
// //         ></div>

// //         <div
// //           style={{
// //             position: "relative",
// //             zIndex: 1,
// //             maxWidth: "700px",
// //             margin: "0 auto",
// //             background: "rgba(255,255,255,0.1)",
// //             padding: "50px 40px",
// //             borderRadius: "15px",
// //             boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
// //             backdropFilter: "blur(10px)",
// //           }}
// //         >
// //           <h2
// //             style={{
// //               fontSize: "40px",
// //               marginBottom: "20px",
// //               fontWeight: "700",
// //             }}
// //           >
// //             Get in Touch
// //           </h2>
// //           <p style={{ marginBottom: "40px", fontSize: "18px", color: "#ddd" }}>
// //             Ready to take your business to the next level? Contact us today!
// //           </p>

// //           <form style={{ textAlign: "left" }}>
// //             <input
// //               type="text"
// //               placeholder="Your Name"
// //               style={{
// //                 width: "100%",
// //                 padding: "15px",
// //                 marginBottom: "15px",
// //                 border: "none",
// //                 borderRadius: "8px",
// //                 fontSize: "16px",
// //                 outline: "none",
// //               }}
// //             />
// //             <input
// //               type="email"
// //               placeholder="Your Email"
// //               style={{
// //                 width: "100%",
// //                 padding: "15px",
// //                 marginBottom: "15px",
// //                 border: "none",
// //                 borderRadius: "8px",
// //                 fontSize: "16px",
// //                 outline: "none",
// //               }}
// //             />
// //             <textarea
// //               placeholder="Your Message"
// //               style={{
// //                 width: "100%",
// //                 padding: "15px",
// //                 marginBottom: "20px",
// //                 border: "none",
// //                 borderRadius: "8px",
// //                 height: "140px",
// //                 fontSize: "16px",
// //                 outline: "none",
// //                 resize: "none",
// //               }}
// //             ></textarea>
// //             <button
// //               type="submit"
// //               style={{
// //                 width: "100%",
// //                 background: "linear-gradient(135deg, #ff6600, #ff8533)",
// //                 color: "white",
// //                 padding: "16px",
// //                 border: "none",
// //                 borderRadius: "8px",
// //                 fontSize: "18px",
// //                 fontWeight: "bold",
// //                 cursor: "pointer",
// //                 transition: "transform 0.3s ease",
// //               }}
// //               onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
// //               onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
// //             >
// //               Send Message
// //             </button>
// //           </form>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // //..........................//
// // //................................................//

// import { useEffect, useState } from "react";

// export default function Home() {
//   const captions = [
//     "Perfect IT Solutions for Your Business",
//     "Join a Thriving Freelancer Community",
//     "Empowering Startups with Technology",
//     "Your Trusted Partner for Digital Growth",
//   ];

//   const [currentCaption, setCurrentCaption] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentCaption((prev) => (prev + 1) % captions.length);
//     }, 3000); // Change every 3 seconds
//     return () => clearInterval(interval);
//   }, [captions.length]);

//   return (
//     <div
//       style={{ margin: 0, fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
//     >
//       {/* Hero Section */}
//       <section
//         id="home"
//         style={{
//           background:
//             "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
//           color: "white",
//           textAlign: "center",
//           padding: "200px 20px",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div style={{ maxWidth: "900px", margin: "0 auto" }}>
//           <h1
//             style={{
//               fontSize: "48px",
//               marginBottom: "20px",
//               fontWeight: "bold",
//               transition: "opacity 0.2s ease-in-out",
//             }}
//           >
//             {captions[currentCaption]}
//           </h1>
//           <p style={{ fontSize: "20px", marginBottom: "30px" }}>
//             We help you access experts and the latest technology to grow faster.
//           </p>
//           <a
//             href="#services"
//             style={{
//               background: "#ff6600",
//               color: "white",
//               padding: "14px 28px",
//               textDecoration: "none",
//               borderRadius: "6px",
//               fontWeight: "bold",
//               fontSize: "16px",
//               display: "inline-block",
//             }}
//           >
//             Get Started
//           </a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section
//         id="services"
//         style={{
//           padding: "80px 20px",
//           textAlign: "center",
//           background: `
//       url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23c7d2fe' stroke-width='1'%3E%3Cpath d='M0 100 Q400 200 800 100 T1600 100'/%3E%3Cpath d='M0 300 Q400 400 800 300 T1600 300'/%3E%3Cpath d='M0 500 Q400 600 800 500 T1600 500'/%3E%3Cpath d='M0 700 Q400 800 800 700 T1600 700'/%3E%3Ccircle cx='400' cy='400' r='200' stroke='%23a5b4fc' stroke-dasharray='4 6'/%3E%3Ccircle cx='400' cy='400' r='300' stroke='%2399a8fc' stroke-dasharray='2 8'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: "cover",
//         }}
//       >
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//           <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>
//             Our Services
//           </h2>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               flexWrap: "wrap",
//               gap: "30px",
//             }}
//           >
//             {[
//               {
//                 title: "IT Consulting",
//                 desc: "Expert advice to streamline your business processes with technology.",
//               },
//               {
//                 title: "Cloud Solutions",
//                 desc: "Secure and scalable cloud services to power your business growth.",
//               },
//               {
//                 title: "Cybersecurity",
//                 desc: "Protect your digital assets with modern security solutions.",
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: "white",
//                   padding: "40px 25px",
//                   borderRadius: "16px",
//                   boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
//                   width: "300px",
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-10px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 12px 24px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 6px 16px rgba(0,0,0,0.08)";
//                 }}
//               >
//                 <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>
//                   {service.title}
//                 </h3>
//                 <p style={{ fontSize: "16px", color: "#555" }}>
//                   {service.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         style={{
//           padding: "80px 20px",
//           display: "flex",
//           flexWrap: "wrap",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "50px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         <div style={{ flex: "1", minWidth: "300px" }}>
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//             alt="About Us"
//             style={{ width: "100%", borderRadius: "10px" }}
//           />
//         </div>
//         <div style={{ flex: "1", minWidth: "300px" }}>
//           <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Us</h2>
//           <p style={{ marginBottom: "20px", fontSize: "17px", color: "#333" }}>
//             We are a team of passionate IT professionals dedicated to providing
//             tailored solutions that drive business success. From consultation to
//             execution, we partner with you at every stage.
//           </p>
//           <a
//             href="#contact"
//             style={{
//               background: "#0b2e59",
//               color: "white",
//               padding: "14px 28px",
//               textDecoration: "none",
//               borderRadius: "6px",
//               fontWeight: "bold",
//               fontSize: "16px",
//               display: "inline-block",
//             }}
//           >
//             Learn More
//           </a>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         style={{
//           position: "relative",
//           background:
//             "url('https://picsum.photos/1600/900?landscape') center/cover no-repeat",
//           padding: "100px 20px",
//           color: "#fff",
//           textAlign: "center",
//         }}
//       >
//         {/* Dark Overlay */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: 0,
//           }}
//         ></div>

//         <div
//           style={{
//             position: "relative",
//             zIndex: 1,
//             maxWidth: "700px",
//             margin: "0 auto",
//             background: "rgba(255,255,255,0.1)",
//             padding: "50px 40px",
//             borderRadius: "15px",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//             backdropFilter: "blur(10px)",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "40px",
//               marginBottom: "20px",
//               fontWeight: "700",
//             }}
//           >
//             Get in Touch
//           </h2>
//           <p style={{ marginBottom: "40px", fontSize: "18px", color: "#ddd" }}>
//             Ready to take your business to the next level? Contact us today!
//           </p>

//           <form style={{ textAlign: "left" }}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               style={{
//                 width: "100%",
//                 padding: "15px",
//                 marginBottom: "15px",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontSize: "16px",
//                 outline: "none",
//               }}
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               style={{
//                 width: "100%",
//                 padding: "15px",
//                 marginBottom: "15px",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontSize: "16px",
//                 outline: "none",
//               }}
//             />
//             <textarea
//               placeholder="Your Message"
//               style={{
//                 width: "100%",
//                 padding: "15px",
//                 marginBottom: "20px",
//                 border: "none",
//                 borderRadius: "8px",
//                 height: "140px",
//                 fontSize: "16px",
//                 outline: "none",
//                 resize: "none",
//               }}
//             ></textarea>
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 background: "linear-gradient(135deg, #ff6600, #ff8533)",
//                 color: "white",
//                 padding: "16px",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 cursor: "pointer",
//                 transition: "transform 0.3s ease",
//               }}
//               onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
//               onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }


//...................................//
//..................................................//
import { useEffect, useState } from "react";
import Link from "next/link";



export default function Home() {
  const captions = [
    "Perfect IT Solutions for Your Business",
    "Join a Thriving Freelancer Community",
    "Empowering Startups with Technology",
    "Your Trusted Partner for Digital Growth",
  ];

  const [currentCaption, setCurrentCaption] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaption((prev) => (prev + 1) % captions.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [captions.length]);

  return (
    <div
      style={{ margin: 0, fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
    >
      {/* Hero Section */}
      <section
      id="home"
      style={{
        background:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
        color: "white",
        textAlign: "center",
        padding: "200px 20px",
        backgroundAttachment: "fixed",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
            fontWeight: "bold",
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          {captions[currentCaption]}
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          We help you access experts and the latest technology to grow faster.
        </p>
        <Link
          href="/auth/login"
          style={{
            background: "#ff6600",
            color: "white",
            padding: "14px 28px",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "16px",
            display: "inline-block",
          }}
        >
          Get Started
        </Link>
      </div>
    </section>
      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: `
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23c7d2fe' stroke-width='1'%3E%3Cpath d='M0 100 Q400 200 800 100 T1600 100'/%3E%3Cpath d='M0 300 Q400 400 800 300 T1600 300'/%3E%3Cpath d='M0 500 Q400 600 800 500 T1600 500'/%3E%3Cpath d='M0 700 Q400 800 800 700 T1600 700'/%3E%3Ccircle cx='400' cy='400' r='200' stroke='%23a5b4fc' stroke-dasharray='4 6'/%3E%3Ccircle cx='400' cy='400' r='300' stroke='%2399a8fc' stroke-dasharray='2 8'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>
            Our Services
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "30px",
              paddingBottom:"40px"
            }}
          >
            {[
              {
                title: "IT Consulting",
                desc: "Expert advice to streamline your business processes with technology.",
              },
              {
                title: "Cloud Solutions",
                desc: "Secure and scalable cloud services to power your business growth.",
              },
              {
                title: "Cybersecurity",
                desc: "Protect your digital assets with modern security solutions.",
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "40px 25px",
                  borderRadius: "16px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                  width: "300px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(0,0,0,0.08)";
                }}
              >
                <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "16px", color: "#555" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          {/* <a
            href="#contact"
            style={{
              background: "#0b2e59",
              color: "white",
              padding: "14px 28px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "16px",
              display: "inline-block",
            }}
          >
            Learn More
          </a> */}

          <Link
  href="/cms/ourServices/ourServices"
  style={{
    background: "#0b2e59",
    color: "white",
    padding: "14px 28px",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    display: "inline-block",
  }}
>
  Learn More
</Link>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "80px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="About Us"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Us</h2>
          <p style={{ marginBottom: "20px", fontSize: "17px", color: "#333" }}>
            We are a team of passionate IT professionals dedicated to providing
            tailored solutions that drive business success. From consultation to
            execution, we partner with you at every stage.
          </p>
                    <Link
  href="/cms/AboutUs/aboutUs"
  style={{
    background: "#0b2e59",
    color: "white",
    padding: "14px 28px",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    display: "inline-block",
  }}
>
  Learn More
</Link>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          position: "relative",
          background:
            "url('https://picsum.photos/id/1022/1600/900') center/cover no-repeat",
          padding: "100px 20px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "700px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.1)",
            padding: "50px 40px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Get in Touch
          </h2>
          <p style={{ marginBottom: "40px", fontSize: "18px", color: "#ddd" }}>
            Ready to take your business to the next level? Contact us today!
          </p>

          <form style={{ textAlign: "left" }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "15px",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "15px",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <textarea
              placeholder="Your Message"
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "20px",
                border: "none",
                borderRadius: "8px",
                height: "140px",
                fontSize: "16px",
                outline: "none",
                resize: "none",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #ff6600, #ff8533)",
                color: "white",
                padding: "16px",
                border: "none",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
