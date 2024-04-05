const gridContainer = document.querySelector(".container")
gridContainer.style.width = "600px"
gridContainer.style.height = "600px"

let squaresPerRow = 24 // default value

function createGrid() {
    for(let i = 0; i < squaresPerRow; i++) {
        for(let j = 0; j < squaresPerRow; j++) {
            const square = document.createElement("div")
            square.classList.add("square-div")
            square.style.width = (parseInt(gridContainer.style.width) / squaresPerRow) + "px"
            square.style.height = (parseInt(gridContainer.style.width) / squaresPerRow) + "px"
            gridContainer.appendChild(square)    
        }
    }
    const squares = document.querySelectorAll(".square-div")
    squares.forEach(square => {
        square.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = randomRgbColor()
        })
    })
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1))
}


function randomRgbColor() {
    let r = randomInteger(255)
    let g = randomInteger(255)
    let b = randomInteger(255)
    let randomColor = `rgb(${r}, ${g}, ${b})`
    return randomColor
}

createGrid()

document.querySelector(".btn").addEventListener("click", function(){
    squaresPerRow = parseInt(prompt("Please enter a number between 1 and 100"))
    if(squaresPerRow < 1 || squaresPerRow > 100) {
        alert("Please enter a number between 1 and 100")
        return
    }
    gridContainer.replaceChildren()
    createGrid()
})

function resetCanvas() {
    const squares = gridContainer.querySelectorAll(".square-div")
    squares.forEach((square) => {
        square.style.backgroundColor = "grey"
    })
}

document.querySelector(".reset-btn").addEventListener("click", function(){
    resetCanvas()
})