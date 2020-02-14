<template>
  <v-card>
    <v-card-title class="primary--text font-weight-bold">{{ card.headline }}</v-card-title>
    <v-divider></v-divider>
    <v-slider
      v-model="slider"
      thumb-label
      class="mt-11"
      track-color="accent"
      track-fill-color="primary"
      thumb-color="primary"
    ></v-slider>
    <v-card-text class="mt-4 font-weight-bold display-2">{{ card.title }}</v-card-text>
    <v-card-text>{{ card.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SliderCards",
  props: {
    card: {
      type: String
    }
  },
  data() {
    return {
      slider: 50
    };
  }
};
</script>