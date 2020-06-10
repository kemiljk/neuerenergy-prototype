<template>
  <v-card>
    <v-card-title class="font-weight-bold">{{ card.headline }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text class="mt-4 primary--text font-weight-bold headline">{{ card.value }}</v-card-text>
    <v-slider
      v-model="percentage"
      thumb-label
      class="mt-4"
      track-color="accent"
      track-fill-color="primary"
      thumb-color="primary"
    >
      <template v-slot:append>
        <v-text-field
          v-model="percentage"
          class="mr-2 py-0 mt-0"
          color="primary"
          hide-details
          single-line
          type="number"
          style="width: 75px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-slider
      v-model="years"
      thumb-label
      track-color="accent"
      track-fill-color="primary"
      thumb-color="primary"
      min="2020"
      max="2030"
    >
      <template v-slot:append>
        <v-text-field
          v-model="years"
          class="mr-2 py-0 mt-0"
          color="primary"
          hide-details
          single-line
          type="number"
          style="width: 75px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-card-text class="title font-weight-bold">Provides</v-card-text>
    <v-list-item v-for="item in items" :key="`${item.id}`" class="ml-4">
      <v-list-item-text>
        <v-icon color="success">mdi-check-circle-outline</v-icon>
        {{ item.factors }}
      </v-list-item-text>
    </v-list-item>
    <v-card-text class="title font-weight-bold">Covers</v-card-text>
    <v-checkbox
      v-for="place in places"
      :key="`${place.id}`"
      class="ml-8 my-0"
      color="primary"
      :label="`${place.location}`"
    />
  </v-card>
</template>

<script>
/* import { uuid } from '../utils' */

export default {
  name: "PPASliderCards",
  props: {
    card: {
      type: String
    }
  },
  data() {
    return {
      percentage: 50,
      years: 2025,
      items: [{ factors: "Additionality" }, { factors: "Certificates" }],
      places: [{ location: "Boston" }, { location: "Indiana" }]
    };
  }
};
</script>