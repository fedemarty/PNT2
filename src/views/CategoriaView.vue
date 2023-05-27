<template >
  <ion-page>
    <h1>Categorías</h1>
    <div>
      <p>{{ userID }}</p>
    </div>
    <ion-content>
      <ion-grid>
        <ion-row style="background-color: #0775c4">
          <ion-col size-sm="2">
            <h2>Id</h2>
          </ion-col>
          <ion-col size-sm="2">
            <h2>Categoria</h2>
          </ion-col>
            <h2>Acciones</h2>  
        </ion-row>
        <ion-row v-for="e in listaCategorias" :key="e.id">
          <ion-col size-sm="2">{{ e.id }}</ion-col>
          <ion-col size-sm="2">{{ e.categoria }}</ion-col>
          <ion-col size="auto" @click="modificar(e.id)" style="border: 0px"
            ><ion-button
              ><ion-icon slot="icon-only" :icon="create"></ion-icon></ion-button
          ></ion-col>
          <ion-col size="auto" @click="eliminar(e.id)" style="border: 0px"
            ><ion-button>
              <ion-icon slot="icon-only" :icon="trash"></ion-icon> </ion-button
          ></ion-col>
        </ion-row>
      </ion-grid>
      <ion-button @click="agregarCategoria"
        ><ion-icon slot="icon-only" :icon="add"></ion-icon
      ></ion-button>
    </ion-content>
  </ion-page>
</template>
    
<script>
import {
  IonPage,
  IonContent,
  IonGrid,
  IonIcon,
  IonButton,
  IonCol,
  IonRow,
} from "@ionic/vue";
import { create, trash, add } from "ionicons/icons";
import listaCategorias from "../services/listaCategorias";
import { useLoginStore } from "../stores/login";
export default {
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonIcon,
    IonButton,
    IonCol,
    IonRow,
  },

  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { create, trash, add, login, store };
  },

  data() {
    return {
      listaCategorias: [],
      userID: 0,
    };
  },

  methods: {
    agregarCategoria() {
      this.$router.push("/agregarCategoria");
    },

    modificar() {
      this.$router.push("/editarCategoria");
    },

    async agregar() {
      try {
        const elem = { ...this.elemento };
        await listaCategorias.agregar(elem);
        this.cargarLista();
      } catch (error) {
        console.log(error);
      }
    },

    async cargarLista() {
      try {
        this.listaCategorias = await listaCategorias.cargar(this.userID);
      } catch (e) {
        alert(e);
      }
    },
    async eliminar(id) {
      try {
        await listaCategorias.eliminar(id);
        await this.cargarLista();
      } catch (error) {
        alert(error);
      }
    },
  },
  
  mounted() {
    this.cargarLista();
  },
};
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