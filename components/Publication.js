import { Fragment } from "react";
import { FaPen } from "react-icons/fa";
import { publications } from "../data/personalData";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function Publication() {
  return (
    <Fragment>
      <section className="resume-section" id="publication">
        <div className="resume-section-content">
          <h2 className="mb-5 display-6">Publications</h2>
          <ul className="fa-ul mx-0 mb-0">
            {publications.map((pub, index) => {
              const { id, title, year, url, publisher } = pub;
              return (
                <List key={index} className="mb-3">
                  <ListItem className="mx-0">
                    <ListIcon as={FaPen} className="mx-1 inline" />

                    <em> {title} </em>
                  </ListItem>
                  <div className="subheading mb-3 text-muted">
                    Publisher: {publisher} - {year}
                  </div>
                </List>
              );
            })}
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </Fragment>
  );
}
