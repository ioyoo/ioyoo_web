<template>
  <NuxtLink :to="`/characters/${character.name}`">
    <div class="card relative h-56 w-56 rounded-full shadow-xl text-center">
      <img
        :src="character.image"
        alt="Character Image"
        class="absolute inset-0 h-full w-full rounded-full border-black border-2 hover:hidden"
      />
      <div class="m-auto flex-auto justify-center m-6">
        <h3 class="font-bold">{{ character.name }}</h3>
        <ul>
          <li>{{ character.species }}</li>
          <li>{{ character.gender }}</li>
          <li>{{ character.origin.name }}</li>
          <li v-if="character.status == 'Dead'" class="text-red-600 font-bold">
            {{ character.status }}
          </li>
          <li
            v-else-if="character.status == 'Alive'"
            class="text-green-600 font-bold"
          >
            {{ character.status }}
          </li>
          <li
            v-else="character.status == 'Dead'"
            class="text-yellow-600 font-bold"
          >
            {{ character.status }}
          </li>
        </ul>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { character } = defineProps(["character"]);
</script>

<style scoped></style>
