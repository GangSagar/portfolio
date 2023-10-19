import chatapp from "./assets/Chat App.png";
import notepad from "./assets/Notes App.png";
import quizapp from "./assets/Quiz-app.png";
import spotify from "./assets/Spotify.png";
import swiggy from "./assets/Swiggy.png";
import ecommerce from "./assets/AnyMarket.png";
import C_plus from "./assets/c_plus.png";
import html from "./assets/html.png";
import css from "./assets/css3.png";
import js from "./assets/javascript.png";
import react from "./assets/react.png";
import ts from "./assets/typescript.png";
import tailwind from "./assets/tailwind.png";
import bootstrap from "./assets/bootstrap.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
}

interface exp {
  id: number;
  title: string;
  img: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "front",
    img: swiggy,
    title: "Front-end Swiggy Clone",
    link: "https://apna-tasty-food.netlify.app/",
  },
  {
    id: 1,
    category: "front",
    img: notepad,
    title: "Notepad",
    link: "https://gangsagar.github.io/notepad/",
  },
  {
    id: 2,
    category: "front",
    img: chatapp,
    title: "Chat-App",
    link: "https://chatapp-2da5a.web.app/",
  },
  {
    id: 3,
    category: "front",
    img: ecommerce,
    title: "Ecommerce",
    link: "https://gangsagar.github.io/ecommerce/",
  },
  {
    id: 4,
    category: "web",
    img: quizapp,
    title: "Quiz App",
    link: "https://gangsagar.github.io/Quiz-App/",
  },
  {
    id: 5,
    category: "web",
    img: spotify,
    title: "Spotify Clone",
    link: "https://gangsagar.github.io/music_player/",
  },
];

export const experience: exp[] = [
  {
    id: 0,
    title: "C++",
    img: C_plus,
  },
  {
    id: 1,
    title: "HTML",
    img: html,
  },
  {
    id: 2,
    title: "CSS",
    img: css,
  },
  {
    id: 3,
    title: "JavaScript",
    img: js,
  },
  {
    id: 4,
    title: "React.js",
    img: react,
  },
  {
    id: 5,
    title: "TypeScript",
    img: ts,
  },
  {
    id: 6,
    title: "Tailwind",
    img: tailwind,
  },
  {
    id: 7,
    title: "Bootstrap",
    img: bootstrap,
  },
];
