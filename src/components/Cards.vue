<template>
    <v-card
        hover
        >
        <v-card-title 
        class="secondary--text font-weight-bold">
        {{ card.headline }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-4 font-weight-bold display-2">
        {{ card.title }}
        </v-card-text>
        <v-card-text>
        {{ card.description }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "Cards",
    props: {
        card: {
            type: String
        },
    },
    data() {
        return {
        //
        };
    }
}
</script>