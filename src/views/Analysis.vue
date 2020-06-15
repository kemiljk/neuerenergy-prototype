<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12" md="6">
        <h1>Analysis</h1>
        <p
          class="body-1 mt-4"
        >Adjust the sliders to change your CO₂ target reduction percentage and overall timeline to see the impact on your selection's energy consumption and price.</p>
      </v-col>
      <v-spacer />
      <v-col cols="12" md="4">
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

export default {
  name: "Analysis",
  mounted() {
    this.getAnalysisCardData();
    this.getAnalysisSliderCardData();
    this.getAnalysisPpaCardData();
    this.getCtaCardData();
  },
  components: {
    Cards,
    SliderCards,
    PPASliderCards,
    CtaCards
  },
  data() {
    return {
      cards: [],
      sliders: [],
      ppas: [],
      ctas: [],
      items: ["London", "Singapore", "Germany", "+ add more"]
    };
  },
  methods: {
    getAnalysisCardData: function() {
      fetch("/data/analysisCardData.json")
        .then(response => response.json())
        .then(data => (this.cards = data));
    },
    getAnalysisSliderCardData: function() {
      fetch("/data/analysisSliderCardData.json")
        .then(response => response.json())
        .then(data => (this.sliders = data));
    },
    getAnalysisPpaCardData: function() {
      fetch("/data/analysisPpaCardData.json")
        .then(response => response.json())
        .then(data => (this.ppas = data));
    },
    getCtaCardData: function() {
      fetch("/data/ctaCardData.json")
        .then(response => response.json())
        .then(data => (this.ctas = data));
    }
  }
};
</script>