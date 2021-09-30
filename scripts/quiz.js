const quiz = document.querySelector(".quiz")
const submit  = document.querySelector(".submit")
const result = document.querySelector(".result")

const answers = ["90","right angled","one right angle", "12, 16, 20", "Equilateral triangle", "100", "30","a + b + c","no","45"];

submit.addEventListener("click", calculate)

function calculate(event) {
    event.preventDefault();

    const formData = new FormData(quiz)
    let score =0, index =0;

    for (const value of formData.values()) {
        if (value === answers[index]) {
            score +=1;
        }
        index +=1;
    }
    result.innerText = `Your score is ${score}`;
}