<template>
  <ion-page>
    <ion-content>
      <h2>Editar Usuario</h2>
       <!-- <ion-list v-for="u in usuario" :key="u.id">
        {{ u.id }} {{ u.name }} {{ u.email }} {{ u.passw }} 
      </ion-list>  -->
      <ion-input v-model="name" label="Name:" type="name"></ion-input>
      <ion-input v-model="email" label="Email:" type="email"></ion-input>
      <ion-input v-model="passw" label="Password:" type="password"></ion-input>
      <ion-button @click="modificar">Modificar</ion-button>
      <ion-button @click="eliminar">Eliminar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import userService from "../services/usersService";

export default {
  components: { IonPage, IonButton, IonInput, IonContent },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      usuario: { name: "", email: "", passw: "", id: "" },
    };
  },
  methods: {
    async modificar(id) {
      try {
        const user = { ...this.usuario.id };
        await userService.modificar(id, user);
        alert("Datos Modificados")
      } catch (error) {
        alert(error);
      }
    },
    async eliminar(id) {
      try {
        await usersService.eliminar(id)
        alert("Usuario eliminado")
      } catch ( error) {
          alert(error)
      }
  },
},
}
</script>

<style>
</style>