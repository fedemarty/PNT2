<template>
  <ion-page >
    <ion-content >
      <h2>Login</h2>
      <ion-input v-model="usuario.email" label="Email:" type="email"></ion-input>
      <ion-input v-model="usuario.password" label="Password:" type="password"></ion-input>
      <ion-button @click="logear">Login</ion-button>
      <ion-button @click="crear">Crear Usuario</ion-button>
      {{ mensajeError }}
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
      listaUsuarios:[],
      usuario: {name:"", email:"",password:"", userID:0},
      mensajeError: ""
    };
  },
  methods: {
    async cargarLista() {
      try {
        this.listaUsuarios = await userService.cargar()
        } catch (e) {
        alert(e)
      }
    },

   async logear() {
    try{
      const miUsuario = this.listaUsuarios.find(objeto => objeto.email == this.usuario.email)
        if (miUsuario.password == this.usuario.password) {
          this.login(miUsuario)
          this.usuario = {name:"", email:"",password:"", userID:0};
          this.$router.push('/detail');
        } else {this.mensajeError = "Credenciales invalidas"}
      }catch (e) {
        alert("Credenciales invalidas")
      }
    },

    crear(){
      this.usuario = {name:"", email:"",password:"", userID:0};
      this.$router.push("/crearUsuario");
    }
  },
  mounted() {
    this.cargarLista();
  }
};
</script>

<style>
</style>