const gridContainer = document.querySelector(".container")
gridContainer.style.width = "600px"
gridContainer.style.height = "600px"

let squaresPerRow = 24 // default value



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
    document.querySelectorAll(".square-div").forEach(squareDiv => {
        squareDiv.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = randomRgbColor()
        })
    })
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1))
}


function randomRgbColor () {
    let r = randomInteger(255)
    let g = randomInteger(255)
    let b = randomInteger(255)
    let randomColor = 'rgb(' + r + ',' + g + ',' + b + ')'
    return randomColor
}




createGrid()

document.querySelector(".btn").addEventListener("click", function(){
    squaresPerRow = parseInt(prompt("Please enter a number"))
    gridContainer.replaceChildren()
    createGrid()
})


// document.querySelectorAll(".square-div").forEach(squareDiv => {
//     squareDiv.addEventListener("mouseenter", (event) => {
//         event.target.style.backgroundColor = "black"
//     })
// })