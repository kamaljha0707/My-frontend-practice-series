let add = document.querySelector(".add")
let remove = document.querySelector(".remove")
let scoreValue = document.querySelector(".score")

let score = 0 
scoreValue.innerHTML = score


function handleAdd(){
    score++
    scoreValue.innerHTML = score
    changeColor()
}
function handleRemove(){
  score =  score - 1
   scoreValue.innerHTML = score
   changeColor()
}
function reset(){
    score = 0
   scoreValue.innerHTML = score
   changeColor()
}

function changeColor (){
    if (score < 0) {
        scoreValue.style.color = "salmon"
    } else if (score > 5) {
        scoreValue.style.color = "cadetblue"
    } else {
        scoreValue.style.color = "white"
    }
}

