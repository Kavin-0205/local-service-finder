import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function UserDashboard() {
  const [user, setUser] = useState({});
  const [stats, setStats] = useState({
    active: 0,
    completed: 0,
    saved: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/user/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data.user);
        setStats(res.data.stats);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>User Panel</h2>
        <ul>
          <li className="active"> Overview</li>
          <li>Find Services</li>
          <li>My Bookings</li>
          <li>Reviews</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Welcome, {user.name} 👋</h1>
        <p>
          Manage your bookings and explore trusted service providers near you.
        </p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Active Bookings</h3>
            <p>{stats.active}</p>
          </div>

          <div className="card">
            <h3>Completed Services</h3>
            <p>{stats.completed}</p>
          </div>

          <div className="card">
            <h3>Saved Providers</h3>
            <p>{stats.saved}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;