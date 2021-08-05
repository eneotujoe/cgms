<template>
  <div class="text-center mx-2 mt-2">
    <v-menu offset-y attach>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <div v-if="!$strapi.user">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          block
          text
          tile
          x-large
          class="font-weight-light primary--text"
        >
          {{ item.title }}
        </v-btn>
      </div>
      <div v-else>
        <v-btn
          block
          text
          tile
          class="font-weight-light primary--text"
        >
          {{user.username}}
        </v-btn>
        <v-btn
          @click="logout"
          block
          text
          tile
          class="font-weight-light primary--text"
        >
          logout
        </v-btn>
      </div>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Login', to: '/auth/login', },
        { title: 'Sign Up', to: '/auth/signup', },
      ],
    }),
    computed: {
    user () {
      return this.$strapi.user
    }
  },
    methods: {
      logout () {
        this.$strapi.logout()
        this.$router.push('/')
      }
  }
  }
</script>
