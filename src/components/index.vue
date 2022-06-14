<template>
  <div id="container">

  </div>
</template>

<script>


export default {
  name: "detailMap",

  data () {
    return {
      img: require('../assets/images/point.png'),
      companySrc: require('../assets/images/company-logo.png')
    }
  },

  mounted () {
    this.$nextTick(() => {
      const $map = window.BMapGL
      const map = new $map.Map('container'); // 创建Map实例
      const point = new $map.Point(121.498758, 31.191931)

      // create point
      const myIcon = new window.BMapGL.Icon(this.img, new window.BMapGL.Size(20, 25));
      const pt = new window.BMapGL.Point(121.498758, 31.191931);
      const marker = new window.BMapGL.Marker(pt, { icon: myIcon });

      // company logo
      const mycompanyIcon = new window.BMapGL.Icon(this.companySrc, new window.BMapGL.Size(200, 156));
      const mycompanyPt = new window.BMapGL.Point(121.498794, 31.194697);
      const mycompanyMarks = new window.BMapGL.Marker(mycompanyPt, { icon: mycompanyIcon });

      // 将标注添加到地图
      map.addOverlay(marker);
      map.addOverlay(mycompanyMarks);
      map.centerAndZoom(point, 16); // 初始化地图,设置中心点坐标和地图级别
      map.disableDoubleClickZoom();
    })
  }
}
</script>
<style lang='scss' scoped>
#container {
  overflow: hidden;
  font-family: "微软雅黑";
  width: 900px;
  height: 500px;
  margin: 100px auto;
}
</style>