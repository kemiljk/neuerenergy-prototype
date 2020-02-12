<template>
  <v-app>
    <!-- Header bar -->
    <v-app-bar app dark>
      <v-btn text icon @click.stop="drawer = !drawer" class="d-lg-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div>
        <img src="./assets/NeuerEnergy_Logotype-white.png" height="40px" />
      </div>
      <v-spacer></v-spacer>
      <!-- ADD IN CLIENT NAME COMPONENT OR PULL FROM DATABASE -->
      <v-app-bar-title class="text-center">
        <h2>{{ client.name }}</h2>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text class="mr-2">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
            <v-list-item-icon>
              <v-icon>{{ menuItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :left="left"
        :src="bg"
        absolute
        height="93vh"
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'" to="profile">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/11.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>James Dean</v-list-item-title>
              <v-list-item-subtitle>Chief Financial Officer</v-list-item-subtitle>
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
      <!-- Main content router view -->
      <router-view></router-view>
    </v-content>
    <div app class="mr-2 mb-2">
      <v-row justify="end" no-gutters>
        <v-speed-dial
          v-model="fab"
          :top="top"
          :bottom="bottom"
          :right="right"
          :left="left"
          :direction="direction"
          :open-on-hover="hover"
          :transition="transition"
        >
          <template v-slot:activator>
            <v-btn v-model="fab" color="secondary" fab>
              <v-icon v-if="fab">mdi-close</v-icon>
              <v-icon v-else>mdi-chat</v-icon>
            </v-btn>
          </template>
        </v-speed-dial>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      client: {
        name: "adidas"
      },
      login: {
        url: "/login"
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
        { title: "Log out", icon: "mdi-logout-variant", url: "/logout" }
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