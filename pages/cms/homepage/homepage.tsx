import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: "60px 20px", background: "#f8f8ff" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center" }}>
          CONNECTING TALENT WITH OPPORTUNITY
        </h1>
        <p style={{ textAlign: "center", margin: "10px 0 30px", fontSize: "18px" }}>
          Making it easy for talent and opportunity to meet and thrive.
        </p>
      </section>

      {/* Mission Cards */}
      <section style={{ display: "grid", gap: "30px", padding: "40px 20px" }}>
        <div>
          <h2>Turning Connections Into Opportunities</h2>
          <p>
            Our journey began with a clear vision—to break down barriers between
            talent and opportunity...
          </p>
          <Link href="/cms/ourServices/ourServices">
            <button style={buttonStyle}>Learn More</button>
          </Link>
        </div>
        <div>
          <h2>Connecting Global Talent with Purpose</h2>
          <p>
            From our mission to create economic opportunity and uplift lives...
          </p>
          <Link href="/cms/ourServices/ourServices">
            <button style={buttonStyle}>Learn More</button>
          </Link>
        </div>
      </section>

      {/* Signup Section */}
      <section style={{ padding: "40px 20px", background: "#e6e6fa", textAlign: "center" }}>
        <h3>Are you a <strong>Freelancer</strong> looking for work?</h3>
        <Link href="/freelancer-profile">
          <button style={buttonStyle}>Sign Up Today</button>
        </Link>

        <h3 style={{ marginTop: "30px" }}>Are you a <strong>Business</strong> needing help on a project?</h3>
        <Link href="/client-profile">
          <button style={buttonStyle}>Sign Up Today</button>
        </Link>
      </section>
    </div>
  );
}

const buttonStyle = {
  background: "#0b0b6b",
  color: "#fff",
  padding: "12px 28px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};
