/* Change this file to get your personal porfolio */

// SEO Related settings
const seo = {
  title: "Ribhav's Portfolio",
  description:
    "Versatile Software Developer & Data Scientist with 5+ years of experience in building AI-driven applications, optimizing workflows, and developing full-stack solutions. Specializing in scalable architectures and data-driven innovations, I focus on enhancing business efficiency and driving impactful solutions.",
  og: {
    title: "Ribhav Jain Portfolio",
    type: "website",
    url: "https://ribhav-jain.github.io/portfolio/",
  },
};

// Home Page
const greeting = {
  title: "Ribhav Jain",
  logo_name: "Ribhav Jain",
  subTitle:
    "Versatile Software Developer & Data Scientist with 5+ years of experience in building AI-driven applications, optimizing workflows, and developing full-stack solutions. Specializing in scalable architectures and data-driven innovations, I focus on enhancing business efficiency and driving impactful solutions.",
  resumeLink:
    "https://docs.google.com/document/d/13QFW9lmCy23KNn9vGpkVA7TU4W4UQxf4jjWPVhtyIVE/",
  portfolio_repository: "https://github.com/ribhav-jain/Portfolio",
  githubProfile: "https://github.com/ribhav-jain",
  location: "Chandigarh, India",
};

// Your Social Media Link
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ribhav-jain",
    icon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    color: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ribhav-jain",
    icon: "fa-linkedin",
    color: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ribhavjain4@gmail.com",
    icon: "fa-google",
    color: "#D14836",
  },
  {
    name: "Medium",
    link: "https://medium.com/@ribhav_jain",
    icon: "fa-medium",
    color: "#000000",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceLottie",
      skills: [
        "Extensive experience in data science and AI, specializing in extracting actionable insights from time series data to enable data-driven decision-making.",
        "Proficient in Natural Language Processing (NLP), leveraging advanced techniques to develop intelligent chatbot applications that enhance user interactions and customer experiences.",
        "Expertise in handling complex time series datasets, applying advanced statistical methods and machine learning algorithms to uncover patterns, drive predictive modeling, and optimize business processes.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          icon: "logos:tensorflow",
          style: {
            color: " #FF6F00",
          },
        },
        {
          skillName: "Keras",
          icon: "cib:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit Learn",
          icon: "simple-icons:scikit-learn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          icon: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          icon: "logos:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Power BI",
          icon: "logos:microsoft-power-bi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Python",
          icon: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Front-end Development",
      fileName: "FrontendLottie",
      skills: [
        "Proficient in Ext JS and React, building dynamic, high-performance web applications with engaging UI/UX and seamless interactions.",
        "Experienced in designing visually rich dashboards, intuitive CRUD interfaces, and interactive forms, ensuring a user-centric approach that enhances data management and user engagement.",
        "Skilled in developing responsive and mobile-friendly applications, leveraging adaptive design techniques to deliver a consistent and optimized user experience across various devices and screen sizes.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          icon: "vscode-icons:file-type-html",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          icon: "vscode-icons:file-type-css",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          icon: "logos:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Sencha",
          icon: "logos:sencha",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ReactJS",
          icon: "logos:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          icon: "logos:npm-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          icon: "logos:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Back-end Development",
      fileName: "BackendLottie",
      skills: [
        "Expert in optimizing backend performance and ensuring data security, leveraging Play Framework and Django to develop scalable and efficient AI-driven solutions for real-world challenges.",
        "Proficient in implementing Identity and Access Management (IAM) solutions, seamlessly integrating authentication, authorization, and user management to enhance security and user experience.",
        "Experienced in designing and managing data pipelines using Pentaho and Spring Batch, orchestrating complex ETL workflows for efficient data integration, transformation, and processing.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          icon: "logos:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Python",
          icon: "logos:python",
          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "Spring",
          icon: "logos:spring-icon",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Flask",
          icon: "logos:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Hibernate",
          icon: "logos:hibernate",
          style: {
            color: "#59666C",
          },
        },
        {
          skillName: "Postgresql",
          icon: "logos:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "SQL Server",
          icon: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "Mongo DB",
          icon: "vscode-icons:file-type-mongo",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      icon: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ribhavjain1",
    },
    {
      siteName: "Kaggle",
      icon: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/RibhavJain",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Panjab University Chandigarh",
      subtitle: "B.Tech. in Computer Science & Engineering",
      summary: "Machine learning, NLP, time series, and data-driven solutions.",
      logo_path: "Panjab_University_logo.png",
      alt_name: "Panjab University Chandigarh",
      duration: "2016 - 2020",
      descriptions: [
        "Developed a strong foundation in core computer science subjects, including Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and Artificial Intelligence, enabling effective problem-solving and software development.",
        "Expanded expertise through specialized courses in Deep Learning, Data Science, and Full Stack Development, equipping me with the latest technologies and frameworks to build innovative, AI-powered, and data-driven solutions.",
      ],
      website_link: "https://puchd.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Kirill Eremenko",
      logo_path: "machine_learning.png",
      link: "https://www.udemy.com/course/machinelearning/",
      alt_name: "Machine Learning",
      color_code: "#F9B93E",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      link: "https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning",
      alt_name: "Neural Networks and Deep Learning",
      color_code: "#808080",
    },
    {
      title: "Data Science",
      subtitle: "- Jose Portilla",
      logo_path: "data_science.png",
      link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
      alt_name: "Data Science",
      color_code: "#F5F5F5",
    },
    {
      title: "Big Data",
      subtitle: "- Ilkay Altintas",
      logo_path: "coursera.svg",
      link: "https://www.coursera.org/specializations/big-data",
      alt_name: "Big Data",
      color_code: "#0056D2",
    },
    {
      title: "Spring & Hibernate",
      subtitle: "- Chad Darby",
      logo_path: "spring.svg",
      link: "https://www.udemy.com/course/spring-hibernate-tutorial/",
      alt_name: "Spring & Hibernate",
      color_code: "#BDF5BD",
    },
    {
      title: "Web Development",
      subtitle: "- Angela Yu",
      logo_path: "web_development.svg",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      alt_name: "Web Development",
      color_code: "#00d9c0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "Experienced ML/DL Developer. Strong problem-solving and communication skills, delivering innovative solutions.",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer III",
          company: "Alert Enterprise",
          company_url: "https://www.alertenterprise.com/",
          logo_path: "alert_enterprise_logo.svg",
          duration: "2024 - Present",
          location: "India",
          description: [
            "Architected and implemented an AI-powered agentic chatbot, enabling automated decision-making, policy-based responses, and advanced analytics-driven actions.",
            "Designed and implemented a multi-tenant SSO solution with SAML, OpenID, and OAuth, ensuring seamless authentication and integration through an intuitive UI-driven configuration.",
            "Developed an Identity Intelligence module to detect insider threats, reducing security breaches by 30% using behavioral analysis.",
            "Enhanced security by addressing vulnerabilities from static and dynamic scans, ensuring compliance with industry standards.",
            "Built a configurable, role-based analytics platform featuring a drag-and-drop designer for dashboards, charts, and reports with advanced filtering, scheduling, multi-format exports, custom layouts, and map support.",
          ],
        },
        {
          title: "Software Engineer II",
          company: "Alert Enterprise",
          company_url: "https://www.alertenterprise.com/",
          logo_path: "alert_enterprise_logo.svg",
          duration: "2023 - 2024",
          location: "India",
          description: [
            "Designed an Entity Builder framework for effortless configuration of access requests, workflows, permissions, and layouts, reducing onboarding time by 40% and enhancing customization efficiency.",
            "Developed a Layout Designer with an intuitive drag-and-drop interface for seamless UI customization across the product suite.",
            "Developed the Device Intelligence module for configuration anomaly detection, predictive maintenance, and proactive monitoring of security devices, improving system reliability and reducing false alarms.",
          ],
        },
        {
          title: "Software Engineer I",
          company: "Alert Enterprise",
          company_url: "https://www.alertenterprise.com/",
          logo_path: "alert_enterprise_logo.svg",
          duration: "2020 - 2023",
          location: "India",
          description: [
            "Enhanced accessibility and multilingual support, achieving WCAG 2.0 AA compliance and expanding translation capabilities for Latin and non-Latin languages.",
            "Integrated AI-powered smart search for instant results and seamless navigation across the platform.",
            "Enhanced intelligent automation with GenAI-driven MVEL and JavaScript rule engine, enabling dynamic workflows.",
            "Built a scalable event reconciliation system using Spring Batch for efficient large-scale data processing.",
            "Developed a self-service IAM module for automated onboarding, access management, and badge provisioning with PACS integration.",
            "Implemented badge-based authentication with IdP integration, enabling secure tap-to-login and SAML-based SSO across systems.",
          ],
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Scientist Intern",
          company: "TCIL-IT",
          company_url: "https://www.linkedin.com/company/tcil-it-chandigarh",
          logo_path: "tcil_it.png",
          duration: "May 2019 - Sept 2019",
          location: "Chandigarh, India",
          description:
            "Developed a secure and user-friendly login system using Flask and React, integrating facial recognition technology for seamless authentication, enhancing security through advanced recognition algorithms.",
        },
        {
          title: "Software Developer Intern",
          company: "Infowiz",
          company_url: "https://www.infowiz.co.in/",
          logo_path: "infowiz_logo.png",
          duration: "May 2018 - Aug 2018",
          location: "Chandigarh, India",
          description:
            "Designed a reporting module for Identity Access Management (IAM), generating detailed reports on login activities, system access, and authentication methods to ensure compliance and assess security risks.",
        },
      ],
    },
  ],
};

