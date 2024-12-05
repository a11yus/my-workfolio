const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: "/ Ak.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "ayush",
  role: "MERN Stack Developer",
  imgURL: "https://i.imgur.com/AF7NQkH.jpeg",
  description:
    "Dynamic Fullstack Developer with 2 years experience. Proficient in frontend and backend technologies, skilled in developing scalable web applications and integrating third-party APIs.Possesses 2 years of professional experience in delivering quality live web applications projects from conception to deployment.",
  description2: "Here are a few of the other activities that I love to do !",

  act1: "➠ coding 👨🏻‍💻",
  act2: "➠ Travelling 🌏",
  act3: "➠ Abstract Painting 🎨",
  act4: "➠ Badminton 🏸",

  resume:
    "https://drive.google.com/file/d/1jI-NyPAs7YA_lwj07vwfU_C-4mJfW8Np/view?usp=sharing",
    
  social: {
    linkedIn: "https://www.linkedin.com/in/ayus-linkdln-profile",
    github: "https://github.com/a11yus",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "[ Uboric Website ]",
    img: "https://i.imgur.com/zN102to.png",
    description:
      "Uboric is an online website from user user can order online clothes, electronics, etc from the comfort of their home. ",
    stack: ["HTML |", "CSS |", "Javascript |", "Local Storage |", "APIs"],
    sourceCode: "https://github.com/VaibhavTyagi010/uboric-clone",
    livePreview: "https://courageous-tiramisu-d623b2.netlify.app",
  },
  {
    name: "[ ZEE5 ]",
    img: "https://i.imgur.com/04Mr2RL.png",
    description:
      "ZEE5 is an Indian subscription video on-demand and over-the-top streaming service, where different shows, web series and movies run under Zee Entertainment Enterprises.",
    stack: ["HTML |", "CSS |", "Javascript |", "React JS |", "Chakra UI"],
    sourceCode:
      "https://github.com/a11yus/Zee5-Clone/tree/main/Zee5%20Clone/zee5",
    livePreview: "https://tangerine-kitten-5d7d1a.netlify.app/",
  },
  {
    name: "[ HimalayaUSA ]",
    img: "https://i.imgur.com/VTYai2l.png",
    description:
      "HimalayaUSA is an Herbal Healthcare company whose products contents ayurvedic ingredients which sells their wide range of products online, which include personal care, health care and well-being.",
    stack: [
      "HTML |",
      "CSS |",
      "Javascript |",
      "React JS |",
      "Redux |",
      "Chakra UI",
    ],
    sourceCode: "https://github.com/a11yus/HimalayaUSA/tree/master",
    livePreview: "https://himalayacs8853.netlify.app/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Angular JS",
  "Next JS",
  "React Native",
  "TypeScript",
  "Redux",
  "Boostrap",
  "Talwind CSS",
  "Material UI",
  "Chakra UI",
  "Node JS",
  "Express JS",
  "Mongo DB",
  "MySQL",
  "API Docs/ Swagger",
  "AWS",
  "Jest",
  "Cypress",
  "Data Structure",
  "Algorithm",
  "Git",
  "Github",
  "SVN",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "aayuvd123@mail.com",
  info: `📬 My inbox is always open !
Whether you have a question ❓ or just want to say hello 👋, I'll try my best to get back to you! 
🚀 Feel free to email me about any relevant queries or just to connect! 📧`,
};

export { header, about, projects, skills, contact };
