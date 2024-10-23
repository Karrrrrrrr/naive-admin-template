<template>
  <div ref="domRef" class="w-full h-full"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useScriptTag } from '@vueuse/core';

const TENCENT_MAP_SDK_URL = 'https://map.qq.com/api/gljs?v=1.exp&key=' + import.meta.env.VITE_TENCENT_MAP_SECRET;
const { load } = useScriptTag(TENCENT_MAP_SDK_URL);

const domRef = ref<HTMLDivElement | null>(null);
const map = ref<TMap.Map>()
async function renderMap() {
  await load(true);
  if (!domRef.value) return;
  // eslint-disable-next-line no-new
  map.value = new TMap.Map(domRef.value as HTMLElement, {
    center: new TMap.LatLng(39.98412, 116.307484),
    zoom: 11,
    viewMode: '3D'
  });
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

