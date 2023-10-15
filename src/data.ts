import chatapp from "./assets/Chat App.png";
import notepad from "./assets/Notes App.png";
import quizapp from "./assets/Quiz-app.png";
import spotify from "./assets/Spotify.png";
import swiggy from "./assets/Swiggy.png";
import ecommerce from "./assets/AnyMarket.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
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
