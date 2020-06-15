<template>
  <v-card>
    <v-card-title class="font-weight-bold">{{ card.headline }}</v-card-title>
    <v-divider></v-divider>
    <v-slider
      v-model="slider"
      thumb-label
      class="mt-11"
      track-color="accent"
      track-fill-color="primary"
      thumb-color="primary"
    ></v-slider>
    <v-card-text><span class="mt-4 font-weight-medium display-2" v-text="slider"></span><span class="mt-4 font-weight-medium display-2">%</span></v-card-text> 
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
      slider: 50,
    };
  }
};
</script>