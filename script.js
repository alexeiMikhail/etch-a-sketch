const grid = {
    x: 16,
    maxWidth: innerWidth/2,
    maxHeight: innerHeight/2
}

makeGrid(grid.x, grid.x);

function random_bg_color(element) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    element.style.background = bgColor;
}


function makeGrid(x,y) {
    console.log("Making grid...")

    let container = document.getElementById("grid-container");
    let rowHeight = `${container.offsetHeight / y}px`; console.log(`Row height: ${rowHeight}`)
    let cellWidth = `${container.offsetHeight / y}px`

    console.log("Grid made.")

    for (let i = 0; i < y; i++) {
        let div = document.createElement("div");
        div.style.height = rowHeight; console.log(div.offsetHeight)
        let row = container.appendChild(div);
        
        row.className = "row";
        for (let j = 0; j < x; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = cellWidth;
            cell.addEventListener("mouseover", () => {
                random_bg_color(cell);
            })
            row.appendChild(cell);
        }
        container.appendChild(row);
    }  
}