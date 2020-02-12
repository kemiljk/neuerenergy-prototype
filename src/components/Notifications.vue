<template>
  <v-container class="py-0">
    <v-row>
      <v-col cols="9">
      <v-card-text class="body-2 py-0">
      {{ notification.date }}
      </v-card-text>
      <v-card-text class="body-1 font-weight-bold">
      {{ notification.description }}
      </v-card-text>
      <v-card-text class="body-2 py-0 mb-4">
      {{ notification.details }}
      </v-card-text>
      </v-col>
      <v-col cols="3" align-items="center" class="my-auto">
      <div class="text-center">
        <v-btn text icon>
            <v-icon
              large
            >
              mdi-chevron-right
            </v-icon>
        </v-btn>
      </div>
      </v-col>
    </v-row>
      <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: "Notifications",
  props: {    
        notification: {
            type: String
        },
    },
};
</script>