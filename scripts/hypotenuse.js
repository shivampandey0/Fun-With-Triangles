const base = document.querySelector(".triangle-base")
const height = document.querySelector(".triangle-height")
const submit = document.querySelector(".calculate")
const result = document.querySelector(".result")


const calculate = () => {

    const baseA = Number(base.value);
    const heightB = Number(height.value);

    if (baseA > 0 && heightB > 0) {
        showResult(Math.trunc(Math.sqrt((baseA * baseA) + (heightB * heightB))))
    } else {
        showError("Please enter valid values.")
    }
}



const showResult = hypotenuse => {
    result.style.color = "black"
    result.innerText = `The length of the hypotenuse is\n${hypotenuse}`
}

const showError = message => {
    result.style.color = "red"
    result.innerText = message
}



submit.addEventListener("click", calculate)
