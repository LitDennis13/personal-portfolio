import githubIcon from "../images/Icons/githubIcon.png";

const aboutMePageHTML = `<nav>
<button id="about-me-button" class="active">About me</button>
<button id="projects-button">Projects</button>
</nav>
<header id="about-me-header">
<h1 id="name">Dennis Antwi-Buadum</h1>
<picture>
        <img id="mobile-profile-picture" alt="Profile Picture Avatar">
</picture>
<div id="about-me">
    <h2 id="about-me-title">About Me</h2>
    <p id="description">I like Programming. I like Computers. I like Gaming. I like Formula One. I like Racing.</p>
</div>
</header>

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

function loadAboutMePage() {
    const webPageBody = document.querySelector("body");
    webPageBody.innerHTML = aboutMePageHTML;
    webPageBody.id = "about-me-body";
}

export default loadAboutMePage;
