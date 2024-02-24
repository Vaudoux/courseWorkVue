import { createStore } from "vuex";
export default createStore({
  state: {
    title: "Minimal Look Bedrooms",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
    subtext:
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
    image: require("@/assets/img/projectDetailsBox/Photo.png"),
  },
  getters: {
    title: (state) => state.title,
    text: (state) => state.text,
    subtext: (state) => state.subtext,
    getImage: (state) => state.image,
  },
  mutations: {
/*     SET_TITLE(state, newTitle) {
      state.title = newTitle;
    },
    SET_TEXT(state, newText) {
      state.text = newText;
    },
    SET_SUBTEXT(state, newSubtext) {
      state.subtext = newSubtext;
    },
    updateImage(state, newImage) {
      state.image = newImage;
    }, */
  },
  actions: {
    /* updateTitle({ commit }, newTitle) {
      commit("SET_TITLE", newTitle);
    },
    updateText({ commit }, newText) {
      commit("SET_TEXT", newText);
    },
    updateSubtext({ commit }, newSubtext) {
      commit("SET_SUBTEXT", newSubtext);
    },
    changeImage({ commit }, newImage) {
      commit("updateImage", newImage);
    }, */
  },
  modules: {},
});
