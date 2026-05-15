import React from "react";
import Links from "./Links.jsx";

// ✅ Receiving props from App, forwarding subset to Links
function About({ bio, links }) {
  return (
    <div id="about" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "1rem" }}>About Me</h2>
      <p style={{ lineHeight: "1.6", color: "#475569" }}>{bio}</p>
      <img 
        src="https://i.imgur.com/mV8PQxj.gif" 
        alt="I made this as a beginner" 
        style={{ maxWidth: "100%", borderRadius: "8px", margin: "1rem 0" }} 
      />
      {/* ✅ Pass only needed props to child component */}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;