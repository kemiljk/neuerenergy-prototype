<template>
    <v-card
        >
        <v-card-title >
            Title
        </v-card-title>
        <v-card-subtitle>
            Subtitle
        </v-card-subtitle>
        <v-card-text>
            Content
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "WorkflowDetails",
    props: {
        workflowd: {
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

<style>

</style>