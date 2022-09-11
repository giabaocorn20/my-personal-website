import { Fragment } from "react";
import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import { IconBase } from "react-icons";
import { FaCheck, FaHtml5 } from "react-icons/fa";
import { programming_languages } from "../data/personalData";

export default function Skills() {
  return (
    <Fragment>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5 display-6">Skills</h2>

          <div className="h3 mb-9">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">
            <Stack gap={5} direction="horizontal">
              {programming_languages.map((value, index) => {
                const { id, icon, language } = value;
                return (
                  <li
                    alt={language}
                    key={id}
                    gap={3}
                    className=" fa list-inline-item"
                  >
                    <OverlayTrigger
                      key={language}
                      placement="top"
                      overlay={
                        <Tooltip >{language}</Tooltip>
                      }
                    > 
                      <i >{icon}</i>
                      </OverlayTrigger> 
                  </li>
                );
              })}
            </Stack>
          </ul>
          </div>
          {/* REMMBER TO UPDATE THIS LATER */}
          {/* <div className=" h3 mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
             <li>
              <span className="fa-li">
                <i className=""> <FaCheck /> </i>
              </span>
              Mobile-First, Responsive Design
            </li> 
          </ul>
        </div> */}
      </section>
      <hr className="m-0" />
    </Fragment>
  );
}
