import {
  SiHtml5,
  SiReact,
  SiSass,
  SiMysql,
  SiNodedotjs,
  SiSequelize,
  SiAngular,
  SiExpress,
  SiPostgresql,
  SiCss3,
  SiTensorflow,
  SiMicrosoftazure,
  SiPython,
  SiJava,
  SiJupyter,
  SiHeroku,
  SiGit,
  SiGithub,
} from "react-icons/si";

export const proj1 = {
  cardTitle: "Portfolio",
  cardDescription:
    "A simple responsive portfolio website built using React.js and Sass",
  cardSource: "https://github.com/druvdub/portfolio",
  cardBoolean: true,
  cardDemo: "kdssjdk",
  techStack: [
    <SiHtml5 />,
    " ",
    <SiSass />,
    " ",
    <SiReact />,
    " ",
    <SiGit />,
    " ",
    <SiGithub />,
  ],
};

export const proj2 = {
  cardTitle: "Board-it",
  cardDescription:
    "A Kanban-style application built for managing project tasks in lists. The frontend and was built using the Angular Framework and the backend was built using Express.js, Node.js, Sequelize ORM and MySQL. The website has been deployed on Heroku and the database was migrated to PostgreSQL",
  cardSource: "https://github.com/druvdub/Board-it",
  cardBoolean: true,
  cardDemo: "board-itx.herokuapp.com/",
  techStack: [
    <SiExpress />,
    " ",
    <SiAngular />,
    " ",
    <SiMysql />,
    " ",
    <SiNodedotjs />,
    " ",
    <SiSequelize />,
    " ",
    <SiPostgresql />,
    " ",
    <SiHeroku />,
  ],
};

export const proj3 = {
  cardTitle: "Real-Time Object Detection",
  cardDescription:
    "A real-time object recognition web application built using React.js. The application currently uses a Single Shot Detector (SSD) model trained on COCO, an open-source a large-scale object detection, segmentation, and captioning dataset to detect objects utilizing tensorflow. A custom model is currently being trained using Azure AI Vision to improve accuracy in medicine recognition.",
  cardSource: "https://github.com/druvdub/real-time-object-detection",
  cardBoolean: false,
  cardDemo: "board-itx.herokuapp.com/",
  techStack: [
    <SiHtml5 />,
    " ",
    <SiCss3 />,
    " ",
    <SiReact />,
    " ",
    <SiTensorflow />,
    " ",
    <SiMicrosoftazure />,
  ],
};

export const proj4 = {
  cardTitle: "Octagram",
  cardDescription:
    "A standalone desktop game application inspired by Street Fighter, developed Python and TKinter",
  cardSource: "https://github.com/druvdub/Octagram",
  cardBoolean: false,
  cardDemo: "",
  techStack: [<SiPython />],
};

export const proj5 = {
  cardTitle: "Chess",
  cardDescription: "A standalone terminal based chess game built using Java",
  cardSource: "https://github.com/druvdub/Chess",
  cardBoolean: false,
  cardDemo: "",
  techStack: [<SiJava />],
};

export const proj6 = {
  cardTitle: "Email Spam Classifier",
  cardDescription:
    "An email spam or ham classifier trained on a dataset of over 5000+ records using Bayes Theorem",
  cardSource: "https://github.com/druvdub/Email-Spam-Classifier",
  cardBoolean: false,
  cardDemo: "",
  techStack: [<SiPython />, " ", <SiJupyter />],
};
