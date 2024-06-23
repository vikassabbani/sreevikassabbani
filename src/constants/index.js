import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ``;

export const ABOUT_TEXT_01 = `I am a passionate data professional with a knack for crafting robust and scalable data-driven solutions. With nearly 4 years of hands-on experience, including a stint at a Big4 company as a data analyst and currently as a Business Analyst Intern at UNH, I have honed my skills in data analysis, machine learning, and deep learning, as well as technologies like Python, R, MySQL, AWS, Docker, Airflow and various database systems. My goal is to leverage my expertise to create innovative solutions that drive business growth.`
export const ABOUT_TEXT_02 = `My journey with data began with a profound curiosity for its mechanics, evolving into a career where I thrive on learning and tackling new challenges. I excel in collaborative environments, deriving satisfaction from solving complex problems to deliver valuable insights and actionable recommendations.`;
export const ABOUT_TEXT_03 = `Beyond data analytics, I stay active by exploring new technologies and contributing to innovative projects that push the boundaries of what's possible with data.`;

export const EXPERIENCES = [
  {
    year: "SEP 2023 - Present",
    role: "Business Analyst Intern",
    company: "Center for Business Analytics, UNH - Paul College",
    description: `Led a team of 5+ data analysts through end-to-end data analytics projects, boosting sales and customer engagement for local startups. Produced 30+ Tableau visualizations, enhancing decision-making by 25%, alongside developing ad hoc reports and KPI dashboards for data accuracy. Expertly re-engineered datasets with MS-SQL, Python, and Airflow, optimizing pipelines for SSRS compatibility. Integrated AWS S3 data into AWS SageMaker, reducing model development time by 35% and increasing predictive accuracy by 12%.`,
    technologies: ["Python", "R", "Tableau", "MS-SQL", "Statistical Analysis", "AWS", "Airflow"],
  },
  {
    year: "JAN 2021 - JUL 2023",
    role: "Data Analyst",
    company: "Deloitte Consulting LLP",
    description: `Contibuted my expertise at one of the largest healthcare providers in the USA, driving strategic initiatives and leading agile teams of over 30 members through release planning and sprint execution. By translating user needs into actionable stories and managing project backlogs, I accelerated delivery speed by 40%. Integrating complex datasets into Power BI, I delivered insightful visualizations and statistical analyses crucial for stakeholder decision-making. Specializing in healthcare data, I developed advanced models for patient health and disease progression forecasting, alongside a machine learning churn model that reduced customer turnover by 10% and provided key market insights.`,
    technologies: ["Power BI", "Python", "Machine Learning", "Excel", "Jira / Agile"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Boston, USA",
  phoneNo: "+1 (603) 842-2238",
  email: "sabbanisreevikas@gmail.com",
};
