import { Fragment } from "react";

import { Container, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed"
import "./stars.module.scss";
import SocialList from "./SocialList";
import backgroundImage from "../public/images/backgroundImage.PNG"
import Image from "next/image";
import { BsPersonFill } from "react-icons/bs";
export default function Hero() {
    return (
      <Fragment>
      <div id="home" className="intro route backgorund ">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
       
        <div className="intro-content display-table ">
          <div className="table-cell">
            <div className="container"> 
            <BsPersonFill color="black" fontSize="5em" />
              <h1 className="intro-title mb-4 display-1 text-dark">Hello, I am <span className="text-danger">Bao</span></h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed className="text-dark"
                    strings={[
                      "Student",
                      "Programmer",
                      "Electrical Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <button
                  className="btn btn-warning btn js-scroll px-4 mb-5"
                  href="/CV"
                  role="button"
                >
                  View My CV
                </button>
              </p>
            </div> 
          </div>
        </div>
      </div>
      </Fragment>
      
    );
  // return (
  //   <Fragment>
  //     <div className="jumbotron my-3 jumbotron-fluid">
  //       <Container>
  //       <h1 className="display-3 ">STUDENTe</h1>
  //       <p className="lead">PROGRAMMER</p>
  //       <p className="text-muted">Here is my social media</p>
  //       <SocialList />
  //       <hr className="my-4" />
  //       <p></p>
  //       <a className="btn btn-primary btn-lg" href="/contact" role="button">Get in Touch </a>
  //       </Container>
        
  //     </div>
      
      
  //   </Fragment>
  // );
}
