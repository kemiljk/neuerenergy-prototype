<template>
  <v-card>
    <v-card-title class="grey font-weight-bold">
      {{ task.headline }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        color="primary"
      ></v-text-field>
    </v-card-title>
    <v-card-subtitle class="grey">{{ task.subheadline }} – {{ task.updateDate }}</v-card-subtitle>
    <!-- INSERT URL TO WORKFLOW DETAILS PAGE -->
    <v-data-table :headers="headers" :items="desserts" :search="search" hide-default-footer />
  </v-card>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    task: {
      type: String
    }
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        }
      ]
    };
  }
};
</script>