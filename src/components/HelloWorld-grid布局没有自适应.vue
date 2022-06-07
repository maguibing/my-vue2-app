<template>
  <div>
    <main class="movie-container">
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
      <div class="item">
      </div>
    </main>
  </div>
</template>

<script>
export default {

  name: "HelloWorld",

}


</script>

<style lang='scss'  >
* {
  padding: 0;
  margin: 0;
}
.movie-container {
  padding: 20px;
  //   width: 800px;
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 50px;

  /** key words*/
  display: grid;
  /**指定重复元素的宽度*/
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-between;
  grid-gap: 1rem;
}
.movie-container .item {
  display: inline-block;
  height: 50px;
  border: 1px solid green;
  text-align: center;
  line-height: 50px;
}
</style>