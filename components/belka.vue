<template>
    <main>
      <div class="belka">
        <p>
          <NuxtLink to="/"
            >Kościół Rektoralny pw. Wniebowzięcia Najświętszej Marii Panny Zwycięskiej w
            Lublinie</NuxtLink
          >

         
        </p>
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
  }

  @media (orientation: portrait) {
 
    .belka, 
    nav li a {
      font-size: small;
      font-weight: 300;
    }
    nav {
      padding: 0;
    }
    nav li {
  padding: 0;
}
    
  }
  @media (orientation: landscape) {
    .linkBelki {
      padding: 1em 3em;
      margin: 1em;
    }
    nav {
      padding: 2em;
    }
    nav li {
  padding: 0 2em;

}
  }

  </style>