<template>
  <q-page class="flex-center row">
    <b-tools @tool="fetchData($event)" />
    <b-scene :tools="tools" />
  </q-page>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import BScene from "src/components/BabylonScene.vue";
import BTools from "src/components/BabylonTools.vue";

const tools = ref("cursor");

const fetchData = (event: string) => {
  tools.value = event;
};
</script>
