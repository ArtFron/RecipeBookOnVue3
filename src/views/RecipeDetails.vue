<template>
  <div class="max-w-[800px] mx-auto">
    <!-- <pre>{{ recipe }}</pre> -->
    <h1 class="text-5xl font-bold mb-5">{{ recipe.strMeal }}</h1>
    <img
      :src="recipe.strMealThumb"
      :alt="recipe.strMeal"
      class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-3">
      <div>
        <strong class="font-bold">Категория: </strong> {{ recipe.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Страна: </strong> {{ recipe.strArea }}
      </div>
      <div>
        <strong class="font-bold">Связанно с : </strong> {{ recipe.strTags }}
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ингредиенты</h2>
        <ul>
          <template v-for="(el, index) of new Array(100)">
            <li v-if="recipe[`strIngredient${index + 1}`]">
              {{ index + 1 }}) {{ recipe[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Важно!!!</h2>
        <ul>
          <template v-for="(el, index) of new Array(100)">
            <li v-if="recipe[`strMeasure${index + 1}`]">
              {{ index + 1 }}) {{ recipe[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <YouTubeButton :href="recipe.strYoutube" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const recipe = ref({});
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    recipe.value = data.meals[0] || {};
  });
});
</script>
