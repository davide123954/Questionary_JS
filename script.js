
const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who was the President of USA of 2010?",
        a: "George Bush",
        b: "Barack Obama",
        c: "Joe Bidden",
        d: "Donald Trump",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Totti name is ?",
        a: "Lorenzo",
        b: "Francesco",
        c: "Gianluigi",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Margherita Pizza mean ?",
        a: "Pizza 4 seasons",
        b: "Pizza with mozzarella and gorgonzola",
        c: "Classic Pizza",
        d: "Diavola Pizza",
        correct: "c",
    },
    {
        question: "Where is Zimbabwe?",
        a: "Thailand",
        b: "North Africa",
        c: "South Africa",
        d: "Indonesia",
        correct: "c",
    },
    {
        question: "In which year was facebook born?",
        a: "2010",
        b: "2005",
        c: "2004",
        d: "2009",
        correct: "c",
    }

];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");////Answer A
const b_text = document.getElementById("b_text");////Answer B
const c_text = document.getElementById("c_text");////Answer C
const d_text = document.getElementById("d_text");//Answer D


const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {
    let answer = undefined;
   
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) { answer = answerEl.id; }
    });

    answerEls.forEach(function(answerEl) {
        if (answerEl.checked) { answer = answerEl.id; }
    });

    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>`;
        }
    }
});
