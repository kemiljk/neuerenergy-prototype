<template>
    <v-card
        >
        <v-card-title 
        class="font-weight-bold grey">
        {{ notificationCard.headline }}
        </v-card-title>
        <v-row>
            <v-col cols="12" v-for="notification in notifications" :key="`${notification.id}`">
                <Notifications :notification="notification" />
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
            description: "PWR PPA • Added External Legal Counsel as Reviewer",
            details: "Harry McCammond"
            },
            {
            id: 2,
            date: "27th Oct 2019",
            description: "CLR PPA • Initiated by Harry McCammond on 23rd Dec 2019",
            details: "Awaiting contract initiation with CLR"
            },
            {
            id: 3,
            date: "21st Nov 2019",
            description: "Contrast PPA • By Małgorzata Switoniak-Jabłonska",
            details: "Needs further discussion"
            },
            ]
        }
    }
};
</script>