let numberOfSquares = 100

let squareContainer = document.querySelector(".container")

let containerSize = 400
let margin = 10
let squaresPerRow = Math.floor(Math.sqrt(numberOfSquares))
let squareSize = (containerSize - (squaresPerRow + 1) * margin) / squaresPerRow

console.log(squaresPerRow)
console.log(squareSize)

for (let i = 0; i < numberOfSquares; i++ ){
    let square = document.createElement("div")
    square.classList.add("square-div")

    square.style.width = squareSize + "px"
    square.style.height = squareSize + "px"

    
    squareContainer.appendChild(square)

}

let hoverSquares = document.querySelectorAll(".square-div")

hoverSquares.forEach(square => {
    square.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "violet"
    })
    square.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "darkblue"
    })
})

