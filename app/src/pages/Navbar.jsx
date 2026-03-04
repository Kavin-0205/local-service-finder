import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Local Service Finder</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        {!isLoggedIn ? (
          <li>
            <Link to="/login" className="btn login-btn">
              Login
            </Link>
          </li>
        ) : (
          <li>
            <button onClick={handleLogout} className="btn logout-btn">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;