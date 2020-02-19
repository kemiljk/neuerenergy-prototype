<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="6">
        <h1>To-Do</h1>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          color="secondary"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          v-model="selected"
          :single-select="singleSelect"
          item-key="id"
          show-select
          :headers="headers"
          :items="actions"
          :search="search"
          sort-by="date"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="grey" class="br-top">
              <v-toolbar-title class="font-weight-bold">Actions</v-toolbar-title>
              <v-spacer />
              <v-spacer />
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" class="my-2" v-on="on">
                    <v-icon left>mdi-plus</v-icon>Add new
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.title" label="Action title"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.task" label="Task"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.date" label="Due date"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" outlined @click="close">Cancel</v-btn>
                    <v-btn color="primary" @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-btn text @click="editItem(item)" class="mr-6" icon>
              <v-icon>mdi-pen</v-icon>
            </v-btn>
            <v-btn text @click="deleteItem(item)" class="mr-5" color="error" icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn to="/workflow-details" color="primary" icon>
              <v-icon large>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { uuid } from "../utils";

export default {
  name: "To-Do",
  data: () => ({
    singleSelect: false,
    selected: [],
    search: "",
    dialog: false,
    headers: [
      {
        text: "Task title",
        align: "left",
        sortable: false,
        value: "title"
      },
      { text: "Description", value: "task" },
      { text: "Due Date", value: "date" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "action", sortable: false }
    ],
    actions: [],
    editedIndex: -1,
    editedItem: {
      id: uuid(),
      title: "",
      task: "",
      date: "",
      status: ""
    },
    defaultItem: {
      id: uuid(),
      title: "",
      task: "",
      date: "",
      status: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.actions = [
        {
          id: uuid(),
          title: "Finish site setup",
          task: "Complete walkthrough of onboarding",
          date: "19 Feb 2020",
          status: "In Progress"
        },
        {
          id: uuid(),
          title: "Speak to PWR about contract",
          task: "Phone Phil",
          date: "25 Feb 2020",
          status: "To Do"
        },
        {
          id: uuid(),
          title: "Set up external reviewer",
          task: "Revisit workflow and add new user",
          date: "01 Mar 2020",
          status: "To Do"
        }
      ];
    },
    getColor(status) {
      if (status === "Overdue") return "red";
      else if (status === "In Progress") return "orange darken-3";
      else if (status === "To Do") return "primary";
      else return "green";
    },
    editItem(item) {
      this.editedIndex = this.actions.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.actions.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.actions.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>