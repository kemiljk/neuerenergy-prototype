<template>
    <v-card
        >
        <v-card-title 
        class="font-weight-bold grey lighten-3">
        {{ notificationCard.headline }}
        </v-card-title>
        <v-row>
            <v-col cols="12" v-for="notification in notifications" :key="`${notification.id}`">
                <Notifications  :notification="notification"/>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import Notifications from "../components/Notifications"

export default {
    name: "NotificationCards",
    components: {
    Notifications
    },
    props: {    
        notificationCard: {
            type: String
        },
    },
    data() {
        return {
        notifications: [
            {
            id: 1,
            date: "12 Feb 2020",
            description: "PWR PPA • Added External Legal Counsel as Reviewer ",
            assignee: "Harry McCammond "
            },
            ]
        }
    }
};
</script>