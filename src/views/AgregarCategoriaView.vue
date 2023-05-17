<template>
    <ion-page>
        <h1>Agregar Categoría</h1>
        <ion-content>
            <ion-input label="Id:" label-placement="stacked" v-model="categoria.id"></ion-input>
            <ion-input label="Categoría:" label-placement="stacked" v-model="categoria.categoria"></ion-input>
            <ion-input label="Descripcion:" label-placement="stacked" v-model="categoria.desc"></ion-input>
            <ion-button @click="agregar"> Agregar Categoría </ion-button>
        </ion-content>
    </ion-page>
</template>
  
<script>
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
            listaCategorias: [],
            categoria: {
                id: '',
                categoria: '',
                desc: '',
            },
        };
    },
    methods: {
        agregar() {
            this.listaCategorias.push({ ...this.categoria }); // Agregar una copia del elemento para evitar la referencia
            this.categoria.id = '';
            this.categoria.categoria = '';
            this.categoria.desc = '';
            this.listaCategorias.push(this.categoria);
            console.log("Lista de categorías:", this.listaCategorias);
            this.$router.push({ name: 'CategoriaView', params: { categorias: this.listaCategorias } });
        },


    },
};
</script>
  
<style>
ion-input {
    border: 1px solid #dddddd;
}
</style>
  