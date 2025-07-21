import React from "react";
import Layout from "../Components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div
        className="content"
        style={{
          height: "75vh",
          margin: "30px",
        }}
      >
        <h1>About Us</h1>
        <hr />
        <p>
          <strong>Video Call App</strong> lets you connect face-to-face with anyone, anywhere, using fast and secure 1-on-1 video calls. Built with ReactJS and ZEGOCLOUD, our app makes it easy to join or create a call room in seconds. Enjoy a simple, modern interface and high-quality video—right from your browser.
        </p>
      </div>
    </Layout>
  );
};

export default About;
