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
    for (let i = 0; i < y; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < x; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.addEventListener("touchstart", () => {
                random_bg_color(cell);
            })
            cell.addEventListener("touchmove", () => {
                random_bg_color(cell);
            })
            cell.addEventListener("mouseover", () => {
                random_bg_color(cell);
            })
            row.appendChild(cell);
        }
        document.body.appendChild(row);
    }    
}