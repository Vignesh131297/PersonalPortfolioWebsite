export const PERSONAL_INFO = {
  name: "Vignesh Arumugam",
  title: "Front End Developer",
  location: "Chennai, Tamil Nadu",
  phone: "+91 8825662918",
  email: "vigneshvic13@gmail.com",
  linkedin: "https://linkedin.com/in/vignesh-arumugam",
  github: "https://github.com/vigneshvic13",
};

export const SKILLS = [
  { name: "React JS", level: 90, icon: "fab fa-react", color: "text-blue-400" },
  { name: "JavaScript", level: 85, icon: "fab fa-js", color: "text-yellow-400" },
  { name: "HTML5", level: 95, icon: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS3", level: 90, icon: "fab fa-css3-alt", color: "text-blue-400" },
  { name: "Bootstrap", level: 80, icon: "fab fa-bootstrap", color: "text-purple-500" },
  { name: "GitHub", level: 85, icon: "fab fa-github", color: "text-white" },
];

export const ADDITIONAL_SKILLS = [
  "NPM/Yarn",
  "Java", 
  "Heroku",
  "Redux",
  "Figma",
  "Adobe Creative Suite"
];

export const EXPERIENCE = [
  {
    title: "Front End Developer",
    company: "Qcerebrum Software Solution Private Limited",
    period: "Present",
    current: true,
    responsibilities: [
      "Developed and maintained responsive web applications using React.js, HTML5, and CSS3",
      "Implemented state management using Redux for scalable application architecture",
      "Collaborated with UX/UI designers and ensured cross-browser compatibility",
      "Led team of Front End engineers and conducted knowledge transfer sessions"
    ],
    technologies: ["React.js", "Redux", "JavaScript", "Material-UI"]
  },
  {
    title: "Business Analyst",
    company: "EGS Computer Solution Private Limited", 
    period: "2022 - 2023",
    current: false,
    responsibilities: [
      "Developed business plans and raised initial capital from investors",
      "Conducted market research to identify new business opportunities",
      "Implemented business continuity plans for seamless operations"
    ],
    technologies: ["Business Analysis", "Market Research", "Strategic Planning"]
  }
];

export const PROJECTS = [
  {
    title: "Kodachadri Chits Pvt Ltd (KCPL)",
    description: "Comprehensive administrative application for Kodachadri Chit Fund, serving both employees and customers with advanced features including auction modules, payment collections, and secure authentication.",
    features: [
      "Auction modules (Open and Fixed types)",
      "Full wallet module with secure transactions", 
      "Authentication and authorization system",
      "Spinning wheel module using react-custom-roulette"
    ],
    technologies: ["React.js", "Material-UI", "Redux", "JavaScript", "GitHub"],
    period: "07/2023 - Present",
    type: "main"
  },
  {
    title: "Responsive Web Apps",
    description: "Multiple responsive web applications built with modern React.js patterns and mobile-first design approach.",
    technologies: ["React", "CSS3", "Bootstrap"],
    type: "additional"
  },
  {
    title: "Business Analytics Tools", 
    description: "Data visualization and business intelligence tools developed during business analyst role.",
    technologies: ["Analytics", "Reports", "Planning"],
    type: "additional"
  }
];

export const EDUCATION = {
  degree: "B.Tech - Automobile Engineering",
  university: "Bharath University, Chennai",
  period: "July 2015 - March 2019",
  description: "Strong foundation in engineering principles, problem-solving, and analytical thinking that translates well to software development."
};

export const CERTIFICATIONS = [
  {
    title: "Complete Web Technology",
    institution: "QSpiders",
    technologies: ["HTML5", "CSS", "JavaScript", "Java", "SQL"]
  },
  {
    title: "React JS Certification",
    institution: "Qcerebrum Software Solution",
    technologies: ["React.js", "Components", "Redux"]
  }
];

export const SOFT_SKILLS = [
  "Critical thinking",
  "Quick learner", 
  "Communication",
  "Creative",
  "Team Work",
  "Strong Collaborator"
];
