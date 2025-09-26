import React, { useEffect, useState } from "react";
import Link from "next/link";
import TeamCards from '@/component/team/team';
import ExpertCategories from "../ourServices/ourServices";
import AboutUs from "../AboutUs/aboutUs";
import ExpertCategories2 from "../ourServices/ourServices2";
import ClientsCarousel from "../trustedPartners/trustedPartner";
import Testimonials from "../testimonial/testimonial";
import Faq from "../faq/faq";


const captions = ["'Connecting Talent with Opportunity'",

"'Freelancer for Every Project'",

"'Work Smarter, Earn Better'",

"'Your Skills,Freedom,Income'",


"'Trusted Freelancers. Reliable Work.'",

"'Build Your Career, Project by Project'",

"'Marketplace for Digital Professionals'",

"'Quality Work Meets Competitive Pay'",

"'Your Next Big Project Starts Here'"];

function HeroSection() {
  const [text, setText] = useState("");
  const [captionIndex, setCaptionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = captions[captionIndex];
    let typingSpeed = isDeleting ? 100 : 150;

    const type = () => {
      if (!isDeleting && charIndex < current.length) {
        // typing
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // deleting
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === current.length) {
        // pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        // move to next caption
        setIsDeleting(false);
        setCaptionIndex((prev) => (prev + 1) % captions.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, captionIndex]);

  return (
    <div
      style={{ margin: 0, fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
    >
      <section
        id="home"
        // style={{
        //   background:
        //     "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
        //   color: "white",
        //   textAlign: "center",
        //   padding: "200px 20px",
        //   backgroundAttachment: "fixed",
        // }}
//         style={{
//   background:
//     "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat",
//   color: "white",
//   textAlign: "center",
//   padding: "200px 20px",
//   backgroundAttachment: "fixed",
// }}
style={{
  background: `
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat
  `,
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
              minHeight: "60px", // prevent layout shift
            }}
          >
            {text}
            <span style={{ borderRight: "2px solid white", marginLeft: "5px" }} />
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "30px" }}>
            We help you access experts and the latest technology to grow faster.
          </p>
          <div style={{
            display:"flex",
            justifyContent:"space-around",
            width:"50%",
            margin:"0 auto"

          }}>
            {/* <Link
            href="/cms/categoryList/categoryList"
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
            Find Projects
          </Link>

          <Link
            href="/cms/createCategory/createCategory"
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
            Post a Project
          </Link> */}

          <Link
  href="/cms/categoryList/categoryList"
  style={{
    background: "#ff6600",
    color: "white",
    padding: "14px 28px",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    display: "inline-block",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#e65c00"; // darker orange
    e.currentTarget.style.transform = "translateY(-3px)"; // lift
    e.currentTarget.style.boxShadow = "0px 6px 14px rgba(0,0,0,0.25)"; // shadow
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#ff6600";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  Find Projects
</Link>

<Link
  href="/cms/createCategory/createCategory"
  style={{
    background: "#ff6600",
    color: "white",
    padding: "14px 28px",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    display: "inline-block",
    transition: "all 0.3s ease",
    marginLeft: "15px", // optional spacing between buttons
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#e65c00";
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0px 6px 14px rgba(0,0,0,0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "#ff6600";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  Post a Project
</Link>


          </div>
          
          
        </div>
      </section>
      {/* <ExpertCategories/> */}
      <ExpertCategories2/>
      <ClientsCarousel/>
      <AboutUs/>
      <Testimonials/>
      <TeamCards/>
      <Faq/>
    </div>
  );
}

export default HeroSection;
