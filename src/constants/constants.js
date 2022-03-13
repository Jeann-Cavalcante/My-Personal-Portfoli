import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";

export const projects = [
  {
    title: "Crud com mongoDb",
    description:
      "Um projeto simples para criar um CRUD com mongoDb, utilizando o mongoose.",
    image: "/images/to-do-list.png",
    tags: ["Mongo", "Express", "Ejs", "Node"],
    source: "https://to-do-list-teste.herokuapp.com/",
    visit: "https://github.com/Jeann-Cavalcante/to-do-list",
    id: 0,
  },
  {
    title: "Whatsapp Clone",
    description: "Um clone do whatsapp, utilizando o react e Firebase.",
    image: "/images/wtt.png",
    tags: ["React", "Firebase"],
    source: "https://to-do-list-teste.herokuapp.com/",
    visit: "https://github.com/Jeann-Cavalcante/to-do-list",
    id: 1,
  },
  {
    title: "Site em flexbox",
    description: "Um site em flexbox, utilizando o melhor css do mercado.",
    image: "/images/frontbox.png",
    tags: ["Html", "Css", "Flebox"],
    source: "https://jean-portfolio.netlify.app/",
    visit: "https://github.com/Jeann-Cavalcante/siteEmFlexBox/tree/master",
    id: 2,
  },
  {
    title: "Sitema de cadastro",
    description: "Um site de cadastro, utilizando javascript e localStorage.",
    image: "/images/cadastro.png",
    tags: ["Html", "Css", "JavaScript"],
    source: "https://teste-vendedores.netlify.app/login.html",
    visit: "https://github.com/Jeann-Cavalcante/sistema-com-login-js",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
