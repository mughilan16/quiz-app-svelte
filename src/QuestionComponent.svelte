<script lang="ts">
    import type { question } from "./types/question";
    export let questionData: question;
    let isAnswered = false;
    function clickHandler(index: number) {
        isAnswered = true;
        questionData.answerList[questionData.correctAnswer - 1][1] = true;
        if (index + 1 !== questionData.correctAnswer) {
            questionData.answerList[index][2] = true;
        }
    }
</script>

<h2>
    {questionData.question}
</h2>
<div class="answers">
    {#each questionData.answerList as answer, i}
        <button
            class={answer[1]
                ? " answer correct"
                : answer[2]
                ? "answer wrong"
                : "answer"}
            on:click={() => clickHandler(i)}
            disabled={isAnswered}
        >
            {answer[0]}
        </button>
    {/each}
</div>
<div>
    <button disabled={!isAnswered} class="next-btn">Next</button>
</div>

<style>
    .answers {
        display: flex;
        flex-direction: column;
    }
    .answer {
        /* border-radius: 10px; */
        margin-bottom: 15px;
        border-radius: 2px;
        border: 0px;
        font-size: 20px;
        padding: 25px;
    }
    h2 {
        font-size: 24px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .next-btn {
        border: 0px;
        background-color: cyan;
        color: black;
        font-size: 20px;
        margin-top: 10px;
    }
    .correct {
        background-color: green;
    }
    .wrong {
        background-color: red
    }
    .answer:disabled {
        color: black;
    }
</style>

