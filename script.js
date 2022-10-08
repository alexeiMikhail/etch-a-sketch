// Variables

const grid = {
    x: 16,
}

let rowCountButton = document.getElementById("change-row-count");

// Main

makeGrid(grid.x, grid.x)

// Functions

function random_bg_color(element) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    element.style.background = bgColor;
}


function makeGrid(x,y) {

    let container = document.getElementById("grid-container");
    clearElement(container);
    let rowHeight = `${container.offsetHeight / y}px`; console.log(`Row height: ${rowHeight}`)
    let cellWidth = `${container.offsetHeight / y}px`

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

function clearElement(element)
{
    element.innerHTML = ""; console.log(`Cleared ${element}`)
}

function updateRowCount(){
    let rowCountValue = document.getElementById("row-count").value; console.log(`Row Count Value: ${rowCountValue}`)
    newCount = rowCountValue;
    makeGrid(newCount, newCount); console.log(`New row count: ${newCount}`)
}

// Event Listeners

// rowCountButton.addEventListener("click", console.log("Clicked change button.")) // Event listener vs onclick attribute