import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore('sidebarStore', () => {
    return {
        sidebarCollapsed: ref(false)
    }
})

