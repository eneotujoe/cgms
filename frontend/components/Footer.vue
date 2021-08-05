<template>
  <v-footer class="secondary">
    <v-row class="ma-10 primary--text">
      <v-col class="my-10 text-center">
        <social-links />
        <p>&copy; {{ new Date().getFullYear() }} - {{ siteName }}</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['siteName']),
  },
}
</script>
