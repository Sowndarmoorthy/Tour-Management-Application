import React from 'react';
import './../style/About.css';
import tourr from "./../assets/images/image.png"; 
import plan from "./../assets/images/plan.png";
import exp from "./../assets/images/exp.png";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">
        With our extensive experience, <br /> we will serve you with excellence
      </h2>
      <p className="about-description">
        Your satisfaction is our top priority. We are committed to delivering exceptional service and creating unforgettable experiences for all your travel needs.
      </p>

      {/* Activities, Plans, and Experience Sections */}
      <div className="about-content">
        <div className="about-section">
          <h3>Our Activities</h3>
          <p>
            From guided tours to adventurous excursions, we offer a range of activities designed to suit every traveler's preferences. Whether you're seeking cultural immersion or thrilling experiences, we have something for everyone.
          </p>
        </div>
        <div className="about-section">
          <h3>Our Plans</h3>
          <p>
            We meticulously plan every aspect of your journey, ensuring seamless travel logistics and unforgettable moments. Our goal is to provide personalized itineraries that reflect your unique interests and needs.
          </p>
        </div>
        <div className="about-section">
          <h3>Our Experience</h3>
          <p>
            With over a decade of experience in the travel industry, we pride ourselves on our extensive knowledge and professional network. We’ve successfully curated countless trips, delivering exceptional service to clients across the globe.
          </p>
        </div>
      </div>

      {/* Achievements, Clients, and Branches */}
      <div className="about-extra">
        <div className="about-section">
          <h3>Our Achievements</h3>
          <p>
            We have been recognized with numerous awards for our commitment to excellence in the travel industry. Our notable achievements include Best Travel Agency Award for five consecutive years and accolades for sustainable tourism practices.
          </p>
        </div>
        <div className="about-section">
          <h3>Our Clients</h3>
          <p>
            Our loyal clients include both individual travelers and corporate customers. We've served over 10,000 happy customers, including major corporations such as XYZ Enterprises, Global Tech Solutions, and many more.
          </p>
        </div>
        <div className="about-section">
          <h3>Our Branches</h3>
          <p>
            We are proud to have expanded our presence with branches across five countries, including the US, UK, Australia, India, and Japan. Each branch is equipped with experienced professionals ready to assist you in planning your dream journey.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="about-images">
        <img src={tourr} alt="Activity 1" className="about-image" />
        <img src={plan} alt="Activity 2" className="about-image" />
        <img src={exp} alt="Activity 3" className="about-image" />
      </div>
    </div>
  );
};

export default About;
