<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12" md="4" v-for="profile in profile" :key="`${profile.id}`">
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
        <v-row>
          <v-col cols="12">
            <p class="title font-weight-black">Organisation</p>
            <v-icon>mdi-account-box-multiple-outline</v-icon>
            <span class="body-1 ml-2">{{ profile.organisation }}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import profileData from "../data/profileData";

export default {
  name: "Profile",
  data() {
    return {
      profile: profileData,
    };
  }
};
</script>