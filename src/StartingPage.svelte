<script>
  export let page;
  function start() {
    page++;
  }
</script>

<div class="main">
  <iframe
    title="js"
    src="https://giphy.com/embed/CEHtFH3rJ6xdhBUKIT"
    width="400"
    height="480"
    frameBorder="0"
    class="img"
  />
  <p>Press the start button to take the JsQuiz</p>
  <button class="btn" on:click={start}>Start</button>
</div>

<style>
  .img {
    margin-top: -40px;
    justify-self: center;
  }
  .main {
    justify-items: center;
    align-items: center;
  }
  p {
    margin-top: -30px;
    margin-bottom: 0px;
  }
  .btn {
    margin-top: 0px;
    border: 0px;
    background-color: #4cacbc;
    color: #eeeeee;
    font-size: 30px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 30px;
  }
</style>
