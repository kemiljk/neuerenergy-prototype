<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12">
        <h1>Sites</h1>
        <h3>You haven't got any sites yet, add some data below to populate your system</h3>
      </v-col>
      <v-col cols="6">
        <v-card class="mb-6">
          <v-card-title class="font-weight-bold">Upload files</v-card-title>
          <v-card-text>Upload spreadsheets, PDFs or other documents that include information about your sites.</v-card-text>
          <v-file-input
            v-model="files"
            accept=".doc, .docx, .xls, .xlsx, .pdf"
            color="primary"
            counter
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            hover
            clearable
            class="mr-4 ml-2"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip v-if="index < 2" color="primary" dark label small>{{ text }}</v-chip>
              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >+{{ files.length - 2 }} File(s)</span>
            </template>
          </v-file-input>
          <div class="text-center">
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="primary"
              class="my-4 white--text"
              @click="loader = 'loading'"
            >
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </div>
        </v-card>
        <v-card>
          <v-card-title class="font-weight-bold">Connect via API</v-card-title>
          <v-card-text>Connect your sites data via various API types.</v-card-text>
          
          <div class="text-center">
            <v-btn
              color="primary"
              class="my-4 mr-2"
            >
              Business Intelligence
              <v-icon right dark>mdi-head-snowflake-outline</v-icon>
            </v-btn>
            <v-btn
              color="secondary"
              class="my-4 mr-2 primary--text"
            >
              Robotic automation
              <v-icon right dark>mdi-robot</v-icon>
            </v-btn>
            <v-btn
              color="primary"
              class="my-4 primary--text"
              outlined
              @click="loader = 'loading'"
            >
              Custom integration
              <v-icon right dark>mdi-cog-outline</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="font-weight-bold">Input data manually</v-card-title>
          <v-card-text>Initiate site setup by adding the site title, location, total carbon emissions, total energy consumption and carbon footprint (if known).</v-card-text>
          <form class="mr-4 ml-4">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="30"
              label="Site title"
              required
              prepend-icon="mdi-subtitles"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              color="primary"
            ></v-text-field>
            <v-text-field
              v-model="location"
              :error-messages="locationErrors"
              label="Site location"
              :counter="30"
              required
              prepend-icon="mdi-map-marker"
              @input="$v.location.$touch()"
              @blur="$v.location.$touch()"
              color="primary"
            ></v-text-field>
            <v-text-field
              v-model="emissions"
              :error-messages="emissionsErrors"
              label="Total carbon emissions (per annum)"
              required
              prepend-icon="mdi-weather-windy"
              @input="$v.emissions.$touch()"
              @blur="$v.emissions.$touch()"
              color="primary"
              v-on:keypress="isNumber(event)"
            ></v-text-field>
            <v-text-field
              v-model="consumption"
              :error-messages="consumptionErrors"
              label="Total energy consumption (per annum)"
              required
              prepend-icon="mdi-lightbulb-on"
              @input="$v.consumption.$touch()"
              @blur="$v.consumption.$touch()"
              color="primary"
              v-on:keypress="isNumber(event)"
            ></v-text-field>
            <v-text-field
              v-model="price"
              label="Total cost (per annum)"
              prepend-icon="mdi-cash"
              @input="$v.price.$touch()"
              @blur="$v.price.$touch()"
              color="primary"
              v-on:keypress="isNumber(event)"
            ></v-text-field>
            <v-text-field
              v-model="footprint"
              label="Total carbon footprint (per annum, if known)"
              prepend-icon="mdi-cloud"
              @input="$v.footprint.$touch()"
              @blur="$v.footprint.$touch()"
              color="primary"
              v-on:keypress="isNumber(event)"
            ></v-text-field>
            <div class="text-center">
              <v-btn class="mr-4 mb-4" outlined @click="clear">reset</v-btn>
              <v-btn class="primary mb-4" @click="submit">submit</v-btn>
            </div>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  name: "Sites",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    location: { required, maxLength: maxLength(30) },
    emissions: { required },
    consumption: { required }
  },
  data() {
    return {
    files: [],
    name: "",
    location: "",
    emissions: "",
    consumption: "",
    price: "",
    footprint: "",
    loader: null,
    loading: false,
    loading2: false,
    loading3: false,
    loading4: false,
    loading5: false,
    }
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Site name must be at most 30 characters long");
      !this.$v.name.required && errors.push("Site name is required.");
      return errors;
    },
    locationErrors() {
      const errors = [];
      if (!this.$v.location.$dirty) return errors;
      !this.$v.location.maxLength &&
        errors.push("Location name must be at most 30 characters long");
      !this.$v.location.required && errors.push("Location name is required.");
      return errors;
    },
    emissionsErrors() {
      const errors = [];
      if (!this.$v.emissions.$dirty) return errors;
      !this.$v.emissions.required && errors.push("Emissions are required.");
      return errors;
    },
    consumptionErrors() {
      const errors = [];
      if (!this.$v.consumption.$dirty) return errors;
      !this.$v.consumption.required && errors.push("Consumption is required.");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.location = "";
      this.emissions = "";
      this.consumption = "";
      this.price = "";
      this.footprint = "";
    },
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>