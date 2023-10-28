<template>
    <main>
      <Belka />
      <h1>Index</h1>
      <div class="indexMain">
        <div>
          <NuxtLink target="_blank" to="/1wzornik"
            ><img src="../public/foto/01.png" /> katalog zabytków z opisami</NuxtLink
          >
        </div>
        <div>
          <NuxtLink target="_blank" to="https://swbrygida.pl"
            ><img src="../public/foto/04.png" />ilustrowana historia
          </NuxtLink>
        </div>
  
        <div>
          <NuxtLink target="_blank" to="https://brygida-model.vercel.app/"
            ><img src="../public/foto/03.png" />model układu kościoła</NuxtLink
          >
        </div>
  
        <div>
          <NuxtLink target="_blank" to="https://my.matterport.com/show/?m=ZTVZxKyLyMm"
            ><img src="../public/foto/09.png" />spacer 3d po kosciele</NuxtLink
          >
        </div>
  
        <div>
          <NuxtLink target="_blank" to="https://www.youtube.com/embed/yIBfNPO_a6M"
            ><img src="../public/foto/05.png" />film o kosciele</NuxtLink
          >
        </div>
        <div>
          <NuxtLink target="_blank" to="/m1"
            ><img src="../public/foto/06.png" />makiety kościoła</NuxtLink
          >
        </div>
        <div>
          <NuxtLink target="_blank" to="https://pobrygidkowski.pl/pl/audio.html"
            ><img src="../public/foto/10.png" />audio - pełna historia</NuxtLink
          >
        </div>
        <div>
          <NuxtLink target="_blank" to="http://lublublin.pl/oltarz/index.html"
            ><img src="../public/foto/08.png" />gigapanoramy ołtarzy</NuxtLink
          >
        </div>
        <div>
          <NuxtLink target="_blank" to="http://lublublin.pl/oltarz/100/index.html"
            ><img src="../public/foto/07.png" />panorama lotnicza</NuxtLink
          >
        </div>

      </div>
    </main>
  </template>
  
  <script setup></script>
  
  <style>
  h1 {
    display: none;
  }
  @media screen and (orientation: landscape) {
    .indexMain {
      padding: 8em 16em;
    }
  }
  @media screen and (orientation: portrait) {
  }
  .indexMain {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .indexMain div {
    width: 246px;
    height: 350px;
    margin: 1em 1em 3em 1em;
    padding: 0;
    box-shadow: var(--shadow);
  }
  .indexMain div:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  .indexMain div img:hover {
    filter: grayscale(100%);
  }
  </style>
  