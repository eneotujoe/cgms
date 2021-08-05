<template>
  <v-row class="ma-5 primary--text">
    <v-col cols="12" class="my-10 text-center">
      <v-btn
        v-for="(link, i) in socialLinks"
        :key="i"
        :href="link.url"
        class="primary--text"
        icon
        target="_blank"
      >
        <v-icon size="30px">
          {{ link.icon }}
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['socialLinks']),
  },

}
</script>
