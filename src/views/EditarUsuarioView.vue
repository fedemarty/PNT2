<template>
  <ion-page >
    <ion-content >
      <h2>Editar Usuario</h2>
      <ion-input v-model="usuario.email" label="email" type="email"></ion-input>
      <ion-input v-model="usuario.passw" label="password" type="password"></ion-input>
      <ion-button @click="edicion">Confirmar</ion-button>
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
    edicion() {
      this.usuario = { email: usuario.email, passw: "" };
      console.log("Se edito el usuario a la BD")
      this.$router.push("/detail");
  },
  },
};
</script>

<style>
</style>