import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <p>Children</p>
        <img src={bell_icon} alt="bell" className="icons" />

        <div className="navbar_profile">
          <img src={profile_img} alt="profile" className="profile" />
          <img src={caret_icon} alt="caret" />
          <div className="dropdown">
            <p onClick={() => logout()}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
