import { Fragment } from "react";
import { FaPen } from "react-icons/fa";
import { publications } from "../data/personalData";

export default function Publication() {
  return (
    <Fragment>
        <section className="resume-section" id="publication">
      <div className="resume-section-content">
        <h2 className="mb-5 display-6">Publications</h2>
        <ul className="fa-ul mx-0 mb-0">
          {publications.map((pub, index) => {
            const {id, title, year, url, publisher } = pub
             return (<li key = {index} className="mb-3">
              <span className="mx-0">
                <i className="mx-1 inline"> <FaPen /></i>
              </span>
              <em> {title} </em>
              <div className="subheading mb-3 text-muted">Publisher: {publisher} - {year}</div>
            </li>)
          })}
         
        </ul>
      </div>
    </section>
    <hr className="m-0"/>
    </Fragment>
  );
}
