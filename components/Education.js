
import { Fragment } from "react"
import { educations } from "../data/personalData"
export default function Education() {
    

    return (
        <Fragment>
             <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5 display-6">Education</h2>
                    
                    {educations.map((value, index) => {
                        const {school, degrees,stream, gpa, year  } = value
                        return(
                            <div key = {index} class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">{school}</h3>
                              
                                <div class="subheading mb-3">{degrees}</div>
                              
                                <div>{stream}</div>
                                <p>GPA: {gpa}</p>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary mx-lg-3">{year}</span></div>
                        </div>
                        )
                    })}
                   
                </div>
            </section>
            <hr class="m-0" />
        </Fragment>
        // <section>
        //     <h2>Education</h2>
        //     <div>
        //         <div>Study at: {school}</div>
        //         <div>Gradutation date: {graduation_year}</div>
        //         <div>GPA: {gpa}</div>
        //         <div>Degree:</div>
        //         <ul> 
        //             {degrees.map((degree, index) => { 
        //                 return (
        //                         <li key = {index} >{degree}</li>
        //                 )
        //             })}
        //         </ul>
        //     </div>
        // </section>
    )
}