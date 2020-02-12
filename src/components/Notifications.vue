<template>
  <v-list dense nav class="py-0">
      <v-list-item link :to="notification.url">
      <v-col cols="10">
        <v-list-item-subtitle class="body-1 py-4">{{ notification.date }}</v-list-item-subtitle>
        <v-list-item-title class="title font-weight-bold py-2">{{ notification.description }}</v-list-item-title>
        <v-list-item-subtitle class="body-1 py-4">{{ notification.details }}</v-list-item-subtitle>
      </v-col>
      <v-col cols="2" align-items="center" class="my-auto">
        <div class="text-center">
          <v-btn text icon :to="notification.url">
            <v-icon large>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
      </v-list-item>
      <v-divider></v-divider>
  </v-list>
</template>

<script>
export default {
  name: "Notifications",
  props: {
    notification: {
      type: String
    }
  }
};
</script>