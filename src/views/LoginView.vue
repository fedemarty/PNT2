<template>
  <ion-page >
    <ion-content >
      <h2>Login</h2>
      <ion-input v-model="usuario.email" label="Email:" type="email"></ion-input>
      <ion-input
        v-model="usuario.password"
        label="Password:"
        type="password"
      ></ion-input>
      <ion-button @click="logear">Login</ion-button>
      <ion-button @click="crear">Crear Usuario</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import usersService from '../services/usersService';

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
      usuario: {email:"",password:""},
    };
  },
  methods: {
   async logear() {
    const miusuario = await usersService.cargarUsuarioXID(this.usuario.email)
    // console.log(miusuario)
      if (
        this.usuario =  miusuario) {
       console.log(this.usuario)
         this.usuario = {userID:0, email: "", password: "" };
        this.$router.push('/detail');
      } else {
        alert("Credenciales invalidas");
      }
    },
    crear(){
      this.usuario = { email: "", password: "" };
      this.$router.push("/crearUsuario");
    }
  },
};
</script>

<style>
</style>