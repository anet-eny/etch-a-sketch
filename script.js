let button = document.querySelector(".btn")



button.addEventListener("click", function(){
    let squareContainer = document.querySelector(".container")
    squareContainer.replaceChildren()
    
    let numberOfSquares = parseInt(prompt("Please enter a number (<100)"))

    let containerSize = 400
    let margin = 10
    let squaresPerRow = Math.floor(Math.sqrt(numberOfSquares))
    let squareSize = (containerSize - (squaresPerRow + 1) * margin) / squaresPerRow


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
            event.target.style.backgroundColor = "#3882f6"
        })
        square.addEventListener("mouseleave", (event) => {
            event.target.style.backgroundColor = "grey"
        })
    })
})
