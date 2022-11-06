import type { question } from "../types/question";
export let questions: question[] = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answerList: [
            { data: "<javascript>", correct: false, wrong: false },
            { data: "<js>", correct: false, wrong: false },
            { data: "<script>", correct: false, wrong: false },
            { data: "<scripting>", correct: false, wrong: false },
        ],
        correctAnswer: 3,
    },
//     {
//         question: `What is the correct JavaScript syntax to change the content of the HTML element below ?\n
// <p id='demo'>This is a demonstration.</p>`,
//         answerList: [
//             { data: "document.getElementById('demo').innerHTML = 'Hello World'", correct: false, wrong: false },
//             { data: "document.getElement('p').innerHTML = 'Hello world'", correct: false, wrong: false },
//             { data: "#demo.innerHTML = 'Hello world'", correct: false, wrong: false },
//             { data: "document.getElementByName('p').innerHTML = 'Hello world'", correct: false, wrong: false },
//         ],
//         correctAnswer: 1,
//     },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answerList: [
            { data: `msg("Hello World");`  , correct: false, wrong: false },
            { data: `alertBox("Hello World");`, correct: false, wrong: false },
            { data: `msgBox("Hello World");`, correct: false, wrong: false },
            { data: `alert("Hello World");`, correct: false, wrong: false },
        ],
        correctAnswer: 4,
    },
    {
        question: `How do you create a function in JavaScript?`,
        answerList: [
            { data: `function:myFunction()`  , correct: false, wrong: false },
            { data: `create myFunction()`, correct: false, wrong: false },
            { data: `function myFunction()`, correct: false, wrong: false },
            { data: `function = myFunction()`, correct: false, wrong: false },
        ],
        correctAnswer: 3,
    },
    {
        question: `How to write an IF statement in JavaScript?`,
        answerList: [
            { data: `if i = 5 then`  , correct: false, wrong: false },
            { data: `if (i == 5)`, correct: false, wrong: false },
            { data: `if i == 5 then`, correct: false, wrong: false },
            { data: `if i = 5`, correct: false, wrong: false },
        ],
        correctAnswer: 2,
    },
    {
        question: `How to write an IF statement in JavaScript?`,
        answerList: [
            { data: `if i = 5 then`  , correct: false, wrong: false },
            { data: `if (i == 5)`, correct: false, wrong: false },
            { data: `if i == 5 then`, correct: false, wrong: false },
            { data: `if i = 5`, correct: false, wrong: false },
        ],
        correctAnswer: 2,
    }
]
