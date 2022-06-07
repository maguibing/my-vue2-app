<template>
  <div class="box">
    <div class="item item-one">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item item-four">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item item-self">7</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  display: grid;
  width: 600px;
  margin: 0 auto;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [x1] 100px [x2] 100px [x3] auto [x4];
  gap: 10px 20px;
  grid-auto-rows: 50px;
  grid-template-areas:
    "a . c"
    "d . f"
    "g . i";
  .item {
    height: 100px;
    background-color: blueviolet;
  }

  .item-self {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .item-one {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>