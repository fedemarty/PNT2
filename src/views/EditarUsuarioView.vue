<template>
  <ion-page >
    <ion-content >
      <h2>Editar Usuario</h2>
      <ion-list v-for="us in lista" :key="us.id">
        {{ us.id }} {{ us.name }} {{us.email}} {{us.password}}
      <ion-button @click="modificar(us.id)">Modificar</ion-button>
      <ion-button @click="eliminar(us.id)">Eliminar</ion-button>
      </ion-list>  
      <ion-input v-model="us.name" label="name" type="name"></ion-input>
      <ion-input v-model="us.email" label="email" type="email"></ion-input>
      <ion-input v-model="us.password" label="password" type="password"></ion-input>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";
import userService from '../services/usersService'

export default {
  components: { IonPage, IonButton, IonInput, IonContent },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      usuario: { name:"", email: "", passw: "", id:"" },
    };
  },
  methods: {
    async modificar(id) {
      try {
        const user = { ...this.usuario.id }
        //await axios.put("https://6464027e127ad0b8f895db50.mockapi.io/lista/" + id, user)
        await userService.modificar(id,user)
        // await this.cargarLista()
      } catch ( error) {
          alert(error)
      }
    },
  },
};
</script>

<style>
</style>