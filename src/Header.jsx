import React, { Component, useState } from "react";
import data from "./data/data.js";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassw, setInputPass] = useState("");
  const [alertStyle, setAlertStyle] = useState("");
  const [alertText, setAlertText] = useState("");

  const navigate = useNavigate();

  const checkForm = (e) => {
    if (!inputEmail || !inputPassw) {
    e.preventDefault();
      setAlertStyle("alert alert-warning");
      setAlertText("Please, fill input!");
    } else {
      let user = data.find(
        (item) => item.mail === inputEmail && item.password === inputPassw
      );
      if (user) {
        setAlertStyle("alert alert-success");
        setAlertText("Successfully logged in");
        navigate("/characters");
      } else {
    e.preventDefault();
        setAlertStyle("alert alert-danger");
        setAlertText("WRONG EMAIL!");
      }
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  SHOP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  PAGES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ELEMENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  BUY
                </a>
              </li>
            </ul>

            <div className="div">
              <a className="navbar-brand mx-5" href="#">
                <img src="https://z9d7c4u6.rocketcdn.me/wp-content/themes/woodmart/images/wood-logo-dark.svg" />
              </a>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  FAQS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>

            <div className="d-flex" role="search">
              <div className="icon-1">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="fa-regular fa-user"></i>
                </button>
              </div>
              <div className="icon-2">
                <i className="fa fa-search"></i>
              </div>
              <div className="icon-3">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="icon-4">
                <i className="fa fa-shopping-cart"></i>
              </div>
              <div className="icon-4">
                <p className="dollar mb-0"> $0.00</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={checkForm}>
                <p className={alertStyle}>{alertText}</p>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setInputEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setInputPass(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////// */}
    </div>
  );
};

export default Header;
