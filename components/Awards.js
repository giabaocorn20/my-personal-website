import { Fragment } from "react";
import { FaTrophy } from "react-icons/fa";
import { awards } from "../data/personalData";
import { Button } from "react-bootstrap"
export default function Awards() {
    return( 
  <Fragment>
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5 display-6">Awards & Certifications</h2>
        <ul className="fa-ul mx-0 mb-0">
          {awards.map((award, index) => {
            const {cert, date, school, award_true, url } = award
             return (<li key={index} className="mb-3">
              <span className="mx-0">
                <i className="text-warning mx-1"> <FaTrophy /></i>
              </span>
               <a
                  target="_blank"
                  rel="noreferrer"
                  href= {url}
                >
                 {cert} - {date} - {school}
                
                </a> 
                {award_true}
            </li>)
          })}
         
        </ul>
      </div>
    </section>
  </Fragment>)
}
