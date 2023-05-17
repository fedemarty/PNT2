<template >
  <ion-page> 
    <h1>Detalle de gastos</h1>
    <ion-content >
       <ion-grid>
        <ion-row style="background-color: #0775c4;">
          <ion-col size-sm="2">
            <h2>Fecha</h2>
          </ion-col>
          <ion-col size-sm="2">
            <h2>Descripcion</h2>
          </ion-col>
          <ion-col size-sm="2">
            <h2>Monto</h2>
          </ion-col>
          <ion-col size-sm="2">
            <h2>Categoria</h2>
          </ion-col>
          <ion-col size-sm="6">
      
          </ion-col>
        </ion-row>
        <ion-row v-for="e in lista" :key="e.id">
          <ion-col size-sm="2">{{ e.fecha }}</ion-col>
          <ion-col size-sm="2">{{ e.desc }}</ion-col>
          <ion-col size-sm="2">${{ e.monto }}</ion-col>
          <ion-col size-sm="2">{{ e.cat }}</ion-col>
          <ion-col size="auto" @click = 'editarGasto' style="border: 0px;"><ion-button><ion-icon slot="icon-only" :icon="create"></ion-icon></ion-button></ion-col>
          <ion-col size="auto" @click = 'eliminarGasto(e)' style="border: 0px;"><ion-button> <ion-icon slot="icon-only" :icon="trash"></ion-icon>

            </ion-button></ion-col>
        </ion-row>
      </ion-grid>
      <ion-button @click="agregarGasto"><ion-icon slot="icon-only" :icon="add"></ion-icon></ion-button>
      <ion-button @click="agregarCategoria"><ion-icon slot="icon-only" :icon="add"></ion-icon></ion-button>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonGrid, IonIcon, IonButton, IonCol, IonRow } from '@ionic/vue'
import { create, trash, add} from 'ionicons/icons';
export default {
  components: { IonPage, IonContent, IonGrid, IonIcon, IonButton, IonCol, IonRow },
  setup() {
      return { create, trash, add };
    },
  data() {
    return {
      lista: [{ id: 1, desc: 'Super', fecha: '10/05/2023', monto: 5000, cat: 'a' }, { id: 2, desc: 'Transporte', fecha: '10/05/2023', monto: 1000, cat: 'b'},
      { id: 3, desc: 'Transporte', fecha: '10/05/2023', monto: 1000, cat:'c' },  { id: 4, desc: 'Otro', fecha: '16/05/2023', monto: 5000, cat:'c' }],
      elemento: {},
      
    }
  },
  methods: {
    agregarGasto() {
      this.$router.push("/agregarGasto")
    },
     agregarGasto() {
      this.$router.push("/agregarGasto")
    },
    editarGasto(){
      this.$router.push("/editarGasto")
    },
    eliminarGasto(e){
        this.lista.pop(e)
    },
    agregarCategoria() {
      this.$router.push("/agregarCategoria")
    },
     agregarCategoria() {
      this.$router.push("/agregarCategoria")
    },
    editarCategoria(){
      this.$router.push("/editarCategoria")
    },
    eliminarCategoria(e){
        this.lista.pop(e)
    }
  }
}
</script>

<style scoped>
ion-grid {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 98%;
  margin: auto;

  
  }
  ion-row {
    border: 1px solid #dddddd;
  }  
  ion-row:nth-child(even) {
    background-color: #bebebe;
  }
  ion-col {
    border-right: 1px solid #dddddd;
  }
</style>