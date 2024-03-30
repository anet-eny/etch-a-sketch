let numberOfSquares = 5

for (let i = 0; i < numberOfSquares; i++ ){
    let square = document.createElement("div")
    square.classList.add("square-div")

    let squareContainer = document.querySelector(".container")
    squareContainer.appendChild(square)
}


