// eslint-disable-next-line prettier/prettier
import { loadAvatarImage, loadAvatarComputerImage } from "./image-loading-script";
import loadAboutMePage from "./load-about-me-page-script";
import loadProjectsPage from "./load-projects-page-script";

loadAboutMePage();
loadAvatarImage();
loadAvatarComputerImage();

let aboutMeButton = document.querySelector("#about-me-button");
let projectsButton = document.querySelector("#projects-button");

function aboutMeLoading() {
    loadAboutMePage();
    loadAvatarImage();
    loadAvatarComputerImage();
    projectsButton = document.querySelector("#projects-button");
    // eslint-disable-next-line no-use-before-define
    projectsButton.addEventListener("click", projectLoading);
}

function projectLoading() {
    loadProjectsPage();
    loadAvatarComputerImage();
    aboutMeButton = document.querySelector("#about-me-button");
    aboutMeButton.addEventListener("click", aboutMeLoading);
}

aboutMeButton.addEventListener("click", aboutMeLoading);

projectsButton.addEventListener("click", projectLoading);
