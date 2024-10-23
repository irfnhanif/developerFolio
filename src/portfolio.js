/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Irfan Hanif H.",
  title: "Hi all, I'm Hanif",
  subTitle: emoji(
    "An IT student and aspiring software engineer 👨‍💻, with a focus for back-end development 🔧🖥️. I love turning ideas into real, functional web applications 💡➡️🌐—whether it's crafting robust monoliths 🏛️ or scaling out with microservices ⚙️🔗."
  ),
  resumeLink: "-", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/irfnhanif",
  linkedin: "https://www.linkedin.com/in/irfan-hanif-habibi-716bb3223/",
  gmail: "14.irfanh@gmail.com",
  discord: "https://discord.gg/ZhyRJSeu",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I'm passionate about?",
  subTitle:
    "A Curious Software Engineer Always Exploring Highly-Valued Tech Stack and Solving Problems!",
  skills: [
    emoji(
      "⚙️ Building powerful server-side applications using Java, Python, Node.js, PHP"
    ),
    emoji(
      "🌐 Crafting dynamic web apps with JavaScript, TypeScript, React, Vite, Spring, Express.js, NestJS, Laravel, CodeIgniter"
    ),
    emoji(
      "🗄️ Proficient in handling databases like MongoDB, MySQL, Postgres, Redis"
    ),
    emoji("🛠️ Using Docker, Nginx, Apache for containerization and deployment"),
    emoji(
      "⚡ Familiar with deploying on AWS, Cloudflare for security and scalability"
    ),
    emoji(
      "🧩 Streamlined development workflow with version control using Trello and Git"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "markdown",
      fontAwesomeClassname: "fab fa-markdown"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "codeigniter",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "spring",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "tailwindcss",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "vite",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "mysql/postgres",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "fas fa-memory"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "cloudflare",
      fontAwesomeClassname: "fab fa-cloudflare"
    },
    {
      skillName: "apache/nginx",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "trello",
      fontAwesomeClassname: "fab fa-trello"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Brawijaya",
      logo: require("./assets/images/ubLogo.png"),
      subHeader: "Bachelor of Computer Science in Information Technology",
      duration: "August 2021 - Present",
      desc: "GPA: 3.84",
      descBullets: [
        "Focus in software engineering and system architecture",
        "Member of the faculty's open source organization, organizing workshops and seminars",
        "Completed multiple web development projects"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Back-end Developer Intern",
      company: "Telkom Indonesia",
      companylogo: require("./assets/images/telkomLogo.png"),
      date: "February 2024 - July 2024",
      desc: "",
      descBullets: [
        "Maintained and improved features and security for the live idea-sharing social media application through diligent bug fixes and security patches",
        "Developed new features for the associated monitoring application with the previously mentioned application, ensuring it met client requirements",
        "Engaged in daily meetings and discussions with fellow developers and UI/UX designers to address new features and bug fixes"
      ]
    },
    {
      role: "Backend Developer",
      company: "POROS Organization of Open Source",
      companylogo: require("./assets/images/porosLogo.png"),
      date: "March 2023 – Present",
      desc: "",
      descBullets: [
        "Developed a REST API with Node.js and PostgreSQL for the organization's homepage",
        "Led discussions with back-end team members on technical and soft skills",
        "Collaborated with front-end developers to ensure smooth deployment and integration"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Notable Projects",
  subtitle: "KEY PROJECTS THAT I HAVE CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/porosLogo2.png"),
      projectName: "POROS Website",
      projectDesc:
        "The POROS Website is the official homepage for the POROS organization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://porosfilkom.ub.ac.id/"
        }
      ]
    },
    {
      image: require("./assets/images/amdLogo2.png"),
      projectName: "Achievement Monitoring Dashboard (AMD) MiX",
      projectDesc:
        "A monitoring dashboard application that interfaces with the bank's internal idea-sharing platform, Ideabox MIX, turning MIX participants' ideas into new projects and standards",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ideaboxMandiriLogo.png"),
      projectName: "Ideabox MIX",
      projectDesc:
        "A single-platform web application serving as an innovative social media space for Mandiri Innovation Xperience participants, enabling them to share their ideas and collaborate to develop them further.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mandiri.ideaboxapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/ideaboxBNILogo.png"),
      projectName: "Ideabox BNI",
      projectDesc:
        "A single platform used as a social media innovation for BNI employees to convey ideas and collaborate to develop them.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bni.ideaboxapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Cloud Technical Essentials",
      subtitle:
        "Completed a comprehensive course on AWS cloud services, covering core AWS concepts, services, and best practices.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/UZ9D24Q8VYAW"
        }
      ]
    },
    {
      title: "Back-end Development and APIs",
      subtitle:
        "Learned Node.js with Express.js to build robust and scalable server-side applications.",
      image: require("./assets/images/freecodecampLogo.png"),
      imageAlt: "freeCodeCamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/fccc8bfaf47-d985-41c3-ab92-d77454cbc88b/back-end-development-and-apis"
        }
      ]
    },
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle:
        "Learned how to prepare, process, analyze, and share data for thoughtful action with tools and platforms including spreadsheets, SQL, Tableau, and R.",
      image: require("./assets/images/gdacLogo.png"),
      imageAlt: "Google Data Analytics Professional Badge",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/69a04890-7956-4e97-891e-37dcb394bc92/linked_in_profile"
        }
      ]
    },

    {
      title: "SQL (Basic)",
      subtitle: "Include simple queries, relationships, and aggregators.",
      image: require("./assets/images/hackerrankLogo.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/6e147eb27d66"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "14.irfanh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
