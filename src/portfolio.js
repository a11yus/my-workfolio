const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: '{ Ak. }',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'A@yush',
  role: 'Mern Stack Developer',
  description:
    'An individual with a keen interest in Software programs, possessing good interpersonal and analytical skills, who wish to utilizing current skillset and experience of working on projects to create marks in the software industry.',
  description2:
    'Here are a few of the other activities that I love to do !',

  act1: '➠ coding 👨🏻‍💻',
  act2: '➠ Travelling 🌏',
  act3: '➠ Abstract Painting 🎨',
  act4: '➠ Badminton 🏸',
    
  resume: 'https://drive.google.com/file/d/1x4VZSmmRMX8tg4qXKqJidUqatwKPYnGk/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ayush-kumar-671a68241/',
    github: 'https://github.com/a11yus',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '{ Licious Website }',
    img: 'https://i.imgur.com/vZYE80U.png',
    description:
      'Licious is a meat and seafood company that serves tthe fresg meat online',
    stack: ['HTML |', 'CSS |','Javascript |', 'Local Storage '],
    sourceCode: 'https://github.com/a11yus/licious',
    livePreview: 'https://transcendent-madeleine-03f622.netlify.app',
  },
  {
    name: '{ Uboric Website }',
    img: 'https://i.imgur.com/zN102to.png',
    description:
      'Uboric is an online website from user user can order online clothes, electronics, etc from the comfort of their home ',
    stack: ['HTML |', 'CSS |','Javascript |', 'Local Storage |', 'APIs'],
    sourceCode: 'https://github.com/VaibhavTyagi010/uboric-clone',
    livePreview: 'https://courageous-tiramisu-d623b2.netlify.app',
  },
  {
    name: '{ ZEE5 }',
    img: 'https://i.imgur.com/04Mr2RL.png',
    description:
      'ZEE5 is an Indian subscription video on-demand OTT platform, run by Zee Entertainment Enterprises.',
    stack: ['HTML |', 'CSS |','Javascript |','React JS |','Chakra UI'],
    sourceCode: 'https://github.com/a11yus/Zee5-Clone/tree/main/Zee5%20Clone/zee5',
    livePreview: 'https://zee5-socialhunt9-gmailcom.vercel.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'TypeScript',
  'Material UI',
  'Chakra UI',
  'Jest',
  'Cypress',
  'Data Structure',
  'Algorithm',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aayuvd123@mail.com',
  info: `My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you ! Feel free to mail me about any relevant query.`,
}

export { header, about, projects, skills, contact }
