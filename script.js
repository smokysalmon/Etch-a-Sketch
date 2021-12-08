makeBoard(16);
let button = document.querySelector("#clear_button");
button.addEventListener("click", event => {
    clear();
});

function addRow(n) {
    // n is number of squares in row
    let container = document.querySelector("#container");
    let row = document.createElement("div");
    row.classList.toggle("row");
    for (let k = 0; k < n; k++) {
        let square = document.createElement("div");
        square.classList.toggle("square");
        square.addEventListener("mouseover", event => {
            square.style.backgroundColor = "black";
        });
        row.appendChild(square);
    }
    container.appendChild(row);
}

function makeBoard(n) {
    for (let k = 0; k < n; k++) {
        addRow(n);
    }
}

function clear() {
    let nString = prompt("Enter the amount of rows you want.", "16");
    let n = 16;
    if (!isNaN(nString) && !(n > 100 || n < 1)) {
        n = parseInt(nString);
    }
    let container = document.querySelector("#container");
    let rowList = document.querySelectorAll(".row");
    rowList.forEach(row => {
        container.removeChild(row);
    });
    makeBoard(n);
}