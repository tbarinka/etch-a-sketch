let container = document.getElementById('container');

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

