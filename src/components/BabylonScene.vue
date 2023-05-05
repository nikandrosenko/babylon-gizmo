<template>
  <canvas ref="bjsCanvas" class="canvas"></canvas>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "@vue/runtime-core";
import { MainScene } from "../scenes/MainScene";

const props = defineProps<{ tools: string }>();

const bjsCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(async () => {
  if (bjsCanvas.value) {
    new MainScene(bjsCanvas.value);
  }
});
</script>

<style lang="scss" scoped>
.canvas {
  width: 100vw;
  height: 100vh;
}
</style>
