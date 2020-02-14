<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12" md="6">
        <h1>Analysis</h1>
        <p
          class="body-1 mt-4"
        >Adjust the sliders to change your CO₂ target reduction percentage and overall timeline to see the impact on your selection's energy consumption and price.</p>
      </v-col>
      <v-col cols="12" md="3" v-for="card in cards" :key="`${card.id}`">
        <Cards :card="card" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="card in widgets" :key="`${card.id}`">
        <Cards :card="card" />
      </v-col>
      <v-col cols="12" md="4" v-for="card in sliders" :key="`${card.id}`">
        <SliderCards :card="card" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="card in ppas" :key="`${card.id}`">
        <PPASliderCards :card="card" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <h2>On-site PPAs</h2>
        <p
          class="body-1"
        >If you want to discuss the option of On-site PPAs, speak with one of our specialist advisors.</p>
      </v-col>
      <v-col>
        <v-btn class="primary">
          <v-text class="black--text">Request a phone call</v-text>
        </v-btn>
      </v-col>
      <v-spacer />
      <v-col>
        <v-btn class="primary">
          <v-text class="black--text">Request an email</v-text>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
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
import { uuid } from "../utils";
import Cards from "../components/Cards";
import SliderCards from "../components/SliderCards";
import PPASliderCards from "../components/PPASliderCards";

export default {
  name: "Analysis",
  components: {
    Cards,
    SliderCards,
    PPASliderCards
  },
  data() {
    return {
      cards: [
        {
          id: uuid(),
          headline: "Global CO₂ footprint",
          title: "44,210",
          description: "Tonnes of CO₂ per year"
        },
        {
          id: uuid(),
          headline: "Energy consumption",
          title: "67,396.80",
          description: "MWh per year"
        }
      ],
      widgets: [
        {
          id: uuid(),
          headline: "Selected locations",
          title: "Boston, Indiana, Portland",
          description: "21.9% of 44,210 Tonnes of CO₂ per year"
        }
      ],
      sliders: [
        {
          id: uuid(),
          headline: "CO₂ reduction target",
          title: "50%",
          description: "24,149.90 Tonnes CO₂ per year"
        },
        {
          id: uuid(),
          headline: "Timeline",
          title: "5 years",
          description: "Ending in 2025"
        }
      ],
      ppas: [
        {
          id: uuid(),
          headline: "Virtual PPA",
          value: " 2,089,300.80 USD"
        },
        {
          id: uuid(),
          headline: "Sleeved PPA",
          value: " 3,369,840.00 USD",
          description: "Ending in 2025"
        }
      ]
    };
  }
};
</script>