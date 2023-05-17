<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Categoría View</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-item v-for="categoria in categorias" :key="categoria.id">
                    <ion-label>
                        <h2>{{ categoria.id }}</h2>
                        <h3>{{ categoria.categoria }}</h3>
                        <p>{{ categoria.desc }}</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
    
<script>
import {
    IonPage, IonContent, IonGrid, IonIcon, IonButton,
    IonHeader, IonTitle, IonCol, IonRow, IonList, IonItem, IonLabel, IonToolbar
} from '@ionic/vue'
import { ref } from "vue";

export default {
    components: {
        IonPage, IonContent, IonGrid, IonIcon, IonTitle,
        IonToolbar, IonHeader, IonButton, IonCol, IonRow, IonList, IonItem, IonLabel
    },
    props: {
        categorias: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
  
<style>
ion-input {
    border: 1px solid #dddddd;
}</style>
  