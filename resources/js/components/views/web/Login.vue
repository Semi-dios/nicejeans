<template>
  <b-container fluid id="viewLogin" class="p-0">
      <b-row>
          <b-col>
            <ModalForgot/>
        </b-col>
      </b-row>
    <b-row class="">
        <b-col sm="12" md="8" class="justify-content-center py-3 pr-md-2">
           <b-container fluid>
                <b-row>
                <b-col sm="12" class="justify-content-md-end d-flex mb-4">
                    <router-link :to="{name: 'welcome'}">
                        <picture  class="contentLogo">
                            <img src="/images/logo.svg" alt="">
                        </picture>
                    </router-link>

                </b-col>
            </b-row>
                <h3 class="title-xl  mb-4 text-primary">
                    INICIO SESION
                </h3>

                <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formLogin mb-5 ">
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
                    placeholder="Ingrese correo"
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
                        <b-button type="submit" class="custom-btn-primary" >Iniciar Sesion</b-button>
                </div>
                </b-form>

                <b-row>
                    <b-col class="d-flex justify-content-between">
                        <b-link class="text-black"  v-b-modal.viewForgot > Olvido su contraseña?</b-link>
                        <router-link  to="/register" class="text-black">Registro</router-link>
                    </b-col>
                </b-row>
           </b-container>
        </b-col>
           <b-col sm="12" md="4" class="pl-md-2 justify-content-center">
            <div class="welcomeback">
                    <div class="welcomebackHeader ">
                    <h3 class="title-xl   text-secondary">
                         BIENVENIDO !!
                    </h3>
                    <br>
                    <p class="p-md text-black">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla blanditiis nam. Quidem, deleniti et? Quaerat eum consequatur ea rem! Quaerat cumque dolorem vel nihil? Dolores accusamus voluptatibus iusto similique!
                    </p>
                    </div>
                    <router-link class="btn  custom-btn-secondary" :to="{name:'welcome'}">Regresar</router-link>



            </div>
        </b-col>
    </b-row>


  </b-container>
</template>

<script>
import ModalForgot  from './Forgot';
  export default {
      name: 'login',
      components: {
          ModalForgot
      },
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
      },


    }
  }
</script>
