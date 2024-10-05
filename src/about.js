function LoadAboutPage() {
    let title = document.createElement("div");
    title.innerHTML = "About";
    title.setAttribute("class", "menuTitle");


    content.innerHTML = "";

    content.appendChild(title);
}

export { LoadAboutPage }; 