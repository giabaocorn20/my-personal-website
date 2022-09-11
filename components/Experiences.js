import { Fragment, useState } from "react";
import { experiences } from "../data/personalData";
import { FaAngleDoubleRight } from 'react-icons/fa'
import { Button, ListGroup, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Experiences() {
  
  const [value, setValue] = useState(0)
  const { id, date, description, company, job } = experiences[value]

  return (
     <Fragment>
    <section class="resume-section" id="experience">
    <div class="resume-section-content">
        <h2 class="mb-5 display-6">Experience</h2>
        

        {experiences.map((exp, index) => {
            const { id, date, description, company, job } = exp
            return (
                <div key = {index} class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
                <h3 class="mb-0">{job}</h3>
                <div class="subheading mb-3 text-muted">{company}</div>
                <p>{description}</p>
            </div>
            <div class="flex-shrink-0"><span class="text-primary mx-lg-3">{date}</span></div>
        </div>
            )
        })}
       
    </div>
</section>
<hr class="m-0" />
</Fragment>
    // <section>
    //   <div className="title">
    //     <h2> Experience </h2>
    //     <div className="underline"></div>
    //   </div>

    //   <div className="jobs">
    //     {/*btn container*/}
    //     {/* index is the index of the current element being processed in the array */}
    //     <div className="btn-container">
    //       <Stack direction="horizontal" gap = {3}>
    //         {experiences.map((job, index) => {
    //           return (
    //             <Button
    //               active
    //               key={job.id}
    //               onClick={() => setValue(index)}
    //               className={`job-btn`}
    //               variant = "light"
    //             >
    //               {job.job}
    //             </Button>
    //           );
    //         })}
    //       </Stack>
    //     </div>
    //     <article className = 'job-info'>
    //       <h4>{company}</h4>
    //       <p className='job-date'>{date}</p>
    //       <ListGroup style={{ backgroundColor: 'black' }} variant = "flush">
    //         {description.map((duty, index) => { 
    //           return <ListGroup.Item key = {index} className = "job-desc">
    //             {duty}
    //           </ListGroup.Item>
    //         })}
    //       </ListGroup>
      
    //     </article>
    //   </div>

    // </section>
  );
}
