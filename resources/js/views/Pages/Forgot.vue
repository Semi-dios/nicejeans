<template>
  <b-modal id="viewForgot" ref="viewForgot" hide-footer  >
      <template #modal-header="{ close }">
             <picture  class="contentLogo">
                        <img src="/images/logo.svg" alt="">
            </picture>
           <b-button size="xs"  @click="close()" class="close custom-close">
              <i class="fas fa-times "></i>
            </b-button>


        </template>
    <b-row>
        <b-col sm="12"  class="justify-content-center">
            <h3 class="title-xl text-secondary text-center mb-4">
               OLVIDASTE TU CONTRASEÑA ?
            </h3>
            <p class="p-md text-secondary mb-4">Ingrese su correo electronico: </p>
                <b-form @submit="onSubmit" @reset="onReset" class="customform mb-3 ">
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
                    placeholder="corre@gmail.com"
                    class="custom-input"
                    required
                    ></b-form-input>
                </b-form-group>
           <div class="form-group d-flex justify-content-center">
                <b-button type="submit" class="custom-btn-primary" >Enviar link</b-button>
           </div>
            </b-form>

        </b-col>


    </b-row>


  </b-modal>

</template>

<script>
  export default {
    name: 'forgot',
    data() {
      return {
        image: '/images/logo.svg',
        form: {
          email: ''
        }
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
