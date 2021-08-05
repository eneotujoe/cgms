<template>
  <v-app dark>
    <Navbar />
    <v-main class="accent">
      <v-container fluid class="mt-5">
        <nuxt keep-alive />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>
