<template>
  <ion-page>
    <h1>Agregar Gasto</h1>
    <ion-content>
      <ion-input label="Id:" label-placement="stacked" v-model="nuevoObjeto.id"></ion-input>
      <!-- <ion-datetime-button label="Fecha:" label-placement="stacked" v-model="nuevoObjeto.fecha" id="fechaSeleccionada"></ion-datetime-button> -->
      <ion-datetime id="fechaSeleccionada" display-format="DD/MM/YYYY" v-model="nuevoObjeto.fecha" placeholder="Seleccionar fecha" ></ion-datetime>
      <!--<ion-input label="Fecha:" label-placement="stacked" v-model="nuevoObjeto.fecha"></ion-input> -->
      <ion-input label="Descripcion:" label-placement="stacked" v-model="nuevoObjeto.name"></ion-input>
      <ion-input label="Monto:" label-placement="stacked" v-model="nuevoObjeto.monto"></ion-input>

      <ion-list >
        <ion-select  aria-label="categoria" placeholder="Seleccionar categoria">
          <ion-select-option v-for="e in ts.listaCategoria" :key="e.id" v-model="nuevoObjeto.categoria" value=e.id>{{ e.categoria }}</ion-select-option>
        </ion-select>
      </ion-list>

      <ion-button @click="agregarGasto"> Agregar a la lista </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent, IonDatetime, IonDatetimeButton, IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/vue";
import listaGastos from "../services/listaGastos"
import listaCategorias from "../services/listaCategorias"
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton, IonInput, IonContent, IonDatetimeButton, IonDatetime, IonItem, IonList, IonSelect, IonSelectOption },
  setup() {
    const store = useLoginStore();
    const { login, userLOGIN } = store;
    return { login, userLOGIN };
  },
  data() {
    return {
      listaCategoria: [],
      listaGastos: [],
      nuevoObjeto: {},
      // usuario:{}
    };
  },
  methods: {
    async cargarLista() {
      this.usuario = this.userLOGIN;
      try {
        this.listaCategoria = await listaCategorias.cargar()
      } catch (e) {
        alert(e)
      }
    },
    async agregarGasto() {
     // this.cargarLista()
      const nuevoObjeto = {
        // Propiedades del nuevo objeto a agregar
        id: this.nuevoObjeto.id,
        fecha: this.nuevoObjeto.fecha,
        name: this.nuevoObjeto.name,
        monto: this.nuevoObjeto.monto,
        categoria: this.nuevoObjeto.categoria,
        userID: this.userLOGIN.userID
        
      }
      console.log(this.listaCategoria),
      console.log(this.userLOGIN.userID),
      console.log(nuevoObjeto)
      try {
        await this.listaGastos.agregar(nuevoObjeto)
        this.$router.push('/detail')
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.cargarLista();
  }
};

</script>