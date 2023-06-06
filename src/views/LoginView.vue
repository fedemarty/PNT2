<template>
  <ion-page >
    <ion-content >
      <h2>Login</h2>
      <ion-input v-model="usuario.email" label="Email:" type="email"></ion-input>
      <ion-input v-model="usuario.password" label="Password:" type="password"></ion-input>
      <ion-button @click="logear">Login</ion-button>
      <ion-button @click="crear">Crear Usuario</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import userService from '../services/userService';

export default {
  components: { IonPage, IonButton, IonInput, IonContent },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  name: 'login',
  data() {
    return {
      usuario: {name:"", email:"",password:"", userID:0},
    };
  },
  methods: {
   async logear() {
    const miusuario = await userService.cargarUsuarioXID(this.usuario.email)
      if (this.usuario.email ==  miusuario.email && this.usuario.password == miusuario.password) {
        this.login(miusuario)
        this.usuario = {name:"", email:"",password:"", userID:0};
        this.$router.push('/detail');
      } else {
        alert("Credenciales invalidas");
      }
    },
    crear(){
      this.usuario = {name:"", email:"",password:"", userID:0};
      this.$router.push("/crearUsuario");
    }
  },
};
</script>

<style>
</style>