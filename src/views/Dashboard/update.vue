<!-- Update -->

<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Transition mode="out-in">
      <p v-if="show">hello</p>
      <p v-else>hello2</p>
    </Transition>
  </div>
  <!--  <n-h1>Update</n-h1>-->
  <!--  <n-p>You are so perfectionism, when can you have a summary version?<br>So where is the update?</n-p>-->
</template>


<script setup lang="ts">
import { ref } from "vue";

const show = ref(true)


</script>


<style>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-from {
  transform: translateX(+30px);
}

.v-leave-to {
  transform: translateX(-30px);
}
</style>
