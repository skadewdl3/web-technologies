<script setup>

import { ref, defineProps, onUnmounted, computed, toRaw } from "vue";
import Join from "./Join.vue";
const { showAlert } = defineProps(['showAlert']);
let date = ref(new Date())

let weekday = ref(date.value.getDay())
let day = ref(date.value.getDate())
let month = ref(date.value.getMonth())
let year = ref(date.value.getFullYear())
let hours = ref(date.value.getHours())
let mins = ref(date.value.getMinutes())
let secs = ref(date.value.getSeconds())
let datePicker = ref(null)
let datePickerContainer = ref(null)
let datePickerInput = ref()

let secondsInput = ref('')
let minutesInput = ref('')
let hoursInput = ref('')
let daysInput = ref('')
let monthsInput = ref('')
let yearsInput = ref('')
let timeInput = ref('')
let dateInput = ref('')
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


let interval = setInterval(() => {
  date.value.setSeconds(date.value.getSeconds() + 1)
  weekday.value = date.value.getDay()
  day.value = date.value.getDate()
  month.value = date.value.getMonth()
  year.value = date.value.getFullYear()
  hours.value = date.value.getHours()
  mins.value = date.value.getMinutes()
  secs.value = date.value.getSeconds()
}, 1000)

const openDatePicker = () => {
  if (datePicker.value && datePickerContainer.value) {
    datePickerContainer.value.style.opacity = '1'
   datePicker.value.openMenu()    
  }
}

const setDate = () => {
  date.value = new Date(datePickerInput.value)
  weekday.value = date.value.getDay()
  day.value = date.value.getDate()
  month.value = date.value.getMonth()
  year.value = date.value.getFullYear()
  hours.value = date.value.getHours()
  mins.value = date.value.getMinutes()
  secs.value = date.value.getSeconds()
}

console.log(date.value)

onUnmounted(() => {
  clearInterval(interval)
})

</script>

<template>
  <aside
    class="absolute top-0 left-0 w-1/3 flex items-center flex-col"
  >
    
    <Join class="w-2/3">
      <div class="flex flex-col w-full">
        <input class="input" type="number" placeholder="Set Date" v-model="dateInput" />
        <div>
          <button class="btn join-item w-full" @click="date.setDate(parseInt(dateInput))">Set Date</button>
        </div>
      </div>
    </Join>
    <Join class="w-2/3">
      <div class="flex flex-col items-center w-full">
        <div class="flex flex-row items-center justify-center w-full">
          
          <button @click="date.setMonth(0)" class="btn w-1/4 join-item">Jan</button>
          <button @click="date.setMonth(1)" class="btn w-1/4 join-item">Feb</button>
          <button @click="date.setMonth(2)" class="btn w-1/4 join-item">Mar</button>
          <button @click="date.setMonth(3)" class="btn w-1/4 join-item">Apr</button>
          </div>
        <div class="flex flex-row items-center justify-center w-full">
          
          <button @click="date.setMonth(4)" class="btn w-1/4 join-item">May</button>
          <button  @click="date.setMonth(5)" class="btn w-1/4 join-item">Jun</button>
          <button @click="date.setMonth(6)" class="btn w-1/4 join-item">Jul</button>
        <button @click="date.setMonth(7)" class="btn w-1/4 join-item">Aug</button>
          </div>
        <div class="flex flex-row items-center justify-center w-full">
          
          <button @click="date.setMonth(8)" class="btn w-1/4 join-item">Sep</button>
          <button @click="date.setMonth(9)" class="btn w-1/4 join-item">Oct</button>
          <button  @click="date.setMonth(10)" class="btn w-1/4 join-item">Now</button>
          <button @click="date.setMonth(11)" class="btn w-1/4 join-item">Dec</button>
          </div>
        </div>
    </Join>
    <Join class="w-2/3">
      <div class="flex flex-col w-full">
        <input class="input" type="number" placeholder="Set Year" v-model="yearsInput" />
        <div>
          <button class="btn join-item w-full" @click="parseInt(yearsInput) >= 1970 ? date.setFullYear(parseInt(yearsInput)): date.setFullYear(1970)">Set Year</button>
        </div>
      </div>
    </Join>
    <Join class="w-2/3">
      <div class="flex flex-col w-full">
        <input class="input" type="number" placeholder="Set Seconds" v-model="secondsInput" />
        <div>
          <button class="btn join-item w-full" @click="date.setSeconds((secondsInput - 1) <= 59 && (secondsInput - 1) > 0 ? secondsInput - 1 : -1)">Set Seconds</button>
        </div>
      </div>
    </Join>
    <Join>
      <div class="flex flex-col p-2 relative w-full">
        <div class="opacity-0" ref="datePickerContainer">
          <VueDatePicker v-model="datePickerInput" @update:model-value="setDate" ref="datePicker"/>
        </div>
        <button class="btn absolute w-full top-0 left-0" @click="openDatePicker">Open Date Picker</button>
        </div>
    </Join>
  </aside>
  <div
    class="absolute top-0 left-1/3 w-2/3 flex items-center justify-center h-2/3 flex-col"
  >
  
    <Join>
      <div class="join-item p-4 flex flex-col items-center justify-between mx-2">
        <p class="text-6xl">{{ day }}</p>
        <p class="text-sm">{{ week[weekday] }}</p>
      </div>
      <div class="join-item p-4 flex flex-col items-center justify-between mx-2">
        <p class="text-6xl">{{ month + 1 }}</p>
        <p class="text-sm">{{ months[month] }}</p>
      </div>
      <div class="join-item p-4 flex flex-col items-center justify-between mx-2">
        <p class="text-6xl">{{ year }}</p>
      </div>
    </Join>
    <Join>
      <div class="join-item p-4 flex flex-col items-center justify-between mx-2">
        <p class="text-6xl">{{ hours % 12 }}</p>
        <p class="text-sm">Hours</p>
      </div>
      
      <div class="join-item p-4 flex flex-col items-center justify-between mx-2">
        <p class="text-6xl">{{ mins }}</p>
        <p class="text-sm">Minutes</p>
      </div>
      <div class="join-item p-4 flex flex-col items-center justify-between mx-2">
        <p class="text-6xl">{{ secs }}</p>
        <p class="text-sm">Seconds</p>
      </div>
      <div class="join-item p-4 flex flex-col items-center justify-center mx-2">
        <p class="text-3xl">{{ hours < 12 ? 'AM' : 'PM' }}</p>
      </div>
    </Join>
  
  </div>
</template>

<style>

</style>