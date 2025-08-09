const projects = [
  {
    slug: "notes-app",
    title: "Notes App",
    description: "Simple full-stack notes app with create, list, edit and delete.",
    stack: ["React", "Vite", "Java/Spring Boot", "H2 (dev)"],
    repo: "https://github.com/BarisOez/notes-app-react",  // falls Repo noch nicht da: vorerst weglassen/leer
    demo: null
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "This website. Clean layout, accessible components, and fast load.",
    stack: ["React", "Vite"],
    repo: "https://github.com/BarisOez/portfolio-website-react",
    demo: "https://barisoez.github.io/portfolio-website-react/"
  },
  {
    slug: "rest-api",
    title: "REST API Backend",
    description: "CRUD API for notes using Spring Boot. H2 in-memory DB for development.",
    stack: ["Java", "Spring Boot", "H2 (dev)"],
    repo: "https://github.com/BarisOez/notes-api-spring",
    demo: null
  }
];

export default projects;
