<template>
  <div>
    <p>
      {{ name }}
    </p>
  </div>
</template>

<script setup>
const { name } = useRoute().params;
</script>
