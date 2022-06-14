<template>
  <div class="container">
    <div class="box box-1">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
    <div class="box">7</div>
    <div class="box">8</div>
    <div class="box">9</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 100px 100px 100px;
}

.box {
  font-size: 4em;
  text-align: center;
  background-color: #c077af;
  border: 1px solid #e5e4e9;
}

.box-1 {
  background-color: #0376c2;
  grid-area: 1 / 1 / 3 / 3;
}

@media screen and (max-width: 1200px) {
  .box-1 {
    background-color: red;
    grid-area: 1 / 1 / 4 / 2;
  }
}
</style>