import React from "react";
import "./Home.css";
import heroImage from "../assets/hero.webp";
import serviceImage from "../assets/user.jpg";
import providerImage from "../assets/provider.webp";
function Home() {
  return (

    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Connect With Trusted Local Professionals</h1>
          <p>
            Local Service Finder helps you discover reliable and verified
            service providers in your area. Whether you need home repair,
            maintenance, tutoring, beauty services, or any other assistance,
            our platform connects you with professionals ready to help.
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Local Services" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-image">
          <img src={serviceImage} alt="Various Services" />
        </div>
        <div className="about-text">
          <h2>Flexible Services — Provider Decides</h2>
          <p>
            Our platform does not limit services to specific categories.
            Each service provider independently decides what type of service
            they want to offer. From plumbing and electrical work to
            photography, event management, tuition, fitness training, and
            more — providers can register and showcase their expertise.
          </p>
          <p>
            This flexibility ensures that users can find a wide range of
            services based on real local demand and provider skills.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why">
        <h2>Why Choose Local Service Finder?</h2>

        <div className="why-cards">
          <div className="card">
            <h3>Verified Professionals</h3>
            <p>
              Every provider registers with valid details to maintain trust
              and transparency.
            </p>
          </div>

          <div className="card">
            <h3>Wide Range of Services</h3>
            <p>
              Since providers choose their services, users get access to
              diverse and flexible service options.
            </p>
          </div>

          <div className="card">
            <h3>Easy Communication</h3>
            <p>
              Connect directly with providers and book services quickly and
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Provider CTA */}
      <section className="provider-section">
        <div className="provider-text">
          <h2>Are You a Service Provider?</h2>
          <p>
            Join our platform and showcase your skills. Decide what services
            you offer and connect with customers in your locality.
          </p>
        </div>
        <div className="provider-image">
          <img src={providerImage} alt="Service Provider" />
        </div>
      </section>

    </div>
  );
}

export default Home;