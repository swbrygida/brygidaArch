<template>
    <main>
    
    <div class="calak" >
        <Belka />

    <div id="wylosowane"></div>
        <ContentDoc>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
      <input type="text" id="myInput" @keyup="mojeSzukanie()" placeholder="Szukaj obiektu" title="Wprowadz nazwe">
    <div class="navi">
        <nav>
          <ContentNavigation v-slot="{ navigation }">
            <ul>
              
              <li v-for="link of navigation">
                <NuxtLink :to="link._path">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </ContentNavigation>
        </nav>
      </div><!-- koniec navi -->
      <div class="obiekt">
        <div class="opis">

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
            <div class="meta metaopisblok">
              <p class="metaopis">{{ data[0].opis }}</p>
            </div>

        </ContentQuery>
            </div><!-- koniec opis -->
        <div class="model">
          <ClientOnly>
            <CanvasModel :obiekt3d="obiekt3d" :mp3="mp3" />
          </ClientOnly>
        </div>
        </div><!-- koniec obiekt -->
      </div><!-- koniec calak -->
    </main>
  </template>
  <script setup>
import gsap from 'gsap';


const { page } = useContent();
useContentHead(page);

const zabytki = []
const title = page.value.title;
const obiekt3d = page.value.obiekt3d;
const mp3 = page.value.mp3;

console.log(title);
console.log(obiekt3d);
console.log(mp3);

function mojeSzukanie() {
  console.log("szukam")

}

onMounted(() => {
  const pp = document.querySelectorAll("p");
  gsap.from("nav ul li", 1, { delay: 1, opacity: 0 });
  gsap.from(pp, 1, { delay: 1, opacity: 0 });

  const linki = document.querySelectorAll('li')
  console.log(linki)
  linki.forEach((element) => {
  const obj = {};
  obj["nazwa"] = element.innerText;
  obj["href"] = element.firstChild.href;
  zabytki.push(obj);
  });

  console.log(zabytki)
  const wylosowane = Math.floor(Math.random() * zabytki.length);
  const wylosowaneNazwa = zabytki[wylosowane].nazwa
  const wylosowaneHref = zabytki[wylosowane].href
  const wylosowaneDodaj = '<a href=\"' + wylosowaneHref + '\">' + wylosowaneNazwa + '</a>'
  console.log(wylosowaneNazwa)
  console.log(wylosowaneHref)
  document.getElementById("wylosowane").innerHTML = wylosowaneDodaj 

  let szukanie = zabytki.find(q => q.nazwa === 'Ołtarz główny');
  console.log(szukanie);


  });





  </script>
  <style>
  h1 {
    display: none;
  }

  :root {
  --shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}
@media screen and (orientation: landscape) {
  .navi {
    flex-direction: row-reverse;
  }
  .meta {
  width: 14em;
  padding: 2em;
  height: auto;
  background-color: #fff;
  box-shadow: var(--shadow);
}
.metadane {
  flex-grow: 1;
  margin: 2em;
}
.metadane p {
  padding-left: 2em;
}
.metaopisblok {
  flex-grow: 1;
  margin: 2em;
}
#wylosowane {
  margin: 2em 6em;
}

}
@media screen and (orientation: portrait) {
  .navi {
    flex-direction: row;
  }
  .meta {
  width: 14em;
  padding: 2em0;
  height: auto;
  background-color: #fff;
  box-shadow: var(--shadow);
}
.metadane {
  flex-grow: 1;
  margin: 2em;
}
.meta p {
  padding-left: 0;
  font-size: small;
  font-weight: 300;
}
.metaopisblok {
  flex-grow: 1;
  margin: 2em;
}
#wylosowane {
  margin: 2em;
  font-size: small;
}
}

.navi {
  display: flex;
  flex-wrap: wrap;
}
.losuj {
  height: 10em;
  width: 14em;
  padding: 2em;
  margin: 2em;
  box-shadow: var(--shadow);
  flex-grow: 1;
  display: none;
}
nav {
  height: 10em;
  width: 14em;
  margin: 2em;
  overflow-y: scroll;
  box-shadow: var(--shadow);
  flex-grow: 1;
}
/* nav:hover {
  height: 24em;
} */
nav li {
  list-style: none;
  line-height: 1.8em;
}
nav li:hover {
  background-color: #f4f4f4;
  box-shadow: var(--shadow);
  font-weight: 800;
}
nav ul {
  margin: 0;
  padding: 0;
}
nav::-webkit-scrollbar {
  display: none;
}
canvas {
  margin: 2em;
}
.opis {
  display: flex;
  flex-wrap: wrap;
}


canvas {
  margin: 2em;
  background-color: #fff;
  box-shadow: var(--shadow);
}
.metatitle {
  font-weight: 800;
}


  </style>
