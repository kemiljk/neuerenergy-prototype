<template>
  <v-card>
    <v-card-title cols="8" class="font-weight-bold grey">
      <div>{{ notificationCard.headline }}</div>
      <v-spacer></v-spacer>
      <div>
        <v-btn class="mx-auto">See more</v-btn>
      </div>
    </v-card-title>
    <v-row>
      <v-col cols="12" v-for="notification in notifications" :key="`${notification.id}`">
        <Notifications :notification="notification" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Notifications from "../components/Notifications";
import notificationsData from "../data/notificationsData";

export default {
  name: "NotificationCards",
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
      notifications: notificationsData
    };
  }
};
</script>