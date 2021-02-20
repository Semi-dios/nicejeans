<template>
  <div id="viewLogin">
    <b-row class="mb-4">
        <b-col sm="12">
            <router-link :to="{name: 'welcome'}">
                <picture  class="contentLogo">
                    <img src="/images/logo.svg" alt="">
                </picture>
            </router-link>
            
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="12" lg="6" class="justify-content-center">
             
            <h3 class="title-xl text-secondary">
                Bienvenido  !!
            </h3>
            <p class="p-md text-secondary">Inicio de sesion</p>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formLogin mb-5 ">
            <b-form-group
                id="input-group-1"
                label-for="input-1"
                description=""
                class="custom-form-group"
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Ingrese Email"
                class="inputcr"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2"  label-for="input-2"
            class="custom-form-group">
                <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Ingrese Contraseña"
                class="inputps"
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
                    <router-link :to="{name: 'forgot'}" class="text-secondary">Olvido su contraseña?</router-link>
                    <router-link  to="/register" class="text-secondary">Registro</router-link>

                </b-col>
            </b-row>
        </b-col>
        <b-col sm="12" lg="6">
            <picture class="imgLogin">
                <img src="/images/login.svg" alt="">
            </picture>            
        </b-col>
    </b-row>

  </div>
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