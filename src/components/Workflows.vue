<template>
    <v-card
        >
        <v-card-title 
        class="secondary--text font-weight-bold">
        {{ workflow.headline }}
        </v-card-title>
        <v-card-subtitle>
        {{ workflow.subheadline }} – {{ workflow.updateDate }}
        </v-card-subtitle>
        <!-- INSERT WORKFLOW -->
    </v-card>
</template>

<script>
export default {
    name: "Workflows",
    props: {
        workflow: {
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