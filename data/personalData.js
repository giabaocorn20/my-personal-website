import { FaCss3, FaHtml5, FaNpm, FaPython, FaReact, FaC, FaStackOverflow, FaGit, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbLetterC } from "react-icons/tb"
import { SiJavascript, SiMongodb, SiNextdotjs } from "react-icons/si"
export const personal_details = {
  name: {
    first: "Nguyen",
    middle: "Duong Gia",
    last: "Bao",
    nickname: "Jason",
  },
  address: "58 Le Duan St, Phuoc Trung Ward",

  DOB: "12/06/2003",
  phone: "+84 862 092 339",
  email: "giabao.corn20@gmail.com",
  text: "Current undergraduate freshman in electrical engineering with dozens of classroom hours in computer science and web development related courses. Seeking for job experience in techonological field",
};
export const publications = [
  {
    id:1,
    year: "2021", 
    title: "Business Model Innovation (BMI) as a resilience strategy against COVID-19 pandemic. A qualitative study of Vietnamese SMEs in the tourism industry",
    SN: "none",
    publisher: "Trade and Industry Review"
  }
]
export const social_links = [
  {
    id: 1,
    social: "facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/giabao.corn1206/"
  },
  {
    id: 2, 
    social: "LinkedIn", 
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/bao-nguyen-a97abb194/"
  },
  {
    id: 3, 
    social: "Github", 
    icon: <FaGithub />,
    link: "https://github.com/giabaocorn20?tab=repositories"
  },
]

export const educations = [
    {
  id: 1,
  school: "Toronto Metropolitan University",
  year: "September 2021 - 2025",
  degrees: "Bachelor of Engineering",
  stream: "Electrical Engineering",
  thesis_title: "dont have",
  gpa: "4.0",
},
{
    id: 2,
  school: "Monarch Park Collegiate Institute",
  year: "September 2018 - 2021",
  degrees: "High School Diploma",
  stream: "",
  thesis_title: "",
  gpa: "95%",
}
];

export const experiences = [
  {
    id: 1,
    job: "English Teaching Assistant",
    company: "The Forum Education",
    date: "May 2022 - September 2022 (Part-time)",
    description:
      "Taking a small group of learners for additional lessons. Preparing class registers and accurately and timely updating learners’ records.Monitoring and recording pupil activities. Regularly giving feedback to the teacher on pupil progress and behaviour. Producing individual learning plans tailored to specific students and their learning needs",
  },
  {
    id: 2,
    job: "Math Tutor",
    company: "The Forum Education",
    date: "June 2022 - September 2022 (Part-time)",
    description:
      "Participating in training and development sessions to improve tutoring practices or learn new tutoring techniques. Providing feedback to students using positive reinforcement techniques to encourage, motivate, or build confidence in students.",
  },
];

export const awards = [
  {
    id: 1,
    placement: "2nd place",
    contest: "Vung Tau Science Fair",
    cert: "Computer Science topic",
    school: "Nguyen Du Secondary School",
    date: "2017",
    url: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quaerat temporibus praesentium quisquam ab unde veritatis animi atque repudiandae sit harum sapiente consectetur sunt perspiciatis fugit omnis reiciendis suscipit expedita?",
  },
  {
    id: 2,
    placement: "",
    contest: "",
    cert: "Web Development Bootcamp",
    school: "Udemy - Colt Steele",
    date: "Mar 2022",
    url: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quaerat temporibus praesentium quisquam ab unde veritatis animi atque repudiandae sit harum sapiente consectetur sunt perspiciatis fugit omnis reiciendis suscipit expedita?",
  },
  {
    id: 3,
    placement: "",
    contest: "",
    cert: "React Completed Guide",
    school: "Academind",
    date: "Apr 2022",
    url: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quaerat temporibus praesentium quisquam ab unde veritatis animi atque repudiandae sit harum sapiente consectetur sunt perspiciatis fugit omnis reiciendis suscipit expedita?",
  },
];
export const programming_languages = [
  {
    id: 1,
    language:"Python",
    icon: <FaPython />,
  },
  {
    id: 2,
    language:"Javascript",
    icon: <SiJavascript/>,
  },
  {
    id: 3,
    language: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 4,
    language: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 5,
    language: "React.js",
    icon: <FaReact />,
  },
  {
    id: 6, 
    language:"NPM",
    icon: <FaNpm />
  },
  {
    id: 7, 
    language:"C language",
    icon: <TbLetterC />
  },
  {
    id: 8, 
    language:"MongoDB",
    icon: <SiMongodb />
  },
  {
    id: 9, 
    language:"Next.js",
    icon: <SiNextdotjs />
  },
  {
    id: 10, 
    language:"Git",
    icon: <FaGit />
  },

];
