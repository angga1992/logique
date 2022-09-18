import { createStore } from "vuex";

export default createStore({
  state: {
    listMusic: []
  },
  mutations: {
    SET_LIST(state, item) {
        // state.listMusic = item
        state.listMusic = state.listMusic ? state.listMusic.concat(item) : item
    },
    CLEAR_LIST(state) {
        // state.listMusic = item
        state.listMusic = []
    },
  },
  getters: {
    getList: state => state.listMusic
  }

});
