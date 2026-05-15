import React from "react";

// ✅ Renders dynamic links using props
function Links({ github, linkedin }) {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h3>Links</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "#2563eb", textDecoration: "none" }}
        >
          GitHub →
        </a>
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "#2563eb", textDecoration: "none" }}
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}

export default Links;