<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12">
        <h1>Manage people</h1>
      </v-col>
    </v-row>
   <!--  <v-row>
        <v-col>
            <v-data-table
                v-bind:headers="headers"
                :items="items"
                hide-actions
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.username }}</td>
                <td class="text-xs-right">{{ props.item.email }}</td>
                <td class="text-xs-right">{{ props.item.phone }}</td>
                </template>
            </v-data-table>
        </v-col>
    </v-row> -->
  </v-container>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
export default {
  name: "Reports",
  created(){
    this.getListData()
  },
  methods: {
    getListData: function () {
      var root = 'https://jsonplaceholder.typicode.com';
      var vm = this;

      $.ajax({
        url: root + '/users',
        method: 'GET'
      }).then(function (data) {
        vm.items = data;
      });                                            

    }
  },
  data () {
    return {
      headers: [
        {
          text:'Name',
          align: 'left',
          sortable: false,
          value:'name'
        },
        { text: 'First Name', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' }
      ],
      items: [
        {
          value: false,
          name: 'Frozen Yogurt',
          username: 159,
          email: 6.0,
          phone: 24
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          username: 237,
          email: 9.0,
          phone: 37
        }
      ]
    }
  }
}
</script>