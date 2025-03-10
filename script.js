const grid = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
let inputSize;
gridSize.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        event.preventDefault()
        inputSize = this.value;
        
        if(!isNaN(inputSize) && inputSize >= 1 && inputSize <= 32){
            resetGrid();
            makeGrid(inputSize);
            this.value = "";
            container.style.borderWidth = "5px";
            container.style.borderStyle = "solid";
            container.style.borderColor = "black";
        }
    }
});

document.getElementById("clearBtn").addEventListener("click", ()=>{
    clearGridColors();
})

function resetGrid() {
    grid.innerHTML = ""; // reset the grid container
}

function makeGrid(squaresNum){
    const squareSize = 600 / squaresNum; // Calculate size of each square

    for(let i = 1; i <= squaresNum; i++){
        const row = document.createElement("div");
        row.classList.add("rows");

        for (let j = 1; j <= squaresNum; j++){
            const column = document.createElement("div");
            column.classList.add("columns");
            row.appendChild(column);

            column.style.width = `${squareSize}px`;
            column.style.height = `${squareSize}px`;
        }
        grid.appendChild(row);
    }
    
    setRandomColor();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 200); 
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    
    return `rgb(${r}, ${g}, ${b})`;
}
function setRandomColor(){
    const columns = document.querySelectorAll(".columns"); 
    columns.forEach(cell => {
        cell.addEventListener("mouseenter", () =>{
            cell.style.backgroundColor = getRandomColor();
        });    
    });
}

function clearGridColors(){
    const cells = document.querySelectorAll(".columns"); 
    cells.forEach(cell => {
        cell.style.backgroundColor = "";
    });
}
