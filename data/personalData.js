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
  address: "16 Northgate Dr, North York, ON, M3K 1P9",

  DOB: "12/06/2003",
  phone: "+1 (647)-829-0486",
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
    job: "Tutor",
    company: "The Forum Education",
    date: "May 2022 - September 2022 (Part-time)",
    description:
      "Taking a small group of learners for additional lessons. Preparing class registers and accurately and timely updating learners’ records.Monitoring and recording pupil activities. Regularly giving feedback to the teacher on pupil progress and behaviour. Producing individual learning plans tailored to specific students and their learning needs",
  },
  {
    id: 2,
    job: "Barista",
    company: "Chatime",
    date: "April 2023",
    description:
      "Prepared and served high-quality tea beverages to customers, ensuring that they received prompt and courteous service. Effectively communicated product information and promotions to customers, resulting in increased sales and customer satisfaction. Collaborated with team members to ensure smooth operations and efficient customer service, resulting in a positive impact on the organization. Adapted quickly to changes in sales strategies and product offerings, resulting in successful sales outcomes.",
  },
  {
    id: 2,
    job: "Hacker",
    company: "Hackathon - Methacks 2023",
    date: "May 2023",
    description:
      "Using CohereAI to create a review analyzer, extract keywords and summarize review which boost revenue for businesses",
  },
];

export const awards = [
  {
    id: 1,
    cert: "Web Development Bootcamp",
    school: "Udemy - Colt Steele",
    date: "Mar 2022",
    url: "/udemy_certs/web_dev_cert.pdf",
  },
  {
    id: 3,
    cert: "React Completed Guide",
    school: "Academind",
    date: "Apr 2022",
    url: "",
  },
  {
    id: 4,
    cert: "Data Analyst in Python",
    school: "Dataquest by TMU",
    date: "Sep 2022 - April 2023",
    url: "/dataquest_certs.zip",
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
