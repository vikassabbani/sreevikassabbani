import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = ``;

export const ABOUT_TEXT_01 = `I am a passionate data professional with a knack for crafting robust and scalable data-driven solutions. With nearly 4 years of hands-on experience, including a stint at a Big4 company as a data analyst and currently as a Business Analyst Intern at UNH, I have honed my skills in data analysis, machine learning, and deep learning, as well as technologies like Python, R, MySQL, AWS, Docker, Airflow and various database systems. My goal is to leverage my expertise to create innovative solutions that drive business growth.`
export const ABOUT_TEXT_02 = `My journey with data began with a profound curiosity for its mechanics, evolving into a career where I thrive on learning and tackling new challenges. I excel in collaborative environments, deriving satisfaction from solving complex problems to deliver valuable insights and actionable recommendations.`;
export const ABOUT_TEXT_03 = `Beyond data analytics, I stay active by exploring new technologies and contributing to innovative projects that push the boundaries of what's possible with data.`;

export const EXPERIENCES = [
  {
    year: "SEP 2024 - Present",
    role: "Data Engineer",
    company: "Commercial Business Analyst",
    description: [
      "Automated manual data transformation workflows using PySpark and Azure Data Lake Storage, improving processing efficiency and scalability.",
      "Extracted and transformed data from Azure SQL Server using PySpark and SQL, improving data availability for business users.",
      "Orchestrated data pipelines using Apache Airflow, enabling automated data workflows and reducing manual intervention by 50%.",
      "Enhanced operational efficiency by automating legacy desktop applications with Python, reducing repetitive tasks by 60%."
    ],
    technologies: ["PySpark", "ETL Pipelines", "Microsoft Fabric", "Azure SQL", "Machine Learning", "Airflow", "Power BI"],
  }
  {
    year: "SEP 2023 - SEP 2024",
    role: "Business Analyst Intern",
    company: "Center for Business Analytics, UNH - Paul College",
    description: [
      "Led a team of 5+ data analysts through end-to-end data analytics projects, boosting sales and customer engagement for local startups.",
      "Produced 30+ Tableau visualizations, enhancing decision-making by 25%, alongside developing ad hoc reports and KPI dashboards for data accuracy.",
      "Expertly re-engineered datasets with MS-SQL, Python, and Airflow, optimizing pipelines for SSRS compatibility.",
      "Integrated AWS S3 data into AWS SageMaker, reducing model development time by 35% and increasing predictive accuracy by 12%."
    ],
    technologies: ["Python", "R", "Tableau", "MS-SQL", "Statistical Analysis", "AWS", "Airflow"],
  },
  {
    year: "JAN 2021 - JUL 2023",
    role: "Data Analyst",
    company: "Deloitte Consulting LLP",
    description: [
      "Contributed expertise at one of the largest healthcare providers in the USA, driving strategic initiatives and leading agile teams of over 30 members through release planning and sprint execution.",
      "By translating user needs into actionable stories and managing project backlogs, accelerated delivery speed by 40%.",
      "Integrated complex datasets into Power BI, delivering insightful visualizations and statistical analyses crucial for stakeholder decision-making.",
      "Specialized in healthcare data, developed advanced models for patient health and disease progression forecasting.",
      "Developed a machine learning churn model that reduced customer turnover by 10% and provided key market insights."
    ],
    technologies: ["Power BI", "Python", "Machine Learning", "Excel", "Jira / Agile"],
  },
  {
    year: "DEC 2019 - NOV 2020",
    role: "Business Intelligence Intern",
    company: "Premier Energies Limited",
    description: [
      "Utilized SQL and Python for data manipulation, analysis, and reporting, supporting various business functions.",
      "Conducted operational analysis to identify process inefficiencies and recommended improvements.",
      "Supported the development and automation of reporting tools, streamlining data analysis processes."],
    technologies: ["Data Analysis", "Statistics", "Data Streaming", "Python", "Excel"],
  },
];


export const PROJECTS = [
  {
    link: "https://github.com/vikassabbani/Airbnb-Booking-Analysis",
    title: "Boosting Airbnb Bookings using Predictive Analysis | Check it out",
    image: project2,
    description:
      "Focused on optimizing Airbnb listing strategies in San Diego city. We identified and leveraged key drivers of booking rates. Our data-driven approach enabled us to uncover actionable insights, ultimately enhancing listing performance and maximizing booking rates for host.",
    technologies: ["Machine Learning", "NLP", "Data Visualization", "Python"],
  },
  { link: "https://github.com/vikassabbani/Statistical-Analysis/blob/main/Health%20Care%20Satisfaction/Health%20Care%20Satisfaction.pdf",
    title: "Strategic Data Insights for Healthcare | Check it out",
    image: project1,
    description:
      "This project aims to enhance healthcare experiences by uncovering trends in patient satisfaction metrics. By identifying areas for improvement, such as resource allocation and operational efficiency, ultimately leading to strategic advancements in patient care and hospital management.",
    technologies: ["Power BI", "R Language", "SQL"],
  },
  {
    link: "https://public.tableau.com/app/profile/sree.vikas.sabbani/viz/COD_17030338656560/Story1",
    title: "Visualizing Product Performance with Tableau | Check it out",
    image: project3,
    description:
      "Crafted a comprehensive Tableau visualization story that delves into product analysis and review trends. This interactive presentation provides clear insights into product performance, consumer feedback trends, and actionable analytics for strategic decision-making.",
    technologies: ["Tableau", "Data Pre-processing ", "Visualization Design"],
  },
  {
    link: "https://github.com/vikassabbani/ML---Classification-models",
    title: "Abalone Gender Classification | Check it out",
    image: project4,
    description:
      "This project focuses on using machine learning techniques to classify the gender of abalones based on their physical characteristics. We evaluated multiple ML models to determine the most accurate prediction method while striking a balance between accuracy and interpretability.",
    technologies: ["Machine Learning", "R Language", "Caret Package", "Data Handling"],
  },
  {
    link: "https://github.com/vikassabbani/Statistical-Analysis/tree/main/Market%20Basket%20Analysis%20Project",
    title: "Market Basket Analysis for Retail Optimization | Check it out",
    image: project5,
    description:
      "Explored Market Basket Analysis to understand customer buying patterns in the retail industry. Implemented data mining techniques, specifically the Apriori and FP-Growth algorithms, to analyze large transaction datasets. By calculating metrics such as support, confidence, and lift, we identified strong association rules that reveal which products are frequently bought together.",
    technologies: ["Data Mining", "Metrics Evaluation", "Apriori and FP-Growth Algorithms"],
  },
  {
    link: "https://github.com/vikassabbani/Statistical-Analysis/tree/main/Time%20Series%20Project",
    title: "Time Series Forecasting of Retail Car Sales | Check it out",
    image: project6,
    description:
      "The project centered on applying the X11 decomposition method to analyze and forecast retail car sales data obtained from the US Census Bureau. Data spanning the period from 2000 to 2023, extracted valuable insights of seasonal patterns, long-term trends, and irregular fluctuations within the automotive sector.",
    technologies: ["R programming", "Time Series Analysis", "Statistical Models", "Data Visualization"],
  },
];

export const CONTACT = {
  address: "Boston, USA",
  phoneNo: "+1 (603) 842-2238",
  email: "sabbanisreevikas@gmail.com",
};
