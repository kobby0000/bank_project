import { useEffect} from "react";
import "./home.css";
import { Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { userContext } from "../../context/userContext";

// images
import slideImage1 from "../../assets/images/teenager-carrying-young-girl-outdoors.jpg";
import slideImage2 from "../../assets/images/businessteam.jpg";
import slideImage3 from "../../assets/images/loan.jpg";
import slideImage4 from "../../assets/images/happy-family-with-savings-piggy-banks.jpg";
import complaintImg from "../../assets/images/wpf_ask-question.png";
import businessImg from "../../assets/images/homeIcon_white.png";
import personalImg from "../../assets/images/bankingIcon_white.png";
import supportImg from "../../assets/images/carbon_settings-view.png";
import budgetImg from "../../assets/images/budget.png";
import cardImg1 from "../../assets/images/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign.jpg";
import bankIcon from "../../assets/images/bankingIcon.png";
import homeIcon from "../../assets/images/homeIcon.png";
import chartIcon from "../../assets/images/chart.png";
import tombIcon from "../../assets/images/tomb.png";
import fundsIcon from "../../assets/images/funds.png";
import loanCardImage from "../../assets/images/loan_card.png";

import SquareCard from "../../components/squareCard/SquareCard";
import CardTwo from "../../components/cardTwo/CardTwo";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";


function Home() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);
  // const {setUserInfo} = useContext(userContext);

  useEffect(() => {
    AOS.init();
  }, []);

  // async function login(e) {
  //   e.preventDefault();
  //  const response = await fetch('https://slick-union-bank.onrender.com/login', {
  //     method: "POST",
  //     body: JSON.stringify({username,password}),
  //     headers: {"Content-Type": "application/json"},
  //     credentials: "include",
  //   });
  //   if (response.ok) {
  //     response.json().then(userInfo => {
  //       setUserInfo(userInfo);
  //       setRedirect(true);
  //     })
  //   } else {
  //     alert("wrong credentials");
  //   }
  // }

  // if (redirect) {
  //   return <Navigate to={"/profile"} />
  // }

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

                  <img className="first_slide_image" src={slideImage1} alt="side_image" />
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
                  <p className="text">JOIN us for the best and amazig experience and grow you businessto any heeight with our professional stuff.</p>
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

          {/* <form onSubmit={login} className="home_form">
            <p>Account Login</p>
            <label>User ID</label>
            <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />

            <label>Password</label>
            <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/">Forgot Password?</Link>
            <button className="home_form_button btn">Login</button>
          </form> */}
        </div>
      </section>


                        {/* SECTION: HOME_BOXES */}
      <section id="home_boxes">
        <div className="home_boxes_wrapper container">
          <div className="card_wrapper">
          <SquareCard 
          title= "Business Banking"
          src = {businessImg}
          alt = "credit union business banking"
          />
          </div>

          <div className="card_wrapper">
          <SquareCard
          title= "Personal Banking"
          src = {personalImg}
          alt = "credit union personal banking"
          />
          </div>

          <div className="card_wrapper">
          <SquareCard
          title= "Support"
          src = {supportImg}
          alt = "credit union banking support or help"
          />
          </div>

          <div className="card_wrapper">
          <SquareCard
          title= "Complaint"
          src = {complaintImg}
          alt = "credit union bank complaint "
          />
          </div>
      
        </div>
      </section>

                             {/* SECTION : HOME_HELP */}
<section id="home_help">
  <div className="home_help_wrapper container">
    <div className="top text_center">
      <img src= {budgetImg} alt="" />
      <p>Let’s Achieve  your financial stability together.</p>
      <p>We can help <div className="line"></div></p>
      <p>We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them within 24 hours of application.</p>
    </div>

    <div className="bottom">
      <div 
       data-aos="fade-up"
       data-aos-easing="ease-in"
       data-aos-duration="700"
      className="card"
      >
        <img src={cardImg1} alt="" />
        <div className="text">
          <p>Annual Report</p>
          <p>See our 2022 annual report and our Anniversary.</p>
          <a className="btn_2 text_center" href="/">Learn More</a>
        </div>
      </div>
      <div 
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="900"
      className="card"
      >
        <img src= {cardImg1} alt="" />
        <div className="text">
          <p>Paypal Scams</p>
          <p>See our 2022 annual report and our Anniversary.</p>
          <a className="btn_2 text_center" href="/">Learn More</a>
        </div>
      </div>
      <div 
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="1100"
      className="card"
      >
        <img src={cardImg1} alt="" />
        <div className="text">
          <p>Vision,  Mission, Core Values</p>
          <p>See our 2022 annual report and our Anniversary.</p>
          <a className="btn_2 text_center" href="/">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ======= SECTION:PARTNERING ======= */}
