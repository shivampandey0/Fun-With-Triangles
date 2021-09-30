const base = document.querySelector(".triangle-base")
const height = document.querySelector(".triangle-height")
const submit = document.querySelector(".calculate-area")
const result = document.querySelector(".result")

submit.addEventListener("click", calculateArea)

function calculateArea() {

    var baseA = Number(base.value);
    var heightB = Number(height.value);

    if (baseA >0 && heightB>0) {
        showResult((baseA * heightB) / 2)        
    }else{
        showError("Please enter valid values.")
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

