<template>
  <ion-page>
    <h1>Agregar Gasto</h1>
    <ion-content> 
      <ion-input label="Id:" label-placement="stacked" v-model="elemento.id"></ion-input>
      <ion-input label="Fecha:" label-placement="stacked" v-model="elemento.fecha"></ion-input>
      <ion-input label="Descripcion:" label-placement="stacked" v-model="elemento.desc"></ion-input>
      <ion-input label="Monto:" label-placement="stacked" v-model="elemento.monto"></ion-input>
      <ion-button @click="agregar"> Agregar a la lista </ion-button>
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
      elemento: {},
    };
  },
  methods: {
    agregar() {
      console.log("Se agrego el gasto en la lista")
      this.$router.push("/detail");
  },
  

  },
};
</script>

<style>
ion-input{
    border: 1px solid #dddddd;
  }  
</style>
