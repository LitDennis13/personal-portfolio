import mobileAvatar from "../images/Avatar-Mobile.png";
import tabletAvatar from "../images/Avatar-Tablet.png";
import desktopAvatar from "../images/Avatar-Desktop.png";

import mobileAvatarComputer from "../images/AvatarComputer-Mobile.png";

import tabletAvatarComputer from "../images/AvatarComputer-Tablet.png";

import desktopAvatarComputer from "../images/AvatarComputer-Desktop.png";

const mobileAvatarHtmlImg = document.querySelector("#mobile-profile-picture");
mobileAvatarHtmlImg.src = mobileAvatar;

// eslint-disable-next-line prettier/prettier
const mobileAvatarComputerHtmlImg = document.querySelector("#mobile-profile-computer-picture");
mobileAvatarComputerHtmlImg.src = mobileAvatarComputer;
