<template>
<div class="d-flex flex-column flex-md-row align-items-center  mb-5 bg-transparent border-0 box-shadow customHeader">
    <picture class="my-0 mr-md-auto logoHeader">
        <img src="/images/logo.svg" alt="">
    </picture>

      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-dark font-weight-bold" :to="{name: 'welcome'}">INICIO</router-link>
        <router-link class="p-2 text-dark font-weight-bold" :to="{name: 'about'}">NOSOTROS</router-link>
        <router-link class="p-2 text-dark font-weight-bold" :to="{name: 'contact'}">CONTACTO</router-link>
      </nav>
      <router-link class="btn btn-outline-primary custom-btn-secondary" :to="{name:'login'}">Iniciar sesion</router-link>
</div>
</template>

<script>
export default {
        props:['view']
}
</script>

<style>

</style>
