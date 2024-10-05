import "./styles.css";
import img from "./images/Flag_of_Tunisia.png";
import { LoadHomePage } from "./home.js";
import { LoadMenuPage } from "./menu.js";
import { LoadAboutPage } from "./about.js";
LoadHomePage();
document.querySelector("#home").addEventListener("click", LoadHomePage);
document.querySelector("#menu").addEventListener("click", LoadMenuPage);
document.querySelector("#about").addEventListener("click", LoadAboutPage);