<script lang="ts">
  export let score: number;
  function retry() {
    location.reload();
  }
</script>

<div class="main">
  <div class="finish-msg">Congrats, You completed JsQuiz</div>
  <div class="finish-score">Your Scored : {score}</div>
  <iframe
    title="good"
    src="https://giphy.com/embed/tIeCLkB8geYtW"
    width="340"
    height="378"
    frameBorder="0"
    class="gif"
  />
  <button class="btn" on:click={retry}>Retry</button>
</div>

<style>
  .main {
    padding: 10vh;
  }
  .finish-msg {
    font-size: 23px;
    font-weight: bold;
    line-height: 1.5;
    /* margin-bottom: 25px; */
    font-family: "Courier New", Courier, monospace;
  }
  .finish-score {
    font-size: 24px;
    font-weight: normal;
    line-height: 1.5;
    /* margin-bottom: 300px; */
    font-family: Arial, Helvetica, sans-serif;
  }
  .btn {
    border: 0px;
    background-color: #4cacbc;
    color: #eeeeee;
    font-size: 25px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 0px;
  }
</style>
