<template>
  <n-config-provider :theme="theme">
    <n-global-style/>
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <slot/>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { darkTheme, useOsTheme } from 'naive-ui'
import { useThemeStore } from "../store/modules/theme";

// const osTheme = useOsTheme()
const themeStore = useThemeStore()

// useTheme()

const theme = computed(() => (themeStore.isDark ? darkTheme : null))
</script>
