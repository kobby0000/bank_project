import React, { useEffect,useState} from "react";
import "./home.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import slideImage1 from "../../assets/images/teenager-carrying-young-girl-outdoors.jpg";
import slideImage2 from "../../assets/images/african-business-male-people-shaking-hands.jpg";
import slideImage3 from "../../assets/images/business-team-planning-marketing-strategy.jpg";
import slideImage4 from "../../assets/images/happy-family-with-savings-piggy-banks.jpg";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();
    fetch('http://locallhost:400/login', {
      method: "POST",
      body: JSON.stringify({username,password}),
      header: {"Content-Type": "applocation/json"},
    })
  }


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="home">
        <div className="home_showcase_wrapper">
          <div className="home_swiper_background">
            <Swiper
              // navigation={true}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[ Autoplay]}
              className="mySwiper"
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="500"
                className="left">
                  <p>Personal Banking</p>
                  <p className="text">Savings is the the way to your bigest dreams for you and the family.</p>
                  <Link className="btn_main" to="/">Learn more</Link>
                  </div>
                <div>
          <div className="blue_overlay"></div>

                  <img src={slideImage1} alt="side_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="left">
                  <p>Business Banking</p>
                  <p className="text">Slick Credit Union gives the proffesional and most suitable business solution.let's talk.</p>
                  <Link className="btn_main" to="/">Learn more</Link>
                  </div>
                  <div>
          <div className="blue_overlay"></div>
                <img src={slideImage2} alt="side_image" />
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="left">
                  <p>CREDIT FREE LOAN</p>
                  <p className="text">JOIN u</p>
                  <Link className="btn_main" to="/">Learn more</Link>
                  </div>
                  <div>
          <div className="blue_overlay"></div>
                <img src={slideImage3} alt="side_image" />
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
               
                className="left">
                  <p>Secure Your Child's Future</p>
                  <p className="text">Our children are our world and our actions determine their future.</p>
                  <Link className="btn_main" to="/">Contact Us</Link>
                  </div>
                  <div>
          <div className="blue_overlay"></div>
                <img src={slideImage4} alt="side_image" />
                  </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <form onSubmit={login} className="home_form">
            <p>Account Login</p>
            <label>User ID</label>
            <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />

            <label>Password</label>
            <input 
            type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/">Forgot Password?</Link>
            <button className="home_form_button btn">Login</button>
          </form>
        </div>
      </section>
      <h1>home</h1>
    </div>
  );
}

export default Home;
