import { useState } from "react";

export default function FreelancerProfile() {
  const [profile, setProfile] = useState({
    photo: "",
    skills: "",
    rate: "",
    links: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Freelancer Profile Data:", profile);
    alert("Profile saved! (No redirect)"); // For feedback only
  };

  return (
    <div style={{ padding: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
        BUILD YOUR FREELANCER PROFILE
      </h1>
      <p style={{ marginBottom: "30px", color: "#555", textAlign: "center" }}>
        Showcase your skills and experience to attract the right clients.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#f1f1f1",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={(e) => setProfile({ ...profile, photo: e.target.files?.[0]?.name || "" })}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
          }}
        />
        <input
          type="text"
          name="skills"
          placeholder="Add Your Key Skills"
          value={profile.skills}
          onChange={handleChange}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
          }}
        />
        <select
          name="rate"
          value={profile.rate}
          onChange={handleChange}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
          }}
        >
          <option value="">Set Your Rate Per Hour</option>
          <option value="10">$10/hr</option>
          <option value="20">$20/hr</option>
          <option value="50">$50/hr</option>
        </select>
        <select
          name="links"
          value={profile.links}
          onChange={handleChange}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
          }}
        >
          <option value="">Add Links To Your Work</option>
          <option value="portfolio">Portfolio Website</option>
          <option value="github">GitHub</option>
          <option value="linkedin">LinkedIn</option>
        </select>
        <textarea
          name="about"
          placeholder="Write A Brief Introduction About Yourself"
          value={profile.about}
          onChange={handleChange}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
            minHeight: "100px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            background: "#0b0b6b",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}
