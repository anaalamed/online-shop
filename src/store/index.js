import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
    filteredItems: [],
    currentCategory: "כל המוצרים"
  },
  mutations: {
    FETCH_ITEMS(state, items) {
      state.items = items;
      state.filteredItems = items;
    },
    CHOOSE_CATEGORY(state, category) {
      state.currentCategory = category;
    },
    FILTER_ITEMS(state, filteredItems) {
      state.filteredItems = filteredItems;
    }
  },
  actions: {
    fetchItems({commit}) {
      fetch(
        "https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08"
      )
        .then((res) => res.json())
        .then((data) => commit("FETCH_ITEMS", data))
        .catch((err) => console.log(err));
    },

    chooseCategory({commit}, payload) {
      commit("CHOOSE_CATEGORY", payload.category);
    },
    filterItems({commit}, payload) {
      commit("FILTER_ITEMS", payload.filteredItems);
    }
  },
  modules: {},
});
