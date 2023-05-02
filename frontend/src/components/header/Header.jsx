import React, { useRef, useState, useEffect, useContext } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/images/logo_blue.png";
import arrowDown from "../../assets/images/arrow_blue.png";
import { userContext } from "../../context/userContext";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const bankRef = useRef();
  const personalRef = useRef();
  // const [username, setUsername] = useState(ull);
  const {userInfo, setUserInfo } = useContext(userContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  window.addEventListener("click", (e) => {
    // console.log(e.target === bankRef.current)
    if (e.target !== bankRef.current && e.target !== personalRef.current) {
      setIsOpen(false);
      setIsOpenTwo(false);
    }
  });

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div>
      <nav id="header">
        <div className="header_wrapper container">
          <div onClick={() => setToggle(!toggle)} className="left">
            <Link to="/">
              <img className="header_logo" src={navLogo} alt="header logo" />
            </Link>
          </div>
          <div className="right">
            <ul className={toggle ? "nav_main toggle" : "nav_main"}>
              <li onClick={() => setToggle(!toggle)} className="links">
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={() => setToggle(!toggle)}>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="dropdown">
                <span
                  ref={bankRef}
                  onClick={() => setIsOpen(!isOpen)}
                  className="drop_main"
                >
                  Banking
                  <div>
                    <img src={arrowDown} alt="" />
                  </div>
                </span>
                <div
                  className={isOpen ? "content_parent show" : "content_parent"}
                >
                  <ul className={isOpen ? "nav_sub slide" : "nav_sub"}>
                    <li>
                      <Link to="/business">Business Banking</Link>
                    </li>
                    <li>
                      <Link to="/personal">Personal Banking</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="dropdown">
                <span
                  ref={personalRef}
                  onClick={() => setIsOpenTwo(!isOpenTwo)}
                  className="drop_main"
                >
                  Support
                  <div>
                    <img src={arrowDown} alt="" />
                  </div>
                </span>
                <div
                  className={
                    isOpenTwo ? "content_parent show" : "content_parent"
                  }
                >
                  <ul className={isOpenTwo ? "nav_sub slide" : "nav_sub"}>
                    <li className="head">Support Center</li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/complaint">Complaints</Link>
                    </li>
                    <li>
                      <Link to="/contact_us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="login_btn">
                {username && (
                  <>
                    <Link to="/" onClick={logout}>Logout</Link>
                  </>
                )}

                {!username && (
                  <>
                    <Link to="/login">Login</Link>
                  </>
                )}
              </li>
            </ul>
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className={toggle ? "humburger animate" : "humburger"}
          >
            <div className="burger_line"></div>
            <div className="burger_line"></div>
            <div className="burger_line"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
