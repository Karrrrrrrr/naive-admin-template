import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore('userStore', () => {
    return {
        name: ref('')
    }
})


export {
    useUserStore,
}
