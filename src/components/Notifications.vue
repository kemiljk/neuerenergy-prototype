<template>
  <v-container class="py-0">
    <v-row>
      <v-col cols="10">
      <v-card-text class="body-2 grey--text py-0">
      {{ notification.date }}
      </v-card-text>
      <v-card-text class="body-1 font-weight-bold">
      {{ notification.description }}
      </v-card-text>
      <v-card-text class="body-2 grey--text py-0 mb-4">
      {{ notification.details }}
      </v-card-text>
      </v-col>
      <v-col cols="2" align-items="center" class="mx-auto my-auto">
        <v-btn text icon>
            <v-icon
              large
            >
              mdi-chevron-right
            </v-icon>
        </v-btn>
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