import { Fragment } from "react";

import { Button, Container, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed";
import "./stars.module.scss";
import { BsPersonFill } from "react-icons/bs";
import Link from "next/link";
import SocialList from "./SocialList";
export default function Hero() {
  return (
    <Fragment>
      <div id="home" className="intro route bg-image ">
        <div className="intro-content display-table ">
          <div className="table-cell">
            <div className="container">
              <BsPersonFill color="black" fontSize="5em" />
              <h1 className="intro-title mb-4 display-1 text-dark">
                Hello, I am <span className="text-danger">Bao</span>
              </h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    className="text-dark"
                    strings={["Student", "Programmer", "Electrical Engineer"]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <div className="container mb-3">
    <iframe
      width="50%"
      height={160}
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320948087&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    />
  </div>
              
              <p className="lead pt-3 text-dark">
                Have a look at <Link href="/CV">my CV</Link> or{" "}
                <Link href="blog">my blog</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
