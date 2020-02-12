<template>
  <v-container>
    <v-row class="mt-8" dense>
      <v-col cols="10">
        <h1>Dashboard</h1>
      </v-col>
      <v-col cols="2" align-self="end">
        <div class="text-right">
          <v-btn class="secondary">
            <v-icon class="mr-4">mdi-star</v-icon>
            New goal
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12">
        <h4>Today</h4>
        <h2 class="secondary--text">11 Feb 2020</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="card in cards" :key="`${card.id}`">
        <Cards :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cards from "../components/Cards";

export default {
  name: "Dashboard",
  components: {
    Cards
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          headline: "Total MWh purchased",
          title: "17,419"
        },
        {
          id: 2,
          headline: "Number of certificates received ",
          title: "16,695"
        },
        {
          id: 3,
          headline: "Price savings to date",
          title: "$599,360"
        },
        {
          id: 4,
          headline: "Tonnes of CO₂ saved to date",
          title: "5,970.10"
        }
      ]
    };
  }
};
</script>