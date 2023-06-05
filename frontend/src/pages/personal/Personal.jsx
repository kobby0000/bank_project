import React, {useEffect} from 'react';
import "./personal.css";
import CardTwo from '../../components/cardTwo/CardTwo';
import homeIcon from "../../assets/images/homeIcon.png";
import saveImage from "../../assets/images/24922250_2202_w037_n003_199b_p1_199.jpg";
import ContactSection from '../../components/contactSection/ContactSection';

import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";


function Personal() {
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div>
        <section id="Personal_showcase">
        <div className="Personal_showcase_wrapper">
          <h1
           data-aos="zoom-in"
           data-aos-easing="ease-in"
           data-aos-duration="900"
           data-aos-anchor-placement="top-bottom"
          className='text_center'
          >
            Personal Banking</h1>
        </div>
      </section>

        {/* ======= SECTION : PERSONAL_WELCOME ======= */}
        <section id="Personal_welcome">
        <div className="Personal_welcome_wrapper">
          <div className="top text_center">
            <p
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            >
              Welcome to Slick Union Business Banking</p>
            <p
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            >Join Our Family</p>
            <div className="line"></div>
            <p
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-bottom"
            >We will match you with a loan program that meet your financial need. In short term liquidity, by striving to .</p>
          </div>

          <div className="bottom">
            <div className="container bottom_container">
              <p 
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              className="title"
              >
                BUSINESS BANKING Solutions</p>
              <div className="cards">
                <div
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="900"
                data-aos-anchor-placement="top-bottom"
                >
                <CardTwo 
                src= {homeIcon}
                alt= "business banking"
                title= "Corporate and Institutional Banking Improved efficiency"
                text= "Improved efficiency"
                />
                </div>
                <div
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1100"
                data-aos-anchor-placement="top-bottom"
                >
                 <CardTwo 
                src= {homeIcon}
                alt= "business banking"
                title= "Retail & Small Business Banking"
                text= "Flexible Banking"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SECTION : PERSONAL_SAVE ======= */}
      <section id="personal_save">
        <div className="personal_save_wrapper container">
          <div className="top">
            <div className="left">
              <p
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              className="title"
              >
                Save Faster, Save Better</p>
              <p
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              className="title"
              >
                Vacation, a new home, college funds, or retirement—whatever you’re saving for, our savings accounts give you a safe and easy way to grow your money while keeping it available.</p>
            </div>
            <div 
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom"
            className="right"
            >
              <img src= {saveImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ======= SECTION: PERSONAL_CONTACT ======= */}
      <section id="personal_contact">
        <ContactSection />
      </section>
      <ScrollToTop />
    </div>
  )
}

export default Personal