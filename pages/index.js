import { Fragment } from "react";
import { Container } from "react-bootstrap";

import Hero from "../components/Hero";


export default function Home() {
  return (
    <Fragment>
      <div className="intro route bg-image background">
      <Hero />
      </div>
       
    </Fragment>
  );
}
