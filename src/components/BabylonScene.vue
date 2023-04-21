<template>
  <canvas ref="bjsCanvas" width="500" height="500" />
</template>
<script setup lang="ts">
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/MyFirstScene";

const bjsCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(async () => {
  if (bjsCanvas.value) {
    await createScene(bjsCanvas.value);
  }
});
</script>
