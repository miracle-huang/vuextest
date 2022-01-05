<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h1>{{ myName }}</h1>
  </div>
</template>
<script>
export default {
  name: "About",
  computed: {
    myName() {
      return this.$store.state.name;
    },
  },
  methods: {
    handleClick() {
      //如何改变vuex当中的数据
      //想改变数据，vuex要求第一步必须派发一个action
      // 1. dispatch 方法，派发一个 action ，名字叫做change
      // 2. 感知到change这个action，执行store中actions下面的change方法
      // 3. commit 提交一个叫做 change 的数据改变
      // 4. mutation 感知到提交的change改变，执行change方法改变数据
      this.$store.dispatch("change", "hello");

      // 其实可以在这里直接commit,但是只能进行同步操作
      // this.$store.commit("change");
    },
  },
};
</script>
