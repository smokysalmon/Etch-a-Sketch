makeBoard(16);

function addRow(n) {
    // n is number of squares in row
    let container = document.querySelector("#container");
    let row = document.createElement("div");
    row.classList.toggle("row");
    for (let k = 0; k < n; k++) {
        let square = document.createElement("div");
        square.classList.toggle("square");
        row.appendChild(square);
    }
    container.appendChild(row);
}

function makeBoard(n) {
    for (let k = 0; k < n; k++) {
        addRow(n);
    }
}