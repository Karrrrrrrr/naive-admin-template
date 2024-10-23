<template>
  <n-layout-content content-style="padding: 24px; height: 100%" style="height: 100%">
    <router-view v-slot="{ Component, route }">
      <transition
          mode="out-in"
          :appear="true"
          name="fade"
      >
        <div :key="route.fullPath" style="height: 100%">
          <n-scrollbar
              content-style="height:100%"
              style="height:100%;"
          >
            <component :is="Component"/>
          </n-scrollbar>
        </div>
      </transition>
    </router-view>
  </n-layout-content>
</template>


<style>
/* fade */
/* 下面我们会解释这些 class 是做什么的 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateX(+30px);
}

.fade-leave-to {
  transform: translateX(-30px);
}
</style>
<script setup lang="ts">
</script>
