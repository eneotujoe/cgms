<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <EventCard :events=events />
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async asyncData({ $strapi }) {
    return {
      events: await $strapi.find("events")
    }
  }
}
</script>
