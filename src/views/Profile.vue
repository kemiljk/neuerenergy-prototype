<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12" md="4">
        <v-img
          src="https://randomuser.me/api/portraits/men/29.jpg"
          style="border-radius: 8px;"
          max-width="150px"
        />
        <p class="caption mt-4 mb-0 primary--text">ADMINISTRATOR</p>
        <p class="headline font-weight-black mt-2 mb-1">{{ profile.name }}</p>
        <p class="font-weight-medium">{{ profile.title }}</p>
        <v-btn class="mb-6">Edit profile</v-btn>
        <v-divider />
      </v-col>
      <v-col cols="12" md="8">
        <h2>Recent activity</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <p class="title font-weight-black">Organisation</p>
        <v-icon>mdi-account-box-multiple-outline</v-icon>
        <span class="body-1 ml-2">My Company</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { uuid } from "../utils";
import Cards from "../components/Cards";

export default {
  name: "Profile",
  components: [Cards],
  data() {
    return {
      profile: {
        name: "Owen Maestro",
        title: "Chief Executive Officer"
      },
      cards: [
        {
          id: uuid(),
          headline: "Global CO₂ footprint",
          title: "0",
          description: "Tonnes of CO₂ per year"
        },
      ],
    };
  }
};
</script>