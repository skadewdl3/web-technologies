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
import Join from "./Join.vue";

let array = ref(new Array("Element 1", "Element 2", "ELement 3"));
let pushUnshift = ref(null);
let spliceStart = ref(null);
let spliceDeleteCount = ref(null);
let spliceElementsToAdd = ref(null);
let sliceStart = ref(null);
let sliceEnd  = ref(null)
let concatElements = ref(null)

const clearInputs = () => {
  pushUnshift.value = null;
  spliceStart.value = null;
  spliceDeleteCount.value = null;
  spliceElementsToAdd.value = null;
};

const push = () => {
  array.value.push(pushUnshift.value);
  clearInputs();
};
const pop = () => {
  array.value.pop()
  clearInputs();
};
const slice = () => {
  if (sliceStart.value && sliceEnd.value) {
    console.log(array.value.slice(sliceStart.value, sliceEnd.value))
    clearInputs();
  }
};
const splice = () => {
  console.log(spliceElementsToAdd.value)
  if (spliceElementsToAdd.value) {
    if (!spliceElementsToAdd.value.includes(',')) {
      array.value.splice(spliceStart.value, spliceDeleteCount.value, spliceElementsToAdd.value); 
    }
    else {
      array.value.splice(spliceStart.value, spliceDeleteCount.value , ...spliceElementsToAdd.value.split(","));
    }
  }
  else {
    array.value.splice(spliceStart.value, spliceDeleteCount.value);
  }
  clearInputs();
};

const concat = () => {
  if (concatElements.value) {
    if (!concatElements.value.includes(',')) {
      array.value = array.value.concat(concatElements.value); 
    }
    else {
      array.value = array.value.concat(concatElements.value.split(","));
    }
    clearInputs();
  }
}

const sort = () => {
  array.value = array.value.sort();
  clearInputs();
};

const shift = () => {
  array.value.shift()
  clearInputs();
};
const unshift = () => {
  array.value.unshift(pushUnshift.value);
  clearInputs();
};
const reverse = () => {
  array.value = array.value.reverse();
  clearInputs();
};
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
          v-model="pushUnshift"
        />
        <div>
          <button class="btn join-item w-1/2" @click="push">Push</button>
          <button class="btn join-item w-1/2" @click="unshift">Unshift</button>
        </div>
      </div>
    </Join>
    <Join>
      <button class="btn join-item" @click="pop">Pop</button>
      <button class="btn join-item" @click="shift">Shift</button>
    </Join>
    <Join>
      <button class="btn join-item" @click="reverse">Reverse</button>
      <button class="btn join-item" @click="sort">Sort</button>
    </Join>
    <Join>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <input class="input w-1/2" type="number" placeholder="Start" v-model="spliceStart" />
          <input class="input w-1/2" type="number" placeholder="Delete count" v-model="spliceDeleteCount" />
        </div>
        <input
          class="input"
          type="text"
          placeholder="Elements to add (separate by comma)"
          v-model="spliceElementsToAdd"
        />
        <div>
          <button class="btn join-item w-full" @click="splice">Splice</button>
        </div>
      </div>
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
  </aside>
  <div
    class="absolute top-0 left-1/3 w-2/3 flex items-center justify-center h-2/3"
  >
    <ul class="menu bg-base-200 rounded-box text-xl">
      <li v-for="(item, index) in array" :key="index">
        <a>{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<style></style>
