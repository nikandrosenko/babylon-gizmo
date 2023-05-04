<template>
  <q-btn-toggle
    class="tools"
    v-model="model"
    push
    glossy
    text-color="white"
    toggle-color="primary"
    :options="[
      { icon: 'las la-mouse-pointer', value: 'cursor' },
      { icon: 'las la-arrows-alt', value: 'position' },
      { icon: 'las la-redo-alt', value: 'rotate' },
      { icon: 'las la-expand-arrows-alt', value: 'scale' },
    ]"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const model = ref("one");
</script>

<style lang="scss" scoped>
.tools {
  position: absolute;
  top: 1vh;
  left: 1vw;
}
</style>
