import { createStore } from "vuex";

export default createStore({
  state: {
    listMusic: []
  },
  mutations: {
    SET_LIST(state, item) {
        state.listMusic = item
    },
  },
  getters: {
    getList: state => state.listMusic
  }

});
