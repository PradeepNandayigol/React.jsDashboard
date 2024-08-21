import React from 'react'

const Home = () => {
  return (
    <>
    <div className='main'>
      <main>
        <section className='section-hero'>
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>we are the world best it company</p>
              <h1>Welcome to the Techvant</h1>
              <p>
                Are you redy to to make your bussiness to the next level with cutting-edge It
                solution? Look no further! at thapatechnical we specilize in providing innovating
                it services and solustions tailord to meet your unique needs.
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
      </main>

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


      {/* 333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}




      <section className='section-hero'>
        <div className="container grid grid-two-cols">
          <div className='hero-image'>
            <img src='../../public/image/abac.jpg' alt='home image'
              width="500" height="400" />
          </div>
          <div className="hero-content">
            <p>we are the world best it company</p>
            <h1>welcome to the thapa technical</h1>
            <p>
              Are you redy to to make your bussiness to the next level with cutting-edge It
              solution? Look no further! at thapatechnical we specilize in providing innovating
              it services and solustions tailord to meet your unique needs.
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

        </div>
      </section>
      </div>
    </>
  )
}

export default Home
