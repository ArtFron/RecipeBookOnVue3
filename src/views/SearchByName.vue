<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Поиск наименования на Английском языке"
      @change="searchRecipe" />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <RecipeItem
      v-for="recipe of recipes"
      :key="recipe.idMeal"
      :recipe="recipe" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import store from '../store';
import { useRoute } from 'vue-router';
import RecipeItem from '../components/RecipeItem.vue';

const router = useRoute();
const keyword = ref('');
const recipes = computed(() => store.state.searchRecipe);
function searchRecipe() {
  store.dispatch('searchRecipe', keyword.value);
}
onMounted(() => {
  keyword.value = router.params.name;
  if (keyword.value) {
    searchRecipe();
  }
});
</script>
