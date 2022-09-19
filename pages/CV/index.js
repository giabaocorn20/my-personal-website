import jsPDF from "jspdf";
import Link from "next/link";
import { Fragment, useRef } from "react";
import { Button, Container, ListGroup, Stack } from "react-bootstrap";
import AboutMe from "../../components/AboutMe";
import AboutMeCV from "../../components/AboutMeCV";
import Awards from "../../components/Awards";
import Education from "../../components/Education";
import Experiences from "../../components/Experiences";
import Interests from "../../components/Interests";
import Publication from "../../components/Publication";

import Skills from "../../components/Skills";
import { sidebarData } from "../../data/sidebarData";
export default function CV() {
  return (
    <Fragment>
      <div className="containerd-fluid">
        <div className="row">
          <div className="col-auto min-vh-10 bg-light px-3 d-sm-none d-md-block d-none d-sm-block ">
            <ul className="sticky-top">
              <Stack className="py-5" gap={3}>
                {sidebarData.map((value, index) => {
                  return (
                    <li key = {index}>
                      <span className="h5">
                        <Link
                          href={`${value.link}`}
                          className="nav-item ms-1 d-none d-sm-inline px-2 nav-item nav-link px-2"
                        >
                          {value.title}
                        </Link>
                      </span>
                    </li>
                  );
                })}
                <a
                  target="_blank"
                  href="/resume/resume.pdf"
                >
                  <Button className="btn position-relative float-right">
                    Pls dont Download my CV now
                  </Button>
                </a>
              </Stack>
            </ul>
          </div>

          <div className="col">
            
              <h1 className="text-center display-1 my-3">
                Curriculum Vitae
              </h1>
              <Container className="p-4 my-2">
                <Stack gap={4} className="mx-auto">
                  <AboutMeCV />
                  <Experiences />
                  <Education />
                  <Publication />
                  <Skills />
                  <Interests />
                  <Awards />
                </Stack>
              </Container>
     
          </div>
        </div>
      </div>

      <div className="page-content-wrapper">
        <header></header>
      </div>
    </Fragment>
  );
}
