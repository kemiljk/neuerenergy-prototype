<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12">
        <h1>Workflow</h1>
        <h2>Create new tasks and assign people to get work done</h2>
        <v-row class="mt-8">
          <v-col cols="12" v-for="workflow in workflows" :key="`${workflow.id}`">
            <Workflows :workflow="workflow" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Workflows from "../components/Workflows";

export default {
  name: "Workflow",
  components: {
    Workflows
  },
  data() {
    return {
      workflows: [
            {
            id: 1,
            headline: "Template",
            subheadline: "Last updated: ",
            updateDate: "11 Feb 2020",
            workflow: "#"
            },
        ]
    }
  }
};
</script>