<template>
  <n-layout has-sider>
    <sidebar/>
    <n-layout content-style="display: flex;flex-direction: column;height: 100vh;overflow: hidden;">
      <Header/>
      <n-scrollbar style="flex: 1" content-style="height:100%">
        <Content/>
      </n-scrollbar>
      <Footer/>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import Sidebar from './sidebar.vue'
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'
// workbench
</script>
