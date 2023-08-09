<template>
  <div>
    <!-- <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Поиск по буквам на Английском языке" /> -->

    <div class="justify-center flex gap-4 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter">
        {{ letter }}
      </router-link>
    </div>
    <pre>{{ recipe }}</pre>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
      <RecipeItem
        v-for="recipe of recipes"
        :key="recipe.idMeal"
        :recipe="recipe" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import axiosClient from '../axiosClient.js';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import store from '../store';
import RecipeItem from '../components/RecipeItem.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const recipes = computed(() => store.state.recipeByLetter);

watch(route, () => {
  store.dispatch('searchRecipeLetter', route.params.letter);
});

onMounted(() => {
  store.dispatch('searchRecipeLetter', route.params.letter);
});
</script>
