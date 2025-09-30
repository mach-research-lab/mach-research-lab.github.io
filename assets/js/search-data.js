// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Our ongoing research projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "All our publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-vacancies",
          title: "vacancies",
          description: "Our vacancies",
          section: "Navigation",
          handler: () => {
            window.location.href = "/vacancies/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses in which our lab is involved",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-team",
          title: "team",
          description: "Meet our team",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-postdoc-position-available-in-quantum-simulation-acceleration",
          title: 'New Postdoc position available in quantum simulation acceleration!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-meet-our-new-phd-andre",
          title: 'Meet our new PhD, Andre!',
          description: "",
          section: "News",},{id: "projects-autopim",
          title: 'AutoPIM',
          description: "Near-memory computing for autonomous driving",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-quantumstack",
          title: 'QuantumStack',
          description: "Postdock position",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_vacancy/";
            },},{id: "projects-vedliot",
          title: 'Vedliot',
          description: "Fareed",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-quantum-stack",
          title: 'Quantum Stack',
          description: "Interfacing quantum computers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-epi",
          title: 'EPI',
          description: "European Processor Initiative",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
