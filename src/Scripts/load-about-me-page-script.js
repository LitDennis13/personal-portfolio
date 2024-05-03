const aboutMePageHTML = `<nav>
<button id="about-me-button">About me</button>
<button id="projects-button">Projects</button>
</nav>
<header id="about-me-header">
<h1 id="name">Dennis Antwi-Buadum</h1>
<picture>
        <img id="mobile-profile-picture" alt="Profile Picture Avatar">
</picture>
<div id="about-me">
    <h2 id="about-me-title">About Me</h2>
    <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto maxime laboriosam doloribus sapiente nam velit modi quisquam fuga similique earum, eos praesentium mollitia accusamus repellat, sed laudantium, nihil omnis!</p>
</div>
</header>

<footer id="about-me-footer">
<picture>
    <img id="mobile-profile-computer-picture" alt="Profile Avatar On Computer">
</picture>
</footer>`;

function loadAboutMePage() {
    const webPageBody = document.querySelector("body");
    webPageBody.innerHTML = aboutMePageHTML;
    webPageBody.id = "about-me-body";
}

export default loadAboutMePage;
