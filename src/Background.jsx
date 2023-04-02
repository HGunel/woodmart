import React, { Component } from "react";

export class Background extends Component {
  render() {
    return (
      <div className="back-img ">
        <div className="row">
          <div className=" col-12 col-md-6 ">
            <div className="img">
              <img
                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/05/book-slider-s3-img.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-div">
              <div className="text-1">

                <h5>WORLD BESTELLERS</h5>
              </div>
              <div className="text-2">
                <h1>Escape Book Charles Fredrick</h1>
              </div>
              <div className="text-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta ipsa praesentium rerum, architecto in repudiandae
                  perspiciatis sunt beatae quis eaque placeat a! Sequi
                  repellendus assumenda asperiores vero aperiam, voluptate quod.
                </p>
              </div>
              <div className="button">
                <button className="btn-1  btn-lg me-3">
                  ADD TO CART
                </button>
                <button className="btn-2 bg-transparent btn-lg">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
