<script setup>
/*
Push
pop
slice
splice
shift
unshift
reverse
*/

import { ref, defineProps } from "vue";
const { showAlert } = defineProps(['showAlert']);
import Join from "./Join.vue";

let value = ref(new String())
let temp = ref(new String());
let size = ref(8);
let sliceStart = ref(null);
let sliceEnd  = ref(null)
let concatElements = ref(null)
let toReplace = ref(null)
let replaceWith = ref(null)

const clearInputs = () => {
  temp.value = ''
};

const slice = () => {
  console.log(sliceStart.value, sliceEnd.value)
  if (!isNaN(sliceStart.value) && !isNaN(sliceEnd.value)) {
    setValue(value.value.slice(sliceStart.value, sliceEnd.value));
    clearInputs();
    sliceStart.value = null
    sliceEnd.value = null
  }
};

const concat = () => {
  if (concatElements.value) {
    if (!concatElements.value.includes(',')) {
      setValue(value.value.concat(concatElements.value)); 
    }
    else {
      setValue(value.value.concat(...concatElements.value.split(",")));
    }
    clearInputs();
    concatElements.value = null
  }
}


  const replace = () => {
    console.log(toReplace, replaceWith)
    setValue(value.value.replace(toReplace.value, replaceWith.value))
    toReplace.value = null
    replaceWith.value = null
  }
  
  const replaceAll = () => {
    setValue(value.value.replaceAll(toReplace.value, replaceWith.value))
    toReplace.value = null
    replaceWith.value = null
  }

  const length = () => {
    showAlert(`Length of the string is ${value.value.length}.`, 'success', 5);
  }

  const setValue = (num) => {
  if (num.toString().length > 8) {
    size.value = 2
  }
  else if (num.toString().length > 4) {
    size.value = 4
  }
  else {
    size.value = 8
    
  }
    value.value = num
  clearInputs()
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
          type="text"
          placeholder="Element to push/unshift"
          v-model="temp"
        />
        <div>
          <button class="btn join-item w-full" @click="setValue(temp)">Set</button>
        </div>
      </div>
    </Join>
    <Join>
      <button class="btn join-item" @click="length">Length</button>
      <button class="btn join-item" @click="setValue(value.toUpperCase())">Upper Case</button>
      <button class="btn join-item" @click="setValue(value.toLowerCase())">Lower Case</button>
    </Join>
    <Join>
      <button class="btn join-item" @click="setValue(value.trimStart())">Trim Start</button>
      <button class="btn join-item" @click="setValue(value.trim())">Trim</button>
      <button class="btn join-item" @click="setValue(value.trimEnd())">Trim End</button>
    </Join> 
    <Join>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <input class="input w-1/2" type="number" placeholder="Start" v-model="sliceStart" />
          <input class="input w-1/2" type="number" placeholder="End" v-model="sliceEnd" />
        </div>
        <div>
          <button class="btn join-item w-full" @click="slice">Slice</button>
        </div>
      </div>
    </Join>
    <Join class="w-2/3">
      <div class="flex flex-col w-full">
        <input class="input" type="text" placeholder="Elements to concat (comma separated)" v-model="concatElements" />
        <div>
          <button class="btn join-item w-full" @click="concat">Concat</button>
        </div>
      </div>
    </Join>
    
    <Join>
      <div class="flex flex-col">
        <div class="flex">
          <input
          class="input w-1/2"
          type="text"
          placeholder="Enter text to replace"
          v-model="toReplace"
        />

          <input
          class="input w-1/2"
          type="text"
          placeholder="Replace with"
          v-model="replaceWith"
        />
        </div>
        <div>
          <button class="btn join-item w-1/2" @click="replace">Replace</button>
          <button class="btn join-item w-1/2" @click="replaceAll">Replace All</button>
        </div>
      </div>
    </Join>
  </aside>
  <div
    class="absolute top-0 left-1/3 w-2/3 flex items-center justify-center h-2/3"
  >
    <p class="text-bold" :class="`${size == 8 ? 'text-8xl' : size == 4 ? 'text-4xl' : 'text-2xl'}`">{{ value }}</p>
  
  </div>
</template>

<style>

</style>