<template>
  <v-container>
    <v-row class="mt-8">
      <v-spacer />
      <v-col cols="4" class="text-center">
        <h1>Signed Out</h1>
        <p class="body-1 mt-4">You have been signed out.</p>
        <v-btn class="secondary mt-8" to="/sign-in">
          Sign in
        </v-btn>
      </v-col>
    <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignOut",
}
</script>