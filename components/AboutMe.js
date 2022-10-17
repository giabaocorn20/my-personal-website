import Link from "next/link";
import { Fragment } from "react";

import bg from "../public/images/backgroundImage.PNG";
import Image from "next/image";
import { Col, Collapse, Container, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Fragment>
      <h1 className="display-1">About Me.</h1>
      <Container>
        <div className="h2 mb-5">
          I have an insatiable curiosity and always continuously seeks to
          improve myself and the projects. Talk less, act more!
        </div>

        <Row>
          <Col xs lg="5">
            <div className="h4 mb-3">Contact</div>
            <p>
              For any sort help / enquiry, shoot a{" "}
              <Link href="/contact"> mail </Link> and I'll get back. I swear.
            </p>
            <div className="h4 mb-3">Job Oppotunities</div>
            <p>
              Job Opportunities I'm looking for a job currently, If you see me
              as a good fit, check <Link href={`/CV`}> my CV</Link> and I'd love
              to work for you.
            </p>
            <figure className="position-relative">
              <Image
                alt="penguin"
                src={bg}
                className="img-fluid rounded float-left"
                width={400}
                height={300}
              />
            </figure>
            <figcaption className="small text-muted text-center mt-0">
              This penguin is so cute isn't it!?
            </figcaption>
          </Col>
          <Col>
            <p className="text-dark container lh-lg py-2">
              Welcome, friend. If you don't know me, I am Bao. You can call me
              Jason as well. I'm currently an electrical engineering student at
              Toronto Metropolitan University (TMU). I love study about nature
              especially Physics and Maths. I used to specialize in Maths during
              my secondary school years. As a kid, I have always facsinated with
              engineering topics like chip design, software engineering, etc. So
              when it come to choose major for University, I knew exactly what I
              had to choose!
              <br /> <br />
              Besides school, I often spend my time learning new skills such as
              new programming languages or new technology. I sometimes do some
              DIY projects that I can find online. It is a fun activity to do
              when I am free!. I love working out, drinking coffee and Coke,
              eating croissant and walking around the city at night. My
              favourite anime of all time is Neon Genesis Evagalion.
              <br /> <br />
              This website is intended to be my personal website where I put my
              CV, blog, and in the future, my prjects. Please, feel free to have
              a look around my website!
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
