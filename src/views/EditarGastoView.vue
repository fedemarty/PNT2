<template>
    <ion-page>
      <h1>Editar Gasto</h1>
      {{ this.elemento }}
      <ion-content> 
        <ion-input label="Id:" label-placement="stacked" v-model="elemento.id"></ion-input>
        <ion-input label="Fecha:" label-placement="stacked" :value="elemento.fecha" readonly></ion-input>
        <ion-input label="Descripcion:" label-placement="stacked" v-model="elemento.name"></ion-input>
        <ion-input label="Monto:" label-placement="stacked" v-model="elemento.monto"></ion-input>
        <ion-button @click="modificar(elemento.id)"> ACEPTAR </ion-button>
        <ion-button @click="volver"> VOLVER </ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
  import { useLoginStore } from "../stores/login";
import listaGastos from '../services/listaGastos';
  
  export default {
    components: { IonPage, IonButton, IonInput, IonContent },
    setup() {
      const store = useLoginStore();
      const { login} = store;
      return { login };
    },
    data() {
      return {
        elemento: {}
      };
    },
    methods: {
      // async obtenerGasto(Id) { 
      //   const ele = { ...this.elemento }
      //   console.log(ele)
      //   return await this.listaGastos.cargarDatos(Id);
      // },
      async modificar(id, elem) {
      try {
        elem = { ...this.elemento }
        await listaGastos.modificar(id,elem)
        this.$router.push('/detail')
      } catch ( error) {
         alert(error)
      }
      },
      volver(){
        this.$router.push("/detail");
      },
      obtenerFechaActual() {
    const fechaActual = new Date().toISOString().slice(0, 10);
    this.elemento.fecha = fechaActual;
  },
    },
    mounted() {
      this.obtenerFechaActual();
      const Id =this.$route.query.Id;
    //  this.elemento= this.obtenerGasto(Id);
     console.log(Id)
},
  };
  </script>
  
  <style>
  ion-input{
      border: 1px solid #dddddd;
    }  
  </style>