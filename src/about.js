function LoadAboutPage() {
    let title = document.createElement("div");
    title.innerHTML = "About";
    title.setAttribute("class", "menuTitle");

    let contact = document.createElement("div");
    contact.setAttribute("class", "contact");
    let name = document.createElement("div");
    name.innerHTML = "Boss";
    let num = document.createElement("div");
    num.innerHTML = "555-555-5554";
    let email = document.createElement("div");
    email.innerHTML = "totallyRealEmail@notFake.com";

    contact.appendChild(name);
    contact.appendChild(num);
    contact.appendChild(email);

    content.innerHTML = "";

    content.appendChild(title);
    content.appendChild(contact);
}

export { LoadAboutPage }; 