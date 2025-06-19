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
        received ? '' : 'bg-[#ECDFCC]'
      } w-fit max-w-2/3 h-fit rounded p-2`"
    >
      <p
        :class="`text-base font-sans ${
          received ? 'text-[#ECDFCC]' : 'text-[#181C14]'
        }`"
      >
        {{ msg }}
      </p>
    </div>
  </div>
</template>
