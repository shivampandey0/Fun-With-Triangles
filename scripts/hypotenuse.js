const base = document.querySelector(".triangle-base")
const height = document.querySelector(".triangle-height")
const submit = document.querySelector(".calculate")
const result = document.querySelector(".result")

submit.addEventListener("click", calculate)

function calculate() {

    if (base.value && height.value) {
        showResult(Math.sqrt((base.value * base.value) + (height.value * height.value)))        
    }else{
        showError("Please enter both the sides.")
    }    
}

function showResult(hypotenuse) {
    result.style.color = "black"
    result.innerText = `The length of the hypotenuse is\n${hypotenuse}`
}

function showError(message) {
    result.style.color = "red"
    result.innerText = message
}

