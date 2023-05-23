<template>
  <ion-page>
    <h1>Agregar Gasto</h1>
    <ion-content> 
      <ion-input label="Id:" label-placement="stacked" v-model="nuevoObjeto.id"></ion-input>
      <ion-input label="Fecha:" label-placement="stacked" v-model="nuevoObjeto.fecha"></ion-input>
      <ion-input label="Descripcion:" label-placement="stacked" v-model="nuevoObjeto.name"></ion-input>
      <ion-input label="Monto:" label-placement="stacked" v-model="nuevoObjeto.monto"></ion-input>
      <ion-button @click="agregarObjeto"> Agregar a la lista </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';
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
      listaGastos: [],
      nuevoObjeto: {},
    };
  },
  methods: {
    agregarObjeto() {
      const nuevoObjeto = {
        // Propiedades del nuevo objeto a agregar
        id: this.nuevoObjeto.id,
        fecha: this.nuevoObjeto.fecha,  
        name: this.nuevoObjeto.name,  
        monto: this.nuevoObjeto.monto,
      };

      axios.post('https://6464028c043c103502b0bf69.mockapi.io/gastos', nuevoObjeto)
        .then(response => {
          // Manejar la respuesta si es necesario
          this.listaGastos.push(response.data);
          this.$router.push('/detail')
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};

</script>