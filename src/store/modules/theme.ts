import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";
import { useEnv } from "@/store/modules/env";

const useThemeStore = defineStore('userThemeStore', () => {
    return {
        isDark: useLocalStorage(useEnv().storagePrefix + 'is_dark', false)
    }
})

export {
    useThemeStore,
}
