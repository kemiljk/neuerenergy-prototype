<template>
    <v-card
        >
        <v-card-title cols="8" 
        class="font-weight-bold grey">
        <div>
        {{ notificationCard.headline }}
        </div>
        <v-spacer></v-spacer>
        <div>
        <v-btn class="mx-auto">See more</v-btn>
        </div>
        </v-card-title>
        <v-row>
            <v-col cols="12" v-for="notification in notifications" :key="`${notification.id}`">
                <Notifications :notification="notification" />
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { uuid } from '../utils'
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
            id: uuid(),
            date: "12 FEB 2020",
            description: "PWR PPA • Added External Legal Counsel as Reviewer",
            details: "Harry McCammond",
            url: "/notifications/#"
            },
            {
            id: uuid(),
            date: "27 OCT 2019",
            description: "CLR PPA • Initiated by Harry McCammond on 23rd Dec 2019",
            details: "Awaiting contract initiation with CLR",
            url: "/notifications/#"
            },
            {
            id: uuid(),
            date: "21 NOV 2019",
            description: "Contrast PPA • By Małgorzata Switoniak-Jabłonska",
            details: "Needs further discussion",
            url: "/notifications/#"
            },
            ]
        }
    }
};
</script>