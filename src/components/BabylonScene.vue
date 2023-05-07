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
    const scene = new MainScene(bjsCanvas.value);
    scene.Actions(props.tools);
    watch(props, () => {
      scene.Actions(props.tools);
    });
  }
});
</script>

<style lang="scss" scoped>
.canvas {
  width: 100vw;
  height: 100vh;
}
</style>
