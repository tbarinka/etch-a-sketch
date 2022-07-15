let container = document.querySelector('#container');
const refresh = document.querySelector("#refresh");
//let refresh = document.getElementById('refresh');

//create a single cell track (divs)
function createCell(number) {
    for (let i = 1; i <= number; i++) {
        let cell = document.createElement('div');
        cell.id = "cell-" + i;
        cell.classList.add("cell");
        cell.addEventListener('mouseover', (event) => {
            cell.className = "cell-hover";
        });
        container.appendChild(cell);
    }
}
//create grid
function createGrid(numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let i = 0; i < numRow; i++) {
        createCell(numCol);
    }
} createGrid(16, 16);

//prompt for createGrid input
function promptGrid() {
    let size = prompt("Choose grid size between 5 and 100.");
   
    if ((size <= 100 ) && (size >= 5)) {
        createGrid(size, size);
    } else {
        alert("Grid size must be a number between 5 and 100. Please try again.");
    }
};


// refresh function
refresh.addEventListener("click", function() {
    let children = document.querySelectorAll(".cell");
    for (const child of children) {
        child.remove();
    }; 
    let children2 = document.querySelectorAll(".cell-hover");
    for (const child2 of children2) {
        child2.remove();
    }; 
    promptGrid();
});



  