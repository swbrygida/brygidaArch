<template>
  <div id="calak">
    <NuxtPage />

  </div>
</template>
<script setup>
import gsap from 'gsap';

onMounted(() => {
  gsap.to('body', 1, {deley: 0.5, opacity: 1})
}) 

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;800&display=swap");
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
  color: rgb(15, 15, 15);
  font-family: "Inknut Antiqua", serif;
  font-weight: 300;
  line-height: 1.8rem;
  opacity: 0;
}
p {
  font-size: 1rem;
  line-height: 1.8em;
  margin: 0;
  opacity: 1;
}
a {
  font-size: 1rem;
  color: rgb(13, 13, 13);
}
h2 {
  font-size: 1rem;
  line-height: 1.8em;
  margin: 2em ;
  }
.noPadding {
  padding: 0;
  margin: 0;
} 
#calak {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>