import React from 'react';
import { useAuth } from "../store/auth";

const About = () => {
  const {user} = useAuth();
  return (
    <>
    <div className='main'>
      <section className='section-hero'>
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            {/* <p>Welcome, {user ?  `${user.username} to our website `: `to our website`}</p> */}
            <p>Welcome, {user ?  <span className="username">{user.username}</span> : null} to our website</p>
            <h1>why choose us?</h1>
            <p>
              Are you redy to to make your bussiness to the next level with cutting-edge It
              solution? Look no further!
            </p>
            <p>
              at thapatechnical we specilize in providing innovating
              it services and solustions tailord to meet your unique needs.
            </p>
            <p>
              it services and solustions tailord to meet your unique needs.
              at thapatechnical we specilize in providing innovating
            </p>
            <p>
              It solution? Look no further!re you redy to to make your bussiness to
              the next level with cutting-edge
            </p>
            <div className="btn btn-group">
              <a href='/contact'>
                <button className='btn'>connect now</button>
              </a>
              <a href='/service'>
                <button className='btn secondary-btn'>lean more</button>
              </a>
            </div>
          </div>
          <div className='hero-image'>
            <img src='../../public/image/abac.jpg' alt='home image'
              width="500" height="400" />
          </div>
        </div>
      </section>




      <section className='section-analytics'>
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>100,00</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      </div>

    </>
  )
}

export default About
