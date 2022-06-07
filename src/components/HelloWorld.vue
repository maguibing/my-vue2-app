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
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
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
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  margin: 15px;
  width: 300px;
  height: 500px;
  border: 1px solid black;
}

.movie-container > i {
  margin: 15px;
  width: 300px;
  border: 1px solid transparent;
}
</style>