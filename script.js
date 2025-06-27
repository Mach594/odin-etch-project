const body = document.querySelector("body");
const container = document.querySelector(".container");
container.setAttribute("style", "display: flex; justify-content: center; align-content: center;")

function createDiv() {
    const div = document.createElement("div");
    container.appendChild(div);
};

for (var i=0; i < 16; i++){
    createDiv();
};

const divSelect = document.querySelector("div div");
divSelect.setAttribute("style", "flex-direction: row; border: solid; background-color: black; height: 200px; width: 200px;")