import { Fragment } from "react";
import { FaTrophy } from "react-icons/fa";
import { awards } from "../data/personalData";

export default function Awards() {
    return( 
  <Fragment>
    <section class="resume-section" id="awards">
      <div class="resume-section-content">
        <h2 class="mb-5 display-6">Awards & Certifications</h2>
        <ul class="fa-ul mx-0 mb-0">
          {awards.map((award, index) => {
            const {placement, contest, cert, date, school } = award
             return (<li key={index} className="mb-3">
              <span class="mx-0">
                <i class="text-warning mx-1"> <FaTrophy /></i>
              </span>
              {placement} - {contest} - {cert} - {date}.
            </li>)
          })}
         
        </ul>
      </div>
    </section>
  </Fragment>)
}
