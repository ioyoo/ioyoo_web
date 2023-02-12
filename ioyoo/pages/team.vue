<template>
  <div>
    <div class="grid grid-cols-5 g gap-5">
      <div v-for="character in characters.results" :key="character">
        <CharacterCard :character="character" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: characters } = await useFetch(
  "https://rickandmortyapi.com/api/character/"
);
</script>
