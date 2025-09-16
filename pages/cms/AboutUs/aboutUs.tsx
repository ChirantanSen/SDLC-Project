import React from "react";

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#555",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          Welcome to <strong>TechConnect</strong> – the platform where businesses
          and entrepreneurs find top-tier freelancers for all their technology
          needs. Whether you're looking for web developers, app developers, or
          IT experts, we help you connect with skilled professionals who can
          turn your ideas into reality.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          {/* Mission Card */}
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#ff6600" }}>
              Our Mission
            </h2>
            <p style={{ color: "#555", lineHeight: "1.5" }}>
              We aim to empower businesses by connecting them with the right
              talent, making high-quality tech services accessible, seamless,
              and affordable.
            </p>
          </div>

          {/* Vision Card */}
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#ff6600" }}>
              Our Vision
            </h2>
            <p style={{ color: "#555", lineHeight: "1.5" }}>
              To create a trusted global network of freelancers and clients that
              drives innovation, accelerates business growth, and builds
              long-term partnerships.
            </p>
          </div>

          {/* Why Choose Us Card */}
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#ff6600" }}>
              Why Choose Us?
            </h2>
            <p style={{ color: "#555", lineHeight: "1.5" }}>
              With our vetted pool of developers, transparent pricing, and
              dedicated support, finding the right tech expert has never been
              easier.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ marginTop: "60px" }}>
          <a
            href="/login"
            style={{
              background: "#ff6600",
              color: "white",
              padding: "14px 28px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "18px",
              display: "inline-block",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#e65c00")}
            onMouseOut={(e) => (e.target.style.background = "#ff6600")}
          >
            Join Our Network
          </a>
        </div>
      </div>
    </section>
  );
}
