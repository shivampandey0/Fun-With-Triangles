const angle1 = document.querySelector(".angle1")
const angle2 = document.querySelector(".angle2")
const angle3 = document.querySelector(".angle3")
const submit = document.querySelector(".calculate")
const result = document.querySelector(".result")

submit.addEventListener("click", calculate)

function calculate() {

    if (angle1.value && angle2.value && angle3) {
        if (Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180) {
            showResult("Yup, these angles form a triangle!")
        } else {
            showError("Nope, these angles doesn't form a triangle")
        }       
    }else{
        showError("Please enter all the angles.")
    }    
}

function showResult(message) {
    result.style.color = "black"
    result.innerText = message
}

function showError(message) {
    result.style.color = "red"
    result.innerText = message
}

