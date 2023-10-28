<template>
    <main>
      <BelkaMakiety />
  
      <h1>Makiety</h1>
      <div class="makiety">
        <h2>Kaplica pw. NMP, św. Barbary i św. Zofii z 1396 r.</h2>
  
        <img src="../public/foto/faza1b.webp" alt="model 1 fazy przebudowy kościoła" />
      </div>
    </main>
  </template>
  
  <script setup></script>
  
  <style>
  h1 {
    display: none;
  }
  h2 {
    position: absolute;
    top: 15vh;
    left: 0;
    padding: 0 10vw;
    color: #fff;
  }
  .makiety img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  
  @media screen and (orientation: landscape) {
  }
  @media screen and (orientation: portrait) {
  }
  </style>