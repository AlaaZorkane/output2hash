<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <MainCard />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainCard from "./components/MainCard";

export default {
  components: {
    MainCard
  }
};
</script>

<style>
#inspire {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    38deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 100, 1) 84%
  );
}
</style>