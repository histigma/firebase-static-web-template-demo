<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
      class="text-center my-16"
    >
      <v-col cols="12" md="8">
        <v-sheet
          rounded
          class="pa-2 pa-md-6 pa-lg-12"
          style="background-color: white;"
        >
          <v-icon
            size="96"
            color="primary"
            class="mb-6"
          >
            fa-regular fa-circle-xmark
          </v-icon>

          <h1 class="display-1 font-weight-bold mb-4" style="color: grey;">
            500 - Internal Server Error<br>
          </h1>
          <p class="subtitle-1 my-8" style="color: grey;">
            An internal error has occurred. Please try again later. 
          </p>

          <v-btn
            color="grey"
            variant="tonal"
            large
            depressed
            rounded
            @click="$router.push('/')"
          >
            Back to Home
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>



