<template>
  <canvas ref="bjsCanvas" class="canvas"></canvas>
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

<style lang="scss" scoped>
.canvas {
  width: 100vw;
  height: 100vh;
}
</style>
