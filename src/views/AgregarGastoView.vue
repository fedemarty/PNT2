<template>
  <ion-page>
    <h1>Agregar Gasto</h1>
    <ion-content>
      <ion-input label="Id:" label-placement="stacked" v-model="nuevoObjeto.id"></ion-input>
      <ion-datetime-button label="Fecha:" label-placement="stacked" v-model="nuevoObjeto.fecha"></ion-datetime-button>
      <ion-datetime></ion-datetime>
      <!--<ion-input label="Fecha:" label-placement="stacked" v-model="nuevoObjeto.fecha"></ion-input> -->
      <ion-input label="Descripcion:" label-placement="stacked" v-model="nuevoObjeto.name"></ion-input>
      <ion-input label="Monto:" label-placement="stacked" v-model="nuevoObjeto.monto"></ion-input>
      <ion-button @click="agregar"> Agregar a la lista </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent,IonDatetime, IonDatetimeButton } from "@ionic/vue";
import listaGastos from "../services/listaGastos"
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton, IonInput, IonContent, IonDatetimeButton, IonDatetime },
  setup() {
   
  },
  data() {
    return {
      listaGastos: [],
      nuevoObjeto: {},
    };
  },
  methods: {
      async agregar() {
        const nuevoObjeto = {
        // Propiedades del nuevo objeto a agregar
        id: this.nuevoObjeto.id,
        fecha: this.nuevoObjeto.fecha,
        name: this.nuevoObjeto.name,
        monto: this.nuevoObjeto.monto,
        userID:this.userID

      }
        try {
          await listaGastos.agregar(nuevoObjeto)
          this.$router.push('/detail')
        } catch (error) {
          console.log(error);
        }
      }
   }};
    
</script>