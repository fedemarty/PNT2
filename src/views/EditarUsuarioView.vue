<template>
  <ion-page>
    <ion-content>
      <h2>Editar Usuario</h2>
      <ion-input v-model="usuario.name" label="Name:" type=text></ion-input>
      <ion-input v-model="usuario.email" label="Email:" type="email"></ion-input>
      <ion-input v-model="usuario.password" label="Password:" type="password"></ion-input>
      <ion-button @click="modificar(usuario.userID)">Modificar</ion-button>
      <ion-button @click="eliminar(usuario.userID)">Eliminar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import userService from "../services/userService";

export default {
  components: { IonPage, IonButton, IonInput, IonContent },
  setup() {
    const store = useLoginStore();
    const { login, logout, userLOGIN } = store;
    return { login, logout, userLOGIN };
  },
  data() {
    return {
      usuario: { name: "", email: "", password: "", userID: "" }
    };
  },
  methods: {
    async cargarDatos() {
      this.usuario = {...this.userLOGIN}
    },
    async modificar(id, user) {
      try {
        user = { ...this.usuario };
        await userService.modificar(id, user);
        alert("Datos Modificados")
      } catch (error) {
        alert(error);
      }
    },
    async eliminar(id) {
      try {
        await userService.eliminar(id)
        alert("Usuario eliminado")
        this.logout()
        this.$router.push("/");
      } catch ( error) {
          alert(error)
      }
    },
  },
  mounted() {
    this.cargarDatos();
  }
}
</script>

<style>
</style>