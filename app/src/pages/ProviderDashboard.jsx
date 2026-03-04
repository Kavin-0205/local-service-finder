import React, { useEffect, useState } from "react";
import "./Dashboard.css";

function ProviderDashboard() {
  const [dashboardData, setDashboardData] = useState({
    pendingRequests: 0,
    completedJobs: 0,
    totalEarnings: 0
  });

  useEffect(() => {
    // Replace with your backend URL
    fetch("http://localhost:5000/api/provider/dashboard", {
      headers: {
        "Authorization": localStorage.getItem("token") // JWT token
      }
    })
      .then(res => res.json())
      .then(data => setDashboardData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Provider Panel</h2>
        <ul>
          <li>Overview</li>
          <li>Booking Requests</li>
          <li>My Services</li>
          <li>Earnings</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Welcome Provider!</h1>
        <p>
          Manage your services, track booking requests,
          and grow your local customer base.
        </p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Pending Requests</h3>
            <p>{dashboardData.pendingRequests}</p>
          </div>

          <div className="card">
            <h3>Completed Jobs</h3>
            <p>{dashboardData.completedJobs}</p>
          </div>

          <div className="card">
            <h3>Total Earnings</h3>
            <p>₹{dashboardData.totalEarnings}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderDashboard;