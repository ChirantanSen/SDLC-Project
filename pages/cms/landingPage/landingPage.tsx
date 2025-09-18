import React from 'react'
import { useEffect, useState } from "react";
import Link from "next/link";
import TeamCards from '@/component/team/team';


export default function LandingPage() {
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

 {
  return (
    <>
    <div
      style={{ margin: 0, fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
    >
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
    </div>
    <TeamCards/>

    </>
  )
}
}

