<template>
    <ion-page>
        <h1>Agregar Categoría</h1>
        <ion-content>
            <ion-input label="Categoría:" label-placement="stacked" v-model="nuevoObjeto.categoria"></ion-input>
            <ion-button @click="agregar"> Agregar Categoría </ion-button>
        </ion-content>
    </ion-page>
</template>
  
<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import listaCategorias from "../services/listaCategorias"


export default {
    components: { IonPage, IonButton, IonInput, IonContent },
    setup() {
        const store = useLoginStore();
        const { login } = store;
        return { login };
    },
    data() {
    return {
      listasCategoria: [],
      nuevoObjeto: {},
    };
  },
  methods: {
      async agregar() {
        const nuevoObjeto = {
        // Propiedades del nuevo objeto a agregar
        id: this.nuevoObjeto.id,
        categoria: this.nuevoObjeto.categoria,

      }
        try {
          await listaCategorias.agregar(nuevoObjeto)
          this.$router.push('/categoria')
        } catch (error) {
          console.log(error);
        }
      }
   }};
</script>
  
<style>
ion-input {
    border: 1px solid #dddddd;
}
</style>
  