<template>
  <div id="viewWelcome" class="p-3">
        <b-row class="justify-content-between">
        <b-col sm="12" lg="4" >
           <div class="content-text-landing">
                <h3 class="text-right title-xl">
                SISTEMA DE ADMINISTRACION
            </h3>
            <br>
            <p class="p-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit veniam error odit distinctio sequi perspiciatis exercitationem, veritatis tempore corporis totam est eligendi fuga maiores cum, quasi quisquam suscipit. Neque, cupiditate.</p>
           </div>
        </b-col>
        <b-col sm="12" lg="7">
            <picture class="imgLanding">
                <img src="/images/stadistic.svg" alt="">
            </picture>
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data() {
     return{
          count: 0
     }
  }
}
</script>

<style>

</style>
