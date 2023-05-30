<template>
  <ion-page>
    <h2>Home view</h2>
    
    <ion-content>
      
      

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