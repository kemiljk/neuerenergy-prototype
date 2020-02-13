<template>
  <v-app>
    <!-- Navigation Drawer -->
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :left="left"
        :src="bg"
        app
        clipped
      >
        <v-list dense nav class="py-1">
          <v-list-item two-line :class="miniVariant && 'px-0'" to="profile">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/11.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ profile.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ profile.title }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="mb-4"></v-divider>

          <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
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
    <!-- Header bar -->
    <v-app-bar app dark clipped-left>
      <v-btn text icon @click.stop="drawer = !drawer" class="d-lg-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div>
        <img src="./assets/NeuerEnergy_Logotype-white.png" height="40px" />
      </div>
      <v-spacer />
      <v-app-bar-title class="text-center">
      <!-- PULL FROM DATABASE -->
        <h2>{{ client.name }}</h2>
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
            <v-list-item v-for="notification in notifications" :key="`${notification.id}`" class="px-0">
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
            <v-btn v-model="fab" color="secondary" fab>
              <v-icon v-if="fab">mdi-close</v-icon>
              <v-icon v-else>mdi-chat</v-icon>
            </v-btn>
          </template>
        </v-speed-dial>
    </v-content>
  </v-app>
</template>

<script>
import { uuid } from './utils'
import Notifications from "./components/Notifications"

export default {
  name: "App",
  components: {
    Notifications
  },
  props: {    
        notificationCard: {
            type: String
        },
    },
  data() {
    return {
      client: {
        name: "adidas"
      },
      profile: {
        name: 'Harm Ohlmeyer',
        title: 'Chief Financial Officer'
      },
      signin: {
        url: "/sign-in"
      },
      drawer: true,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          url: "/"
        },
        { title: "Workflow", icon: "mdi-graph", url: "/workflow" },
        { title: "Sites", icon: "mdi-map-marker", url: "/sites" },
        { title: "Analysis", icon: "mdi-tune", url: "/analysis" },
        { title: "Generators", icon: "mdi-city", url: "/generators" },
        { title: "Inbox", icon: "mdi-email", url: "/inbox" }
      ],
      color: "dark",
      colors: ["primary", "secondary"],
      menuItems: [
        { title: "Support", icon: "mdi-face-agent", url: "/support" },
        {
          title: "Company Profile",
          icon: "mdi-domain",
          url: "/company-profile"
        },
        { title: "Settings", icon: "mdi-cogs", url: "/settings" },
        { title: "Sign out", icon: "mdi-logout-variant", url: "/sign-out" }
      ],
      notifications: [
            {
            id: uuid(),
            date: "12 FEB 2020",
            description: "PWR PPA • Added External Legal Counsel as Reviewer",
            details: "Harry McCammond",
            url: "/notifications/#"
            },
            {
            id: uuid(),
            date: "27 OCT 2019",
            description: "CLR PPA • Initiated by Harry McCammond on 23rd Dec 2019",
            details: "Awaiting contract initiation with CLR",
            url: "/notifications/#"
            },
            {
            id: uuid(),
            date: "21 NOV 2019",
            description: "Contrast PPA • By Małgorzata Switoniak-Jabłonska",
            details: "Needs further discussion",
            url: "/notifications/#"
            },
            ],
      right: false,
      miniVariant: true,
      expandOnHover: true,
      background: false
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style lang="sass">
  @import '~vuetify/src/styles/styles.sass'
</style>