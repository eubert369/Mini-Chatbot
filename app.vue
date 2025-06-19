<script setup lang="ts">
import { ref } from "vue";
import chatComponent from "./components/ChatComponent.vue";

export interface chatTypes {
  msg: string;
  received: boolean;
}

const chats = ref<chatTypes[]>([
  {
    msg: "Help me write an essay about the pros and cons of AI",
    received: false,
  },
  {
    msg: "Eligendi consectetur aut placeat ullam ea. Voluptas praesentium  beatae nihil facilis voluptatem ab facilis. Eos voluptas commodi unde  atque possimus. Maxime reprehenderit ea vitae itaque eos quo. Blanditiis optio neque voluptas. Adipisci placeat magni  occaecati quas et nobis laboriosam. Assumenda atque alias nihil  sapiente. Et ut similique repellat exercitationem minus velit tempora. Et et eius eos. Est magnam optio sed ad. Et cum culpa molestiae fugit ut corporis. Deserunt occaecati officiis in dicta cupiditate enim tempora ea. Praesentium enim nam sint qui facere voluptatibus. Quaerat a  ipsum autem. Consequatur dolorem voluptatem et dolorem sit debitis. Et  possimus reiciendis inventore error quia ea hic. Quia rerum ullam est  eum. Velit doloribus alias doloremque nostrum facere aut.'",
    received: true,
  },
  {
    msg: "Eligendi consectetur aut placeat ullam ea. Voluptas praesentium  beatae nihil facilis voluptatem ab facilis. Eos voluptas commodi unde  atque possimus. Maxime reprehenderit ea vitae itaque eos quo. Blanditiis optio neque voluptas. Adipisci placeat magni  occaecati quas et nobis laboriosam. Assumenda atque alias nihil  sapiente. Et ut similique repellat exercitationem minus velit tempora. Et et eius eos. Est magnam optio sed ad. Et cum culpa molestiae fugit ut corporis. Deserunt occaecati officiis in dicta cupiditate enim tempora ea. Praesentium enim nam sint qui facere voluptatibus. Quaerat a  ipsum autem. Consequatur dolorem voluptatem et dolorem sit debitis. Et  possimus reiciendis inventore error quia ea hic. Quia rerum ullam est  eum. Velit doloribus alias doloremque nostrum facere aut.'",
    received: false,
  },
]);
</script>
<template>
  <div class="bg-[#181C14] w-full h-screen">
    <div class="w-full md:w-1/2 h-full mx-auto py-4 flex flex-col gap-2">
      <div
        :class="`w-full h-full py-8 px-3 flex flex-col gap-4 ${
          chats.length > 0 ? '' : 'justify-center'
        } overflow-y-auto`"
      >
        <ChatComponent
          v-if="chats.length > 0"
          v-for="(chat, id) in chats"
          :key="id"
          :received="chat.received"
          :msg="chat.msg"
        />
        <div v-else class="w-full h-fit flex flex-col">
          <h1 class="font-sans font-bold text-[#ECDFCC] text-4xl">
            Hello there!
          </h1>
          <p class="text-[#71717A] font-sans text-2xl">
            How can I help you today?
          </p>
        </div>
      </div>

      <div
        class="w-full h-fit flex flex-col gap-1 border border-[#ECDFCC] rounded-[20px]"
      >
        <textarea
          class="w-full h-fit p-4 font-sans text-base text-[#ECDFCC] focus:outline-none resize-none"
          placeholder="Send a message"
          rows="2"
        />
        <div class="w-full h-fit px-4 py-2 flex items-center justify-end">
          <button
            type="button"
            class="bg-[#ECDFCC] w-fit rounded-full h-fit p-2 cursor-pointer"
          >
            <img class="w-4 h-4" src="assets/img/send.svg" alt="send icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
