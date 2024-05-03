import mobileAvatar from "../images/Avatars/Avatar-Mobile.png";
import tabletAvatar from "../images/Avatars/Avatar-Tablet.png";
import desktopAvatar from "../images/Avatars/Avatar-Desktop.png";

import mobileAvatarComputer from "../images/Avatars/AvatarComputer-Mobile.png";

import tabletAvatarComputer from "../images/Avatars/AvatarComputer-Tablet.png";

import desktopAvatarComputer from "../images/Avatars/AvatarComputer-Desktop.png";

function loadAvatarImage() {
    // eslint-disable-next-line prettier/prettier
    const mobileAvatarHtmlImg = document.querySelector("#mobile-profile-picture");
    mobileAvatarHtmlImg.src = mobileAvatar;
}

function loadAvatarComputerImage() {
    // eslint-disable-next-line prettier/prettier
    const mobileAvatarComputerHtmlImg = document.querySelector("#mobile-profile-computer-picture");
    mobileAvatarComputerHtmlImg.src = mobileAvatarComputer;
}

// loadImages();
export { loadAvatarImage, loadAvatarComputerImage };
