import React, {useEffect} from 'react';
import "./about.css";

// images
import skyImage from "../../assets/images/skyscrapers-sunset.jpg";
import teamWorkIcon from "../../assets/images/friendship.png";
import shieldIcon from "../../assets/images/shield.png";
import trustIcon from "../../assets/images/trust.png";
import respectIcon from "../../assets/images/integration.png";
import teamTwo from "../../assets/images/team2.jpg";
import teamFour from "../../assets/images/team4.jpg";
import teamThree from "../../assets/images/team3.jpg";
import testimonialImage1 from "../../assets/images/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera.jpg";
import testimonialImage2 from "../../assets/images/team.jpg";

import SquareCard from "../../components/squareCard/SquareCard";
import ScrollToTop from '../../components/scollToTop/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="about_showcase">
        <div className="about_showcase_wrapper">
        <h1
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="900"
        >
          ABOUT US</h1>
        </div>
      </section>

      {/* ======= SECTION: ABOUT_HISTORY ======= */}
      <section id="about_history">
        <div className="about_history_wrapper container">
          <div className="left">
            <h2
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom"
            >
              OUR HISTORY</h2>
            <p
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom"
            >We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of application.We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of application.We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of application.striving to make funds available to them within 24 hours of application.We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of application.striving to make funds available to them within 24 hours of application.We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of application.</p>
          </div>
          <div 
          data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
          className="right"
          >
            <img src= {skyImage} alt="history" />
          </div>
        </div>
      </section>

      {/* ======= SECTION: ABOUT_STATEMENT ======= */}
      <section id="about_statement">
        <div className="about_statement_wrapper container">
          <div className="top">
            <div className="card">
              <p className='heading'>OUR VISION</p>
              <p>We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of program that meet your financial need. In short term </p>
            </div>
            <div className="card">
              <p className='heading'>OUR MISSION</p>
              <p>We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of program that meet your financial need. In short term </p>
            </div>
          </div>
          <div className="bottom">
            <p className='heading'>OUR CORE VALUES</p>
            <p>We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of program that meet your financial need. In short term </p>
          </div>
        </div>
      </section>

      {/* ======= SECTION: ABOUT_SQUARE_CARDS ======= */}
      <section id="about_square_cards">
        <div className="about_square_cards_wrapper container">

<div className="card_wrapper">
          <SquareCard 
          title= "Integrety"
          src = {shieldIcon}
          alt = "credit union business banking"
          />
          </div>

          <div className="card_wrapper">
          <SquareCard
          title= "Trust"
          src = {trustIcon}
          alt = "credit union personal banking"
          />
          </div>

          <div className="card_wrapper">
          <SquareCard
          title= "Respect"
          src = {respectIcon}
          alt = "credit union banking support or help"
          />
          </div>

          <div className="card_wrapper">
          <SquareCard
          title= "Team Work"
          src = {teamWorkIcon}
          alt = "credit union bank complaint "
          />
          </div>

        </div>
      </section>

      {/* ======= SECTION: ABOUT_TEAM ======= */}
      <section id="about_team">
        <div className="about_team_wrapper container">
          <div className="top text_center">
            <p>MEET <span>OUR</span> TEAM</p>
            <p>Board Members and Senior Management</p>
          </div>
          <div className="bottom">
            <div className="card">
              <div className='image_container'>
              <img src= {teamTwo} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Dr Marygold Green</p>
                <p className="title_two">CEO</p>
                <p className="description">
                Dr Green is an accountant with over 25 years’ of experience in the Finance. 
                </p>
              </div>
              </div>
              <div className="card">
                <div className="image_container">
              <img src= {teamThree} alt="" />
              <div className="card_overlay"></div>
                </div>
              <div className="details">
                <p className="title">Dr Gland Lawson</p>
                <p className="title_two">Board Member</p>
                <p className="description">
                Dr Gland Lawson is an investment banker, an engineer and an academic.  
                </p>
              </div>
              </div>
              <div className="card">
                <div className="image_container">
              <img src= {teamFour} alt="" />
              <div className="card_overlay"></div>
                </div>
              <div className="details">
                <p className="title">Mrs Lena Weber</p>
                <p className="title_two">Board Member</p>
                <p className="description">
                Mrs Lena Weber serves as our Head of People, Culture and Communications.
                </p>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* ======= SECTION: TESTIMONIALS ======= */}
      <section id="testimonials">
        <div className="testimonials_wrapper container">
          <div className="top text_center">
           <p>Words from our customers.</p>
            <p>TESTIMONIALS</p>
            <div className="line"></div>
          </div>
          <div className="bottom">
          <div 
          data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
          className="content"
          >
            <img src={testimonialImage1} alt="" />
            <div className="details">
              <p className="name">Michelle Anderson</p>
              <p className="message">
              "Slick Union Bank has a user-friendly online platform and top-notch customer service make managing my finances a breeze. I highly recommend them!"
              </p>
            </div>
          </div>
          <div 
          data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="1100"
          data-aos-anchor-placement="top-bottom"
          className="content"
          >
            <img src={testimonialImage2} alt="" />
            <div className="details">
              <p className="name">James Bricks</p>
              <p className="message">
              "Running a business is challenging, but Slick Union Bank business banking services and a well informed staff have helped me grow and succeed. I'm grateful for their support!"
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}

export default About