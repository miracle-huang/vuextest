import { createStore } from 'vuex'
// VueX 数据管理框架
// VueX 创建了一个全局唯一的仓库，用来存放全局的数据
export default createStore({
  state: {
    name: 'dell'
  },
  // mutation里面只允许写同步代码，不允许写异步代码
  // commit 和 mutation 做关联
  mutations: {
    //第四步，对应的mutation被执行
    change(state, str) {
      console.log('mutation');
      //第五步，在mutation里修改数据
      state.name = str;

      //在mutation当中可以对数据进行异步修改（不允许）
      // setTimeout(() => {
      //   this.state.name = 'huang'
      // },2000)
    }
  },
  // dispatch 和 actions 做关联
  actions: {
    //第二步，store感知到你派发了一个叫做change的action，执行change方法
    change(store, str) {
      // 把异步操作放到actions里面来做
      setTimeout(() => {
        store.commit('change', str);
      }, 2000);
      console.log("commit");
      //第三步，提交一个commit 触发一个mutation
      // this.commit('change');
    }
  },
  modules: {

  }
})
