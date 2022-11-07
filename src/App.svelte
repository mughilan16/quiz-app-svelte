<script lang="ts">
  // Components
  import FinishingPage from "./finishingPage.svelte";
  import StartingPage from "./StartingPage.svelte";
  // Types
  import { questions } from "./data/questions";
  let score = 0;
  let isAnswered = false;
  let currentQuestion = 0;
  let page = 0;
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
    isAnswered = false;
    if (questions.length - 2 === currentQuestion) {
      page = 2;
    } else {
      currentQuestion++;
    }
  }
</script>

<div class="nav-bar">
  <h1 class="title">JsQuiz</h1>
  {#if page == 1}
    <h4 class="score">Score: {score}</h4>
  {/if}
</div>
{#if page == 0}
<StartingPage bind:page={page} />
{:else if page == 1}
  <div class="main">
    <h2 class="question">
      {questionData.question}
    </h2>
    <div class="answers">
      {#each questionData.answerList as answer, i}
        <button
          class={answer.correct ? "correct" : answer.wrong ? "wrong" : "answer"}
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
{:else}
  <FinishingPage {score} />
{/if}

<style>
  .nav-bar {
    display: flex;
    /* text-align: ; */
    background-color: #4cacbc;
    color: #eeeeee;
    justify-content: space-between;
  }
  .title {
    margin-bottom: 7px;
    margin-top: 7px;
    margin-left: 10px;
    font-size: 40px;
    font-family: "Courier New", Courier, monospace;
  }
  .score {
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: auto;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 20px;
  }
  .main {
    padding-top: 30px;
  }
  .question {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    color: black;
  }
  .answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
  .answer {
    /* border-radius: 10px; */
    margin-bottom: 15px;
    /* font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif; */
    background-color: white;
    font-family: "Courier New", Courier, monospace;
    border-radius: 2px;
    border: 0px;
    font-size: 20px;
    padding: 25px;
    color: black;
    min-width: 445px;
    max-width: 445px;
  }
  h2 {
    font-size: 24px;
    /* margin-top: 30px; */
    margin-bottom: 30px;
  }
  .next-btn {
    border: 0px;
    background-color: #4cacbc;
    color: #eeeeee;
    font-size: 20px;
    margin-top: 30px;
  }
  .correct {
    background-color: #829460;
    color: white;
    /* border-radius: 10px; */
    margin-bottom: 15px;
    /* font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif; */
    font-family: "Courier New", Courier, monospace;
    border-radius: 2px;
    border: 0px;
    font-size: 20px;
    padding: 25px;
    /* color: #829460; */
    min-width: 445px;
    max-width: 445px;
  }
  .wrong {
    background-color: #e97777;
    color: white;
    /* border-radius: 10px; */
    margin-bottom: 15px;
    /* font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif; */
    font-family: "Courier New", Courier, monospace;
    border-radius: 2px;
    border: 0px;
    font-size: 20px;
    padding: 25px;
    /* color: #829460; */
    min-width: 445px;
    max-width: 445px;
  }
  .answer:disabled {
    color: black;
  }
</style>
