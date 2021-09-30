const base = document.querySelector(".triangle-base")
const height = document.querySelector(".triangle-height")
const submit = document.querySelector(".calculate")
const result = document.querySelector(".result")

submit.addEventListener("click", calculate)

function calculate() {

    var baseA = Number(base.value);
    var heightB = Number(height.value);

    if (baseA >0 && heightB>0) {
        showResult(Math.trunc(Math.sqrt((baseA * baseA) + (heightB * heightB))))        
    }else{
        showError("Please enter valid values.")
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

