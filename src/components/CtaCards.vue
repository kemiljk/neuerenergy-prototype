<template>
  <v-card>
    <v-card-title class="primary--text font-weight-bold">{{ card.headline }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text class="mt-2 body-1 mb-2">{{ card.text }}</v-card-text>
      <v-btn class="primary ml-3 mb-4" href="tel:+442072422956">
          <v-icon>{{ card.icon }}</v-icon>
        <v-text class="ml-3">{{ card.cta }}</v-text>
      </v-btn>
        <v-btn class="primary ml-3 mb-4" href="mailto:info@neuerenergy.com">
          <v-icon>{{ card.icon2 }}</v-icon>
        <v-text class="ml-3">{{ card.cta2 }}</v-text>
      </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "CtaCards",
  props: {
    card: {
      type: String
    }
  },
  data() {
    return {
      //
    };
  }
};
</script>