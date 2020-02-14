<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Components</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Cards</h2>
        <v-row>
          <v-col cols="12" md="6" v-for="card in cards" :key="`${card.id}`">
            <Cards :card="card" />
          </v-col>
    </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Notification Cards</h2>
        <v-row>
      <v-col
        cols="12"
        md="6"
        v-for="notificationCard in notificationCards"
        :key="`${notificationCard.id}`"
      >
        <NotificationCards :notificationCard="notificationCard" />
      </v-col>
    </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Slider Cards</h2>
        <v-row>
          <v-col cols="12" md="4" v-for="card in sliders" :key="`${card.id}`">
            <SliderCards :card="card" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { uuid } from "../utils";
import Cards from "../components/Cards";
import NotificationCards from "../components/NotificationCards";
import SliderCards from "../components/SliderCards";

export default {
  name: "Dashboard",
  components: {
    Cards,
    SliderCards,
    NotificationCards
  },
  data() {
    return {
      cards: [
        {
          id: uuid(),
          headline: "Total MWh purchased",
          title: "0"
        },
      ],
      notificationCards: [
        {
          id: uuid(),
          headline: "In-Negotiation PPAs"
        },
      ],
      sliders: [
        {
          id: uuid(),
          headline: "CO₂ reduction target",
          title: "50%",
          description: "24,149.90 Tonnes CO₂ per year"
        }
      ]
    };
  }
};
</script>