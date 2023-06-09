<template>
    <ion-page>
      <h1>Editar Categoría</h1>
      <ion-content> 
        <!-- <ion-input label="Id:" label-placement="stacked" v-model="elemento.id"></ion-input> -->
        <ion-input label="Categoria:" label-placement="stacked" v-model="elemento.categoria"></ion-input>
        <ion-button @click="modificar(elemento.id)"> ACEPTAR </ion-button>
        <ion-button @click="volver"> VOLVER </ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
  import { useLoginStore } from "../stores/login";
  import listaCategorias from '../services/listaCategorias';
  
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
      async obtenerCategoria(id) {
      try {
        this.elemento = await listaCategorias.cargarDatos(id);
        console.log(this.elemento)
      } catch (error) {
        alert(error)
      }
    },
      async modificar(id) {
      try {
        const elem = { ...this.elemento }
        await listaCategorias.modificar(id,elem)
        this.$router.push('/categoria')
      } catch ( error) {
         alert(error)
      }
      },
      volver(){
        this.$router.push("/categoria");
      },
      obtenerFechaActual() {
    const fechaActual = new Date().toISOString().slice(0, 10);
    this.elemento.fecha = fechaActual;
  },
    },
    mounted() {
      const Id =this.$route.params.id;
      console.log(Id)
      this.obtenerCategoria(Id);
},
  };
  </script>
  
  <style>
  ion-input{
      border: 1px solid #dddddd;
    }  
  </style>