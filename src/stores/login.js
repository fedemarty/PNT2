import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, userID:0}
    },
    getters: {

    },
    actions: {
        logout() {
            this.isLogin = false
            this.user=0
        },
        login(userID) {
            this.isLogin = true
            this.user = userID
            }
    },
})
