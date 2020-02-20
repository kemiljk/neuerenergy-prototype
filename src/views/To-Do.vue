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
                          <v-text-field v-model="editedItem.title" label="ACTION"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.task" label="DESCRIPTION"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="text-center">
                          <v-dialog
                            ref="dialog"
                            v-model="modal"
                            :return-value.sync="editedItem.date"
                            persistent
                            width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="editedItem.date"
                                label="DUE DATE"
                                prepend-icon="mdi-calendar"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="actions.date" scrollable>
                              <v-spacer></v-spacer>
                              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                              <v-btn text color="primary" @click="$refs.dialog.save(actions.date)">OK</v-btn>
                            </v-date-picker>
                          </v-dialog>
       <!-- <v-text-field v-model="editedItem.date" label="Due date"></v-text-field> -->
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <v-select
                            v-model="editedItem.status"
                            :items="items"
                            label="To-Do"
                            solo
                          ></v-select>
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
            <v-btn to="/to-do/#id" color="primary" icon>
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

export default {
  name: "To-Do",
  mounted() {
    this.getActionsData();
    this.getActionsHeaderData();
    this.getItemsData();
  },
  data: () => ({
    singleSelect: false,
    selected: [],
    search: "",
    dialog: false,
    headers: [],
    actions: [],
    items: [],
    editedIndex: -1,
    editedItem: [],
    defaultItem: [],
    modal: true
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
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
      this.actions = [];
    },
    getActionsData: function() {
      fetch("/data/actionsData.json")
        .then(response => response.json())
        .then(data => (this.actions = data));
    },
    getActionsHeaderData: function() {
      fetch("/data/actionsHeaderData.json")
        .then(response => response.json())
        .then(data => (this.headers = data));
    },
    getItemsData: function() {
      fetch("/data/actionsItemsData.json")
        .then(response => response.json())
        .then(data => (this.items = data));
    },
    getColor(status) {
      if (status === "Overdue") return "red";
      else if (status === "In-Progress") return "orange darken-3";
      else if (status === "To-Do") return "primary";
      else return "success";
    },
    editItem(item) {
      this.editedIndex = this.actions.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.actions.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.actions.splice(index, 1);
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
        Object.assign(this.actions[this.editedIndex], this.editedItem);
      } else {
        this.actions.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>