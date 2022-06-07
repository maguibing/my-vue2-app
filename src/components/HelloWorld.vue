<template>
  <div class="movie-container">
    <main>
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

  data () {
    return {
      num: 5,
      clientWidth: document.documentElement.clientWidth
    }
  },

  methods: {
    // setAttr () {
    //   let parentDom = document.querySelector('main');
    //   let children = parentDom.children;
    //   let n = children.length % this.num;
    //   if (n) {
    //     while (3 - n > 0) {
    //       let div = document.createElement('div');
    //       div.className = 'item';
    //       div.style.visibility = 'hidden';
    //       parentDom.appendChild(div);
    //       n++;
    //     }
    //   }
    // }
  },

  mounted () {
    // let _this = this
    // window.addEventListener('resize', function () {
    //   _this.clientWidth = document.body.clientWidth;
    // })
  },

  watch: {
    // clientWidth (n) {
    //   if (n >= 1677) {
    //     this.num = 5
    //     this.setAttr()
    //   } else if (n >= 1345) {
    //     this.num = 4
    //     this.setAttr()
    //   }
    // }
  }
}


</script>

<style lang='scss'  >
* {
  padding: 0;
  margin: 0;
}
main {
  //   margin-left: 120px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  flex: 0 0 20%;
  margin: 15px;
  width: 300px;
  height: 500px;
  border: 1px solid black;
}
</style>