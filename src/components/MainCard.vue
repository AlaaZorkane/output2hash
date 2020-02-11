<template>
  <v-row align="center" justify="center" v-cloak @drop.prevent="dropFile" @dragover.prevent="drag">
    <v-col cols="12" sm="8" md="4">
      <v-card class="mx-auto mb-4" outlined>
        <v-card-title class="headline">OpenSource days 2020</v-card-title>
        <v-card-subtitle class="pink--text">Output2Hash</v-card-subtitle>
        <v-card-actions class="justify-center" @click="drag">
          <v-icon size="200" color="pink darken-2">mdi-progress-upload</v-icon>
        </v-card-actions>
      </v-card>
      <v-text-field
        @click="toClipboard"
        @click:append="toClipboard"
        color="pink"
        v-model="hash"
        solo
        readonly
        append-icon="mdi-content-copy"
      ></v-text-field>
      <v-snackbar v-model="snackbar">
        {{ text }}
        <v-btn color="pink" text @click="snackbar = false">Okay</v-btn>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: function() {
    return {
      text: "You need to drop a file first!",
      dropped: false,
      hash: "Drag and drop a file to get the hash.",
      snackbar: false
    };
  },
  methods: {
    toClipboard: async function(e) {
      this.snackbar = false;
      if (this.dropped) {
        try {
          await this.$copyText(this.hash);
          this.text = "Hash copied!";
        } catch (err) {
          console.error(err);
        }
      }
      this.snackbar = true;
    },
    drag: function(e) {
      console.log(true)
    },
    dropFile: function(e) {
      this.dropped = true;
      this.snackbar = false;
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      const crypto = this.$CryptoJS;
      const ctx = this;
      reader.onload = function(event) {
        let data = event.target.result;
        data = data.split(/\s+/).join("");
        console.log(data);
        const enc = crypto.SHA256(data);
        ctx.hash = enc;
        ctx.text = "Click on the hash to copy!"
        ctx.snackbar = true;
      };
      reader.readAsBinaryString(file);
    }
  }
};
</script>

<style>
</style>