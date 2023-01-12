import { Fragment } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { programming_languages } from "../data/personalData";
import { Stack, Heading, Flex, Container } from '@chakra-ui/react'

export default function Skills() {
  return (
    <Fragment>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5 display-6">Skills</h2>

          <div className="h3 mb-4">Programming Languages & Tools</div>
          <ul className=" list-inline dev-icons">
           
          <div className="row">
            <Flex direction={"row"} minWidth='max-content'>
          {programming_languages.map((value, index) => {
                const { id, icon, language } = value;
                return (
                  <Heading
                    alt={language}
                    key={id}
                    className="fa col-size-1 mx-2 list-inline-item "
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
                  </Heading>
                );
              })}
              </Flex>
          </div>
            
            
          </ul>
          </div>
      </section>
      <hr className="m-0" />
    </Fragment>
  );
}
