<script setup lang="ts">
import { type chatTypes } from "~/app.vue";
defineProps<chatTypes>();
</script>
<template>
  <div
    :class="`w-full h-fit flex items-center ${
      received ? 'justify-start' : 'justify-end'
    }`"
  >
    <div
      :class="`${
        received ? 'text-[#ECDFCC]' : 'bg-[#ECDFCC] text-[#181C14'
      } w-fit max-w-[80%] h-fit rounded p-2 text-base font-sans`"
      v-html="msg"
    ></div>
  </div>
</template>
