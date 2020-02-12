<template>
  <v-list dense nav class="py-0 my-0">
    <v-list-item link :to="notification.url">
      <v-col cols="11">
        <!-- <v-chip v-if="flag.update">UPDATE</v-chip>
        <v-chip v-else-if="flag.approved">APPROVED</v-chip>
        <v-chip v-else-if="flag.rejected">REJECTED</v-chip>
        <v-chip v-else-if="flag.action">ACTION</v-chip>-->
        <v-list-item-subtitle class="subtitle-2 pb-2">{{ notification.date }}</v-list-item-subtitle>
        <v-list-item-title class="subtitle-1 font-weight-bold py-2">{{ notification.description }}</v-list-item-title>
        <v-list-item-subtitle class="body-1 pt-2">{{ notification.details }}</v-list-item-subtitle>
      </v-col>
      <v-col cols="1" align-items="center" class="my-auto">
        <div class="text-center">
          <v-btn text icon :to="notification.url">
            <v-icon large>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-list-item>
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