<section id="partnering">
  <div className="partnering_wrapper">
    <div className="top text_center container">
      <p className="head">Partnering businesses reach their full Potential.</p>
      <p className="head">We have the experience</p>
      <div className="line"></div>
      <p>We will match you with a loan program that meet your financial need. In short term liquidity, by striving to.</p>
    </div>

    <div className="bottom">
      <div className="card_box">
      <div className="home_business">
        <p 
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="800"
        className="partnering_title"
        >
          Business Banking
          </p>
        <div className="partnering_cards">
          <div
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >
          <CardTwo
          src={bankIcon}
          alt="sick union personal banking icon"
          title="Fixed Deposits"
          text="hat meet yourrm liquidity, by striving to  liquidity, by ."
          />
          </div>
          <div
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >
          <CardTwo
          src={bankIcon}
          alt="sick union personal banking icon"
          title="Multiple Accounts"
          text="hat meet yourrm liquidity, by striving to  liquidity, by ."
          />
          </div>

          <div
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >
          <CardTwo
          src={bankIcon}
          alt="sick union personal banking icon"
          title="Bonds & Guarantees"
          text="hat meet yourrm liquidity, by striving to  liquidity, by ."
          />
          </div>
          <div
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >
          <CardTwo
          src={bankIcon}
          alt="sick union personal banking icon"
          title="Letter of Credit"
          text="hat meet yourrm liquidity, by striving to  liquidity, by ."
          />
          </div>
        </div>
      </div>
      </div>

      <div className="home_personal">
        <div className="card_box">
      <div className="home_business">
        <p 
        className="partnering_title"
        data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          personal Banking
          </p>
        <div className="partnering_cards">
          <div
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >
          <CardTwo
          src={homeIcon}
          alt="sick union personal banking icon"
          title="Fixed Deposits"
          text="hat meet yourrm liquidity, by striving to  liquidity, by ."
          />
          </div>
          <div
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >
          <CardTwo
          src={homeIcon}
          alt="sick union personal banking icon"
          title="Multiple Accounts"
          text="hat meet yourrm liquidity, by striving to  liquidity, by ."
          />
          </div>
          <div
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >
          <CardTwo
          src={homeIcon}
          alt="sick union personal banking icon"
          title="Bonds & Guarantees"
          text="hat meet yourrm liquidity, by striving to  liquidity, by ."
          />
          </div>
          <div
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="800"
          >
          <CardTwo
          src={homeIcon}
          alt="sick union personal banking icon"
          title="Letter of Credit"
          text="hat meet yourrm liquidity, by striving to  liquidity, by ."
          />
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</section>


{/* ======= SECTION : LOAN ======= */}
<section id="home_loan">
  <div className="home_loan_wrapper container">
    <div className="top">
      <p className="heading">Our Loan Acquisition Process.</p>
<div className="line_two"></div>
      <p>Summary of getting a loan at  Slick Union Bank.</p>
    </div>

    <div className="bottom">
    <div className="left">
      <div className="process">
        <div className="icon">
          <div
          data-aos="zoom-up"
          data-aos-easing="ease-in"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
          >
          <img src={chartIcon} alt="" />
          </div>
          <div 
          data-aos="zoom-up"
          data-aos-easing="ease-in"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
          className="rod"
          ></div>
        </div>
        <div className="description">
          <p 
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="700" 
          data-aos-anchor-placement="top-bottom"
          >Check Loan Rate</p>
          <p
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
          >Select amount and the rate associated with it.</p>
        </div>
      </div>
      <div className="process">
        <div className="icon">
          <div
          data-aos="zoom-up"
          data-aos-easing="ease-in"
          data-aos-duration="600"
          >
          <img src={tombIcon} alt="" />
          </div>
          <div
          data-aos="zoom-up"
          data-aos-easing="ease-in"
          data-aos-duration="600"
          className="rod_two"
          ></div>
        </div>
        <div className="description">
          <p
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="700"
          data-aos-anchor-placement="top-bottom"
          >Choose Loan Offer</p>
          <p
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
          >Choose an offer that best works for you.</p>
        </div>
      </div>
      <div className="process">
        <div className="icon">
          <div 
          data-aos="zoom-up"
          data-aos-easing="ease-in"
          data-aos-duration="700"
          data-aos-anchor-placement="top-bottom"
          >
          <img src={fundsIcon} alt="" />
          </div>
        </div>
        <div className="description">
          <p
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="700"
          data-aos-anchor-placement="top-bottom"
          >Get Your Funds</p>
          <p
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
          >Your money goes straight to account provided</p>
        </div>
      </div>
    </div>
    <div
     data-aos="fade-up"
     data-aos-easing="ease-in"
     data-aos-duration="700"
     data-aos-anchor-placement="top-center"
    className="right">
      <img src={loanCardImage} alt="" />
    </div>
    </div>
  </div>
</section>
<ScrollToTop />
    </div>
  );
}

export default Home;
