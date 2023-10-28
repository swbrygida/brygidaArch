<template>
    <main>
        <Belka />
    
        <ContentDoc>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
        <nav>
          <ContentNavigation v-slot="{ navigation }">
            <ul>
              <li>Wybierz obiekt z listy poniżej:</li>
              <li v-for="link of navigation">
                <NuxtLink :to="link._path">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </ContentNavigation>
        </nav>
        <hr>
        <ContentQuery :path="$route.path" v-slot="{ data }">
            <div class="meta metadane">
            <p class="metatitle">{{ data[0].title }}</p>
            <p class="metaid">{{ data[0].id }}</p>
            <p class="metanr">{{ data[0].nr }}</p>
            <p class="metamatTech">{{ data[0].matTech }}</p>
            <p class="metastyl">{{ data[0].styl }}</p>
            <p class="metaczas">{{ data[0].czas }}</p>
            <p class="metawarsztat">{{ data[0].warsztat }}</p>
            <p class="metaekstra">{{ data[0].ekstra }}</p>
              <p class="metaaudio">
                <audio autoplay controls><source :src="mp3" type="audio/mpeg" /></audio>
              </p>
            </div><!-- koniec metadane -->
            <hr>
            <div class="meta metaopisblok">
              <p class="metaopis">{{ data[0].opis }}</p>
            </div>
        </ContentQuery>
        <hr>
        <div class="model">
          <ClientOnly>
            <CanvasModelTest :obiekt3d="obiekt3d" :mp3="mp3" />
          </ClientOnly>
        </div>
        <hr>

    </main>
  </template>
  <script setup>
const { page } = useContent();
useContentHead(page);

const title = page.value.title;
const obiekt3d = page.value.obiekt3d;
const mp3 = page.value.mp3;

console.log(title);
console.log(obiekt3d);
console.log(mp3);
  </script>
  <style>
  h1 {
    display: none;
  }
  </style>
