<script lang="ts">
  export let score: number;
</script>

<div class="main">
    <div class="finish-msg">Congrats, You completed JsQuiz</div>
    <div class="finish-score">Scored : {score}</div>
</div>

<style>
    .main {
        padding: 10vh;
    }
    .finish-msg {
        font-size: 20px;
        font-weight: normal;
        line-height: 1.5;
        font-family: 'Courier New', Courier, monospace;
    }
    .finish-score {
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        font-family: 'Courier New', Courier, monospace;
    }
</style>