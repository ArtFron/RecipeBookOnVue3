import axiosClient from '../axiosClient';
export function searchRecipe({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit('setSearchRecipe', data.meals);
  });
}
export function searchRecipeLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit('setSearchRecipeLetter', data.meals);
  });
}
export function searchRecipeIngredients({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit('setSearchRecipeIngredients', data.meals);
  });
}
