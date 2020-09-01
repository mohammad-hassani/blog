import Vue from 'vue'
import Vuex from 'vuex'
import blogs from '../data/data.js'
import key from '../data/data'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state:{
  blogs,
    key
  },
  mutations: {
    editblog(index)
    {
      key.set(index)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
