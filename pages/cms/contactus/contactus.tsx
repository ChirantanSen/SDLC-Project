import React from "react";
import Link from "next/link";

export default function ContactPage() {
  
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left: Contact Form */}
        <div
          style={{
            background: "#f2f2f2",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "10px",
              color: "#000",
              textAlign: "left",
            }}
          >
            We Are Here To Help
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "30px",
              color: "#333",
              textAlign: "left",
            }}
          >
            Whether You’re A Client, Freelancer, Or Partner, Our Team Is Ready
            To Assist You.
          </p>

          <form>
            <input
              type="text"
              placeholder="Full Name"
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email ID"
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Subject"
              style={inputStyle}
            />
            <textarea
              placeholder="Message"
              style={{ ...inputStyle, height: "120px", resize: "none" }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                background: "#000b53",
                color: "white",
                padding: "14px",
                fontSize: "16px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Right: Help Guide & Contact Info */}
        <div>
          <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>
            Quick Help Guide
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            {[
              { title: "Log In & Account Help", icon: "🔑" },
              { title: "Payment & Billing", icon: "💳" },
              { title: "Posting Jobs", icon: "📄" },
              { title: "Hiring Freelancers", icon: "🤝" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#000b53",
                  color: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "24px", display: "block" }}>
                  {item.icon}
                </span>
                {item.title}
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "20px", fontSize: "16px" }}>
            <p>
              📧{" "}
              <a href="mailto:support@jobjolt.com" style={linkStyle}>
                support@jobjolt.com
              </a>
            </p>
            <p>
              📞{" "}
              <a href="tel:+91234569782" style={linkStyle}>
                +91 234569782
              </a>
            </p>
          </div>

          <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>
            Business Enquiry
          </h4>
          <p style={{ color: "#333" }}>
            For partnerships, media, or business collaborations, reach us at{" "}
            <a href="mailto:business@jobjolt.com" style={linkStyle}>
              business@jobjolt.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "20px",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const linkStyle = {
  color: "#000b53",
  textDecoration: "none",
  fontWeight: "bold",
};
