function addParagraphWithText(text) {
    let p = document.createElement("p");
    p.innerHTML = text;
    return p;
}

function LoadHomePage() {
    // Title
    let title = document.createElement("div");
    title.setAttribute("class", "title");
    title.innerHTML = "Tounsi Food";

    // Home page image
    let homeImage = document.createElement("div");
    homeImage.setAttribute("class", "homepage-img");
    let image = document.createElement("img");
    let imageUrl = "./images/Flag_of_Tunisia.png"
    image.setAttribute("src", imageUrl);
    homeImage.appendChild(image);

    // Description
    let description = document.createElement("div");
    description.setAttribute("class", "description");
    let descriptionText =  "Tounsi Food is a vibrant Tunisian restaurant that captures the heart and soul of North African cuisine. With its warm, inviting atmosphere, Tounsi Food offers a rich blend of traditional spices, fresh ingredients, and authentic flavors, bringing the essence of Tunisia to every dish. Whether savoring a fragrant couscous, a perfectly spiced brik, or a comforting bowl of chorba, each meal at Tounsi Food tells the story of Tunisia’s rich culinary heritage. It’s not just a dining experience—it’s a flavorful journey to the Mediterranean, where every bite feels like home.";
    description.innerHTML = descriptionText;
    
    // hours
    let hours = document.createElement("div");
    hours.setAttribute("class", "hours");
    let hoursTitle = document.createElement("div");
    hoursTitle.setAttribute("class", "hours-title");
    hoursTitle.innerHTML = "Hours";
    
    hours.appendChild(hoursTitle);

    hours.appendChild(addParagraphWithText("Sunday 8am-8pm"));
    hours.appendChild(addParagraphWithText("Monday 8am-6pm"));
    hours.appendChild(addParagraphWithText("Tuesday 4pm-12am"));
    hours.appendChild(addParagraphWithText("Wednesday 8am-11pm"));
    hours.appendChild(addParagraphWithText("Thursday 6am-5pm"));
    hours.appendChild(addParagraphWithText("Friday 7am-11am"));
    hours.appendChild(addParagraphWithText("Saturday 8am-8pm"));

    // Location 
    let location = document.createElement("div");
    location.appendChild(addParagraphWithText("Tunisia, Monastir, 5014"));

    // clear #content
    document.querySelector("#content"). innerHTML = "";
    
    document.querySelector("#content").appendChild(title);
    document.querySelector("#content").appendChild(homeImage);
    document.querySelector("#content").appendChild(description);
    document.querySelector("#content").appendChild(hours);
    document.querySelector("#content").appendChild(location);
}

export {LoadHomePage};