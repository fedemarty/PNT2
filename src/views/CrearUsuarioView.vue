<template>
  <ion-page >
    <ion-content >
      <h2>Crear Usuario</h2>
      <ion-list v-for="us in lista" :key="us.id">
        {{ us.id }} {{ us.name }} {{us.email}} {{us.password}}
      </ion-list> 
      <ion-input label="id" label-placement="stacked" v-model="us.id"></ion-input>
      <ion-input v-model="us.name" label="name" type="name"></ion-input>
      <ion-input v-model="us.email" label="email" type="email"></ion-input>
      <ion-input v-model="us.password" label="password" type="password"></ion-input>
      <ion-button @click="creacion">Crear</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import userService from '../services/usersService'
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
      usuario: { name:"", email: "", passw: "", id:"" },
    };
  },
  methods: {
  async creacion() {
      try {
        const user = { ...this.usuario }
        //await axios.post("https://6464027e127ad0b8f895db50.mockapi.io/lista",user)
        await userService.agregar(user)
        // this.cargarLista()
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>