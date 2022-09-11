import { personal_details } from "../data/personalData"

export default function PersonalDetails() { 
    const {name, DOB, email, text} = personal_details
    return (
        <div>
            <h2>Personal Details</h2>
            <div>Name: {name.first + " " + name.middle + " " +  name.last}  ({name.nickname + " " + name. first}) </div>
            <div>D.O.B: {DOB} </div> 
            <div>E-mail: { email} </div>
            <div>About me: {text} </div>
        </div>
    )
}