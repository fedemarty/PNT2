<template>
  <ion-page >
    <ion-content >
      <h2>Crear Usuario</h2>
      <ion-input v-model="usuario.name" label="Name:" type="name"></ion-input>
      <ion-input v-model="usuario.email" label="Email:" type="email"></ion-input>
      <ion-input v-model="usuario.password" label="Password:" type="password"></ion-input>
      <ion-button @click="creacion">Crear</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import userService from '../services/userService'
import { useCssVars } from 'vue';

export default {
  components: { IonPage, IonButton, IonInput, IonContent },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      usuario: {},
    };
  },
  methods: {
  async creacion() {
      try {
        const user = { ...this.usuario }
        await userService.agregar(user)
        this.$router.push("/login")
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>