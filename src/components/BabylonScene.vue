<template>
  <canvas ref="bjsCanvas" :width="windowW" :height="windowH"></canvas>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "@vue/runtime-core";
import { MainScene } from "../scenes/MainScene";

const props = defineProps<{ tools: string }>();

const bjsCanvas = ref<HTMLCanvasElement | null>(null);

const windowW = ref(window.innerWidth);
const windowH = ref(window.innerHeight);
window.onresize = () => {
  windowW.value = window.innerWidth;
  windowH.value = window.innerHeight;
};

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
