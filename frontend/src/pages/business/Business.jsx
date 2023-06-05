import React, {useEffect} from 'react';
import "./business.css";
import CardTwo from "../../components/cardTwo/CardTwo";
import businessIcon from "../../assets/images/bankingIcon.png";
import ContactSection from '../../components/contactSection/ContactSection';
import ScrollToTop from '../../components/scollToTop/ScrollToTop';

import AOS from "aos";
import "aos/dist/aos.css";

function Business() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="business_showcase">
        <div className="business_showcase_wrapper">
          <h1 
          data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
          className='text_center'
          >
            Business Banking</h1>
        </div>
      </section>

      {/* ======= SECTION : BUSINESS_WELCOME ======= */}
      <section id="business_welcome">
        <div className="business_welcome_wrapper">
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
            >
              Join Our Family</p>
            <div className="line"></div>
            <p
             data-aos="zoom-in"
             data-aos-easing="ease-in"
             data-aos-duration="1200"
             data-aos-anchor-placement="top-bottom"
            >
              We will match you with a loan program that meet your financial need. In short term liquidity, by striving to .</p>
          </div>

          <div className="bottom">
            <div className="container">
              <p className="title"
               data-aos="zoom-in"
               data-aos-easing="ease-in"
               data-aos-duration="900"
               data-aos-anchor-placement="top-bottom"
              >
                BUSINESS BANKING Solutions</p>
              <div className="cards">
                <div
                 data-aos="zoom-in"
                 data-aos-easing="ease-in"
                 data-aos-duration="800"
                 data-aos-anchor-placement="top-bottom"
                >
                <CardTwo 
                src= {businessIcon}
                alt= "business banking"
                title= "Corporate and Institutional Banking Improved efficiency"
                text= "Improved efficiency"
                />
                </div>
                <div
                 data-aos="zoom-in"
                 data-aos-easing="ease-in"
                 data-aos-duration="800"
                 data-aos-anchor-placement="top-bottom"
                >
                 <CardTwo 
                src= {businessIcon}
                alt= "business banking"
                title= "Retail & Small Business Banking"
                text= "Flexible Banking"
                />
                </div>
                <div
                 data-aos="zoom-in"
                 data-aos-easing="ease-in"
                 data-aos-duration="800"
                 data-aos-anchor-placement="top-bottom"
                >
                 <CardTwo 
                src= {businessIcon}
                alt= "business banking"
                title= "Trade Finance"
                text= "Trusted Trade Finance needs"
                />
                </div>
                <div
                 data-aos="zoom-in"
                 data-aos-easing="ease-in"
                 data-aos-duration="800"
                 data-aos-anchor-placement="top-bottom"
                >
                 <CardTwo 
                src= {businessIcon}
                alt= "business banking"
                title= "Treasury & Global Markets"
                text= "FX products and Money Market Services"
                />
                </div>
                <div
                 data-aos="zoom-in"
                 data-aos-easing="ease-in"
                 data-aos-duration="800"
                 data-aos-anchor-placement="top-bottom"
                >
                 <CardTwo 
                src= {businessIcon}
                alt= "business banking"
                title= "Correspondent Banking"
                text= "Leading Global network"
                />
                </div>
                <div
                 data-aos="zoom-in"
                 data-aos-easing="ease-in"
                 data-aos-duration="800"
                 data-aos-anchor-placement="top-bottom"
                >
                 <CardTwo 
                src= {businessIcon}
                alt= "business banking"
                title= "Payment Solutions"
                text= "Fast Transfers worldwide"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SECTION: BUSINESS_GET ======= */}
      <section id="business_get">
       <ContactSection />
      </section>
      <ScrollToTop />
    </div>
  )
}

export default Business