<template>
  <v-card>
    <v-card-title class="primary--text font-weight-bold">{{ card.headline }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text class="mt-4 font-weight-medium display-2">{{ card.title }}</v-card-text>
    <v-card-text>{{ card.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Cards",
  props: {
    card: {
      type: String
    }
  },
  data() {
    return {
      //
    };
  }
};
</script>