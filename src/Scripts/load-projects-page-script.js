const projectsPageHTML = `<nav>
<button id="about-me-button">About me</button>
<button id="projects-button">Projects</button>
</nav>

<header id="projects-header">
<h1 id="projects-title">Projects</h1>
</header>

<main>
<div id="projects">
    </div>
</div>
</main>

<footer id="projects-footer">
<picture>
    <img id="mobile-profile-computer-picture" alt="Profile Avatar On Computer">
</picture>
</footer>`;

function loadProjectsPage() {
    const webPageBody = document.querySelector("body");
    webPageBody.innerHTML = projectsPageHTML;
    webPageBody.id = "projects-body";
}

/*
<div id="project">
    <img id="project-image" src="" alt="Battle Ship Project Picture">
    <div id="project-name-links">
    <h3 id="project-name">BattleShip</h3>
</div>

*/
export default loadProjectsPage;
