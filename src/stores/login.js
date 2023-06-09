import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, userLOGIN:{userID:0,name:"",email:"",password:""}}
    },
    getters: {
        
    },
    actions: {
        logout() {
            this.isLogin = false
            this.userLOGIN = {}
        },
        login(userLOGIN) {
            this.isLogin = true
            this.userLOGIN = userLOGIN
            }
    },
})
