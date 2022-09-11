import { Fragment } from "react";
import { FaPen } from "react-icons/fa";
import { publications } from "../data/personalData";

export default function Publication() {
  return (
    <Fragment>
        <section class="resume-section" id="publication">
      <div class="resume-section-content">
        <h2 class="mb-5 display-6">Publications</h2>
        <ul class="fa-ul mx-0 mb-0">
          {publications.map((pub, index) => {
            const {id, title, year, url, publisher } = pub
             return (<li key = {index} className="mb-3">
              <span class="mx-0">
                <i class="mx-1 inline"> <FaPen /></i>
              </span>
              <em> {title} </em>
              <div class="subheading mb-3 text-muted">Publisher: {publisher} - {year}</div>
            </li>)
          })}
         
        </ul>
      </div>
    </section>
    <hr className="m-0"/>
    </Fragment>
  );
}
