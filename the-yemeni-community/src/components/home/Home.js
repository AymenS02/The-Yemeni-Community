import React from 'react';
import './Home.scss'
function Home() {
  return (
    <div className="home" >
      <div className="welcome-box">
        <h1 className="welcome-header">Hello, مرحبًا</h1>
        <p className="welcome-content">Welcome to the South Yemeni Community!</p>
      </div>
      <div className="home-images">
        <img src="./couple.webp" alt="couple" className="home-image" />
        <img src="./mountain.webp" alt="couple" className="home-image" />
        <img src="./children.webp" alt="couple" className="home-image" />
        <img src="./market.webp" alt="couple" className="home-image" />
        <img src="./man.webp" alt="couple" className="home-image" />
        <img src="./city.jpg" alt="couple" className="home-image" />
      </div>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
            Welcome to the heart of the South Yemen community in Hamilton, Ontario! Our vibrant community is a testament to the rich cultural heritage and enduring spirit of South Yemen. We are proud to celebrate and preserve our unique traditions, language, and customs while embracing the diversity and opportunities that Canada offers.
        </p>
        <p>
            Our community is dedicated to fostering a sense of belonging and support for all its members. From cultural festivals and traditional celebrations to community gatherings and support networks, we strive to create a welcoming environment for everyone. Our events and activities not only celebrate our heritage but also aim to build bridges with the wider Hamilton community, promoting mutual understanding and respect.
        </p>
        <p>
            Join us as we continue to grow and thrive, contributing to the rich tapestry of Hamilton's multicultural landscape. Whether you are a long-standing member or a newcomer, we invite you to be a part of our journey, to share in our traditions, and to help us build a brighter future together.
        </p>
        <p>
            Thank you for being a part of our community. Together, we can achieve great things!
        </p>
      </div>
    </div>
  );
}

export default Home;
