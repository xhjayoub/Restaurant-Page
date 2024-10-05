import "./styles.css";
import img from "./images/Flag_of_Tunisia.png";
import { LoadHomePage } from "./home.js";

LoadHomePage();
document.querySelector("#home").addEventListener("click", LoadHomePage);