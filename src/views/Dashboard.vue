<template>
  <v-container>
    <v-row class="mt-8" dense>
      <v-col cols="12" md="10">
        <h1>Dashboard</h1>
      </v-col>
      <v-col cols="2" align-self="end">
        <div class="text-right">
          <v-btn class="primary" to="/workflow-list">
            <v-icon class="mr-4">mdi-star</v-icon>New goal
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12">
        <h4>Today</h4>
        <h1 class="primary--text">11 Feb 2020</h1>
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
      <v-col
        cols="12"
        v-for="notificationCard in notificationCards"
        :key="`${notificationCard.id}`"
      >
        <NotificationCards :notificationCard="notificationCard" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { uuid } from "../utils";
import Cards from "../components/Cards";
import NotificationCards from "../components/NotificationCards";

export default {
  name: "Dashboard",
  mounted() {
    this.getDashboardSummaryCardsData();
  },
  components: {
    Cards,
    NotificationCards
  },
  data() {
    return {
      cards: [],
      notificationCards: [
        {
          id: uuid(),
          headline: "PPAs"
        }
      ],
    };
  },
  methods: {
    getDashboardSummaryCardsData: function () {
      fetch("/data/dashboardSummaryCards.json")
        .then(response => response.json())
        .then(data => (this.cards = data));
    }
  }
};
</script>