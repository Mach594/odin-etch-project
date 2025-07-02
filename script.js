const body = document.querySelector("body");
body.setAttribute("style", "display: flex; justify-content: center; align-items: center; height: 100vh;");
const container = document.querySelector(".container");

container.setAttribute("style", 
    "display: flex; justify-content: center; align-content: center;\
    flex-wrap: wrap; width: 450px;")

function createDiv() {
    const div = document.createElement("div");
    div.setAttribute("style", 
        "height: 25px; width: 25px; border: solid; border-color: black;\
        border-width: 1px;");
    div.setAttribute("class", "child")
    container.appendChild(div);
};

// Create a 16x16 div grid
for (var i=0; i < (16*16); i++){
    createDiv();
};

// Changes class to active on mouseover
childDivs = document.querySelectorAll(".child")

childDivs.forEach(element => {
    element.addEventListener("mouseover", () => {element.setAttribute("class", "active")})
}); 