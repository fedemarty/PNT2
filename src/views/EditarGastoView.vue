<template>
    <ion-page>
      <h1>Editar Gasto</h1>
      <ion-content> 
        <ion-input label="Fecha:" label-placement="stacked" :value="elemento.fecha" readonly></ion-input>
        <ion-input label="Descripcion:" label-placement="stacked" v-model="elemento.name"></ion-input>
        <ion-input label="Monto:" label-placement="stacked" v-model="elemento.monto"></ion-input>
        <ion-button @click="modificar(elemento.id)"> ACEPTAR </ion-button>
        <ion-button @click="volver"> VOLVER </ion-button>
      </ion-content>
      {{elemento }}
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
        elemento: {},
        gastos:[]
      };
    },
    methods: {
      async obtenerGasto(id) {
      try {
        this.elemento = await listaGastos.cargarDatos(id);
        console.log(this.elemento)
      } catch (error) {
        alert(error)
      }
  },
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
  },
    },
    mounted() {
      const Id =this.$route.params.id;
      this.obtenerGasto(Id);
},
  };
  </script>
  
  <style>
  ion-input{
      border: 1px solid #dddddd;
    }  
  </style>