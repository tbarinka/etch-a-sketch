let container = document.getElementById('container');
const refresh = document.querySelector("#refresh");
//let refresh = document.getElementById('refresh');

//code that executes function to create 16 divs
function createDivs(number) {
    for (let i = 1; i <= number; i++) {
        let cell = document.createElement('div');
        cell.id = "cell-" + i;
        cell.className = "cell";
        cell.textContent = "       ";
        cell.addEventListener('mouseover', (event) => {
            cell.className = "cell-hover";
        });
    
        container.appendChild(cell);

    }
} createDivs(256);

refresh.addEventListener("click", function() {
    let children = document.querySelectorAll(".cell");
    for (const child of children) {
        child.remove();
    }; 
    let children2 = document.querySelectorAll(".cell-hover");
    for (const child2 of children2) {
        child2.remove();
    }; 
    createNewDivs();
});

function createNewDivs() {
    let num = prompt("Input desired number of squares per side.");
    if (num > 64) {
        alert("Input cannot exceed 64. Please pick a lower number.");
        return;
    };

    for (let i = 1; i <= (num * num); i++) {
        let cell = document.createElement('div');
        cell.id = "cell-" + i;
        cell.className = "cell";
        cell.textContent = "       ";
        cell.addEventListener('mouseover', (event) => {
            cell.className = "cell-hover";
        });
        container.appendChild(cell);

    };
};

  