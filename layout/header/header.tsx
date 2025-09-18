import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGear } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
    cursor: "pointer",
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

      {/* Social + Auth Buttons + Settings */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
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
            e.currentTarget.style.color = "#0D0B4C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ff6600";
            e.currentTarget.style.color = "#ffffff";
          }}
        >
          Sign Up
        </button>

        {/* Settings Icon */}
        <Link href="/auth/updatePassword/updatePassword" style={iconStyle}>
          <FontAwesomeIcon
            icon={faGear}
            size="lg"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFDD00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          />
        </Link>
      </div>
    </header>
  );
}
