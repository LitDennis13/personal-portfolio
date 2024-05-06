import battleShipImage from "../images/ProjectPictures/BattleShip.png";
import todoListImage from "../images/ProjectPictures/TodoList.png";
import libraryImage from "../images/ProjectPictures/Library.png";
import weatherImage from "../images/ProjectPictures/Weather.png";
import tictactoeImage from "../images/ProjectPictures/TicTacToe.png";
import etchasektchImage from "../images/ProjectPictures/EtchaSketch.png";
import rockpaperscissorsImage from "../images/ProjectPictures/RockPaperScissors.png";

import openInViewIcon from "../images/Icons/openInViewIcon.png";
import githubIcon from "../images/Icons/githubIcon.png";

const projectsPageHTML = `<nav>
<button id="about-me-button">About me</button>
<button id="projects-button" class="active">Projects</button>
</nav>

<header id="projects-header">
<h1 id="projects-title">Projects</h1>
</header>

<main>

</main>

<footer>
<picture>
    <img id="mobile-profile-computer-picture" alt="Profile Avatar On Computer">
</picture>
<div id="links">
    <a id="github-link" href="https://github.com/LitDennis13">
    <img src="${githubIcon}" alt="Github Icon">
    </a>
</div>
</footer>`;

const projects = [
    {
        name: "BattleShip",
        // eslint-disable-next-line prettier/prettier
        description: "Battle Ship game with a Computer AI and a Two Player Mode",
        imgSrc: battleShipImage,
        imgAlt: "Battle Ship Project Picture",
        linkToProject: "https://litdennis13.github.io/odin-battleship/",
        linkToGithub: "https://github.com/LitDennis13/odin-battleship",
    },
    {
        name: "TodoList",
        description: "Todo List App",
        imgSrc: todoListImage,
        imgAlt: "Library Project Picture",
        linkToProject: "https://litdennis13.github.io/odin-todo-list/",
        linkToGithub: "https://github.com/LitDennis13/odin-todo-list",
    },
    {
        name: "Library",
        description: "Library App",
        imgSrc: libraryImage,
        imgAlt: "Todo List Project Picture",
        linkToProject: "https://litdennis13.github.io/odin-library/",
        linkToGithub: "https://github.com/LitDennis13/odin-library",
    },
    {
        name: "Weather",
        description: "Weather App",
        imgSrc: weatherImage,
        imgAlt: "Weather App Project Picture",
        linkToProject: "https://litdennis13.github.io/odin-weather-app/",
        linkToGithub: "https://github.com/LitDennis13/odin-weather-app",
    },
    {
        name: "Tic Tac Toe",
        description: "Tic Tac Toe game",
        imgSrc: tictactoeImage,
        imgAlt: "Tic Tac Toe Project Picture",
        linkToProject: "https://litdennis13.github.io/odin-tic-tac-toe/",
        linkToGithub: "https://github.com/LitDennis13/odin-tic-tac-toe",
    },
    {
        name: "Etch a Sketch",
        description: "Etch a Sketch",
        imgSrc: etchasektchImage,
        imgAlt: "Etch a Sketch Project Picture",
        linkToProject: "https://litdennis13.github.io/odin-etch-a-sketch/",
        linkToGithub: "https://github.com/LitDennis13/odin-etch-a-sketch",
    },
    {
        name: "Rock Paper Scissors",
        description: "Rock Paper Scissors game",
        imgSrc: rockpaperscissorsImage,
        imgAlt: "Rock Paper Scissors Project Picture",
        linkToProject: "https://litdennis13.github.io/odin-rockpaperscissors/",
        linkToGithub: "https://github.com/LitDennis13/odin-rockpaperscissors",
    },
];

// eslint-disable-next-line prettier/prettier
function createProjectHTML(name, description, imgSrc, imgAlt, linkToProject, linkToGithub) {


    const projectContainer = document.createElement("a");
    projectContainer.href = linkToProject;
    projectContainer.id = "project";

    const projectImage = document.createElement("img");
    projectImage.id = "project-image";
    projectImage.src = imgSrc;
    projectImage.alt = imgAlt;

    const projectFirstLevelInfo = document.createElement("div");
    projectFirstLevelInfo.id = "project-first-level-info";

    const projectName = document.createElement("h2");
    projectName.id = "project-name";
    projectName.textContent = name;

    const projectLink = document.createElement("a");
    projectLink.href = linkToProject;
    projectLink.id = "project-link";
    const projectLinkIcon = document.createElement("img");
    projectLinkIcon.src = openInViewIcon;
    projectLinkIcon.alt = "Open Project Icon";
    projectLinkIcon.id = "link-icon";

    const projectGithub = document.createElement("a");
    projectGithub.href = linkToGithub;
    projectGithub.id = "project-github";
    const projectGithubIcon = document.createElement("img");
    projectGithubIcon.src = githubIcon;
    projectGithubIcon.alt = "Github Icon";
    projectGithubIcon.id = "github-icon";

    const projectSecondLevelInfo = document.createElement("div");
    projectSecondLevelInfo.id = "project-second-level-info";

    const projectDescription = document.createElement("p");
    projectDescription.id = "project-desc";
    projectDescription.textContent = description;

    projectLink.appendChild(projectLinkIcon);
    projectGithub.appendChild(projectGithubIcon);

    projectFirstLevelInfo.appendChild(projectName);
    projectFirstLevelInfo.appendChild(projectLink);
    projectFirstLevelInfo.appendChild(projectGithub);

    projectSecondLevelInfo.appendChild(projectDescription);

    projectContainer.appendChild(projectImage);
    projectContainer.appendChild(projectFirstLevelInfo);
    projectContainer.appendChild(projectSecondLevelInfo);

    return projectContainer;
}

function loadProjects() {
    const projectsContainer = document.querySelector("main");
    for (const project of projects) {
        const projectHTML = createProjectHTML(
            project.name,
            project.description,
            project.imgSrc,
            project.imgAlt,
            project.linkToProject,
            project.linkToGithub,
        );
        projectsContainer.appendChild(projectHTML);
    }
}

function loadProjectsPage() {
    const webPageBody = document.querySelector("body");
    webPageBody.innerHTML = projectsPageHTML;
    webPageBody.id = "projects-body";
    loadProjects();
}

/*
<div id="project">
    <img id="project-image" src="" alt="Battle Ship Project Picture">
    <div id="project-name-links">
    <h3 id="project-name">BattleShip</h3>
</div>

*/
export default loadProjectsPage;
