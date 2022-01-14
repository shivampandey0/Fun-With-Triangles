const base = document.querySelector(".triangle-base")
const height = document.querySelector(".triangle-height")
const submit = document.querySelector(".calculate-area")
const result = document.querySelector(".result")


const calculateArea = () => {
    const baseA = Number(base.value);
    const heightB = Number(height.value);

    if (baseA > 0 && heightB > 0) {
        showResult((baseA * heightB) / 2)
    } else {
        showError("Please enter valid values.")
    }   
}


const showResult = area => {
    result.style.color = "black"
    result.innerText = `The area of above triangle is\n${area}`
}

const showError = message => {
    result.style.color = "red"
    result.innerText = message
}

submit.addEventListener("click", calculateArea)
