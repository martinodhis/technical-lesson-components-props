import React from "react";

// ✅ Props destructured in function signature (clean & modern)
function Home({ color, name, city }) {
  return (
    <div id="home" style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ color: color, fontSize: "2.5rem", margin: "0" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;