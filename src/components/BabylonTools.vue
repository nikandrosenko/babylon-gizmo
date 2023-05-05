<template>
  <q-btn-toggle
    class="tools"
    id="toolsId"
    v-model="toolsModel"
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
    @update:model-value="toolsEmit"
  />
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
const toolsModel = ref("cursor");

const emit = defineEmits<{
  (e: "tool", value: string): void;
}>();

const toolsEmit = () => {
  emit("tool", toolsModel.value);
};
</script>

<style lang="scss" scoped>
.tools {
  position: absolute;
  top: 1vh;
  left: 1vw;
}
</style>
