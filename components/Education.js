
import { Fragment } from "react"
import { educations } from "../data/personalData"
import { Heading } from "@chakra-ui/react";
export default function Education() {
    

    return (
        <Fragment>
             <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5 display-6">Education</h2>
                    
                    {educations.map((value, index) => {
                        const {school, degrees,stream, gpa, year, description  } = value
                        return(
                            <div key = {index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <Heading as='h3' size='md' className="mb-0">{school}</Heading>
                        
                                <div className="subheading mt-1"><b>{degrees}</b></div>
                                <div>{stream}</div>
                                {gpa ?  <p>GPA: {gpa}</p> : <p></p>}
                                {description ? <p>{description}</p> : <p></p> }
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary mx-lg-3">{year}</span></div>
                        </div>
                        )
                    })}
                   
                </div>
            </section>
            <hr className="m-0" />
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