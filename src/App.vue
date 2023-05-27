<script>
import { RouterLink, RouterView } from 'vue-router'
import { IonApp, IonHeader, IonRouterOutlet } from '@ionic/vue'
import { useLoginStore} from './stores/login'
import { storeToRefs } from 'pinia'

export default {
  components: { IonApp, IonHeader, IonRouterOutlet },
  setup() {
    const store = useLoginStore();
    const { isLogin } = storeToRefs(store) ;
    return { isLogin };
  }
}
</script>

<template>
  <ion-app>
    <ion-header>
      <RouterLink to="/">Home |</RouterLink>
      <RouterLink to="/about">About |</RouterLink>
      <RouterLink v-if="isLogin" to="/system">System |</RouterLink>
      <RouterLink v-if="isLogin" to="/categoria">Categoria |</RouterLink>
      <RouterLink v-if="!isLogin" to="/login">Login |</RouterLink>
      <RouterLink v-if="isLogin" to="/logout">Logout |</RouterLink>
      <RouterLink v-if="isLogin" to="/editarUsuario">EditarUsuario |</RouterLink>
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
</style>
