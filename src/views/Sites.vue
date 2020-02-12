<template>
  <v-container>
    <v-row class="mt-8">
      <v-col cols="12">
        <h1>Sites</h1>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="6">
        <v-card>
          <v-card-title class="secondary--text font-weight-bold">
            Upload files
          </v-card-title>
          <v-card-text>
            Upload spreadsheets, PDFs or other documents that include information about your sites.
          </v-card-text>
          <v-file-input
            v-model="files"
            accept=".doc, .docx, .xls, .xlsx, .pdf"
            color="secondary"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            hover
            clearable
            class="mt-4 mr-4 ml-2"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="secondary"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
          </v-file-input>
          <div class="text-center">
            <v-btn class="secondary ml-4 mb-4">
              Upload
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
           <v-card-title class="secondary--text font-weight-bold">
            Input data manually
          </v-card-title>
          <v-card-text>
            Initiate site setup by adding the site title, location, total carbon emissions, total energy consumption and carbon footprint (if known).
          </v-card-text>
            <form class="mr-4 ml-4">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Site title"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Site location"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Total carbon emissions (per annum)"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Total energy consumption (per annum)"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Total carbon footprint (per annum, if known)"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <!-- <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
                ></v-select>
                <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox> -->
              <div class="text-center">
                <v-btn class="secondary mr-4 mb-4" @click="submit">submit</v-btn>
                <v-btn class="secondary mb-4" @click="clear">clear</v-btn>
              </div>
            </form>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sites",
    data: () => ({
      files: [],
    }),
}
</script>