<script setup>
  import { ref, defineProps } from 'vue';
  import Join from './Join.vue'
  const {showAlert} = defineProps(['showAlert']) 

  let value = ref(new Number(0))
  let prec = ref('')
  let temp = ref('');

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
    value.value = num.toString()
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
          <button class="btn join-item w-full" @click="set">Set</button>
        </div>
      </div>
    </Join>
    <Join>
          <button class="btn join-item w-1/3" @click="setValue(Number.parseInt(value))">Parse Int</button>
        <button class="btn join-item w-1/3" @click="setValue(Number.parseFloat(value))">Parse Float</button>
        <button class="btn join-item w-1/3" @click="setValue(parseFloat(value).toExponential())">To Exponential</button>
    </Join>
  
    
     <Join>
      <div class="flex flex-col">
        <input
          class="input"
          type="number"
          placeholder="Enter No of digits"
          v-model="prec"
        />
        <div class="flex items-center justify-center">
          <button class="btn join-item w-1/2" @click="setValue(parseFloat(value).toPrecision(1))">To Precision</button>
          <button class="btn join-item w-1/2" @click="setValue(parseFloat(value).toFixed(prec))">To Fixed</button>
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