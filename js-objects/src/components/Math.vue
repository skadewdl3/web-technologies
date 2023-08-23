<script setup>
  import { ref, defineProps } from 'vue';
  import Join from './Join.vue'
  const {showAlert} = defineProps(['showAlert']) 

  let value = ref(new Number(0))

  let temp = ref('');
  let pow = ref('');

  const nthPower = () => {
    setValue(Math.pow(value.value, pow.value))
  }
  
  const nthRoot = () => {
    setValue(Math.pow(value.value, 1 / pow.value))
  }

  let size = ref(8)

  const clearInputs = () => {
    temp.value = ''
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

  const set = () => {
    setValue(temp.value)
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
          placeholder="Enter number to set"
          v-model="temp"
        />
        <div>
          <button class="btn join-item w-1/2" @click="set">Set</button>
          <button class="btn join-item w-1/2" @click="setValue(Math.random())">Random</button>
        </div>
      </div>
    </Join>
    <Join>
      <button class="btn join-item" @click="setValue(Math.ceil(value))">Ceil</button>
      <button class="btn join-item" @click="setValue(Math.floor(value))">Floor</button>
      <button class="btn join-item" @click="setValue(Math.round(value))">Round</button>
    </Join>
    
    <Join>
      <button class="btn join-item" @click="setValue(Math.sin(value))">sin</button>
      <button class="btn join-item" @click="setValue(Math.cos(value))">cos</button>
      <button class="btn join-item" @click="setValue(Math.tan(value))">tan</button>
    </Join>
    
    <Join>
      <button class="btn join-item" @click="setValue(Math.asin(value))">asin</button>
      <button class="btn join-item" @click="setValue(Math.acos(value))">acos</button>
      <button class="btn join-item" @click="setValue(Math.atan(value))">atan</button>
    </Join>
     <Join>
      <div class="flex flex-col">
        <input
          class="input"
          type="number"
          placeholder="Enter n"
          v-model="pow"
        />
        <div>
          <button class="btn join-item w-1/2" @click="nthPower">nth Power</button>
          <button class="btn join-item w-1/2" @click="nthRoot">nth Root</button>
        </div>
      </div>
    </Join>
    

    <Join>
      <button class="btn join-item" @click="setValue(Math.log10(value))">log_10</button>
      <button class="btn join-item" @click="setValue(Math.log2(value))">log_2</button>
      <button class="btn join-item" @click="setValue(Math.log(value))">log_e</button>
    </Join>

    <Join>
      <button class="btn join-item" @click="setValue(Math.log2(value))">log_2</button>
      <button class="btn join-item" @click="setValue(Math.log(value))">log_e</button>
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