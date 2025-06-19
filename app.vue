<script setup lang="ts">
import { ref } from "vue";
import ChatComponent from "./components/ChatComponent.vue";
import { marked } from "marked";

export interface chatTypes {
  msg: string;
  received: boolean;
}

interface APIResponse {
  timestamp: string;
  response: string;
}

const currentChat = ref<string>("");

const chats = ref<chatTypes[]>([]);

const submitChat = async () => {
  chats.value = [...chats.value, { msg: currentChat.value, received: false }];
  try {
    const req = await useFetch<APIResponse>("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messageContent: currentChat.value,
      }),
    });

    if (req.data.value && req.status.value == "success") {
      console.log("data:", req.data.value.response);
      chats.value = [
        ...chats.value,
        { msg: `${marked.parse(req.data.value.response)}`, received: true },
      ];
    }
  } catch (error) {
    console.error(error);
  }
};
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

      <form
        @submit.prevent="submitChat"
        class="w-full h-fit flex flex-col gap-1 border border-[#ECDFCC] rounded-[20px]"
      >
        <textarea
          class="w-full h-fit p-4 font-sans text-base text-[#ECDFCC] focus:outline-none resize-none"
          v-model="currentChat"
          placeholder="Send a message"
          rows="2"
        />
        <div class="w-full h-fit px-4 py-2 flex items-center justify-end">
          <button
            type="submit"
            class="bg-[#ECDFCC] w-fit rounded-full h-fit p-2 cursor-pointer"
          >
            <img class="w-4 h-4" src="assets/img/send.svg" alt="send icon" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
