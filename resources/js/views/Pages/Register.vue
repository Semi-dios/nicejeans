<template>
  <b-container fluid id="viewRegister" class="p-0">
    <b-row class="">
        <b-col sm="12" md="4" class="pr-md-2 justify-content-center">

            <div class="welcomeback">
                 <b-row>
                    <b-col sm="12" class="justify-content-md-end d-flex mb-4">
                        <router-link :to="{name: 'welcome'}">
                            <picture  class="contentLogo">
                                <img src="/images/logo.svg" alt="">
                            </picture>
                        </router-link>

                    </b-col>
                </b-row>
                    <div class="welcomebackHeader">
                        <h3 class="title-xl   text-secondary">
                            BIENVENIDO !!
                        </h3>
                        <br>
                        <p class="p-md text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla blanditiis nam. Quidem, deleniti et? Quaerat eum consequatur ea rem! Quaerat cumque dolorem vel nihil? Dolores accusamus voluptatibus iusto similique!
                        </p>
                    </div>
                        <router-link class="custom-btn-secondary" :to="{name:'login'}">Iniciar sesion</router-link>

            </div>
        </b-col>
        <b-col sm="12" md="8" class="py-3 pl-md-2">
           <b-container fluid class="p-4">

                <b-row class="justify-content-center ">
                    <b-col sm="12">
                        <h3 class="title-xl  text-center mb-4 text-primary">
                        CREAR CUENTA
                        </h3>

                        <div class="itemSocial  mb-5">
                            <b-list-group horizontal class="custom-list-group">
                                <b-list-group-item><i class="fab fa-google"></i></b-list-group-item>
                                <b-list-group-item><i class="fab fa-github"></i></b-list-group-item>
                            </b-list-group>
                        </div>


                            </b-col>
                    <b-col sm="12" lg="8" class="">
                       <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formLogin ">
                        <b-form-group
                            id="input-group-1"
                            label-for="input-1"
                            description=""
                            class="custom-form-group mb-3"
                            label="Nombre:"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="nombre"
                            placeholder="Ingrese el nombre"
                            class="custom-input "
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-1"
                            label-for="input-1"
                            description=""
                            class="custom-form-group mb-3"
                            label="Correo:"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="Ingrese el correo"
                            class="custom-input "
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2"  label="Contraseña:" label-for="input-2"
                        class="custom-form-group mb-5">
                            <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Ingrese Contraseña"
                            class="custom-input"
                            type="password"
                            required
                            ></b-form-input>
                        </b-form-group>


                        <div class="form-group d-flex justify-content-center">
                                <b-button type="submit" class="custom-btn-primary" >Registrarme</b-button>
                        </div>
                        </b-form>
                    </b-col>
                </b-row>


           </b-container>
        </b-col>

    </b-row>


  </b-container>
</template>

<script>
  export default {
      nme: 'login',
    data() {
      return {
        form: {
          email: '',
          name: '',

          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

