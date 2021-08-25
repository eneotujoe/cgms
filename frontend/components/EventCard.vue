<template>
  <v-row justify="center" align="center">
      <v-col
        v-for="event in events"
        :key="event.id"
        cols='6'
      >
        <nuxt-link to='/' exact class="text-decoration-none">
          <v-hover v-slot="{ hover }">
            <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                class="secondary"
            >
                <v-img
                  :src='url + event.image.url'
                  class="white--text align-end"
                  height="300"
                >
                </v-img>
                <v-card-title v-text="event.title"></v-card-title>
                <v-card-subtitle>Venue: {{event.venue}}</v-card-subtitle>
                <v-card-subtitle>Date: {{event.date}}    Time: {{event.time}}</v-card-subtitle>
                <v-card-subtitle>Description: {{event.description}}</v-card-subtitle>
              </v-card>
            </v-hover>
        </nuxt-link>
      </v-col>
  </v-row>
</template>
<script>
  export default {
    props: {
    events: {
      type: Array,
      default: null,
    },
  },
  
    data: () => ({
      url: 'https://cgms-backend.herokuapp.com',
    }),
  }
</script>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 1;
 }
</style>
