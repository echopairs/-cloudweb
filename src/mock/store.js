var vuexStore = new Vuex.Store({
  state: {
    message: 'Hello World',
    booKList: [
      {
        name: 'javaScript權威指南',
        price: 100,
        en: 'jq'
      },
      {
        name: 'angularjs',
        price: 80,
        en: 'aq'
      },
      {
        name: 'HTTP',
        price: 50,
        en: 'hq'
      }
    ]
  },
  mutations: {
    // 同步
    showMessage: function (state, data) {
      state.message = 'Store mutations changed this words.' + data;
    },
    addBook: function (state, data) {
      state.booKList.push(data)
    }
  },
  getters: {
    filterList: function (state) {
      var narr = [];
      for (var i = 0; i < state.booKList.length; i++) {
        state.booKList.price < 85 ? narr.push(state.booKList[i]): null;
      }
      return narr
    }
  },
  actions: {
    // 异步操作
    addBook: function (context) {
      setTimeout(function () {
        context.commit('addBook', {name: 'c++', price: 100});
      }, 2000);
    }
  },
  modules: {

  }
});

var vm = new Vue({
  el: 'app',
  store: VuexStore,
  methods: {
    showMessage: function () {
      this.$store.commit('showMessage', '同步');
    },
    filterList: function () {
      return this.store.getters.filterList();
    },
    addBook: function () {
      this.$store.dispatch('addBook')
    }
  }
})

/*
tips:
所有子模塊的getters對象裏的方法會被合並到$store裏，如果不同子模塊裏有重名的方法，那麼會報錯;

但是所有子模塊裏actions和mutations中的方法不會被合並，重名也不會報錯。但是當你dispatch或者commit一個同名的事件的時候，會依次執行每一個子模塊中的事件
* */












