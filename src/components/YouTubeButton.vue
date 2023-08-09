<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors hover:font-semibold">
    Youtube
  </a>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
