import { Fragment } from "react";
import { FaTrophy } from "react-icons/fa";
import { awards } from "../data/personalData";

import { Link } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";


export default function Awards() {
  return (
    <Fragment>
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5 display-6">Awards & Certifications</h2>
          <ul className="fa-ul mx-0 mb-0">
            {awards.map((award, index) => {
              const { cert, date, school, award_true, url } = award;
              return (
                <List key={index} spacing={3} className="mb-3">
                  <ListItem>
                    <ListIcon as={FaTrophy} color="yellow.500" />
                    <u>
                      <Link color="blue.500" href={url}>
                        {cert} - {date} - {school}
                      </Link>
                    </u>
                  </ListItem>
                </List>
              );
            })}
          </ul>
        </div>
      </section>
    </Fragment>
  );
}
