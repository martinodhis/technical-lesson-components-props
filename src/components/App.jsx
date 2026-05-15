import React from "react";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import user from "../data/user"; // Adjust path if needed

function App() {
  return (
    <div>
      {/* ✅ Add the <Navbar> component here */}
      <NavBar />
      
      {/* ✅ Add the <Home> component here - passing props */}
      <Home name={user.name} city={user.city} color={user.color} />
      
      {/* ✅ Add your <About> component here - passing props */}
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;