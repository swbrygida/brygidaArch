<template>
    <main>
    
    <div class="calak" >
        <Belka />
<div class="losy">
<div class="mojaFraza">
    <h3>Wyszukaj i/lub wybierz interesujący Cię obiekt sposród poniższych::</h3>
    <input type="text" id="mojaFraza" @keyup="mojeSzukanie()" placeholder="Wpisz nazwę szukanego obiektu" title="Wprowadz nazwe">
</div>
<div class="wylosowane">
    <h3>lub wylosuj:</h3>
    <div id="wylosowane"></div>
</div>
    
</div>
        <ContentDoc>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
    <div class="navi">
        <nav>
          <ContentNavigation v-slot="{ navigation }">
            <ul id="ListaZabytkowUL">
              
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
  var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("mojaFraza");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ListaZabytkowUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

onMounted(() => {
  const pp = document.querySelectorAll("p");
  gsap.from("nav ul li", 1, { delay: 1, opacity: 0 });
  gsap.from(pp, 1, { delay: 1, opacity: 0 });
  gsap.from('.losy', 1, { delay: 1, opacity: 0 });

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
  const wylosowanePng = '<a href=\"' + wylosowaneHref + '\"><img alt=\"obrazek pokazuje kostkę do rzutów symbolizującą ślepy traf\"  src=\"/icons/losuj2.png\" /></a>'
  console.log(wylosowaneNazwa)
  console.log(wylosowaneHref)
  document.getElementById("wylosowane").innerHTML = wylosowanePng

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
h3 {
  font-weight: 800;
  font-size: 1em;
  margin: 0 4em;
  padding: 0 2em;
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
h3 {
  font-weight: 800;
  font-size: 1em;
  margin: 1em ;
  padding: 0;
}
}

.navi {
  display: flex;
  flex-wrap: wrap;
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

#mojaFraza  {
  height: 3em;
  margin: 2em;
  font-size: 1em;
  font-family: "Inknut Antiqua", serif;
  font-weight: 300;
  line-height: 1.8rem;
  padding-left: 4em;
  overflow-y: scroll;
  box-shadow: var(--shadow);
  flex-grow:2 ;
  width: 70%;
}
.losy {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.mojaFraza {
  width: 42em;
  flex-grow: 2;
}
.wylosowane {
  width: 14em;
  flex-grow: 1;
  flex-direction: column-reverse;
}
#wylosowane img {
  width: 4em;
}
  </style>
