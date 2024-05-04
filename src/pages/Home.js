import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="headerContainer">
          <Link to="/menu">
            <button>GET FREE CONSULTATION</button>
          </Link>
          <div className="rectangle-box">
          {/* Content inside the rectangle box */}
          <h2>What is Webflow and why is it the best website builder?</h2>
          <br></br><br></br>
          <h2>What is Webflow and why is it the best website builder?</h2>
          <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
          
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
