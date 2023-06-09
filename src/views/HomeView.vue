<template>
  <ion-page>
    <h2>Home view</h2>
    
    <ion-content>
    <h4>- Api de gestor de gastos -</h4>  

    <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
    
    <p>Podras cargar y llevar un registro de todos los gastos realizados </p>  
    
    <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
      

    </ion-content>
   

  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent} from '@ionic/vue'
export default {
  components: { IonPage , IonButton, IonContent},

  methods:{

      iradetalles(){
        this.$router.push("/detail");
      }

  }


}
</script>