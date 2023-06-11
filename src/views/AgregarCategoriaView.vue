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
      listasCategorias: [],
      nuevoObjeto: {},
    };
  },
  methods: {
    async cargarLista() {
      try {
        this.usuario = this.userLOGIN;
        this.listasCategorias = await listaCategorias.cargar()
      } catch (e) {
        alert(e)
      }
    },
      async agregar() {
        const nuevoObjeto = {
        id: this.nuevoObjeto.id,
        categoria: this.nuevoObjeto.categoria
      }
        try {
          await listaCategorias.agregar(nuevoObjeto)
          this.cargarLista()
          this.$router.push('/categoria')
        } catch (error) {
          console.log(error);
        }
      }
    //   async agregarGasto() {
    //   const nuevoObjeto = {
    //     id: this.nuevoObjeto.id,
    //     fecha: this.nuevoObjeto.fecha,
    //     name: this.nuevoObjeto.name,
    //     monto: this.nuevoObjeto.monto,
    //     cat: this.nuevoObjeto.cat,
    //     userID: this.userLOGIN.userID
    //   }
    //   console.log(this.listasGastos),
    //   console.log(this.listasCategorias),
    //   console.log(this.userLOGIN),
    //   console.log(nuevoObjeto)
    //   try {
    //     await listaGastos.agregar(nuevoObjeto)
    //     this.cargarLista()
    //     this.$router.push('/detail')
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }  
  },
  mounted() {
    this.cargarLista();
  }
};
</script>
  
<style>
ion-input {
    border: 1px solid #dddddd;
}
</style>
  