<template>
  <v-row>
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      temporary
      class="secondary"
    >
    <v-system-bar
      height="100"
    >
      <nuxt-link to="/" class="ml-15">
        {{ siteName }}
      </nuxt-link>
    </v-system-bar>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="text-uppercase primary--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="onScroll"
      class="secondary"
      :color="navThreshold ? 'secondary' : 'transparent'"
      app
      flat
      scroll-threshold="200"
      hide-on-scroll
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <nuxt-link to="/" exact class="text-decoration-none">
        <div class="d-flex align-center ml-5">
            <!-- <v-img
            alt="logo"
            class="shrink"
            contain
            :src="require('../assets/img/logo.png')"
            transition="scale-transition"
            width="60"
          /> -->
          <v-toolbar-title class="font-weight-bold">
            {{ siteName }}
          </v-toolbar-title>
        </div>
      </nuxt-link>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down mr-10">
        <v-btn
          v-for="(item, i) in navItems"
          :key="i"
          :to="`${item.to}`"
          tile
          text
          nuxt
          class="primary--text"
        >
          {{ item.title }}
        </v-btn>
        <profile-menu />
      </v-toolbar-items>
    </v-app-bar>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      navThreshold: false,
    }
  },

  computed: {
    ...mapGetters(['siteName', 'navItems']),
  },
  methods: {
    onScroll (event) {
      if (window.pageYOffset > 20) {
        this.navThreshold = true
      } else {
        this.navThreshold = false
      }
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
v-btn:before {
  content: "";
  position: absolute;
  background-color:#76FF03;
  height: 1rem;
  width: 0;
  left: 3rem;
  bottom: -10px;
  transition: 0.3s;
}

v-btn:hover:before {
  width: 100%;
}
</style>
