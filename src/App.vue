<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :color="color"
      enable-resize-watcher
      :left="left"
      clipped
      app
      :expand-on-hover="expandOnHover"
    >
      <v-list dense nav class="py-1" v-for="profile in profile" :key="`${profile.id}`">
        <v-list-item two-line :class="miniVariant && 'px-0'" :to="'/profile'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/29.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ profile.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ profile.title }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-4"></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div>
          <v-list dense nav class="py-0">
            <v-list-item v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
              <v-list-item-icon>
                <v-icon>{{ menuItem.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app dark clipped-left>
      <v-btn text icon @click.stop="drawer = !drawer" class="d-lg-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="d-none d-lg-block">
        <img src="./assets/NeuerEnergy_Logotype-white.png" height="40px" />
      </div>
      <v-spacer />
      <v-app-bar-title class="text-center" v-for="profile in profile" :key="`${profile.id}`">
        <!-- Header bar -->
        <!-- PULL FROM DATABASE -->
        <h2>{{ profile.organisation }}</h2>
      </v-app-bar-title>
      <v-spacer />
      <v-btn @click="toggleTheme" text class="mr-2">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
      <v-menu offset-y max-width="400px">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="notification in notifications"
            :key="`${notification.id}`"
            class="px-0"
          >
            <Notifications :notification="notification" class="d-inline-block text-truncate" />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <!-- Main content router view -->
      <router-view />
      <v-speed-dial
        v-model="fab"
        :top="top"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
        absolute="true"
        bottom
        right
        fixed="true"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="primary" fab>
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-chat</v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
    </v-content>
  </v-app>
</template>

<script>
import Notifications from "./components/Notifications";

export default {
  name: "App",
  mounted() {
    this.getProfileData();
    this.getNotificationsData();
    this.getPagesData();
    this.getSecondaryPagesData();
  },
  components: {
    Notifications
  },
  data() {
    return {
      profile: [],
      drawer: true,
      items: [],
      color: "dark",
      colors: ["primary", "primary"],
      menuItems: [],
      notifications: [],
      right: false,
      miniVariant: true,
      expandOnHover: true
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    getProfileData: function() {
      fetch("../data/profileData.json")
        .then(response => response.json())
        .then(data => (this.profile = data));
    },
    getPagesData: function() {
      fetch("../data/pagesData.json")
        .then(response => response.json())
        .then(data => (this.items = data));
    },
    getSecondaryPagesData: function() {
      fetch("../data/pagesSecondaryData.json")
        .then(response => response.json())
        .then(data => (this.menuItems = data));
    },
    getNotificationsData: function () {
      fetch("/data/notificationsData.json")
        .then(response => response.json())
        .then(data => (this.notifications = data));
    }
  }
};
</script>

<style lang="sass">
  @import '~vuetify/src/styles/styles.sass'
</style>