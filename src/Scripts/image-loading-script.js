/* eslint-disable prettier/prettier */
import avatar from "../images/Avatars/Avatar.png";

import mobileAvatarComputer from "../images/Avatars/AvatarComputer-Mobile.png";

import tabletAvatarComputer from "../images/Avatars/AvatarComputer-Tablet.png";

import desktopAvatarComputer from "../images/Avatars/AvatarComputer-Desktop.png";

let currentWidth = window.innerWidth;

function loadAvatarImage() {
    const avatarHtmlImg = document.querySelector("#profile-picture");
    avatarHtmlImg.src = avatar;
    
}

function loadAvatarComputerImage() {
    currentWidth = window.innerWidth;
    const avatarComputerHtmlImg = document.querySelector("#profile-computer-picture");

    if (currentWidth > 1000) {
        avatarComputerHtmlImg.src = desktopAvatarComputer;
    }
    else if (currentWidth > 500) {
        avatarComputerHtmlImg.src = tabletAvatarComputer;
    }
    else {
        avatarComputerHtmlImg.src = mobileAvatarComputer;
    }
}

window.addEventListener("resize", () =>{
    loadAvatarComputerImage();
});

export { loadAvatarImage, loadAvatarComputerImage };
