const base = document.querySelector(".triangle-base")
const height = document.querySelector(".triangle-height")
const submit = document.querySelector(".calculate-area")
const result = document.querySelector(".result")

submit.addEventListener("click", calculateArea)

function calculateArea() {

    if (base.value && height.value) {
        showResult((base.value * height.value) / 2)        
    }else{
        showError("Please enter both the sides.")
    }    
}

function showResult(area) {
    result.style.color = "black"
    result.innerText = `The area of above triangle is\n${area}`
}

function showError(message) {
    result.style.color = "red"
    result.innerText = message
}

