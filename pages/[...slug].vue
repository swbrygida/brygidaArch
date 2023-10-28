<template>
    <main>
        <Belka />
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
      <ContentDoc />
    </main>
  </template>