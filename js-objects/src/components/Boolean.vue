<script setup>

import { ref, defineProps } from "vue";
const { showAlert } = defineProps(['showAlert']);
import Join from "./Join.vue";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons-vue";

let value = ref(new Boolean(true))
let num = ref('')
let str = ref('');


const setValue = (val) => {
  value.value = Boolean(val)
  str.value = ''
  num.value = ''
} 
</script>

<template>
 <aside
    class="absolute top-0 left-0 w-1/3 flex items-center flex-col"
  >
    <Join>
      <div class="flex flex-col">
        <input
          class="input"
          type="number"
          placeholder="Number to boolean"
          v-model="num"
        />
          <button class="btn join-item w-full" @click="setValue(parseFloat(num))">Set</button>
      </div>
    </Join>
    
    <Join>
      <div class="flex flex-col">
        <input
          class="input"
          type="text"
          placeholder="String to boolean"
          v-model="str"
        />
          <button class="btn join-item w-full" @click="setValue(str.toString())">Set</button>
      </div>
    </Join>
    <Join>
      <div class="flex flex-roww w-full items-center justify-center">
      <CheckCircleOutlined @click="setValue(true)" class="join-item text-4xl p-4 cursor-pointer hover:bg-[#15191e]" />
      <CloseCircleOutlined  @click="setValue(false)" class="join-item text-4xl p-4 cursor-pointer hover:bg-[#15191e]" />
        </div>
    </Join>

  </aside>
  <div
    class="absolute top-0 left-1/3 w-2/3 flex items-center justify-center h-2/3"
  >
    <CheckCircleOutlined class="text-[200px]" v-if="value" />
    <CloseCircleOutlined class="text-[200px]" v-else />
  </div>
</template>

<style>

</style>