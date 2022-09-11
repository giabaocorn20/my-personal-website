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
          I'm an engineering student that loves building products and web
          applications. I barely talk, code more!
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
            <p className="text-dark container lh-lg">
              Welcome, friend. If you don't know me, I am Bao. You can call me
              Jason as well. I'm currently an electrical engineering student at
              Toronto Metropolitan University (TMU).
              <br />
              I've been developing full-stack application since 2021 as a side
              hobby of mine. There are just so many things to learn about web
              development.
              <br />
              After learning HTML and struggling with CSS (the terminologies is
              just so...uncool). But then I found out about CSS framework such
              ass Boostrap, Material UI,...my next stop will be Tailwind CSS and
              WebGl.
              <br />
              I've been coding in React, Node.js, Next.js, MongoDB, MySQL,
              Bootstrap, etc to name a few. Although I barely know the syntax!
              <br />
              I love drinking coffee and Coke, eating croissant and walking
              around the city at night.
              <br />
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
