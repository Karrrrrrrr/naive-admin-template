<template>
  <div ref="domRef" class="w-full h-full"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useScriptTag } from '@vueuse/core';

const BAIDU_MAP_SDK_URL = `https://api.map.baidu.com/getscript?v=3.0&ak=${import.meta.env.VITE_BAIDU_MAP_SECRET}&services=&t=20210201100830&s=1`;

// defineOptions({ name: 'BaiduMap' });

const { load } = useScriptTag(BAIDU_MAP_SDK_URL);

const domRef = ref<HTMLDivElement>();
const map = ref<BMap.Map>()

async function renderMap() {
  await load(true);
  if (!domRef.value) return;
  map.value = new BMap.Map(domRef.value);
  const point = new BMap.Point(39.5500194, -123.438353);
  map.value.centerAndZoom(point, 15);
  map.value.enableScrollWheelZoom();
}

onMounted(() => {
  renderMap();
});
</script>

<style scoped>
.w-full {
  width: 1000px;
}

.h-full {
  height: 800px;
}
</style>
