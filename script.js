const body = document.querySelector("body");
body.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;");
const container = document.querySelector(".container");

container.setAttribute("style", 
    "display: flex; flex-direction: column; justify-content: center;\
    flex-wrap: no-wrap; width: 960px; height: 960px;")

function createRow() {
    const row = document.createElement("div");
    row.setAttribute("style", 
        "display: flex; flex-wrap: no-wrap; border: solid; border-color: black;\
        border-width: 1px; width: 100%; height: 100%;");
    row.setAttribute("class", "row")
    container.appendChild(row);
};

// Create a 16x16 div grid
for (var i=0; i < (16); i++){
    createRow();
};
rowDivs = document.querySelectorAll(".row");
for (var i=0; i < (16); i++){
    rowDivs.forEach(element => {
        column = document.createElement("div");
        column.setAttribute("style", 
            "border: solid; border-color: black;\
            border-width: 0.5px; width: 100%;");
        column.setAttribute("class", "column");
        element.appendChild(column);
});};


// Changes class to active on mouseover
childDivs = document.querySelectorAll(".column")

childDivs.forEach(element => {
    element.addEventListener("mouseover", () => {element.setAttribute("class", "active")})
}); 

// childDivs.forEach(element => {
//     element.addEventListener("mouseout", () => {element.setAttribute("class", "inactive")})
// }); 

const btn = document.createElement("button");
btn.textContent = "Set the square grid size";
btn.setAttribute("style", "margin: 10px;");
body.appendChild(btn);
body.appendChild(container);

btn.addEventListener("click", () => {
    let numberOfSquares = prompt("How many squares per side for new grid? Max: 100", 16);
    if (numberOfSquares === null) {return};
    if (numberOfSquares > 100){
        alert("too many squares my guy");
        return
    };
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
  
    for (var i=0; i < (numberOfSquares); i++){
    createRow();
    };
    rowDivs = document.querySelectorAll(".row");
    for (var i=0; i < (numberOfSquares); i++){
        rowDivs.forEach(element => {
            column = document.createElement("div");
            column.setAttribute("style", 
                "border: solid; border-color: black;\
                border-width: 0.5px; width: 100%");
            column.setAttribute("class", "column");
            element.appendChild(column);
    });};

    // Changes class to active on mouseover
    childDivs = document.querySelectorAll(".column")

    childDivs.forEach(element => {
        element.addEventListener("mouseover", () => {element.setAttribute("class", "active")})
    }); 

    // childDivs.forEach(element => {
    //     element.addEventListener("mouseout", () => {element.setAttribute("class", "inactive")})
    // }); 

});