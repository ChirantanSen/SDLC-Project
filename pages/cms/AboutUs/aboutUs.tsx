import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#f9f9f9",
        backgroundImage:
          "repeating-linear-gradient(135deg, #f1f1f1 0px, #f1f1f1 2px, transparent 2px, transparent 20px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px", fontWeight: "bold", color: "#0D0B4C"}}>
          About Us
        </h2>
        <p style={{ fontSize: "18px", color: "#0D0B4C", marginBottom: "40px" }}>
          Welcome to <strong>TechConnect</strong> – the platform where businesses and entrepreneurs
          find top-tier freelancers for all their technology needs. Whether you're looking for web
          developers, app developers, or IT experts, we help you connect with skilled professionals
          who can turn your ideas into reality.
        </p>

        {/* Our Story */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "24px", color: "#0D0B4C", marginBottom: "10px" }}>
            Our Story
          </h3>
          <p style={{ fontSize: "16px", color: "#555", maxWidth: "800px", margin: "0 auto" }}>
            TechConnect was founded with a simple mission: to make world-class tech talent accessible
            to everyone. What started as a small initiative to connect startups with freelance
            developers has now grown into a global network of professionals delivering quality
            solutions to businesses of all sizes.
          </p>
        </div>

        {/* All Cards in a Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {[
            {
              title: "Our Mission",
              text: "We aim to empower businesses by connecting them with the right talent, making high-quality tech services accessible, seamless, and affordable.",
            },
            {
              title: "Our Vision",
              text: "To create a trusted global network of freelancers and clients that drives innovation, accelerates business growth, and builds long-term partnerships.",
            },
            {
              title: "Our Core Values",
              text: "✅ Innovation – Creative solutions.\n✅ Transparency – Honest collaboration.\n✅ Collaboration – Strong partnerships.\n✅ Quality – Exceptional results.\n✅ Trust – A reliable platform.",
            },
            {
              title: "How It Works",
              text: "1️⃣ Post a Project – Share your requirements.\n2️⃣ Get Matched – We connect you with freelancers.\n3️⃣ Collaborate – Work seamlessly.\n4️⃣ Achieve Results – Deliver smarter.",
            },
            {
              title: "Our Impact",
              text: "🚀 500+ successful projects delivered.\n🌍 200+ vetted freelancers onboarded.\n🤝 Trusted by 100+ businesses worldwide.",
            },
            {
              title: "Our Future Goals",
              text: "We’re on a mission to expand globally, helping more businesses unlock growth through freelance talent. Our goal: become the most trusted platform for tech collaboration.",
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                flex: "1 1 calc(30% - 20px)", // col-30 style
                maxWidth: "350px",
                textAlign: "center",
                transition: "all 0.3s ease",
                whiteSpace: "pre-line", // keeps line breaks
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0px 6px 16px rgba(0,0,0,0.2)";
                const title = e.currentTarget.querySelector("h3");
                if (title) title.style.color = "#0D0B4C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                const title = e.currentTarget.querySelector("h3");
                if (title) title.style.color = "#0D0B4C";
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0D0B4C",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#555" }}>{card.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: "60px" }}>
          <Link
            href="/cms/createCategory/createCategory"
            style={{
              background: "#0D0B4C",
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
              e.currentTarget.style.background = "#0D0B4C";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0px 6px 14px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0D0B4C";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}


