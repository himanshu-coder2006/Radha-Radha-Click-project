import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="nav">
        <div onClick={() => setOpen(true)} className="menu-btn">☰</div>

        <h2 className="logo">React Bits</h2>

        <button className="cta">Get Started</button>
      </div>

      {/* Fullscreen Menu */}
      <div className={`mega ${open ? "show" : ""}`}>
        
        {/* Top bar */}
        <div className="mega-top">
          <span className="close" onClick={() => setOpen(false)}>✕</span>
          <h2>React Bits</h2>
          <button className="cta">Get Started</button>
        </div>

        {/* Cards */}
        <div className="mega-content">

          <div className="card">
            <h3>About</h3>
            <p>↗ Company</p>
            <p>↗ Careers</p>
          </div>

          <div className="card">
            <h3>Projects</h3>
            <p>↗ Featured</p>
            <p>↗ Case Studies</p>
          </div>

          <div className="card">
            <h3>Contact</h3>
            <p>↗ Email</p>
            <p>↗ Twitter</p>
            <p>↗ LinkedIn</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;