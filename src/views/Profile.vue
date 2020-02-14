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
        <v-row>
          <v-col cols="12" md="8" v-for="task in tasks" :key="`${task.id}`">
            <TaskList :task="task" />
          </v-col>
        </v-row>
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
import TaskList from "../components/TaskList";

export default {
  name: "Profile",
  components: [Cards, TaskList],
  data() {
    return {
      profile: {
        name: "Owen Maestro",
        title: "Chief Executive Officer"
      },
      tasks: [
        {
          id: uuid(),
          headline: "Custom",
          subheadline: "Last updated: ",
          updateDate: "11 Feb 2020",
          task: "#"
        }
      ]
    };
  }
};
</script>