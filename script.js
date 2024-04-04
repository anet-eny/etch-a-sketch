const gridContainer = document.querySelector(".container")
gridContainer.style.width = "400px"
gridContainer.style.height = "400px"

let squaresPerRow = 16 // default value

function createGrid() {
    for(let i = 0; i < squaresPerRow; i++) {
        for(let j = 0; j < squaresPerRow; j++) {
            let square = document.createElement("div")
            square.classList.add("square-div")
            square.style.width = (parseInt(gridContainer.style.width) / squaresPerRow) + "px"
            square.style.height = (parseInt(gridContainer.style.width) / squaresPerRow) + "px"
            gridContainer.appendChild(square)
            
        }
    }
}

createGrid()
