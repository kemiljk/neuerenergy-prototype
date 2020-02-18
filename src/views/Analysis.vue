<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12" md="6">
        <h1>Analysis</h1>
        <p
          class="body-1 mt-4"
        >Adjust the sliders to change your CO₂ target reduction percentage and overall timeline to see the impact on your selection's energy consumption and price.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-select :items="items" label="London" solo></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="card in cards" :key="`${card.id}`">
        <Cards :card="card" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="card in sliders" :key="`${card.id}`">
        <SliderCards :card="card" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="card in ppas" :key="`${card.id}`">
        <PPASliderCards :card="card" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" v-for="card in ctas" :key="`${card.id}`">
        <CtaCards :card="card" />
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-spacer />
      <v-col cols="12" md="4" class="text-center">
        <h2 class="mb-4">Save your analysis profile</h2>
        <v-btn class="mr-2" outlined>
          <v-text>Reset</v-text>
        </v-btn>
        <v-btn class="ml-2 primary">
          <v-text>Save</v-text>
        </v-btn>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import Cards from "../components/Cards";
import SliderCards from "../components/SliderCards";
import PPASliderCards from "../components/PPASliderCards";
import CtaCards from "../components/CtaCards";
import analysisCardData from "../data/analysisCardData";
import analysisSliderCardData from "../data/analysisSliderCardData";
import analysisPpaCardData from "../data/analysisPpaCardData";
import ctaCardData from "../data/ctaCardData";

export default {
  name: "Analysis",
  components: {
    Cards,
    SliderCards,
    PPASliderCards,
    CtaCards
  },
  data() {
    return {
      cards: analysisCardData,
      sliders: analysisSliderCardData,
      ppas: analysisPpaCardData,
      ctas: ctaCardData,
      items: ["London", "Singapore", "Germany", "+ New site"]
    };
  }
};
</script>