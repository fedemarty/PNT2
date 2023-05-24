import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false }
    },
    getters: {

    },
    actions: {
        logout() {
            this.isLogin = false
        },
        login() {
            this.isLogin = true
        }
    },
})
