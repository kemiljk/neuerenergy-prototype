<template>
  <v-container>
    <v-row class="mt-8" dense>
      <v-col cols="12" md="10">
        <h1>Dashboard</h1>
      </v-col>
      <v-col cols="2" align-self="end">
        <div class="text-right">
          <v-btn class="secondary" to="/workflow">
            <v-icon class="mr-4">mdi-star</v-icon>
            New goal
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12">
        <h4>Today</h4>
        <h1 class="secondary--text">11 Feb 2020</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="card in cards" :key="`${card.id}`">
        <Cards :card="card" />
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="6">
        <h2>Notifications</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="notificationCard in notificationCards" :key="`${notificationCard.id}`">
        <NotificationCards :notificationCard="notificationCard" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { uuid } from '../utils'
import Cards from "../components/Cards";
import NotificationCards from "../components/NotificationCards";

export default {
  name: "Dashboard",
  components: {
    Cards,
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
        {
          id: uuid(),
          headline: "Number of certificates received ",
          title: "0"
        },
        {
          id: uuid(),
          headline: "Price savings to date",
          title: "$0"
        },
        {
          id: uuid(),
          headline: "Tonnes of CO₂ saved to date",
          title: "0"
        }
      ],
      notificationCards: [
        {
          id: uuid(),
          headline: "In-Negotiation PPAs",
        },
        {
          id: uuid(),
          headline: "In-Life PPAs",
        }
      ]
    };
  }
};
</script>