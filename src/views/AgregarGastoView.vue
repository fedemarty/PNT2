<template>
  <ion-page>
    <h1>Agregar Gasto</h1>
    <ion-content>
      <ion-datetime id="fechaSeleccionada" display-format="DD/MM/YYYY" v-model="nuevoObjeto.fecha" placeholder="Seleccionar fecha" ></ion-datetime>
      <ion-input label="Descripcion:" label-placement="stacked" v-model="nuevoObjeto.name"></ion-input>
      <ion-input label="Monto:" label-placement="stacked" v-model="nuevoObjeto.monto"></ion-input>

          <ion-select aria-label="Categoria" v-model="nuevoObjeto.cat" placeholder="Seleccionar categoria">
          <ion-select-option v-for="c in listasCategorias" :key="c.id" :value="c.categoria">{{ c.categoria }}</ion-select-option>
          </ion-select>

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
      listasCategorias: [],
      listasGastos: [],
      nuevoObjeto: {},
    };
  },
  methods: {
    async cargarLista() {
      try {
        this.usuario = this.userLOGIN;
        this.listasGastos = await listaGastos.cargar();
        this.listasCategorias = await listaCategorias.cargar()
      } catch (e) {
        alert(e)
      }
    },
    async agregarGasto() {
      const nuevoObjeto = {
        // Propiedades del nuevo objeto a agregar
        id: this.nuevoObjeto.id,
        fecha: this.nuevoObjeto.fecha,
        name: this.nuevoObjeto.name,
        monto: this.nuevoObjeto.monto,
        cat: this.nuevoObjeto.cat,
        userID: this.userLOGIN.userID
        
      }
      try {
        await listaGastos.agregar(nuevoObjeto)
        this.cargarLista()
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