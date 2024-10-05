function LoadMenuPage() {
    let title = document.createElement("div");
    title.innerHTML = "Menu";
    title.setAttribute("class", "menuTitle");

    let menuContent = document.createElement("div");
    menuContent.setAttribute("class", "foods");



    let content = document.querySelector("#content");
    content.innerHTML = "";

    content.appendChild(title);
    content.appendChild(menuContent);
}
export { LoadMenuPage };