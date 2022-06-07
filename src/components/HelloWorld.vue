<template>
  <div>
    {{msg}}
    <h1>{{$store.state.son.msg}}</h1>
    <button @click="incre">annuity</button>
    <router-link to="/profile">这里</router-link>

    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import mix from '@/assets/mixin.js'
import { mapMutations } from 'vuex'

export default {

  name: 'HelloWorld',
  mixins: [mix],

  props: {
    msg: {
      type: String,
      default: "default"
    }
  },

  data () {
    return {
      goal: {
        a: "zs", n: "ls"
      }
    }
  },

  methods: {
    ...mapMutations('son', ["changeStr"]),

    incre: function () {

      console.log(this.$qs.parse(this.$qs.stringify(this.goal)))

      this.changeStr()

      this.$router.push('/login')
    }
  },

  watch: {
    "$route": {
      deep: true,
      immediate: true,
      handler (to, from) {
        console.log(to, from)
      }
    }
  }


}
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 600px;
  border: 1px solid black;
}
</style>