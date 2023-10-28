<template>
    <main>
      <div class="belka">
        <p>
          <NuxtLink to="/"
            >Kościół Rektoralny pw. Wniebowzięcia Najświętszej Marii Panny Zwycięskiej w
            Lublinie</NuxtLink
          >
        </p>
  
        <NuxtLink class="linki" id="link1" to="/m1">1 faza</NuxtLink>
        <NuxtLink class="linki" id="link2" to="/m2">2 faza</NuxtLink>
        <NuxtLink class="linki" id="link3" to="/m3">3 faza</NuxtLink>
        <NuxtLink class="linki" id="link4" to="/m4">4 faza</NuxtLink>
        <NuxtLink class="linki" id="link5" to="/m5">5 faza</NuxtLink>
      </div>
    </main>
  </template>
  
  <style>
  .belka {
    width: 90vw;
    height: auto;
    padding: 1em 5vw;
    border-bottom: 2px solid #f2f2f2;
    text-align: center;
    font-size: large;
    font-weight: 800;
    position: fixed;
    top: 0;
    left: 0;
  }
  .linki {
    width: 2em;
    height: 1em;
    padding: 0 3em;
  }
  </style>
  