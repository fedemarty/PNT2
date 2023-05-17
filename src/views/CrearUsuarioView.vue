<template>
  <ion-page >
    <ion-content >
      <h2>Crear Usuario</h2>
      <ion-input v-model="usuario.email" label="email" type="email"></ion-input>
      <ion-input v-model="usuario.passw" label="password" type="password"></ion-input>
      <ion-button @click="creacion">Crear</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton, IonInput, IonContent },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      usuario: { email: "", passw: "" },
    };
  },
  methods: {
    creacion() {
      this.usuario = { email: "", passw: "" };
      console.log("Se agrego el usuario a la BD")
      this.$router.push("/login");
  },
  },
};
</script>

<style>
</style>