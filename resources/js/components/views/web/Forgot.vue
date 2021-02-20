<template>
  <div id="viewForgot">
    <b-row class="mb-4">
        <b-col sm="12" class="">
            <picture  class="contentLogo">
                <img src="/images/logo.svg" alt="">
            </picture>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="12"  class="justify-content-center">
             
            <h3 class="title-xl text-secondary text-center mb-4">
               OLVIDASTE TU CONTRASEÑA ?
            </h3>
            <p class="p-md text-secondary">Ingrese un correo electronico </p>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="customform mb-3 ">
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



           <div class="form-group d-flex justify-content-center">
                <b-button type="submit" class="custom-btn-primary" >Enviar link</b-button>
           </div>
            </b-form>

        </b-col>
        <b-col sm="12"  class="justify-content-center text-center">
            <div class="p-md text-secondary">Volver a
                <router-link :to="{name: 'login'}" class="text-primary">Inicio de Sesion</router-link>
            </div>
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
        this.form.email = '';
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>