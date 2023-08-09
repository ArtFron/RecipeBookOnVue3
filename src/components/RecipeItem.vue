<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'recipeDetails', params: { id: recipe.idMeal } }">
      <img
        :src="recipe.strMealThumb"
        alt="strMeal"
        class="rounded-t-2xl h-48 w-full object-cover" />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ recipe.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        doloremque.
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="recipe.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue';

const { recipe } = defineProps({
  recipe: {
    required: true,
    type: Object,
  },
});
</script>
