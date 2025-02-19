<script setup lang="ts">
import { IonIcon, IonButton } from "@ionic/vue";
import { logoGoogle } from "ionicons/icons";
</script>

<template>
  <div class="container">
  <img src="/src/resources/kloseBrothersLogo.png" alt="Klose Brothers Logo" class="logo">
    </div>
  <div class="container">
    <ion-button class="logInButton">
      <ion-icon slot="start" :icon="logoGoogle" class="icon"></ion-icon>Log in</ion-button>
  </div>
</template>

<style scoped>

ion-button {
  --background: #aa0a38;
}

.logo {
  height: 30%;
  padding: 5%;
}

.container  {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logInButton  {
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.icon {
  padding-right: 6%;
}

</style>