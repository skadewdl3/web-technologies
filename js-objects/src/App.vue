<script setup>
  import { ref } from 'vue'
  import Array from './components/Array.vue'
  import Date from './components/Date.vue'
  import Number from './components/Number.vue'
  import Math from './components/Math.vue'
  import String from './components/String.vue'
  import Boolean from './components/Boolean.vue'

  // icons
  import { UnorderedListOutlined, PlusOutlined, FieldStringOutlined, FieldBinaryOutlined, FieldNumberOutlined, FieldTimeOutlined  } from '@ant-design/icons-vue'


  let demoIndex = ref(4)
  let demos = [Math, String, Array, Date, Number, Boolean]
  let alert = ref(false)
  let alertType = ref('success')
  let message = ref('')
  const showAlert = (m, t = 'success', duration = 1) => {
    message.value = m
    alertType.value = t
    alert.value = true
    setTimeout(() => {
      alert.value = false
    }, duration * 1000)
  }

</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content">
      <component :is="demos[demoIndex]" :showAlert="showAlert" />  
    </div>
    <div class="btm-nav" >
    <button class="text-info" :class="{active: demoIndex == 0}" @click="demoIndex = 0">
      <PlusOutlined />
      <p>Math</p>
    </button>
    <button class="text-info" :class="{active: demoIndex == 1}" @click="demoIndex = 1">
      <FieldStringOutlined />
      <p>String</p>
    </button>
    <button class="text-info" :class="{active: demoIndex == 2}" @click="demoIndex = 2">
      <UnorderedListOutlined />
      <p>Array</p>
    </button>
    <button class="text-info" :class="{active: demoIndex == 3}"  @click="demoIndex = 3">
      <FieldTimeOutlined />
      <p>Date</p>
    </button>
    <button class="text-info" :class="{active: demoIndex == 4}"  @click="demoIndex = 4">
      <FieldNumberOutlined />
      <p>Number</p>
    </button>
    
    <button class="text-info" :class="{active: demoIndex == 5}" @click="demoIndex = 5">
      <FieldBinaryOutlined />
      <p>Boolean</p>
    </button>
  </div>
  </div>
  <div class="alert alert-success" v-if="alert && alertType == 'success'" style="position: absolute; bottom: 80px; right: 10px; width: 50%" >
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>{{ message }}</span>
  </div>

  <div class="alert alert-error" v-if="alert && alertType == 'error'" style="position: absolute; bottom: 80px; right: 10px; width: 50%" >
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>{{ message }}</span>
  </div>
</template>

<style lang="stylus"></style>