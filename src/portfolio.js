/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nikhil's Portfolio",
  description:
    "Aspiring tech enthusiast who is keen to learn a variety of skills and is passionate about innovation and perfection",
  og: {
    title: "Nikhil Shakya Portfolio",
    type: "website",
    url: "http://nikhilshakya.com/",
  },
};

//Home Page
const greeting = {
  title: "Nikhil Shakya",
  logo_name: "Nikhilshakya",
  nickname: "Full stack web developer",
  subTitle:
    "Aspiring tech enthusiast who is keen to learn a variety of skills and is passionate about innovation and perfection. Adaptable, enthusiastic, self-motivated, collaborative, good team-player and always thrive to work on end to end projects and curious to work with experts in computer programming. Looking forward to working with an organisation that utilises these skills to contribute to the organization's success.",
  resumeLink:
    "https://drive.google.com/file/d/1-2lkcrILAqanGKysCnXjn-tqEUfFB3Kj/view?usp=share_link",

  portfolio_repository:
    "https://github.com/devmanush-forEach/portfolio-website",
  githubProfile: "https://github.com/devmanush-forEach",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/devmanush-forEach",
  // linkedin: "https://www.linkedin.com/in/nikhil-shakya-3a1939213",
  // gmail: "shakyanikhil12345@gmail.com",

  // gitlab: "https://gitlab.com/ashutoshhathidara98",

  // facebook: "https://www.facebook.com/nikhil.shakya.9400/",
  // twitter: "https://twitter.com/Nikhils49628021",
  // instagram: "https://www.instagram.com/itsme_nikhilshakya/"

  {
    name: "Github",
    link: "https://github.com/devmanush-forEach",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nikhil-shakya-3a1939213",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "shakyanikhil12345@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Nikhils49628021",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nikhil.shakya.9400/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Frontend Tech Skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building fully responsive webpages with a pixel perfect UI and UX",
        "⚡ To optimise webpages to make them faster and reduce initial load time",
        "⚡ To make webpages SEO friendly for search bots like google crawler",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#fff",
            color: "#0076c6",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SASS",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#ce6b9c",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#712CF9",
          },
        },
        {
          skillName: "MUI",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#0eb8d5",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React-Router",
          fontAwesomeClassname: "simple-icons:reactrouter",
          style: {
            color: "#D0021B",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "file-icons:nextjs",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#6A43A9",
          },
        },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Backend Tech skills",
      // fileName: "FullStackImg",
      // fileName: "DesignImg",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building REST APIs in an optimised way with less response time",
        "⚡ Build APIs with a secured user authentication and autherization",
        "⚡ Build APIs to communicate with databbases and provide appropriate responses",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#4a9d4b",
          },
        },
        {
          skillName: "Mongoose",
          fontAwesomeClassname: "simple-icons:mongoose",
          style: {
            color: "#8d0808",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#d93127",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4a7da4",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Version Control Systems",
      fileName: "DesignImg",
      // fileName: "CloudInfraImg",
      skills: [
        "⚡ To manage versions and updates in projects",
        "⚡ To provide a better way for debugging the code base",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#EF391A",
          },
        },
        {
          skillName: "Git Hub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [

    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //   ],
    //   softwareSkills: [
    //     // {
    //     //   skillName: "GCP",
    //     //   fontAwesomeClassname: "simple-icons:googlecloud",
    //     //   style: {
    //     //     color: "#4285F4",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "AWS",
    //     //   fontAwesomeClassname: "simple-icons:amazonaws",
    //     //   style: {
    //     //     color: "#FF9900",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Azure",
    //     //   fontAwesomeClassname: "simple-icons:microsoftazure",
    //     //   style: {
    //     //     color: "#0089D6",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Firebase",
    //     //   fontAwesomeClassname: "simple-icons:firebase",
    //     //   style: {
    //     //     color: "#FFCA28",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "PostgreSQL",
    //     //   fontAwesomeClassname: "simple-icons:postgresql",
    //     //   style: {
    //     //     color: "#336791",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "MongoDB",
    //     //   fontAwesomeClassname: "simple-icons:mongodb",
    //     //   style: {
    //     //     color: "#47A248",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Docker",
    //     //   fontAwesomeClassname: "simple-icons:docker",
    //     //   style: {
    //     //     color: "#1488C6",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Kubernetes",
    //     //   fontAwesomeClassname: "simple-icons:kubernetes",
    //     //   style: {
    //     //     color: "#326CE5",
    //     //   },
    //     // },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Masai School",
      subtitle: "Full stack web development course",
      logo_path: "masai_logo.jpg",
      alt_name: "Masai School",
      duration: "August 2021 - March 2022",
      descriptions: [
        "⚡ I have studied a lot of technical skills of full stack web development.",
        "⚡ Apart from this, I have also learned soft skills like team-work, time management, communication skills.",
        "⚡ Developed presentable and fully responsive webpages and applicatoion.",
      ],
      website_link: "https://www.masaischool.com/",
    },
    {
      title: "Government Polytechnic Ghaziabad",
      subtitle:
        "Three year diploma in Electronics and Communication Engineering",
      logo_path: "gpg_logo.png",
      alt_name: "GPG",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basics of electronic components and devices, microcontrollers, circuits.",
        "⚡ Apart from this, I have learned basics of C language, basics of Arduino programming",
        "⚡ Participated in 2018 jonal games organised by BTEUP.",
      ],
      website_link: "https://www.gpghaziabad.ac.in/",
    },
    {
      title: "St. lawrance Sr. Sec. Public School",
      subtitle: "High school & Intermediate (in PCM) ",
      logo_path: "lawrance_logo.png",
      alt_name: "GPG",
      duration: "2014 - 2016 & 2016 - 2018",
      descriptions: [
        "⚡ Completed my high school and inter education.",
        "⚡ Apart from this, I have participated in school games competition.",
      ],
      website_link:
        "https://school.careers360.com/schools/st-lawrance-public-school-shyam-nagar-farrukhabad",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have 2 and a half years of experience as a MERN stack developer. During this time I learned a lot of techie stuff and also got better at working with others. and gained confidence in my skills and problem-solving strategies. I get to know how to work with a team and how to overcome problems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Software Developer",
          company: "Ubuy India Pvt. Ltd.",
          company_url: "https://www.ubuy.com/",
          logo_path: "Ubuy-Logo.png",
          duration: "March 2023 - present",
          location: "Jaipur, Rajasthan",
          description:
            "Here I am working on a world class e-commerce web app from scratch which is live in more than 50 countries. This is a MERN stack web app. I have developed more than 80% of the frontend web app  in NEXTJs with Tailwind CSS and in Typescript. Also I have managed database queries in backend APIs.",
          color: "#0879bf",
        },
        {
          title: "Associate Software Developer",
          company: "RoadO",
          company_url: "https://www.roado.co.in/",
          logo_path: "roado_logo.png",
          duration: "April 2022 - March 2023",
          location: "Bengaluru, Karnataka",
          description:
            "I was working as an Associative Software developer. My roles were to maintain and update frontend as well as backend side of the webside. There I learned a lot of new tech skills like graphql API and also team work.",
          color: "#0879bf",
        },
        {
          title: "MERN Stack Training",
          company: "Masai School",
          company_url: "https://www.masaischool.com/",
          logo_path: "masai_logo.png",
          duration: "August 2021 - March 2022",
          location: "Bengaluru, Karnataka",
          description:
            "Completed in-depth MERN stack training, developing a broad range of skills and actively participating in more than 25 MERN stack solo projects as well as group projects.",
          color: "#0879bf",
        },
      ],
    },
    //   {
    //     title: "Internships",
    //     experiences: [
    //       {
    //         title: "Masai Alumini",
    //         company: "Masai School",
    //         company_url: "https://www.delhivery.com/",
    //         logo_path: "delhivery_logo.png",
    //         duration: "May 2019 - Sept 2019",
    //         location: "Gurgaon, Haryana",
    //         description:
    //           "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //         color: "#ee3c26",
    //       },
    //       {
    //         title: "Data Science Intern",
    //         company: "Intel Indexer LLC",
    //         company_url:
    //           "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //         logo_path: "intel_logo.jpg",
    //         duration: "Nov 2018 - Dec 2018",
    //         location: "Work From Home",
    //         description:
    //           "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //         color: "#0071C5",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Volunteerships",
    //     experiences: [
    //       {
    //         title: "Google Explore ML Facilitator",
    //         company: "Google",
    //         company_url: "https://about.google/",
    //         logo_path: "google_logo.png",
    //         duration: "June 2019 - April 2020",
    //         location: "Hyderabad, Telangana",
    //         description:
    //           "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //         color: "#4285F4",
    //       },
    //       {
    //         title: "Microsoft Student Partner",
    //         company: "Microsoft",
    //         company_url: "https://www.microsoft.com/",
    //         logo_path: "microsoft_logo.png",
    //         duration: "Aug 2019 - May 2020",
    //         location: "Hyderabad, Telangana",
    //         description:
    //           "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //         color: "#D83B01",
    //       },
    //       {
    //         title: "Mozilla Campus Captain",
    //         company: "Mozilla",
    //         company_url: "https://www.mozilla.org/",
    //         logo_path: "mozilla_logo.png",
    //         duration: "Oct 2019 - May 2020",
    //         location: "Kurnool, Andhra Pradesh",
    //         description:
    //           "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //         color: "#000000",
    //       },
    //       {
    //         title: "Developer Students Club Member",
    //         company: "DSC IIITDM Kurnool",
    //         company_url:
    //           "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //         logo_path: "dsc_logo.png",
    //         duration: "Jan 2018 - May 2020",
    //         location: "Kurnool, Andhra Pradesh",
    //         description:
    //           "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //         color: "#0C9D58",
    //       },
    //       {
    //         title: "Developer Program Member",
    //         company: "Github",
    //         company_url: "https://github.com/",
    //         logo_path: "github_logo.png",
    //         duration: "July 2019 - PRESENT",
    //         location: "Work From Home",
    //         description:
    //           "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //         color: "#181717",
    //       },
    //     ],
    //   },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "From last two and half years I have worked on a lot of projects as follows and currently I am working on a multicountry e-commerce web app at UBUY in  MERN stack as a senior software developer",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social site. You can message me, or mail me, I will reply within 24 hours. ",
  },
  blogSection: {
    //   title: "Blogs",
    //   subtitle:
    //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    //   link: "https://ashutoshhathidara.wordpress.com",
    //   avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Farrukhabad, Uttar Pradesh",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Farrukhabad+Bus+Station/@27.3862466,79.5874611,17z/data=!3m1!4b1!4m5!3m4!1s0x399e304edb3bbb91:0x5c4d97476bc01045!8m2!3d27.3862466!4d79.5896498",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+918882398520",
  },
  emailSection: {
    title: "Email Address",
    subtitle: "shakyanikhil12345@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
