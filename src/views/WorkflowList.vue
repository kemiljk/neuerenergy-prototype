<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row class="mt-8">
          <v-col cols="12" md="6">
            <h1>Workflow</h1>
          </v-col>
          <v-spacer />
          <v-col md="3">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              color="primary"
              class="my-0 py-1"
            ></v-text-field>
          </v-col>
          <v-spacer />
          <v-col>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <div class="text-right">
                  <v-btn color="primary" class="mb-2" v-on="on">
                    <v-icon left>mdi-plus</v-icon>Create new
                  </v-btn>
                </div>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="editedItem.name" label="Workflow title"></v-text-field>
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
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-col cols="12">
            <v-data-table
              :headers="myworkflowheaders"
              :items="myworkflowdesserts"
              :search="search"
              sort-by="status"
              class="elevation-1"
              
            >
              <template v-slot:top>
                <v-toolbar flat color="grey" class="br-top">
                  <v-toolbar-title class="font-weight-bold">My workflows</v-toolbar-title>                  
                </v-toolbar>
              </template>
              <template v-slot:item.action="{ item }">
                <v-btn to="/workflow-details" color="primary" icon class="float-right mr-4">
                  <v-icon large>mdi-chevron-right</v-icon>
                </v-btn>
                <v-btn text @click="deleteItem(item)" class="float-right mr-4" color="error" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn text @click="editItem(item)" class="float-right mr-4" icon>
                  <v-icon>mdi-pen</v-icon>
                </v-btn>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-col cols="12">
            <v-data-table
              :headers="templateheaders"
              :items="templatedesserts"
              :search="search"
              sort-by="category"
              class="elevation-1"
              :hide-default-header="false"
              hide-default-footer
            >
              <template v-slot:top>
                <v-toolbar flat color="grey" class="br-top">
                  <v-toolbar-title class="font-weight-bold">Templates</v-toolbar-title>
                </v-toolbar>
              </template>
              <template v-slot:item.action="{  }">
                <v-btn to="/workflow-details" color="primary" icon class="float-right mr-4">
                  <v-icon large>mdi-chevron-right</v-icon>
                </v-btn>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.v-application .text-start {
  text-align: center !important;
}
.float-right {
  float: right;
}
</style>

<script>
export default {
  mounted() {
    this.getWorkflowListData();
    this.getWorkflowTemplateListData();
  },

  data: () => ({
    search: "",
    dialog: false,

    myworkflowheaders: [],
    myworkflowdesserts: [],
    templateheaders: [],
    templatedesserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
    },
    defaultItem: {
      name: "",
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Create new workflow" : "Edit workflow title";
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
      this.myworkflowdesserts = [
        {
          name: "AMERICAS top 3 sites",
          status: "At-sites",
          profile: "Analysis",
          carbs: 2,
          protein: 1
        },
        {
          name: "EUROPE",
          status: "Generator to sign",
          profile: "Virtual PPA",
          carbs: 2,
          protein: 0
        },
        {
          name: "APAC",
          status: "Contract review",
          profile: "Sleeved PPA",
          carbs: 1,
          protein: 0
        }
      ];
      this.templatedesserts = [
        {
          name: "Template 1",
          category: "Analysis"
        },
        {
          name: "Template 2",
          category: "Virtual PPA"
        },
        {
          name: "Template 3",
          category: "Sleeved PPA"
        }
      ];
    },
    getWorkflowListData: function () {
      fetch("/data/workflowListData.json")
        .then(response => response.json())
        .then(data => (this.myworkflowheaders = data));
    },

    editItem(item) {
      this.editedIndex = this.myworkflowdesserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.myworkflowdesserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.myworkflowdesserts.splice(index, 1);
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
        Object.assign(this.myworkflowdesserts[this.editedIndex], this.editedItem);
      } else {
        this.myworkflowdesserts.push(this.editedItem);
      }
      this.close();
    },

    getWorkflowTemplateListData: function () {
      fetch("/data/workflowTemplateListData.json")
        .then(response => response.json())
        .then(data => (this.templateheaders = data));
    },
  }
};
</script>