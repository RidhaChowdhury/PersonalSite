import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    briar,
    first,
    altrutec,
    thecoderschool,
    rockwell,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web/App Developer",
      icon: web,
      skills: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "Backend Engineer",
      icon: backend,
      skills: [
        {
          name: "ASP.NET",
          color: "violet-text-gradient",
        },
        {
          name: "SQL",
          color: "red-text-gradient",
        },
        {
          name: "Azure",
          color: "blue-text-gradient",
        },
      ],
    },
    {
      title: "Machine Learning & AI Engineer",
      icon: mobile,
      skills: [
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "Scikit",
          color: "orange-text-gradient",
        },
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
      ],
    },
    {
      title: "Content Creator",
      icon: creator,
      skills: [
        {
          name: "Adobe",
          color: "blue-text-gradient",
        },
        {
          name: "Design",
          color: "violet-text-gradient",
        },
      ],
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "Rockwell Automation",
      icon: rockwell,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      skills: [
        {name: "Java", color: 'red-text-gradient'}, 
        {name: "MySQL", color: 'blue-text-gradient'}, 
        {name: "Python", color: 'blue-text-gradient'}, 
        {name: "Pandas", color: 'violet-text-gradient'}, 
        {name: "OpenAI", color: 'green-text-gradient'}],
      points: [
        "Developed and deployed a robust Java Webservice using the Jersey framework, including implementing security measures, endpoint development, SQL stored procedure integration, unit testing, and CI/CD pipeline implementation.",
        "Pioneered an advanced prompt recommendation system, attaining high quality recommendations 1320% faster than brute force methods, for a custom OpenAI integrated application, utilizing Scikit-learn, Pandas, and embedding techniques. Implemented real-time functionality using Websockets for a seamless user experience.",
        "Presented development and research findings to executives and stakeholders, including the company CEO, effectively communicating technical concepts and project progress.",
      ],
    },
    {
      title: "Software Engineering Instructor",
      company_name: "The Coder School",
      icon: thecoderschool,
      iconBg: "#FFFFFF",
      date: "Feb 2020 - Aug 2023",
      skills: [
        {name: "C#", color: 'violet-text-gradient'},
        {name: "Python", color: 'blue-text-gradient'}, 
        {name: "TypeScript", color: 'blue-text-gradient'},
        {name: "React", color: 'blue-text-gradient'},],
      points: [
        "Developed and implemented custom project-based curricula in Python, Java, JavaScript, C#, and C++ for K-12 students. Personally kick-started summer camps surrounding developing technologies.",
        "Collaborated with students on a diverse range of projects, including Arduino, Mobile, VR, and Web applications, using industry-standard tools such as React, Android Studio, and Unity3D.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "ALTRUTEC",
      icon: altrutec,
      iconBg: "#FFFFFF",
      date: "June 2020 – Aug 2020",
      skills: [
        {name: "C#", color: 'violet-text-gradient'}, 
        {name: "Unity3D", color: 'black-text-gradient'},
        {name: ".NET", color: 'blue-text-gradient'},],
      points: [
        "Implemented responsive VR environments using C# and Unity3D, enhancing user experience.",
        "Achieved a 30% higher average frame rate by migrating from the default Render Pipeline and improved code base scalability and developer experience by proposing the use of Unity events in multiple components.",
      ],
    },
    {
      title: "Software Team Lead",
      company_name: "FIRST(FLL & FTC)",
      icon: first,
      iconBg: "#FFFFFF",
      date: "2014-2021",
      skills: [
        {name: "Java", color: 'red-text-gradient'}, 
        {name: "Android Studio", color: 'green-text-gradient'}, 
        {name: "Solidworks", color: 'red-text-gradient'},
        {name: "Git", color: 'orange-text-gradient'}],
      points: [
        "Led software team for FIRST(FLL & FTC) competitions, overseeing Java, Android Studio, Solidworks, and Git.",
      ],
    },
    {
      title: "Computer Science Teaching Assistant",
      company_name: "BRIAR WOODS HIGH SCHOOL",
      icon: briar,
      iconBg: "#E6DEDD",
      date: "2019-2020",
      skills: [
        {name: "Java", color: 'red-text-gradient'}, 
        {name: "Swing", color: 'red-text-gradient'},
        {name: "JUnit", color: 'green-text-gradient'}],
      points: [
        "Assisted as a teaching assistant for computer science courses, providing support in Java, Swing, and JUnit.",
      ],
    },
  ];
  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
   const projects = [
    {
      name: "LEETGPT",
      description:
        "Developed a Chrome extension for code analysis and hints during LeetCode problem-solving. Engineered a FastAPI backend with LangChain, utilizing agentic LLMs with access to SERPER API and PostgreSQL to boost code hint quality.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "FastAPI",
          color: "pink-text-gradient",
        },
        // Add more tags if needed
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "PLANTOAI",
      description:
        "Developed PlantoAI, a smart pot system with a mobile app for remote plant care. Developed a backend with ASP.NET C#. Automated plant care actions through TensorFlow machine learning model. Automated plant care tasks using an Arduino smart pot programmed with C++.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "pink-text-gradient",
        },
        // Add more tags if needed
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "LATELIMNIATOR",
      description:
        "Developed an autonomous online class joining tool with web automation. Dockerized the application for easy setup.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Selenium",
          color: "green-text-gradient",
        },
        {
          name: "Tkinter",
          color: "pink-text-gradient",
        },
        // Add more tags if needed
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  
  export { services, technologies, experiences, testimonials, projects };