function foodGenerateDev(food) {
    let container = document.createElement("div");
    container.setAttribute("class", "food");
    
    
    let foodImageContainer = document.createElement("div");
    let foodImage = document.createElement("img");
    foodImage.setAttribute("src", food.img);
    foodImageContainer.appendChild(foodImage);

    let title = document.createElement("div");
    title.setAttribute("class", "food-title");
    title.innerHTML = food.text;
    
    
    let price = document.createElement("div");
    price.innerHTML = food.price;

    container.appendChild(foodImageContainer);
    container.appendChild(title);
    container.appendChild(price);
    return container;
}

function LoadMenuPage() {
    let title = document.createElement("div");
    title.innerHTML = "Menu";
    title.setAttribute("class", "menuTitle");

    let menuContent = document.createElement("div");
    menuContent.setAttribute("class", "foods");
    // foods
    let chappati = foodGenerateDev({
        img: "./images/chappati.jpg",
        text: "Chappati",
        price : "3dt",
    });
    let lablabi = foodGenerateDev({
        img: "./images/lablabi.jpg",
        text: "Lablabi",
        price : "5dt",
    })
    let platTunisien = foodGenerateDev({
        img: "./images/platTounsi.jpg",
        text: "Plat Tunisien",
        price : "5dt",
    })
    menuContent.appendChild(chappati);
    menuContent.appendChild(lablabi);
    menuContent.appendChild(platTunisien);
    let content = document.querySelector("#content");
    content.innerHTML = "";

    content.appendChild(title);
    content.appendChild(menuContent);
    
}
export { LoadMenuPage };