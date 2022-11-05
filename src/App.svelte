<script lang="ts">
    import { questions } from "./data/questions";
    let score = 0;
    let isAnswered = false;
    let currentQuestion = 1;
    $: questionData = questions[currentQuestion];
    function clickHandler(index: number) {
        isAnswered = true;
        questionData.answerList[questionData.correctAnswer - 1].correct = true;
        if (index + 1 !== questionData.correctAnswer) {
            questionData.answerList[index].wrong = true;
        } else {
            score++;
        }
    }
    function next() {
        if (questions.length === currentQuestion) {
        } else {
            currentQuestion++;
        }
    }
</script>

<div class="nav-bar">
    <h1 class="title">JS Quiz</h1>
    <h4 class="score">Score: {score}</h4>
</div>
<div class="main">
    <h2 class="question">
        {questionData.question}
    </h2>
    <div class="answers">
        {#each questionData.answerList as answer, i}
            <button
                class={answer.correct
                    ? " answer correct"
                    : answer.wrong
                    ? "answer wrong"
                    : "answer"}
                on:click={() => clickHandler(i)}
                disabled={isAnswered}
            >
                {answer.data}
            </button>
        {/each}
    </div>
    {#if isAnswered}
        <div>
            <button class="next-btn" on:click={next}>Next</button>
        </div>
    {/if}
</div>

<style>
    .nav-bar {
        display: flex;
        /* text-align: ; */
        background-color: #829460;
        color: #eeeeee;
        justify-content: space-between;
    }
    .title {
        margin-bottom: 15px;
        margin-top: 10px;
        margin-left: 10px;
        font-size: 40px;
        font-family: initial;
    }
    .score {
        margin-right: 10px;
        margin-top: auto;
        margin-bottom: auto;
        font-family: initial;
        font-size: 23px;
    }
    .main {
        padding: 2rem;
    }
    .question {
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
    .answers {
        display: flex;
        flex-direction: column;
    }
    .answer {
        /* border-radius: 10px; */
        margin-bottom: 15px;
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        border-radius: 2px;
        border: 0px;
        font-size: 20px;
        padding: 25px;
        /* color: #829460; */
    }
    h2 {
        font-size: 24px;
        /* margin-top: 30px; */
        margin-bottom: 30px;
    }
    .next-btn {
        border: 0px;
        background-color: #829460;
        color: #eeeeee;
        font-size: 20px;
        margin-top: 30px;
    }
    .correct {
        background-color: #54b435;
    }
    .wrong {
        background-color: #ff6464;
    }
    .answer:disabled {
        color: black;
    }
</style>
