<template>
  <v-card>
    <v-card-title cols="8" class="font-weight-bold grey">
      <div>{{ notificationCard.headline }}</div>
      <v-spacer></v-spacer>
      <div>
        <v-btn class="mx-auto">See more</v-btn>
      </div>
    </v-card-title>
    <v-card-content>
      <v-row>
        <v-col cols="12" v-for="notification in notifications" :key="`${notification.id}`">
          <Notifications :notification="notification" />
        </v-col>
      </v-row>
    </v-card-content>
  </v-card>
</template>

<script>
import Notifications from "../components/Notifications";

export default {
  name: "NotificationCards",
  mounted() {
    this.getNotificationsData();
  },
  components: {
    Notifications
  },
  props: {
    notificationCard: {
      type: String
    }
  },
  data() {
    return {
      notifications: []
    };
  },
  methods: {
    getNotificationsData: function () {
      fetch("/data/notificationsData.json")
        .then(response => response.json())
        .then(data => (this.notifications = data));
    }
  }
};
</script>