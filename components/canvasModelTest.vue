<template>
    <main>
      <div>{{ props.obiekt3d }}</div>
      <div>{{ props.mp3 }}</div>
    </main>
  </template>
  <script setup>
  const props = defineProps(["obiekt3d", "mp3"]);
  </script>