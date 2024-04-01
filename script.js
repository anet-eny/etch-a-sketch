let button = document.querySelector(".btn")



button.addEventListener("click", function(){
    let squareContainer = document.querySelector(".container")
    squareContainer.replaceChildren()
    
    let numberOfSquares = parseInt(prompt("Please enter a number (<196)"))

    if(numberOfSquares < 1 || numberOfSquares > 196) {
        alert("Please enter a number between 1 and 196")
        return
    }
    let containerSize = 400
    
    // Calculate the number of squares per row
    let squaresPerRow = Math.floor(Math.sqrt(numberOfSquares))

    // Calculate the square size based on the number of squares per row
    let squareSize = containerSize / squaresPerRow


    for (let i = 0; i < numberOfSquares; i++ ){
        let square = document.createElement("div")
        square.classList.add("square-div")

        square.style.width = squareSize + "px"
        square.style.height = squareSize + "px"

    
        squareContainer.appendChild(square)

    }
    let selectedColor = null
    let btnViolet = document.querySelector(".violet")
    btnViolet.addEventListener("click", function() {
        selectedColor = "violet"
    })

    let btnWhite = document.querySelector(".white")
    btnWhite.addEventListener("click", function() {
        selectedColor = "white"
    })

    let btnDarkblue = document.querySelector(".darkblue")
    btnDarkblue.addEventListener("click", function(){
        selectedColor = "darkblue"
    })

    let squares = document.querySelectorAll(".square-div")

    squares.forEach(square => {
        let isClicked = false

        square.addEventListener("mouseenter", (event) => {
            if(!isClicked){
                event.target.style.backgroundColor = "#3882f6"
            }
        })
        square.addEventListener("mouseleave", (event) => {
            if(!isClicked){
                event.target.style.backgroundColor = "grey"
            }
        })
        square.addEventListener("click", (event) => {
            isClicked = !isClicked 
            if(selectedColor === "violet") {
                event.target.style.backgroundColor = "violet"
            } else if (selectedColor === "white") {
                event.target.style.backgroundColor = "white"
            } else if (selectedColor === "darkblue") {
                event.target.style.backgroundColor = "darkblue"
            } else {
                event.target.style.backgroundColor = "grey"
            }
            
        })
    })
})