// Projects Page
const projects = {
  title: "Projects",
  description:
    "My projects center around creating innovative Data Science solutions, seamlessly integrated with frontend applications to deliver comprehensive end-to-end solutions. With a focus on bridging the gap between data insights and user experiences.",
  projectDetails: {
    data: [
      {
        id: "1",
        name: "Portfolio",
        createdAt: "2021-06-12",
        url: "https://github.com/ribhav-jain/Portfolio",
        description:
          "A fully customizable developer portfolio template to showcase projects, skills, and experience with a sleek, responsive design.",
        languages: [
          { name: "HTML", icon: "vscode-icons:file-type-html" },
          { name: "CSS", icon: "vscode-icons:file-type-css" },
          // { name: "JavaScript", icon: "logos:javascript" },
          { name: "React", icon: "logos:react" },
        ],
        featured: true,
      },
      {
        id: "2",
        name: "Stock Price Prediction",
        createdAt: "2020-06-18",
        url: "https://github.com/ribhav-jain/Stock-Price-Prediction",
        description:
          "Implemented LSTM-based Recurrent Neural Networks to predict stock prices using historical market data, improving forecasting accuracy.",
        languages: [
          { name: "TensorFlow", icon: "logos:tensorflow" },
          { name: "Keras", icon: "simple-icons:keras" },
          { name: "Python", icon: "logos:python" },
        ],
        featured: true,
      },
      {
        id: "3",
        name: "Spam Classifier",
        createdAt: "2019-06-20",
        url: "https://github.com/ribhav-jain/Spam-Classifier",
        description:
          "A Flask-based web app that detects spam messages using machine learning with TF-IDF vectorization for text processing.",
        languages: [
          { name: "Python", icon: "logos:python" },
          { name: "HTML", icon: "vscode-icons:file-type-html" },
          { name: "CSS", icon: "vscode-icons:file-type-css" },
        ],
        featured: false,
      },
      {
        id: "4",
        name: "Real Estate Price Prediction",
        createdAt: "2018-07-11",
        url: "https://github.com/ribhav-jain/Real-Estate-Price-Prediction",
        description:
          "Built a predictive model for real estate prices using ML techniques, featuring insightful data visualizations for market trends.",
        languages: [
          { name: "Python", icon: "logos:python" },
          { name: "Jupyter Notebook", icon: "logos:jupyter" },
        ],
        featured: false,
      },
    ],
  },
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Get in Touch",
    description:
      "I'm always open to discussing new projects, collaborations, or consulting opportunities. Whether it's AI, ML, Data Science, or Full Stack development, let's connect and build something amazing together!",
    email: "ribhavjain4@gmail.com",
  },
  addressSection: {
    title: "Location",
    subtitle: "Chandigarh, India",
    location_map_link: "https://goo.gl/maps/oxjdacsf84zp9CAR8",
  },
  phoneSection: {
    hidden: true, // Set to false if you want to display your phone number
    title: "Phone",
    subtitle: "1234567890",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projects,
  contactPageData,
};
