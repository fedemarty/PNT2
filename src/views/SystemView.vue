<template>
  <!-- Estoy en room 4 -->
  <ion-page>
    <h2>System</h2>
    <ion-content>
      <ion-list v-for="e in lista" :key="e.id">
        {{ e.id }} {{ e.desc }} 
      </ion-list>  
      <ion-input 
        label="id" label-placement="stacked" v-model="elemento.id"></ion-input>
      <ion-input 
        label="Descripcion" label-placement="stacked" v-model="elemento.desc"></ion-input>
      <ion-button @click="agregar"> Agregar a la lista </ion-button>
    </ion-content>  
    <ion-button @click="irahome">Ir a Home</ion-button>
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent, IonInput, IonList} from '@ionic/vue'

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
      lista: [{id:100,desc:'Silla'},{id:200,desc:'mesa'}],
      elemento: {}
    }
  },
 
}
</script>

<style>
/*
ion-button {
    --background: #93e9be;
    --background-hover: #9ce0be;
    --background-activated: #88f4be;
    --background-focused: #88f4be;

    --color: blue;

    --border-radius: 0;
    --border-color: #000;
    --border-style: solid;
    --border-width: 1px;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --ripple-color: deeppink;

    --padding-top: 10px;
    --padding-bottom: 10px;
  }
*/  
</style>